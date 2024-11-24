import { type ElementType, useMemo } from 'react';

import type { DropdownItemTextProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const DropdownItemText = function DropdownItemText<T extends ElementType = 'span'>(props: DropdownItemTextProps<T>) {
  const { as: Component = 'span', dropOldClass, className, variables, children, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'dropdown-item-text', className);
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

DropdownItemText.displayName = 'BRL.DropdownItemText';

export default DropdownItemText;
