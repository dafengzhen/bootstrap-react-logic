import { type ElementType, useMemo } from 'react';

import type { AlertLinkProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const AlertLink = function AlertLink<T extends ElementType = 'a'>(props: AlertLinkProps<T>) {
  const { as: Component = 'a' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'alert-link', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions}></Component>;
};

AlertLink.displayName = 'BRL.AlertLink';

export default AlertLink;
