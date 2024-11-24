import { type ElementType, useMemo } from 'react';

import type { ProgressBarProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const ProgressBar = function ProgressBar<T extends ElementType = 'div'>(props: ProgressBarProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    dropOldClass,
    className,
    variables,
    animated,
    striped,
    style,
    now,
    bg,
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
