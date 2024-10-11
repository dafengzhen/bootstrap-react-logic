import { type ElementType, useMemo } from 'react';
import type { RangeProps } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  RangeVariablesEnum,
  VARIABLE_BS_PREFIX,
} from '../tools';
import Input from '../input/input.tsx';

const Range = function Range<T extends ElementType = 'input'>(props: RangeProps<T>) {
  const { as: Component = 'input', dropOldClass, variables, className, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'form-range', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = RangeVariablesEnum[key];
        return {
          include: true,
          transformedKey: _value ? key : `${VARIABLE_BS_PREFIX}${_value}`,
        };
      }),
      ...style,
    };

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
