import { type ElementType, useMemo } from 'react';

import type { BadgeProps } from './types.ts';

import { resolveRoundedClass, convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const Badge = function Badge<T extends ElementType = 'span'>(props: BadgeProps<T>) {
  const {
    as: Component = 'span' as ElementType,
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
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, rounded, style, variables, variant, variantType]);

  return <Component {...rest} {...renderOptions} />;
};

Badge.displayName = 'BRL.Badge';

export default Badge;
