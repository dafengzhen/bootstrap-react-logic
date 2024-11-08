import { type ElementType, useMemo } from 'react';
import type { DropdownToggleProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import Button from '../button/button.tsx';

const DropdownToggle = function DropdownToggle<T extends ElementType = 'button' | 'a'>(props: DropdownToggleProps<T>) {
  const { as: Component = 'button' as ElementType, dropOldClass, variables, className, style, onRef, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'dropdown-toggle', className);
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

  return <Button as={Component} {...rest} {...renderOptions} onRef={onRef} />;
};

DropdownToggle.displayName = 'BRL.DropdownToggle';

export default DropdownToggle;
