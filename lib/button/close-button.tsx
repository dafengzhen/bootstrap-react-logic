import { type ElementType, useMemo } from 'react';

import type { CloseButtonProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';
import Button from './button.tsx';

const CloseButton = function CloseButton<T extends ElementType = 'button'>(props: CloseButtonProps<T>) {
  const { as: Component = 'button' as ElementType, className, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, style, variables]);

  return <Button btnClose {...rest} {...renderOptions} as={Component} />;
};

CloseButton.displayName = 'BRL.CloseButton';

export default CloseButton;
