import { type ElementType, useMemo } from 'react';

import type { DropdownMenuProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const DropdownMenu = function DropdownMenu<T extends ElementType = 'ul'>(props: DropdownMenuProps<T>) {
  const {
    as: Component = 'ul' as ElementType,
    dropOldClass,
    className,
    variables,
    onRef,
    style,
    show,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'dropdown-menu', show && 'show', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, show, style, variables]);

  return <Component {...rest} {...renderOptions} ref={onRef} />;
};

DropdownMenu.displayName = 'BRL.DropdownMenu';

export default DropdownMenu;
