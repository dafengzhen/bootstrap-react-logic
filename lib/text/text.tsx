import { type ElementType, useMemo } from 'react';

import type { TextProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, findTruthyClass, isValueValid } from '../tools';

const Text = function Text<T extends ElementType = 'div'>(props: TextProps<T>) {
  const {
    as: Component = 'div',
    children,
    className,
    dropOldClass,
    invalidFeedback,
    invalidTooltip,
    style,
    validFeedback,
    validTooltip,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        findTruthyClass(
          ['invalid-feedback', invalidFeedback],
          ['invalid-tooltip', invalidTooltip],
          ['valid-feedback', validFeedback],
          ['valid-tooltip', validTooltip],
          ['form-text', true],
        ),
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
  }, [dropOldClass, validFeedback, invalidFeedback, validTooltip, invalidTooltip, className, variables, style]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

Text.displayName = 'BRL.Text';

export default Text;
