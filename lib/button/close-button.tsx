import { type ElementType, useMemo } from 'react';
import type { CloseButtonProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const CloseButton = function CloseButton<T extends ElementType = 'button'>(props: CloseButtonProps<T>) {
  const {
    as: Component = 'button',
    dropOldClass,
    variables,
    className,
    style,
    'aria-label': ariaLabel = 'Close',
    disabled,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'btn-close', className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
        'aria-label': ariaLabel,
        disabled,
      },
      isValueValid,
    );
  }, [ariaLabel, className, disabled, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

CloseButton.displayName = 'BRL.CloseButton';

export default CloseButton;
