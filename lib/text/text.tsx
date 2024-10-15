import { type ElementType, useMemo } from 'react';
import type { TextProps } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  TextVariablesEnum,
  VARIABLE_BS_PREFIX,
} from '../tools';

const Text = function Text<T extends ElementType = 'div'>(props: TextProps<T>) {
  const {
    as: Component = 'div',
    dropOldClass,
    variables,
    children,
    className,
    style,
    invalidFeedback,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'form-text', invalidFeedback && 'invalid-feedback', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = TextVariablesEnum[key];
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
  }, [dropOldClass, invalidFeedback, className, variables, style]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

Text.displayName = 'BRL.Text';

export default Text;
