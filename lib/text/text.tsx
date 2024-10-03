import { type ElementType, useMemo } from 'react';
import type { ElementProps, Props } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  type IntrinsicElements,
  isValueValid,
  TextVariablesEnum,
  VARIABLE_BS_PREFIX,
} from '../tools';

const Text = function Text<T extends ElementType = 'div'>(props: Props<T>) {
  const {
    as: Component = 'div',
    render,
    skipCompWrap,
    dropOldClass,
    variables,
    children,
    className,
    style,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'form-text', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = TextVariablesEnum[key];
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
    <Component {...(rest as IntrinsicElements['div'])} {...renderOptions}>
      {renderContent}
    </Component>
  );
};

Text.displayName = 'BRL.Text';

export default Text;
