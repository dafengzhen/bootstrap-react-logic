import { useEffect } from 'react';
import hljs from 'highlight.js/lib/common';

const useHighlightCode = () => {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((el) => {
      const _el = el as HTMLElement;
      if (!_el.classList.contains('nohighlight') && !_el.dataset.highlighted) {
        hljs.highlightElement(_el);
      }
    });
  }, []);
};

export default useHighlightCode;
