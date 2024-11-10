import { type ElementType, useMemo } from 'react';

import type { RadioProps } from './types.ts';

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

const Radio = function Radio<T extends ElementType = 'input'>(props: RadioProps<T>) {
  const {
    as: Component = 'input',
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
          type="radio"
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
    <Input {...rest} {...renderOptions} as={Component} id={id} type="radio" />
  );
};

Radio.displayName = 'BRL.Radio';

export default Radio;
