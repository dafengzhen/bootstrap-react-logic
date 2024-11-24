import { type ElementType, useMemo } from 'react';

import type { DropdownToggleProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';
import Button from '../button/button.tsx';

const DropdownToggle = function DropdownToggle<T extends ElementType = 'button' | 'a'>(props: DropdownToggleProps<T>) {
  const { as: Component = 'button' as ElementType, dropOldClass, className, variables, onRef, style, ...rest } = props;

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
