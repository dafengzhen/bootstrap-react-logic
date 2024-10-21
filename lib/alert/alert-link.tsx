import { type ElementType, useMemo } from 'react';
import type { AlertLinkProps } from './types.ts';
import {
  AlertLinkVariablesEnum,
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const AlertLink = function AlertLink<T extends ElementType = 'a'>(props: AlertLinkProps<T>) {
  const { as: Component = 'a', dropOldClass, variables, className, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'alert-link', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = AlertLinkVariablesEnum[key];
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

AlertLink.displayName = 'BRL.AlertLink';

export default AlertLink;
