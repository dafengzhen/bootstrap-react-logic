import { type ElementType, useMemo } from 'react';

import type { PlaceholderProps } from './types.ts';

import { clsxStyle, clsxUnique, clsxWithOptions, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const Placeholder = function Placeholder<T extends ElementType = 'a' | 'span'>(props: PlaceholderProps<T>) {
  const {
    animation,
    as: Component = 'span',
    bg,
    className,
    col,
    dropOldClass,
    size,
    style,
    variables,
    children,
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
