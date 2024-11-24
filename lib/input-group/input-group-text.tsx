import { type ElementType, useMemo } from 'react';

import type { InputGroupTextProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const InputGroupText = function InputGroupText<T extends ElementType = 'span'>(props: InputGroupTextProps<T>) {
  const { as: Component = 'span' as ElementType, dropOldClass, className, variables, children, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'input-group-text', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

InputGroupText.displayName = 'BRL.InputGroupText';

export default InputGroupText;
