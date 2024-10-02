import React, { type ElementType, useMemo } from 'react';
import type { ElementProps, Props } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  LabelVariablesEnum,
  VARIABLE_BS_PREFIX,
} from '../tools';

const Label = function Label<T extends ElementType>(props: Props<T>) {
  const {
    as: Component = 'label',
    render,
    skipCompWrap,
    dropOldClass,
    variables,
    className,
    style,
    children,
    colFormLabel,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && (colFormLabel ? 'col-form-label' : 'form-label'),
      className,
    );
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = LabelVariablesEnum[key];
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
  }, [dropOldClass, colFormLabel, className, style]);

  if (render && skipCompWrap) {
    return render({ ...rest, ...renderOptions } as ElementProps<T>);
  }

  const renderContent = render
    ? render({ ...rest, ...renderOptions } as ElementProps<T>)
    : children;

  return (
    <Component
      {...(rest as React.JSX.IntrinsicElements['label'])}
      {...renderOptions}
    >
      {renderContent}
    </Component>
  );
};

Label.displayName = 'BRL.Label';

export default Label;
