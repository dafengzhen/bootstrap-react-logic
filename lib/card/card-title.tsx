import { type ElementType, useMemo } from 'react';
import type { CardTitleProps } from './types.ts';
import {
  CardTitleVariablesEnum,
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const CardTitle = function CardTitle<T extends ElementType = 'div'>(props: CardTitleProps<T>) {
  const { as: Component = 'div', dropOldClass, variables, className, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card-title', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = CardTitleVariablesEnum[key];
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

CardTitle.displayName = 'BRL.CardTitle';

export default CardTitle;
