import { type ElementType, useMemo } from 'react';
import type { DropdownItemTextProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const DropdownItemText = function DropdownItemText<T extends ElementType = 'span'>(props: DropdownItemTextProps<T>) {
  const { as: Component = 'span', variables, dropOldClass, className, style, children, ...rest } = props;

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
