import { type ElementType, useMemo } from 'react';

import type { PlaceholderProps } from './types.ts';

import { classx, classxWithOptions, convertBsKeyToVar, stylex } from '../tools';

const Placeholder = function Placeholder<T extends ElementType = 'a' | 'span'>(props: PlaceholderProps<T>) {
  const {
    animation,
    as: Component = 'span' as ElementType,
    bg,
    children,
    className,
    col,
    dropOldClass,
    size,
    style,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && 'placeholder',
      col && `col-${col}`,
      bg && `bg-${bg}`,
      size && `placeholder-${size}`,
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [bg, className, col, dropOldClass, size, style, variables]);

  return (
    <>
      {animation ? (
        <span className={classxWithOptions(null, animation && `placeholder-${animation}`)}>
          <Component {...rest} {...renderOptions}>
            {children}
          </Component>
        </span>
      ) : (
        <Component {...rest} {...renderOptions}>
          {children}
        </Component>
      )}
    </>
  );
};

Placeholder.displayName = 'BRL.Placeholder';

export default Placeholder;
