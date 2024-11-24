import { type ElementType, useMemo } from 'react';

import type { RangeProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';
import Input from '../input/input.tsx';

const Range = function Range<T extends ElementType = 'input'>(props: RangeProps<T>) {
  const { as: Component = 'input' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'form-range', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [dropOldClass, className, variables, style]);

  return <Input {...rest} {...renderOptions} as={Component} type="range" />;
};

Range.displayName = 'BRL.Range';

export default Range;
