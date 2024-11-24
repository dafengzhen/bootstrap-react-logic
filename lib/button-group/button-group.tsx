import { type ElementType, useMemo } from 'react';

import type { ButtonGroupProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const ButtonGroup = function ButtonGroup<T extends ElementType = 'div'>(props: ButtonGroupProps<T>) {
  const {
    as: Component = 'div',
    dropOldClass,
    className,
    variables,
    children,
    vertical,
    toolbar,
    style,
    size,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && (vertical ? 'btn-group-vertical' : toolbar ? 'btn-toolbar' : 'btn-group'),
      size && `btn-group-${size}`,
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
  }, [dropOldClass, vertical, toolbar, size, className, variables, style]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

ButtonGroup.displayName = 'BRL.ButtonGroup';

export default ButtonGroup;
