import { normalizePath, type Plugin } from 'vite';
import type { OutputAsset, SourceMap } from 'rollup';
import postcssLoadConfig from 'postcss-load-config';
import postcss from 'postcss';
import cssnano from 'cssnano';
import path from 'path';

const mergeCssPlugin = (): Plugin => {
  const combinedSourcemap = new Map<string, SourceMap>();

  return {
    name: 'merge-css',
    async transform(_, id) {
      if (id.endsWith('.scss')) {
        combinedSourcemap.set(id, this.getCombinedSourcemap());
      }
      return null;
    },
    async generateBundle(_, bundle) {
      const cssFiles = Object.values(bundle).filter(
        (file): file is OutputAsset => file.type === 'asset' && file.fileName.endsWith('.css'),
      );

      if (cssFiles.length > 1) {
        const mergedCss = cssFiles.map((file) => file.source).join('');
        const { plugins, options } = await postcssLoadConfig();
        const result = await postcss([...plugins, cssnano({ preset: 'default' })]).process(mergedCss, options);

        this.emitFile({
          type: 'asset',
          fileName: 'bootstrap-react-logic.css',
          source: result.css,
        });

        for (const [filePath, sourcemap] of combinedSourcemap.entries()) {
          const outputMapPath = getOutputMapPath(filePath);
          const outputDir = path.dirname(outputMapPath);

          updateSourcemapSources(sourcemap, outputDir);

          this.emitFile({
            type: 'asset',
            fileName: outputMapPath,
            originalFileName: filePath,
            source: sourcemap.toString(),
          });

          const cssFile = cssFiles.find((file) => file.fileName === normalizePath(getCssFileName(outputMapPath)));
          if (cssFile) {
            const sourceMappingURL = `/*# sourceMappingURL=${path.basename(outputMapPath)} */`;
            cssFile.source += sourceMappingURL;
          }
        }
      }
    },
  };
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
    sourcemap.sources = sourcemap.sources.map((sourcePath) => normalizePath(path.relative(outputDir, sourcePath)));
  }
};

export default mergeCssPlugin;
