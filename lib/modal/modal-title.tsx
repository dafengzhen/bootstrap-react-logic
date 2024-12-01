import { type ElementType, useMemo } from 'react';

import type { ModalTitleProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const ModalTitle = function ModalTitle<T extends ElementType = 'div'>(props: ModalTitleProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'modal-title' + (Component === 'div' ? ' h5' : ''), className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [Component, className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ModalTitle.displayName = 'BRL.ModalTitle';

export default ModalTitle;
