import { type ElementType, useMemo } from 'react';

import type { AlertHeadingProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const AlertHeading = function AlertHeading<T extends ElementType = 'div'>(props: AlertHeadingProps<T>) {
  const { as: Component = 'div', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'alert-heading h4', className);
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
  }, [dropOldClass, className, variables, style]);

  return <Component {...rest} {...renderOptions}></Component>;
};

AlertHeading.displayName = 'BRL.AlertHeading';

export default AlertHeading;
