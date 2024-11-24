import { type ElementType, useMemo } from 'react';

import type { AlertHeadingProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const AlertHeading = function AlertHeading<T extends ElementType = 'div'>(props: AlertHeadingProps<T>) {
  const { as: Component = 'div' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'alert-heading h4', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions}></Component>;
};

AlertHeading.displayName = 'BRL.AlertHeading';

export default AlertHeading;
