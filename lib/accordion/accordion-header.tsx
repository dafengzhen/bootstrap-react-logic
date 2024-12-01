import { type ElementType, useMemo } from 'react';

import type { AccordionHeaderProps } from './types.ts';

import Button from '../button/button.tsx';
import { classx, classxWithOptions, convertBsKeyToVar, mergeProps, stylex } from '../tools';

const AccordionHeader = function AccordionHeader<T extends ElementType = 'div'>(props: AccordionHeaderProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    buttonProps,
    children,
    className,
    collapsed,
    dropOldClass,
    style,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'accordion-header h2', className);
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
          className: classxWithOptions(null, buttonProps?.className, 'accordion-button', collapsed && 'collapsed'),
        })}
      >
        {children}
      </Button>
    </Component>
  );
};

AccordionHeader.displayName = 'BRL.AccordionHeader';

export default AccordionHeader;
