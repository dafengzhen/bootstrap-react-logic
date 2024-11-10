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

type Props<T extends ElementType> = {
  /**
   * cardBody.
   */
  cardBody?: boolean;
} & BaseProps<T, CardVariablesType>;

type BodyProps<T extends ElementType> = {} & BaseProps<T, CardBodyVariablesType>;

type ImgProps<T extends ElementType> = {
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
} & BaseProps<T, CardImgVariablesType>;

type TitleProps<T extends ElementType> = {} & BaseProps<T, CardTitleVariablesType>;

type SubtitleProps<T extends ElementType> = {} & BaseProps<T, CardSubtitleVariablesType>;

type TextProps<T extends ElementType> = {} & BaseProps<T, CardTextVariablesType>;

type LinkProps<T extends ElementType> = {} & BaseProps<T, CardLinkVariablesType>;

type HeaderProps<T extends ElementType> = {} & BaseProps<T, CardHeaderVariablesType>;

type FooterProps<T extends ElementType> = {} & BaseProps<T, CardFooterVariablesType>;

type GroupProps<T extends ElementType> = {} & BaseProps<T, CardGroupVariablesType>;

export type CardProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, CardVariablesType>;

export type CardBodyProps<T extends ElementType> = PropsWithoutRef<BodyProps<T>, T, CardBodyVariablesType>;

export type CardImgProps<T extends ElementType> = PropsWithoutRef<ImgProps<T>, T, CardImgVariablesType>;

export type CardTitleProps<T extends ElementType> = PropsWithoutRef<TitleProps<T>, T, CardTitleVariablesType>;

export type CardSubtitleProps<T extends ElementType> = PropsWithoutRef<SubtitleProps<T>, T, CardSubtitleVariablesType>;

export type CardTextProps<T extends ElementType> = PropsWithoutRef<TextProps<T>, T, CardTextVariablesType>;

export type CardLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, CardLinkVariablesType>;

export type CardHeaderProps<T extends ElementType> = PropsWithoutRef<HeaderProps<T>, T, CardHeaderVariablesType>;

export type CardFooterProps<T extends ElementType> = PropsWithoutRef<FooterProps<T>, T, CardFooterVariablesType>;

export type CardGroupProps<T extends ElementType> = PropsWithoutRef<GroupProps<T>, T, CardGroupVariablesType>;
