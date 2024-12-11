import type { OutputAsset, PluginContext, SourceMap } from 'rollup';

import cssnano from 'cssnano';
import path from 'path';
import postcss from 'postcss';
import postcssLoadConfig from 'postcss-load-config';
import { SourceMapConsumer, SourceMapGenerator } from 'source-map';
import { normalizePath, type Plugin } from 'vite';

const mergeCssPlugin = (): Plugin => {
  const combinedSourcemap = new Map<string, SourceMap>();

  return {
    async generateBundle(_, bundle) {
      const cssFiles = Object.values(bundle).filter(
        (file): file is OutputAsset => file.type === 'asset' && file.fileName.endsWith('.css'),
      );

      if (cssFiles.length > 0) {
        const mergedCss = mergeCssSources(cssFiles);
        const result = await processCssWithPostcss(mergedCss);
        result.css += `\n/*# sourceMappingURL=bootstrap-react-logic.css.map */`;

        const mergedMap = await mergeSourceMaps(combinedSourcemap);
        this.emitFile({
          fileName: 'bootstrap-react-logic.css',
          source: result.css,
          type: 'asset',
        });
        this.emitFile({
          fileName: 'bootstrap-react-logic.css.map',
          source: mergedMap.toString(),
          type: 'asset',
        });

        emitUpdatedSourceMaps(cssFiles, combinedSourcemap, this);
      }
    },
    name: 'merge-css',
    async transform(_, id) {
      if (id.endsWith('.scss')) {
        combinedSourcemap.set(id, this.getCombinedSourcemap());
      }
      return null;
    },
  };
};

const normalizeRelativePath = (from: string, to: string | undefined): string => {
  return normalizePath(path.relative(from, to || ''));
};

const mergeCssSources = (cssFiles: OutputAsset[]): string => {
  return cssFiles.map((file) => file.source).join('');
};

const processCssWithPostcss = async (css: string) => {
  const { options, plugins } = await postcssLoadConfig();
  return postcss([...plugins, cssnano({ preset: 'default' })]).process(css, options);
};

const mergeSourceMaps = async (combinedSourcemap: Map<string, SourceMap>) => {
  const mergedMap = new SourceMapGenerator({ file: 'bootstrap-react-logic.css' });
  const sourcesContentMap = new Map<string, string>();

  for (const sourcemap of combinedSourcemap.values()) {
    const consumer = await new SourceMapConsumer(sourcemap);

    consumer.sources.forEach((source) => {
      const content = consumer.sourceContentFor(source);
      if (content) {
        sourcesContentMap.set(normalizeRelativePath(process.cwd(), source), content);
      }
    });

    consumer.eachMapping((mapping) => {
      mergedMap.addMapping({
        generated: {
          column: mapping.generatedColumn,
          line: mapping.generatedLine,
        },
        name: mapping.name,
        original: {
          column: mapping.originalColumn,
          line: mapping.originalLine,
        },
        source: normalizeRelativePath(process.cwd(), mapping.source),
      });
    });

    consumer.destroy();
  }

  sourcesContentMap.forEach((content, source) => {
    mergedMap.setSourceContent(source, content);
  });

  return mergedMap;
};

const emitUpdatedSourceMaps = (
  cssFiles: OutputAsset[],
  combinedSourcemap: Map<string, SourceMap>,
  pluginContext: PluginContext,
) => {
  for (const [filePath, sourcemap] of combinedSourcemap.entries()) {
    const outputMapPath = getOutputMapPath(filePath);
    const outputDir = path.dirname(outputMapPath);

    updateSourcemapSources(sourcemap, outputDir);

    pluginContext.emitFile({
      fileName: outputMapPath,
      originalFileName: filePath,
      source: sourcemap.toString(),
      type: 'asset',
    });

    const cssFile = cssFiles.find((file) => file.fileName === normalizePath(getCssFileName(outputMapPath)));
    if (cssFile) {
      cssFile.source += `/*# sourceMappingURL=${path.basename(outputMapPath)} */`;
    }
  }
};

const getOutputMapPath = (filePath: string): string => {
  const projectRoot = process.cwd();
  const relativePath = path.relative(path.join(projectRoot, 'lib'), filePath);
  return relativePath.replace('.module.scss', '.css.map');
};

const getCssFileName = (mapFileName: string): string => {
  return mapFileName.replace('.css.map', '.css');
};

const updateSourcemapSources = (sourcemap: SourceMap, outputDir: string) => {
  if (sourcemap.sources) {
    sourcemap.sources = sourcemap.sources.map((sourcePath) => normalizeRelativePath(outputDir, sourcePath));
  }
};

export default mergeCssPlugin;
