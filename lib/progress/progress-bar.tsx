import { type ElementType, useMemo } from 'react';

import type { ProgressBarProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const ProgressBar = function ProgressBar<T extends ElementType = 'div'>(props: ProgressBarProps<T>) {
  const {
    as: Component = 'div',
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
