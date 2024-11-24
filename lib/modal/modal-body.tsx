import { type ElementType, useMemo } from 'react';

import type { ModalBodyProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const ModalBody = function ModalBody<T extends ElementType = 'div'>(props: ModalBodyProps<T>) {
  const { as: Component = 'div', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'modal-body', className);
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
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ModalBody.displayName = 'BRL.ModalBody';

export default ModalBody;
