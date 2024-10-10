import { type ElementType, useCallback, useEffect, useMemo, useRef } from 'react';
import type { CheckboxProps } from './types.ts';
import {
  CheckboxVariablesEnum,
  clsxUnique,
  clsxWithOptions,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  processSlotClasses,
  VARIABLE_BS_PREFIX,
} from '../tools';
import Input from '../input/input.tsx';
import Label from '../label/label.tsx';

const Checkbox = function Checkbox<T extends ElementType = 'input'>(props: CheckboxProps<T>) {
  const {
    as: Component = 'input',
    dropOldClass,
    variables,
    className,
    style,
    children,
    indeterminate,
    id,
    contentClasses,
    switch: formSwitch,
    inline,
    reverse,
    ...rest
  } = props;

  const checkboxElement = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const current = checkboxElement.current;
    if (indeterminate && current) {
      current.indeterminate = true;
    }
  }, [indeterminate, checkboxElement]);

  const setInstance = useCallback((instance: HTMLInputElement | null) => (checkboxElement.current = instance), []);

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

  if (children) {
    const slotClassName = processSlotClasses(contentClasses, {
      container: clsxWithOptions(
        null,
        'form-check',
        formSwitch && 'form-switch',
        inline && 'form-check-inline',
        reverse && 'form-check-reverse',
      ),
      component: 'form-check-input',
      label: 'form-check-label',
    });

    return (
      <div data-slot-container="" className={slotClassName.container}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <Input
          {...rest}
          {...renderOptions}
          as={Component}
          data-slot-component=""
          type="checkbox"
          onRef={setInstance}
          id={id}
          dropOldClass
          className={slotClassName.component}
        />
        <Label data-slot-label="" dropOldClass className={slotClassName.label} htmlFor={id as string | undefined}>
          {children}
        </Label>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <Input {...rest} {...renderOptions} as={Component} type="checkbox" onRef={setInstance} id={id} />
  );
};

Checkbox.displayName = 'BRL.Checkbox';

export default Checkbox;
