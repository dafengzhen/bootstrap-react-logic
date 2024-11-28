import { type ElementType, useMemo } from 'react';

import type { ModalHeaderProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const ModalHeader = function ModalHeader<T extends ElementType = 'div'>(props: ModalHeaderProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'modal-header', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ModalHeader.displayName = 'BRL.ModalHeader';

export default ModalHeader;
