import { type ElementType, useMemo } from 'react';

import type { LabelProps } from './types.ts';

import { convertBsKeyToVar, findTruthyClass, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const Label = function Label<T extends ElementType = 'label'>(props: LabelProps<T>) {
  const {
    as: Component = 'label',
    formCheckLabel,
    inputGroupText,
    colFormLabel,
    dropOldClass,
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
          ['col-form-label', colFormLabel],
          ['form-check-label', formCheckLabel],
          ['input-group-text', inputGroupText],
          ['form-label', true],
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
  }, [dropOldClass, formCheckLabel, inputGroupText, colFormLabel, className, variables, style]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

Label.displayName = 'BRL.Label';

export default Label;
