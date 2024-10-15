import { type ElementType, useMemo } from 'react';
import type { FloatingLabelProps } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  FloatingLabelVariablesEnum,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const FloatingLabel = function FloatingLabel<T extends ElementType = 'div'>(props: FloatingLabelProps<T>) {
  const { as: Component = 'div', dropOldClass, variables, className, style, invalid, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'form-floating', invalid && 'is-invalid', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = FloatingLabelVariablesEnum[key];
        return {
          include: true,
          transformedKey: _value ? key : `${VARIABLE_BS_PREFIX}${_value}`,
        };
      }),
      ...style,
    };

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [dropOldClass, invalid, className, variables, style]);

  return <Component {...rest} {...renderOptions} />;
};

FloatingLabel.displayName = 'BRL.FloatingLabel';

export default FloatingLabel;
