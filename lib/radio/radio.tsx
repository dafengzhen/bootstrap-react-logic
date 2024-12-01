import { type ElementType, useMemo } from 'react';

import type { RadioProps } from './types.ts';

import Input from '../input/input.tsx';
import Label from '../label/label.tsx';
import { classx, classxWithOptions, convertBsKeyToVar, processSlotClasses, stylex } from '../tools';

const Radio = function Radio<T extends ElementType = 'input'>(props: RadioProps<T>) {
  const {
    as: Component = 'input' as ElementType,
    children,
    className,
    contentClasses,
    dropOldClass,
    id,
    inline,
    reverse,
    style,
    switch: formSwitch,
    variables,
    ...rest
  } = props;

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
          type="radio"
        />
        <Label className={slotClassName.label} data-slot-label="" dropOldClass htmlFor={id as string | undefined}>
          {children}
        </Label>
      </div>
    );
  }

  return <Input {...rest} {...renderOptions} as={Component} id={id} type="radio" />;
};

Radio.displayName = 'BRL.Radio';

export default Radio;
