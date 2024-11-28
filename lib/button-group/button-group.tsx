import { type ElementType, useMemo } from 'react';

import type { ButtonGroupProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const ButtonGroup = function ButtonGroup<T extends ElementType = 'div'>(props: ButtonGroupProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    children,
    className,
    dropOldClass,
    size,
    style,
    toolbar,
    variables,
    vertical,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && (vertical ? 'btn-group-vertical' : toolbar ? 'btn-toolbar' : 'btn-group'),
      size && `btn-group-${size}`,
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, size, style, toolbar, variables, vertical]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

ButtonGroup.displayName = 'BRL.ButtonGroup';

export default ButtonGroup;
