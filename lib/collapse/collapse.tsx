import { type ElementType, useEffect, useMemo, useRef, useState } from 'react';

import type { CollapseProps } from './types.ts';

import { capitalizeFirstLetter, clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const calculateCollapseDimension = (
  element: HTMLDivElement,
  dimension: 'height' | 'width',
  unit: string = '',
  isVisible: boolean = false,
  fallbackDimension?: string,
) => {
  if (!isVisible) {
    return fallbackDimension ? `${fallbackDimension}${unit}` : `0${unit}`;
  }

  const lastDimension = element.dataset[`last${capitalizeFirstLetter(dimension)}`] || '0';
  const offsetDimension = dimension === 'width' ? element.offsetWidth : element.offsetHeight || lastDimension;

  if (offsetDimension !== '0') {
    element.dataset[`last${capitalizeFirstLetter(dimension)}`] = offsetDimension.toString();
  }

  return `${offsetDimension}${unit}`;
};
const Collapse = function Collapse<T extends ElementType = 'div'>(props: CollapseProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    collapsing: collapsingByDefault = true,
    dropOldClass,
    horizontal,
    style,
    variables,
    visible: visibleByDefault,
    ...rest
  } = props;

  const [show, setShow] = useState(collapsingByDefault ? false : (visibleByDefault ?? false));
  const collapseElement = useRef<HTMLDivElement | null>(null);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'collapse',
      horizontal && 'collapse-horizontal',
      show && 'show',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return { className: finalClass, style: finalStyle };
  }, [className, dropOldClass, horizontal, show, style, variables]);

  useEffect(() => {
    if (!collapsingByDefault) {
      setShow(visibleByDefault ?? false);
      return;
    }

    const currentCollapseElement = collapseElement.current;

    if (!currentCollapseElement) {
      return;
    }

    const currentCollapseBodyElement = currentCollapseElement.children[0] as HTMLDivElement | null;
    if (!currentCollapseBodyElement) {
      return;
    }

    if (!currentCollapseBodyElement.dataset[horizontal ? 'lastWidth' : 'lastHeight'] && !visibleByDefault) {
      return;
    }

    const onTransitionEnd = () => {
      if (visibleByDefault) {
        currentCollapseElement.classList.add('collapse', 'show');
      } else {
        currentCollapseElement.classList.add('collapse');
      }
      currentCollapseElement.classList.remove('collapsing');
    };

    currentCollapseElement.addEventListener('transitionend', onTransitionEnd);
    currentCollapseElement.classList.remove('collapse', 'show');
    currentCollapseElement.classList.add('collapsing');
    currentCollapseElement.style.setProperty(
      horizontal ? 'width' : 'height',
      calculateCollapseDimension(currentCollapseBodyElement, horizontal ? 'width' : 'height', 'px', visibleByDefault),
    );

    return () => currentCollapseElement.removeEventListener('transitionend', onTransitionEnd);
  }, [collapsingByDefault, horizontal, visibleByDefault]);

  return <Component {...rest} {...renderOptions} ref={collapseElement} />;
};

Collapse.displayName = 'BRL.Collapse';

export default Collapse;
