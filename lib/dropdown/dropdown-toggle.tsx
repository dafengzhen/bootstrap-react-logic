import { type ElementType, useMemo } from 'react';

import type { DropdownToggleProps } from './types.ts';

import Button from '../button/button.tsx';
import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const DropdownToggle = function DropdownToggle<T extends ElementType = 'a' | 'button'>(props: DropdownToggleProps<T>) {
  const { as: Component = 'button' as ElementType, className, dropOldClass, onRef, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'dropdown-toggle', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Button as={Component} {...rest} {...renderOptions} onRef={onRef} />;
};

DropdownToggle.displayName = 'BRL.DropdownToggle';

export default DropdownToggle;
