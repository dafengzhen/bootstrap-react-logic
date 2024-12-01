import { type ElementType, useMemo } from 'react';

import type { ModalFooterProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const ModalFooter = function ModalFooter<T extends ElementType = 'div'>(props: ModalFooterProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'modal-footer', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ModalFooter.displayName = 'BRL.ModalFooter';

export default ModalFooter;
