import { type ElementType, useMemo } from 'react';
import type { ButtonGroupProps } from './types.ts';
import {
  ButtonGroupVariablesEnum,
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const ButtonGroup = function ButtonGroup<T extends ElementType = 'div'>(
  props: ButtonGroupProps<T>,
) {
  const {
    as: Component = 'div',
    dropOldClass,
    variables,
    children,
    className,
    style,
    toolbar,
    vertical,
    size,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        (vertical
          ? 'btn-group-vertical'
          : toolbar
            ? 'btn-toolbar'
            : 'btn-group'),
      size && `btn-group-${size}`,
      className,
    );
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = ButtonGroupVariablesEnum[key];
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
  }, [dropOldClass, vertical, toolbar, size, className, variables, style]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

ButtonGroup.displayName = 'BRL.ButtonGroup';

export default ButtonGroup;
