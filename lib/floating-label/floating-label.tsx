import { type ElementType, useMemo } from 'react';

import type { FloatingLabelProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const FloatingLabel = function FloatingLabel<T extends ElementType = 'div'>(props: FloatingLabelProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    dropOldClass,
    isInvalid,
    isValid,
    style,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && 'form-floating',
      isValid && 'is-valid',
      isInvalid && 'is-invalid',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, isInvalid, isValid, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

FloatingLabel.displayName = 'BRL.FloatingLabel';

export default FloatingLabel;
