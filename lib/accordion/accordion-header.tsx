import { type ElementType, useMemo } from 'react';

import type { AccordionHeaderProps } from './types.ts';

import { convertBsKeyToVar, clsxWithOptions, clsxUnique, mergeProps, stylex } from '../tools';
import Button from '../button/button.tsx';

const AccordionHeader = function AccordionHeader<T extends ElementType = 'div'>(props: AccordionHeaderProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    dropOldClass,
    buttonProps,
    className,
    collapsed,
    variables,
    children,
    style,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'accordion-header h2', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
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
