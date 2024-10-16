import { type ElementType, useMemo } from 'react';
import type { CardTitleProps } from './types.ts';
import {
  CardSubtitleVariablesEnum,
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const CardSubtitle = function CardSubtitle<T extends ElementType = 'div'>(props: CardTitleProps<T>) {
  const { as: Component = 'div', dropOldClass, variables, className, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card-subtitle', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = CardSubtitleVariablesEnum[key];
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

CardSubtitle.displayName = 'BRL.CardSubtitle';

export default CardSubtitle;
