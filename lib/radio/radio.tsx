import { type ElementType, useMemo } from 'react';

import type { RadioProps } from './types.ts';

import { processSlotClasses, convertBsKeyToVar, clsxWithOptions, clsxUnique, stylex } from '../tools';
import Input from '../input/input.tsx';
import Label from '../label/label.tsx';

const Radio = function Radio<T extends ElementType = 'input'>(props: RadioProps<T>) {
  const {
    as: Component = 'input' as ElementType,
    switch: formSwitch,
    contentClasses,
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
          as={Component}
          dropOldClass
          type="radio"
          id={id}
        />
        <Label htmlFor={id as undefined | string} className={slotClassName.label} data-slot-label="" dropOldClass>
          {children}
        </Label>
      </div>
    );
  }

  return <Input {...rest} {...renderOptions} as={Component} type="radio" id={id} />;
};

Radio.displayName = 'BRL.Radio';

export default Radio;
