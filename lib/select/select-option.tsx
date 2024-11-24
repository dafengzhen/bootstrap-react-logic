import { type ElementType, useMemo } from 'react';

import type { SelectOptionProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const SelectOption = function SelectOption<T extends ElementType = 'option'>(props: SelectOptionProps<T>) {
  const { as: Component = 'option' as ElementType, className, variables, children, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, style, variables]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

SelectOption.displayName = 'BRL.SelectOption';

export default SelectOption;
