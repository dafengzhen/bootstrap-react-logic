import { type ElementType, useMemo } from 'react';

import type { DropdownDividerProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const DropdownHeader = function DropdownHeader<T extends ElementType = 'div'>(props: DropdownDividerProps<T>) {
  const { as: Component = 'div', children, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'dropdown-header h6', className);
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
