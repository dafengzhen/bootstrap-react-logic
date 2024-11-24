import { type ElementType, useMemo } from 'react';

import type { ModalDialogProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const ModalDialog = function ModalDialog<T extends ElementType = 'div'>(props: ModalDialogProps<T>) {
  const {
    as: Component = 'div',
    dropOldClass,
    fullscreen,
    scrollable,
    className,
    variables,
    centered,
    style,
    size,
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
  }, [centered, className, dropOldClass, fullscreen, scrollable, size, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ModalDialog.displayName = 'BRL.ModalDialog';

export default ModalDialog;
