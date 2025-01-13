import { type ElementType, useCallback, useEffect, useMemo, useRef } from 'react';

import type { CheckboxProps } from './types.ts';

import Input from '../input/input.tsx';
import Label from '../label/label.tsx';
import { classx, classxWithOptions, convertBsKeyToVar, processSlotClasses, stylex } from '../tools';

const Checkbox = function Checkbox<T extends ElementType = 'input'>(props: CheckboxProps<T>) {
  const {
    as: Component = 'input' as ElementType,
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
  }, [indeterminate]);

  const setInstance = useCallback((instance: HTMLInputElement | null) => {
    checkboxElement.current = instance;
  }, []);

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'form-check-input', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [dropOldClass, className, variables, style]);

  if (children) {
    const slotClassName = processSlotClasses(contentClasses, {
      component: 'form-check-input',
      container: classxWithOptions(
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

  return <Input {...rest} {...renderOptions} as={Component} id={id} onRef={setInstance} type="checkbox" />;
};

Checkbox.displayName = 'BRL.Checkbox';

export default Checkbox;
