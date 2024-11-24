import { type ElementType, useMemo } from 'react';

import type { SpinnerProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const Spinner = function Spinner<T extends ElementType = 'div'>(props: SpinnerProps<T>) {
  const { as: Component = 'div', dropOldClass, className, variables, variant, style, grow, size, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && (grow ? 'spinner-grow' : 'spinner-border'),
      variant && `text-${variant}`,
      size && (grow ? 'spinner-grow-sm' : 'spinner-border-sm'),
      className,
    );
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
  }, [className, dropOldClass, grow, size, style, variables, variant]);

  return <Component {...rest} {...renderOptions} />;
};

Spinner.displayName = 'BRL.Spinner';

export default Spinner;
