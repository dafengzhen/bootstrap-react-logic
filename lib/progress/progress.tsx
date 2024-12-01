import { type ElementType, useMemo, useState } from 'react';

import type { ProgressProps, ProgressStackedOption } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';
import ProgressBar from './progress-bar.tsx';
import ProgressStacked from './progress-stacked.tsx';

interface IOption extends ProgressStackedOption {
  id: number | string;
}

const Progress = function Progress<T extends ElementType = 'div'>(props: ProgressProps<T>) {
  const {
    animated,
    as: Component = 'div' as ElementType,
    barProps,
    bg,
    children,
    className,
    dropOldClass,
    now,
    options: defaultOptions,
    stacked,
    stackedProps,
    striped,
    style,
    variables,
    ...rest
  } = props;
  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));
  const [options] = useState<IOption[]>(initialOptions);

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'progress', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return (
    <>
      {stacked ? (
        <ProgressStacked {...stackedProps}>
          {options.map((item) => {
            let style = renderOptions.style;
            if (item.now) {
              style = { ...style, width: `${item.now}%` };
            }

            return (
              <Component {...rest} {...renderOptions} {...item.props} key={item.id} style={style}>
                <ProgressBar {...item.barProps} animated={item.animated} bg={item.bg} striped={item.striped}>
                  {children}
                </ProgressBar>
              </Component>
            );
          })}
        </ProgressStacked>
      ) : (
        <Component {...rest} {...renderOptions}>
          <ProgressBar {...barProps} animated={animated} bg={bg} now={now} striped={striped}>
            {children}
          </ProgressBar>
        </Component>
      )}
    </>
  );
};

Progress.Bar = ProgressBar;

Progress.Stacked = ProgressStacked;

Progress.displayName = 'BRL.Progress';

export default Progress;
