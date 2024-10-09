import { type ElementType, useMemo } from 'react';
import type { LabelProps } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  getFirstNonEmptyClass,
  isValueValid,
  LabelVariablesEnum,
  VARIABLE_BS_PREFIX,
} from '../tools';

const Label = function Label<T extends ElementType = 'label'>(props: LabelProps<T>) {
  const {
    as: Component = 'label',
    dropOldClass,
    variables,
    className,
    style,
    children,
    colFormLabel,
    inputGroupText,
    formCheckLabel,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        getFirstNonEmptyClass({
          'form-check-label': formCheckLabel,
          'input-group-text': inputGroupText,
          'col-form-label': colFormLabel,
          'form-label': true,
        }),
      className,
    );
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = LabelVariablesEnum[key];
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
  }, [dropOldClass, formCheckLabel, inputGroupText, colFormLabel, className, variables, style]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

Label.displayName = 'BRL.Label';

export default Label;
