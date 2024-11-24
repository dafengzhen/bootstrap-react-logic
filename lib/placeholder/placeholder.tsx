import { type ElementType, useMemo } from 'react';

import type { PlaceholderProps } from './types.ts';

import { convertBsKeyToVar, clsxWithOptions, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const Placeholder = function Placeholder<T extends ElementType = 'span' | 'a'>(props: PlaceholderProps<T>) {
  const {
    as: Component = 'span',
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
