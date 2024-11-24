import { type ElementType, useState, useMemo } from 'react';

import type { ProgressStackedOption, ProgressProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';
import ProgressStacked from './progress-stacked.tsx';
import ProgressBar from './progress-bar.tsx';

interface IOption extends ProgressStackedOption {
  id: number | string;
}

const Progress = function Progress<T extends ElementType = 'div'>(props: ProgressProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    options: defaultOptions,
    dropOldClass,
    stackedProps,
    className,
    variables,
    animated,
    barProps,
    children,
    stacked,
    striped,
    style,
    now,
    bg,
    ...rest
  } = props;
  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));
  const [options] = useState<IOption[]>(initialOptions);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'progress', className);
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
                <ProgressBar {...item.barProps} animated={item.animated} striped={item.striped} bg={item.bg}>
                  {children}
                </ProgressBar>
              </Component>
            );
          })}
        </ProgressStacked>
      ) : (
        <Component {...rest} {...renderOptions}>
          <ProgressBar {...barProps} animated={animated} striped={striped} now={now} bg={bg}>
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
