import { type ElementType, useMemo } from 'react';

import type { RadioProps } from './types.ts';

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

const Radio = function Radio<T extends ElementType = 'input'>(props: RadioProps<T>) {
  const {
    as: Component = 'input',
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

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <Input {...rest} {...renderOptions} as={Component} type="radio" id={id} />
  );
};

Radio.displayName = 'BRL.Radio';

export default Radio;
