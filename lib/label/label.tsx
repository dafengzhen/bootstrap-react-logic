import { type ElementType, useMemo } from 'react';
import type { ElementProps, Props } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  type IntrinsicElements,
  isValueValid,
  LabelVariablesEnum,
  VARIABLE_BS_PREFIX,
} from '../tools';

const Label = function Label<T extends ElementType = 'label'>(props: Props<T>) {
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
  }, [dropOldClass, colFormLabel, className, variables, style]);

  if (render && skipCompWrap) {
    return render({ ...rest, ...renderOptions } as ElementProps<T>);
  }

  const renderContent = render
    ? render({ ...rest, ...renderOptions } as ElementProps<T>)
    : children;

  return (
    <Component {...(rest as IntrinsicElements['label'])} {...renderOptions}>
      {renderContent}
    </Component>
  );
};

Label.displayName = 'BRL.Label';

export default Label;
