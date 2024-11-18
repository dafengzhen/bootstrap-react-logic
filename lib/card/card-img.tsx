import { type ElementType, useMemo } from 'react';

import type { CardImgProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, findFirstTruthyClass, isValueValid } from '../tools';

const CardImg = function CardImg<T extends ElementType = 'div' | 'img'>(props: CardImgProps<T>) {
  const { as, bottom, className, dropOldClass, overlay, style, top, variables, ...rest } = props;
  const Component = as ? as : overlay ? 'div' : 'img';

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        findFirstTruthyClass(
          ['card-img-bottom', bottom],
          ['card-img-overlay', overlay],
          ['card-img-top', top],
          ['card-img', true],
        ),
      className,
    );
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
  }, [dropOldClass, top, bottom, overlay, className, variables, style]);

  return <Component {...rest} {...renderOptions}></Component>;
};

CardImg.displayName = 'BRL.CardImg';

export default CardImg;
