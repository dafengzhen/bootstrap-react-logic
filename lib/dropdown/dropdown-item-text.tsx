import { type ElementType, useMemo } from 'react';

import type { DropdownItemTextProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const DropdownItemText = function DropdownItemText<T extends ElementType = 'span'>(props: DropdownItemTextProps<T>) {
  const { as: Component = 'span' as ElementType, children, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'dropdown-item-text', className);
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
