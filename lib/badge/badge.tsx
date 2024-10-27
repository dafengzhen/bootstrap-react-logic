import { type ElementType, useMemo } from 'react';
import type { BadgeProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid, resolveRoundedClass } from '../tools';

const Badge = function Badge<T extends ElementType = 'span'>(props: BadgeProps<T>) {
  const {
    as: Component = 'span',
    dropOldClass,
    variables,
    className,
    style,
    variant,
    variantType,
    rounded,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'badge',
      variant && (variantType === 'bg' ? `bg-${variant}` : `text-bg-${variant}`),
      rounded && resolveRoundedClass(rounded),
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
  }, [className, dropOldClass, rounded, style, variables, variant, variantType]);

  return <Component {...rest} {...renderOptions} as={Component} />;
};

Badge.displayName = 'BRL.Badge';

export default Badge;
