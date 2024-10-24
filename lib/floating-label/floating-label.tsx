import { type ElementType, useMemo } from 'react';
import type { FloatingLabelProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const FloatingLabel = function FloatingLabel<T extends ElementType = 'div'>(props: FloatingLabelProps<T>) {
  const { as: Component = 'div', dropOldClass, variables, className, style, isValid, isInvalid, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'form-floating',
      isValid && 'is-valid',
      isInvalid && 'is-invalid',
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
  }, [dropOldClass, isValid, isInvalid, className, variables, style]);

  return <Component {...rest} {...renderOptions} />;
};

FloatingLabel.displayName = 'BRL.FloatingLabel';

export default FloatingLabel;
