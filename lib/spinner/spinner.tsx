import { type ElementType, useMemo } from 'react';

import type { SpinnerProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const Spinner = function Spinner<T extends ElementType = 'div'>(props: SpinnerProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    dropOldClass,
    grow,
    size,
    style,
    variables,
    variant,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && (grow ? 'spinner-grow' : 'spinner-border'),
      variant && `text-${variant}`,
      size && (grow ? 'spinner-grow-sm' : 'spinner-border-sm'),
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, grow, size, style, variables, variant]);

  return <Component {...rest} {...renderOptions} />;
};

Spinner.displayName = 'BRL.Spinner';

export default Spinner;
