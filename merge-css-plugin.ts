import type { Plugin } from 'vite';
import type { OutputAsset } from 'rollup';

const mergeCssPlugin: Plugin = {
  name: 'merge-css',
  generateBundle(_, bundle) {
    const cssFiles = Object.values(bundle).filter(
      (file): file is OutputAsset => file.type === 'asset' && file.fileName.endsWith('.css'),
    );

    if (cssFiles.length > 1) {
      const mergedCss = cssFiles.map((file) => file.source).join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'bootstrap-react-logic.css',
        source: mergedCss,
      });
    }
  },
};

export default mergeCssPlugin;
