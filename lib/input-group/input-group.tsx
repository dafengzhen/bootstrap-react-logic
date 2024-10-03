import { type ElementType, useMemo } from 'react';
import type { ElementProps, Props } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  InputVariablesEnum,
  type IntrinsicElements,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';
import InputGroupText from './input-group-text.tsx';

const InputGroup = function InputGroup<T extends ElementType = 'div'>(
  props: Props<T>,
) {
  const {
    as: Component = 'div',
    render,
    skipCompWrap,
    dropOldClass,
    variables,
    className,
    style,
    children,
    nowrap,
    size,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'input-group',
      nowrap && 'flex-nowrap',
      size && `input-group-${size}`,
      className,
    );
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = InputVariablesEnum[key];
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
  }, [dropOldClass, nowrap, size, className, variables, style]);

  if (render && skipCompWrap) {
    return render({ ...rest, ...renderOptions } as ElementProps<T>);
  }

  const renderContent = render
    ? render({ ...rest, ...renderOptions } as ElementProps<T>)
    : children;

  return (
    <Component {...(rest as IntrinsicElements['div'])} {...renderOptions}>
      {renderContent}
    </Component>
  );
};

InputGroup.Text = InputGroupText;

InputGroup.displayName = 'BRL.InputGroup';

export default InputGroup;
