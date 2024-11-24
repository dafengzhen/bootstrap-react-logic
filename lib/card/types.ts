import type { ElementType } from 'react';

import type {
  CardSubtitleVariablesType,
  CardFooterVariablesType,
  CardHeaderVariablesType,
  CardGroupVariablesType,
  CardTitleVariablesType,
  CardBodyVariablesType,
  CardLinkVariablesType,
  CardTextVariablesType,
  CardImgVariablesType,
  CardVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export type CardSubtitleProps<T extends ElementType> = PropsWithoutRef<SubtitleProps<T>, T, CardSubtitleVariablesType>;

export type CardFooterProps<T extends ElementType> = PropsWithoutRef<FooterProps<T>, T, CardFooterVariablesType>;

export type CardHeaderProps<T extends ElementType> = PropsWithoutRef<HeaderProps<T>, T, CardHeaderVariablesType>;

export type CardGroupProps<T extends ElementType> = PropsWithoutRef<GroupProps<T>, T, CardGroupVariablesType>;

export type CardTitleProps<T extends ElementType> = PropsWithoutRef<TitleProps<T>, T, CardTitleVariablesType>;

export type CardBodyProps<T extends ElementType> = PropsWithoutRef<BodyProps<T>, T, CardBodyVariablesType>;

export type CardLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, CardLinkVariablesType>;

export type CardTextProps<T extends ElementType> = PropsWithoutRef<TextProps<T>, T, CardTextVariablesType>;

export type CardImgProps<T extends ElementType> = PropsWithoutRef<ImgProps<T>, T, CardImgVariablesType>;

export type CardProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, CardVariablesType>;

type ImgProps<T extends ElementType> = {
  /**
   * overlay.
   */
  overlay?: boolean;

  /**
   * bottom.
   */
  bottom?: boolean;

  /**
   * top.
   */
  top?: boolean;
} & BaseProps<T, CardImgVariablesType>;

type Props<T extends ElementType> = {
  /**
   * cardBody.
   */
  cardBody?: boolean;
} & BaseProps<T, CardVariablesType>;

type SubtitleProps<T extends ElementType> = BaseProps<T, CardSubtitleVariablesType> & {};

type FooterProps<T extends ElementType> = BaseProps<T, CardFooterVariablesType> & {};

type HeaderProps<T extends ElementType> = BaseProps<T, CardHeaderVariablesType> & {};

type GroupProps<T extends ElementType> = BaseProps<T, CardGroupVariablesType> & {};

type TitleProps<T extends ElementType> = BaseProps<T, CardTitleVariablesType> & {};

type BodyProps<T extends ElementType> = BaseProps<T, CardBodyVariablesType> & {};

type LinkProps<T extends ElementType> = BaseProps<T, CardLinkVariablesType> & {};

type TextProps<T extends ElementType> = BaseProps<T, CardTextVariablesType> & {};
