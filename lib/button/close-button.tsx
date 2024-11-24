import { type ElementType, useMemo } from 'react';

import type { CloseButtonProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';
import Button from './button.tsx';

const CloseButton = function CloseButton(props: CloseButtonProps<ElementType>) {
  const { className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, style, variables]);

  return <Button btnClose {...rest} {...renderOptions} />;
};

CloseButton.displayName = 'BRL.CloseButton';

export default CloseButton;
