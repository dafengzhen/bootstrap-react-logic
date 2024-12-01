import { type ElementType, useMemo } from 'react';

import type { DropdownDividerProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const DropdownHeader = function DropdownHeader<T extends ElementType = 'div'>(props: DropdownDividerProps<T>) {
  const { as: Component = 'div' as ElementType, children, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'dropdown-header h6', className);
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

DropdownHeader.displayName = 'BRL.DropdownHeader';

export default DropdownHeader;
