import { type ElementType, useMemo } from 'react';

import type { DropdownDividerProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const DropdownDivider = function DropdownDivider<T extends ElementType = 'hr'>(props: DropdownDividerProps<T>) {
  const { as: Component = 'hr' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'dropdown-divider', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return (
    <li>
      <Component {...rest} {...renderOptions} />
    </li>
  );
};

DropdownDivider.displayName = 'BRL.DropdownDivider';

export default DropdownDivider;
