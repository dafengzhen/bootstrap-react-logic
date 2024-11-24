import { type ElementType, useMemo } from 'react';

import type { NavTabContentProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const NavTabContent = function NavTabContent<T extends ElementType = 'div'>(props: NavTabContentProps<T>) {
  const { as: Component = 'div' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'tab-content', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavTabContent.displayName = 'BRL.NavTabContent';

export default NavTabContent;
