import { type ElementType, useMemo } from 'react';
import type { CardTextProps } from './types.ts';
import {
  CardLinkVariablesEnum,
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const CardLink = function CardLink<T extends ElementType = 'a'>(props: CardTextProps<T>) {
  const { as: Component = 'a', dropOldClass, variables, className, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card-link', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = CardLinkVariablesEnum[key];
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

CardLink.displayName = 'BRL.CardLink';

export default CardLink;
