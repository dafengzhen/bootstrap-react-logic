import { type ElementType, useMemo } from 'react';

import type { ProgressBarProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const ProgressBar = function ProgressBar<T extends ElementType = 'div'>(props: ProgressBarProps<T>) {
  const {
    animated,
    as: Component = 'div',
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
    const finalStyle = clsxStyle({ ...variables, ...style, width: now && `${now}%` }, true, (value, key) => {
      if (value === false) {
        return {
          include: false,
        };
      }

      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [animated, bg, className, dropOldClass, now, striped, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ProgressBar.displayName = 'BRL.ProgressBar';

export default ProgressBar;
