import { type ElementType, useMemo } from 'react';

import type { LabelProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, findTruthyClass, stylex } from '../tools';

const Label = function Label<T extends ElementType = 'label'>(props: LabelProps<T>) {
  const {
    as: Component = 'label' as ElementType,
    children,
    className,
    colFormLabel,
    dropOldClass,
    formCheckLabel,
    inputGroupText,
    style,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        findTruthyClass(
          ['col-form-label', colFormLabel],
          ['form-check-label', formCheckLabel],
          ['input-group-text', inputGroupText],
          ['form-label', true],
        ),
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, colFormLabel, dropOldClass, formCheckLabel, inputGroupText, style, variables]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

Label.displayName = 'BRL.Label';

export default Label;
