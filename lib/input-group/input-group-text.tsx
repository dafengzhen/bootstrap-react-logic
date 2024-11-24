import { type ElementType, useMemo } from 'react';

import type { InputGroupTextProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const InputGroupText = function InputGroupText<T extends ElementType = 'span'>(props: InputGroupTextProps<T>) {
  const { as: Component = 'span', dropOldClass, className, variables, children, style, ...rest } = props;

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
