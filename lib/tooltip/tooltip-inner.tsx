import { type ElementType, useMemo } from 'react';

import type { TooltipInnerProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const TooltipInner = function TooltipInner<T extends ElementType = 'div'>(props: TooltipInnerProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    dropOldClass,
    className,
    variables,
    children,
    style,
    html,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'tooltip-inner', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
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
