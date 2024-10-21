import { type ElementType, useMemo } from 'react';
import type { AlertHeadingProps } from './types.ts';
import {
  AlertHeadingVariablesEnum,
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const AlertHeading = function AlertHeading<T extends ElementType = 'div'>(props: AlertHeadingProps<T>) {
  const { as: Component = 'div', dropOldClass, variables, className, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'alert-heading h4', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = AlertHeadingVariablesEnum[key];
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

  return <Component {...rest} {...renderOptions}></Component>;
};

AlertHeading.displayName = 'BRL.AlertHeading';

export default AlertHeading;
