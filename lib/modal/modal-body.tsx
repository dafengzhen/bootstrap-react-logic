import { type ElementType, useMemo } from 'react';

import type { ModalBodyProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const ModalBody = function ModalBody<T extends ElementType = 'div'>(props: ModalBodyProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'modal-body', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ModalBody.displayName = 'BRL.ModalBody';

export default ModalBody;
