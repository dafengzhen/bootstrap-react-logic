import { type ElementType, useMemo } from 'react';

import type { DropdownItemProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';
import Button from '../button/button.tsx';

const DropdownItem = function DropdownItem<T extends ElementType = 'a'>(props: DropdownItemProps<T>) {
  const {
    as: Component = 'a' as ElementType,
    dropOldClass,
    className,
    variables,
    children,
    active,
    style,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'dropdown-item', active && 'active', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [active, className, dropOldClass, style, variables]);

  return (
    <li>
      <Button as={Component} dropOldClass {...rest} {...renderOptions}>
        {children}
      </Button>
    </li>
  );
};

DropdownItem.displayName = 'BRL.DropdownItem';

export default DropdownItem;
