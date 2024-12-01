import { type ElementType, useMemo } from 'react';

import type { CardImgProps } from './types.ts';

import { classx, convertBsKeyToVar, findTruthyClass, stylex } from '../tools';

const CardImg = function CardImg<T extends ElementType = 'img'>(props: CardImgProps<T>) {
  const { as, bottom, className, dropOldClass, overlay, style, top, variables, ...rest } = props;
  const Component = (as ? as : overlay ? 'div' : 'img') as ElementType;

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass &&
        findTruthyClass(
          ['card-img-bottom', bottom],
          ['card-img-overlay', overlay],
          ['card-img-top', top],
          ['card-img', true],
        ),
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [bottom, className, dropOldClass, overlay, style, top, variables]);

  return <Component {...rest} {...renderOptions}></Component>;
};

CardImg.displayName = 'BRL.CardImg';

export default CardImg;
