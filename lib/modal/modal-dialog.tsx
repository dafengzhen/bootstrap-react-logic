import { type ElementType, useMemo } from 'react';

import type { ModalDialogProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const ModalDialog = function ModalDialog<T extends ElementType = 'div'>(props: ModalDialogProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    centered,
    className,
    dropOldClass,
    fullscreen,
    scrollable,
    size,
    style,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'modal-dialog',
      scrollable && 'modal-dialog-scrollable',
      centered && 'modal-dialog-centered',
      size && `modal-${size}`,
      fullscreen && (typeof fullscreen === 'boolean' ? 'modal-fullscreen' : `modal-fullscreen-${fullscreen}-down`),
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [centered, className, dropOldClass, fullscreen, scrollable, size, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ModalDialog.displayName = 'BRL.ModalDialog';

export default ModalDialog;
