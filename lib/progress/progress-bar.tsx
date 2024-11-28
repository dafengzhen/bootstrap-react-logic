import { type ElementType, useMemo } from 'react';

import type { ProgressBarProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const ProgressBar = function ProgressBar<T extends ElementType = 'div'>(props: ProgressBarProps<T>) {
  const {
    animated,
    as: Component = 'div' as ElementType,
    bg,
    className,
    dropOldClass,
    now,
    striped,
    style,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'progress-bar',
      bg && `bg-${bg}`,
      striped && 'progress-bar-striped',
      animated && 'progress-bar-animated',
      className,
    );
    const finalStyle = stylex(
      (_, key) => ({ tKey: convertBsKeyToVar(key) }),
      {
        width: now && `${now}%`,
      },
      variables,
      style,
    );

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [animated, bg, className, dropOldClass, now, striped, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ProgressBar.displayName = 'BRL.ProgressBar';

export default ProgressBar;
