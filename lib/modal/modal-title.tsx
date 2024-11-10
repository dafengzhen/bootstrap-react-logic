import { type ElementType, useMemo } from 'react';

import type { ModalTitleProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const ModalTitle = function ModalTitle<T extends ElementType = 'div'>(props: ModalTitleProps<T>) {
  const { as: Component = 'div', className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'modal-title' + (Component === 'div' ? ' h5' : ''), className);
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
  }, [Component, className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ModalTitle.displayName = 'BRL.ModalTitle';

export default ModalTitle;
