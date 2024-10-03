import { type ElementType, useMemo } from 'react';
import type { ElementProps, Props } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  type IntrinsicElements,
  isValueValid,
  TextareaVariablesEnum,
  VARIABLE_BS_PREFIX,
} from '../tools';

const Textarea = function Textarea<T extends ElementType = 'textarea'>(
  props: Props<T>,
) {
  const {
    as: Component = 'textarea',
    render,
    skipCompWrap,
    dropOldClass,
    variables,
    className,
    style,
    children,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'form-control', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = TextareaVariablesEnum[key];
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
  }, [dropOldClass, className, variables, style]);

  if (render && skipCompWrap) {
    return render({ ...rest, ...renderOptions } as ElementProps<T>);
  }

  const renderContent = render
    ? render({ ...rest, ...renderOptions } as ElementProps<T>)
    : children;

  return (
    <Component {...(rest as IntrinsicElements['textarea'])} {...renderOptions}>
      {renderContent}
    </Component>
  );
};

Textarea.displayName = 'BRL.Textarea';

export default Textarea;
