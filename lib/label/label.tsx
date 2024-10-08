import { type ElementType, useMemo } from 'react';
import type { LabelProps } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
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
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && !inputGroupText && (colFormLabel ? 'col-form-label' : 'form-label'),
      inputGroupText && 'input-group-text',
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
  }, [dropOldClass, inputGroupText, colFormLabel, className, variables, style]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

Label.displayName = 'BRL.Label';

export default Label;
