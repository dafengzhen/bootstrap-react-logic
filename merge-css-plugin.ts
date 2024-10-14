import type { Plugin } from 'vite';
import type { OutputAsset } from 'rollup';
import postcss from 'postcss';
import cssnano from 'cssnano';

const mergeCssPlugin: Plugin = {
  name: 'merge-css',
  async generateBundle(_, bundle) {
    const cssFiles = Object.values(bundle).filter(
      (file): file is OutputAsset => file.type === 'asset' && file.fileName.endsWith('.css'),
    );

    if (cssFiles.length > 1) {
      const mergedCss = cssFiles.map((file) => file.source).join('');
      const result = await postcss([cssnano({ preset: 'default' })]).process(mergedCss);
      this.emitFile({
        type: 'asset',
        fileName: 'bootstrap-react-logic.css',
        source: result.css,
      });
    }
  },
};

export default mergeCssPlugin;
