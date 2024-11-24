import { type ElementType, useCallback, useEffect, useMemo, useRef } from 'react';

import type { CheckboxProps } from './types.ts';

import { processSlotClasses, convertBsKeyToVar, clsxWithOptions, clsxUnique, stylex } from '../tools';
import Input from '../input/input.tsx';
import Label from '../label/label.tsx';

const Checkbox = function Checkbox<T extends ElementType = 'input'>(props: CheckboxProps<T>) {
  const {
    as: Component = 'input' as ElementType,
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
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
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

  return <Input {...rest} {...renderOptions} onRef={setInstance} type="checkbox" as={Component} id={id} />;
};

Checkbox.displayName = 'BRL.Checkbox';

export default Checkbox;
