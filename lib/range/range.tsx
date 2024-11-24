import { type ElementType, useMemo } from 'react';

import type { RangeProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';
import Input from '../input/input.tsx';

const Range = function Range<T extends ElementType = 'input'>(props: RangeProps<T>) {
  const { as: Component = 'input', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'form-range', className);
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
  }, [dropOldClass, className, variables, style]);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <Input {...rest} {...renderOptions} as={Component} type="range" />
  );
};

Range.displayName = 'BRL.Range';

export default Range;
