import { type ElementType, useMemo } from 'react';

import type { TextProps } from './types.ts';

import { convertBsKeyToVar, findTruthyClass, clsxUnique, stylex } from '../tools';

const Text = function Text<T extends ElementType = 'div'>(props: TextProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    invalidFeedback,
    invalidTooltip,
    validFeedback,
    dropOldClass,
    validTooltip,
    className,
    variables,
    children,
    style,
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
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, invalidFeedback, invalidTooltip, style, validFeedback, validTooltip, variables]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

Text.displayName = 'BRL.Text';

export default Text;
