import { type ElementType, useMemo } from 'react';

import type { RangeProps } from './types.ts';

import Input from '../input/input.tsx';
import { classx, convertBsKeyToVar, stylex } from '../tools';

const Range = function Range<T extends ElementType = 'input'>(props: RangeProps<T>) {
  const { as: Component = 'input' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'form-range', className);
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
