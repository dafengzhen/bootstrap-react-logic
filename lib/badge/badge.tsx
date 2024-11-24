import { type ElementType, useMemo } from 'react';

import type { BadgeProps } from './types.ts';

import { resolveRoundedClass, convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const Badge = function Badge<T extends ElementType = 'span'>(props: BadgeProps<T>) {
  const {
    as: Component = 'span',
    dropOldClass,
    variantType,
    className,
    variables,
    rounded,
    variant,
    style,
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

  return <Component {...rest} {...renderOptions} />;
};

Badge.displayName = 'BRL.Badge';

export default Badge;
