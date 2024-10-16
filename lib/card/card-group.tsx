import { type ElementType, useMemo } from 'react';
import type { CardGroupProps } from './types.ts';
import {
  CardGroupVariablesEnum,
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const CardGroup = function CardGroup<T extends ElementType = 'div'>(props: CardGroupProps<T>) {
  const { as: Component = 'div', dropOldClass, variables, className, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card-group', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = CardGroupVariablesEnum[key];
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

CardGroup.displayName = 'BRL.CardGroup';

export default CardGroup;
