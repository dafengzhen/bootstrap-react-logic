import { type ElementType, useMemo } from 'react';

import type { ProgressStackedProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const ProgressStacked = function ProgressStacked<T extends ElementType = 'div'>(props: ProgressStackedProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'progress-stacked', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ProgressStacked.displayName = 'BRL.ProgressStacked';

export default ProgressStacked;
