import { type ElementType, useCallback, useEffect, useMemo, useRef } from 'react';

import type { CheckboxProps } from './types.ts';

import {
  processSlotClasses,
  convertBsKeyToVar,
  clsxWithOptions,
  filterOptions,
  isValueValid,
  clsxUnique,
  clsxStyle,
} from '../tools';
import Input from '../input/input.tsx';
import Label from '../label/label.tsx';

const Checkbox = function Checkbox<T extends ElementType = 'input'>(props: CheckboxProps<T>) {
  const {
    as: Component = 'input',
    switch: formSwitch,
    contentClasses,
    indeterminate,
    dropOldClass,
    className,
    variables,
    children,
    reverse,
    inline,
    style,
    id,
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
      <div className={slotClassName.container} data-slot-container="">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <Input
          {...rest}
          {...renderOptions}
          className={slotClassName.component}
          data-slot-component=""
          onRef={setInstance}
          type="checkbox"
          as={Component}
          dropOldClass
          id={id}
        />
        <Label htmlFor={id as undefined | string} className={slotClassName.label} data-slot-label="" dropOldClass>
          {children}
        </Label>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <Input {...rest} {...renderOptions} onRef={setInstance} type="checkbox" as={Component} id={id} />
  );
};

Checkbox.displayName = 'BRL.Checkbox';

export default Checkbox;
