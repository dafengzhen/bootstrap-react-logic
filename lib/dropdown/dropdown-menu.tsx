import { type ElementType, useMemo } from 'react';
import type { DropdownMenuProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const DropdownMenu = function DropdownMenu<T extends ElementType = 'ul'>(props: DropdownMenuProps<T>) {
  const {
    as: Component = 'ul' as ElementType,
    dropOldClass,
    variables,
    className,
    style,
    show,
    onRef,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'dropdown-menu', show && 'show', className);
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
  }, [className, dropOldClass, show, style, variables]);

  return <Component {...rest} {...renderOptions} ref={onRef} />;
};

DropdownMenu.displayName = 'BRL.DropdownMenu';

export default DropdownMenu;
