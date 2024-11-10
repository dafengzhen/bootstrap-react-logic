import { type ElementType, useMemo } from 'react';

import type { CloseButtonProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import Button from './button.tsx';

const CloseButton = function CloseButton<T extends ElementType = 'button'>(props: CloseButtonProps<T>) {
  const { as: Component = 'button', className, disabled, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        disabled,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [className, disabled, style, variables]);

  return <Button as={Component as 'button'} btnClose {...rest} {...renderOptions} />;
};

CloseButton.displayName = 'BRL.CloseButton';

export default CloseButton;
