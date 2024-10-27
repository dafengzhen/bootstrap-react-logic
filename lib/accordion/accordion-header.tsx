import { type ElementType, useMemo } from 'react';
import type { AccordionHeaderProps } from './types.ts';
import {
  clsxStyle,
  clsxUnique,
  clsxWithOptions,
  convertBsKeyToVar,
  filterOptions,
  isValueValid,
  mergeProps,
} from '../tools';
import Button from '../button/button.tsx';

const AccordionHeader = function AccordionHeader<T extends ElementType = 'div'>(props: AccordionHeaderProps<T>) {
  const {
    as: Component = 'div',
    dropOldClass,
    variables,
    className,
    style,
    children,
    collapsed,
    buttonProps,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'accordion-header h2', className);
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
    <Component {...rest} {...renderOptions}>
      <Button
        aria-expanded={collapsed ? 'false' : 'true'}
        {...mergeProps(buttonProps, {
          className: clsxWithOptions(null, buttonProps?.className, 'accordion-button', collapsed && 'collapsed'),
        })}
      >
        {children}
      </Button>
    </Component>
  );
};

AccordionHeader.displayName = 'BRL.AccordionHeader';

export default AccordionHeader;
