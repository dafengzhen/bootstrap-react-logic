import { type ElementType, useMemo } from 'react';
import type { CardBodyProps } from './types.ts';
import {
  CardBodyVariablesEnum,
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const CardBody = function CardBody<T extends ElementType = 'div'>(props: CardBodyProps<T>) {
  const { as: Component = 'div', dropOldClass, variables, className, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card-body', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = CardBodyVariablesEnum[key];
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

CardBody.displayName = 'BRL.CardBody';

export default CardBody;
