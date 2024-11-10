import { type ElementType, useMemo } from 'react';

import type { LabelProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, getFirstNonEmptyClass, isValueValid } from '../tools';

const Label = function Label<T extends ElementType = 'label'>(props: LabelProps<T>) {
  const {
    as: Component = 'label',
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
        getFirstNonEmptyClass({
          'col-form-label': colFormLabel,
          'form-check-label': formCheckLabel,
          'form-label': true,
          'input-group-text': inputGroupText,
        }),
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
