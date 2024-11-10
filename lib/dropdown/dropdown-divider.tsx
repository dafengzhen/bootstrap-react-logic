import { type ElementType, useMemo } from 'react';

import type { DropdownDividerProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const DropdownDivider = function DropdownDivider<T extends ElementType = 'hr'>(props: DropdownDividerProps<T>) {
  const { as: Component = 'hr', className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'dropdown-divider', className);
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
      <Component {...rest} {...renderOptions} />
    </li>
  );
};

DropdownDivider.displayName = 'BRL.DropdownDivider';

export default DropdownDivider;
