import { type ElementType, useEffect, useState, useMemo, useRef } from 'react';

import type { ScrollspyProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';
import scrollspyStyles from './scrollspy.module.scss';

const Scrollspy = function Scrollspy<T extends ElementType = 'div'>(props: ScrollspyProps<T>) {
  const {
    onActiveChange: onActiveChangeByDefault,
    rootMargin = '0px 0px -25%',
    as: Component = 'div',
    sectionIds = [],
    threshold = 0.5,
    dropOldClass,
    smoothScroll,
    className,
    variables,
    children,
    style,
    ...rest
  } = props;

  const element = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && '', smoothScroll && scrollspyStyles.brlScrollSmooth, className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [className, dropOldClass, smoothScroll, style, variables]);

  useEffect(() => {
    const currentElement = element.current;
    if (!currentElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const activeSectionId = sectionIds.find((id) => entry.target.id === id);
            if (activeSectionId) {
              setActiveId(activeSectionId);
              onActiveChangeByDefault?.(activeSectionId);
              break;
            }
          }
        }
      },
      {
        root: currentElement,
        rootMargin,
        threshold,
      },
    );

    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    sections.forEach((section) => section && observer.observe(section));

    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
      observer.disconnect();
    };
  }, [onActiveChangeByDefault, rootMargin, sectionIds, threshold]);

  return (
    <Component {...rest} {...renderOptions} ref={element}>
      {children(activeId)}
    </Component>
  );
};

Scrollspy.displayName = 'BRL.Scrollspy';

export default Scrollspy;
