import type { ElementType } from 'react';

import type {
  BaseProps,
  CardBodyVariablesType,
  CardFooterVariablesType,
  CardGroupVariablesType,
  CardHeaderVariablesType,
  CardImgVariablesType,
  CardLinkVariablesType,
  CardSubtitleVariablesType,
  CardTextVariablesType,
  CardTitleVariablesType,
  CardVariablesType,
  PropsWithoutRef,
} from '../tools';

export type CardBodyProps<T extends ElementType> = PropsWithoutRef<BodyProps<T>, T, CardBodyVariablesType>;

export type CardFooterProps<T extends ElementType> = PropsWithoutRef<FooterProps<T>, T, CardFooterVariablesType>;

export type CardGroupProps<T extends ElementType> = PropsWithoutRef<GroupProps<T>, T, CardGroupVariablesType>;

export type CardHeaderProps<T extends ElementType> = PropsWithoutRef<HeaderProps<T>, T, CardHeaderVariablesType>;

export type CardImgProps<T extends ElementType> = PropsWithoutRef<ImgProps<T>, T, CardImgVariablesType>;

export type CardLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, CardLinkVariablesType>;

export type CardProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, CardVariablesType>;

export type CardSubtitleProps<T extends ElementType> = PropsWithoutRef<SubtitleProps<T>, T, CardSubtitleVariablesType>;

export type CardTextProps<T extends ElementType> = PropsWithoutRef<TextProps<T>, T, CardTextVariablesType>;

export type CardTitleProps<T extends ElementType> = PropsWithoutRef<TitleProps<T>, T, CardTitleVariablesType>;

type BodyProps<T extends ElementType> = BaseProps<T, CardBodyVariablesType> & {};

type FooterProps<T extends ElementType> = BaseProps<T, CardFooterVariablesType> & {};

type GroupProps<T extends ElementType> = BaseProps<T, CardGroupVariablesType> & {};

type HeaderProps<T extends ElementType> = BaseProps<T, CardHeaderVariablesType> & {};

type ImgProps<T extends ElementType> = BaseProps<T, CardImgVariablesType> & {
  /**
   * bottom.
   */
  bottom?: boolean;

  /**
   * overlay.
   */
  overlay?: boolean;

  /**
   * top.
   */
  top?: boolean;
};

type LinkProps<T extends ElementType> = BaseProps<T, CardLinkVariablesType> & {};

type Props<T extends ElementType> = BaseProps<T, CardVariablesType> & {
  /**
   * cardBody.
   */
  cardBody?: boolean;
};

type SubtitleProps<T extends ElementType> = BaseProps<T, CardSubtitleVariablesType> & {};

type TextProps<T extends ElementType> = BaseProps<T, CardTextVariablesType> & {};

type TitleProps<T extends ElementType> = BaseProps<T, CardTitleVariablesType> & {};
