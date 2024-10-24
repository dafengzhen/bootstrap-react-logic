import { type ElementType, useMemo } from 'react';
import type { RadioProps } from './types.ts';
import {
  clsxStyle,
  clsxUnique,
  clsxWithOptions,
  convertBsKeyToVar,
  filterOptions,
  isValueValid,
  processSlotClasses,
} from '../tools';
import Input from '../input/input.tsx';
import Label from '../label/label.tsx';

const Radio = function Radio<T extends ElementType = 'input'>(props: RadioProps<T>) {
  const {
    as: Component = 'input',
    dropOldClass,
    variables,
    className,
    style,
    children,
    id,
    contentClasses,
    switch: formSwitch,
    inline,
    reverse,
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
      <div data-slot-container="" className={slotClassName.container}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <Input
          {...rest}
          {...renderOptions}
          as={Component}
          data-slot-component=""
          type="radio"
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
    <Input {...rest} {...renderOptions} as={Component} type="radio" id={id} />
  );
};

Radio.displayName = 'BRL.Radio';

export default Radio;
