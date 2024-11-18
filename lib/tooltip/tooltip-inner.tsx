import { type ElementType, useMemo } from 'react';

import type { TooltipInnerProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const TooltipInner = function TooltipInner<T extends ElementType = 'div'>(props: TooltipInnerProps<T>) {
  const { as: Component = 'div', children, className, dropOldClass, html, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'tooltip-inner', className);
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
  }, [className, dropOldClass, style, variables]);

  return html ? (
    <Component {...rest} {...renderOptions} dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

TooltipInner.displayName = 'BRL.TooltipInner';

export default TooltipInner;
