import { type ElementType, useCallback, useEffect, useMemo, useRef } from 'react';

import type { CheckboxProps } from './types.ts';

import Input from '../input/input.tsx';
import Label from '../label/label.tsx';
import {
  clsxStyle,
  clsxUnique,
  clsxWithOptions,
  convertBsKeyToVar,
  filterOptions,
  isValueValid,
  processSlotClasses,
} from '../tools';

const Checkbox = function Checkbox<T extends ElementType = 'input'>(props: CheckboxProps<T>) {
  const {
    as: Component = 'input',
    children,
    className,
    contentClasses,
    dropOldClass,
    id,
    indeterminate,
    inline,
    reverse,
    style,
    switch: formSwitch,
    variables,
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

  if (children) {
    const slotClassName = processSlotClasses(contentClasses, {
      component: 'form-check-input',
      container: clsxWithOptions(
        null,
        'form-check',
        formSwitch && 'form-switch',
        inline && 'form-check-inline',
        reverse && 'form-check-reverse',
      ),
      label: 'form-check-label',
    });

    return (
      <div className={slotClassName.container} data-slot-container="">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <Input
          {...rest}
          {...renderOptions}
          as={Component}
          className={slotClassName.component}
          data-slot-component=""
          dropOldClass
          id={id}
          onRef={setInstance}
          type="checkbox"
        />
        <Label className={slotClassName.label} data-slot-label="" dropOldClass htmlFor={id as string | undefined}>
          {children}
        </Label>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <Input {...rest} {...renderOptions} as={Component} id={id} onRef={setInstance} type="checkbox" />
  );
};

Checkbox.displayName = 'BRL.Checkbox';

export default Checkbox;
