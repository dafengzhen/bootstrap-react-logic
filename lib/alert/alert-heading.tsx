import { type ElementType, useMemo } from 'react';

import type { AlertHeadingProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const AlertHeading = function AlertHeading<T extends ElementType = 'div'>(props: AlertHeadingProps<T>) {
  const { as: Component = 'div', className, dropOldClass, style, variables, ...rest } = props;

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
