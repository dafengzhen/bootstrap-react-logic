import { type ElementType, useMemo } from 'react';
import type { TextProps } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  getFirstNonEmptyClass,
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
    validFeedback,
    invalidFeedback,
    validTooltip,
    invalidTooltip,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        getFirstNonEmptyClass({
          'valid-feedback': validFeedback,
          'invalid-feedback': invalidFeedback,
          'valid-tooltip': validTooltip,
          'invalid-tooltip': invalidTooltip,
          'form-text': true,
        }),
      className,
    );
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
  }, [dropOldClass, validFeedback, invalidFeedback, validTooltip, invalidTooltip, className, variables, style]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

Text.displayName = 'BRL.Text';

export default Text;
