import hljs from 'highlight.js/lib/common';
import { useEffect, useRef } from 'react';

const useHighlightCode = ({
  code,
  codeLanguage,
  isOpen,
}: {
  code?: string;
  codeLanguage?: string;
  isOpen?: boolean;
}) => {
  const element = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentElement = element.current;
    if (currentElement && isOpen && code) {
      const language = codeLanguage || 'tsx';
      currentElement.classList.add(`language-${language}`);
      currentElement.innerHTML = hljs.highlight(code, { language: language }).value;
    }
  }, [isOpen, code, codeLanguage]);

  function getElement() {
    return element.current;
  }

  function setElement(el: HTMLElement | null) {
    element.current = el;
  }

  return [setElement, getElement];
};

export default useHighlightCode;
