import { type ElementType, useMemo } from 'react';
import type { DropdownItemProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import Button from '../button/button.tsx';

const DropdownItem = function DropdownItem<T extends ElementType = 'a'>(props: DropdownItemProps<T>) {
  const {
    as: Component = 'a' as ElementType,
    variables,
    dropOldClass,
    className,
    style,
    children,
    active,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'dropdown-item', active && 'active', className);
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