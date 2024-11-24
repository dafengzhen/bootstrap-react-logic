import { type ElementType, useMemo } from 'react';

import type { PlaceholderProps } from './types.ts';

import { convertBsKeyToVar, clsxWithOptions, clsxUnique, stylex } from '../tools';

const Placeholder = function Placeholder<T extends ElementType = 'span' | 'a'>(props: PlaceholderProps<T>) {
  const {
    as: Component = 'span' as ElementType,
    dropOldClass,
    animation,
    className,
    variables,
    children,
    style,
    size,
    col,
    bg,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
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
        <span className={clsxWithOptions(null, animation && `placeholder-${animation}`)}>
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
