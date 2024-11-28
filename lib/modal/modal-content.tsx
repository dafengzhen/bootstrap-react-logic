import { type ElementType, useMemo } from 'react';

import type { ModalContentProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const ModalContent = function ModalContent<T extends ElementType = 'div'>(props: ModalContentProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'modal-content', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ModalContent.displayName = 'BRL.ModalContent';

export default ModalContent;
