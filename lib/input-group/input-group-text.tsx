import { type ElementType, useMemo } from 'react';

import type { InputGroupTextProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const InputGroupText = function InputGroupText<T extends ElementType = 'span'>(props: InputGroupTextProps<T>) {
  const { as: Component = 'span', children, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'input-group-text', className);
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
  }, [dropOldClass, className, variables, style]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

InputGroupText.displayName = 'BRL.InputGroupText';

export default InputGroupText;
