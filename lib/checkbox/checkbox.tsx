import { type ElementType, useEffect, useMemo, useState } from 'react';
import type { CheckboxProps } from './types.ts';
import {
  CheckboxVariablesEnum,
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';
import Input from '../input/input.tsx';

const Checkbox = function Checkbox<T extends ElementType = 'input'>(props: CheckboxProps<T>) {
  const {
    as: Component = 'input',
    dropOldClass,
    variables,
    className,
    style,
    children,
    indeterminate,
    ...rest
  } = props;

  const [instance, setInstance] = useState<HTMLInputElement | null>(null);

  useEffect(() => {
    if (indeterminate && instance) {
      instance.indeterminate = true;
    }
  }, [indeterminate, instance]);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'form-check-input', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = CheckboxVariablesEnum[key];
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
    <Input {...rest} {...renderOptions} as={Component} type="checkbox" onRef={setInstance}>
      {children}
    </Input>
  );
};

Checkbox.displayName = 'BRL.Checkbox';

export default Checkbox;
