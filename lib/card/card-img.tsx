import { type ElementType, useMemo } from 'react';
import type { CardImgProps } from './types.ts';
import {
  CardImgVariablesEnum,
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  getFirstNonEmptyClass,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const CardImg = function CardImg<T extends ElementType = 'img' | 'div'>(props: CardImgProps<T>) {
  const { as, dropOldClass, variables, className, style, top, bottom, overlay, ...rest } = props;
  const Component = as ? as : overlay ? 'div' : 'img';

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        getFirstNonEmptyClass({
          'card-img-top': top,
          'card-img-bottom': bottom,
          'card-img-overlay': overlay,
          'card-img': true,
        }),

      className,
    );
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = CardImgVariablesEnum[key];
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
  }, [dropOldClass, top, bottom, overlay, className, variables, style]);

  return <Component {...rest} {...renderOptions}></Component>;
};

CardImg.displayName = 'BRL.CardImg';

export default CardImg;
