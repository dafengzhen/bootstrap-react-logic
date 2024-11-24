import { type ElementType, useMemo } from 'react';

import type { DropdownItemTextProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const DropdownItemText = function DropdownItemText<T extends ElementType = 'span'>(props: DropdownItemTextProps<T>) {
  const { as: Component = 'span' as ElementType, dropOldClass, className, variables, children, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'dropdown-item-text', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return (
    <li>
      <Component {...rest} {...renderOptions}>
        {children}
      </Component>
    </li>
  );
};

DropdownItemText.displayName = 'BRL.DropdownItemText';

export default DropdownItemText;
