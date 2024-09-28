import { useEffect } from 'react';
import hljs from 'highlight.js';

const useHighlightCode = () => {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((el) => {
      const _el = el as HTMLElement;
      if (!_el.dataset.highlighted) {
        hljs.highlightElement(_el);
      }
    });
  }, []);
};

export default useHighlightCode;
