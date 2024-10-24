import { type ElementType, useMemo } from 'react';
import type { AlertLinkProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const AlertLink = function AlertLink<T extends ElementType = 'a'>(props: AlertLinkProps<T>) {
  const { as: Component = 'a', dropOldClass, variables, className, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'alert-link', className);
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

  return <Component {...rest} {...renderOptions}></Component>;
};

AlertLink.displayName = 'BRL.AlertLink';

export default AlertLink;
