import type { ElementType } from 'react';
import type {
  BaseProps,
  CardBodyVariablesEnum,
  CardFooterVariablesEnum,
  CardGroupVariablesEnum,
  CardHeaderVariablesEnum,
  CardImgVariablesEnum,
  CardLinkVariablesEnum,
  CardSubtitleVariablesEnum,
  CardTextVariablesEnum,
  CardTitleVariablesEnum,
  CardVariablesEnum,
  PropsWithoutRef,
} from '../tools';

type Props<T extends ElementType> = BaseProps<T, typeof CardVariablesEnum> & {};

type BodyProps<T extends ElementType> = BaseProps<T, typeof CardBodyVariablesEnum> & {};

type ImgProps<T extends ElementType> = BaseProps<T, typeof CardImgVariablesEnum> & {
  /**
   * top.
   */
  top?: boolean;

  /**
   * bottom.
   */
  bottom?: boolean;

  /**
   * overlay.
   */
  overlay?: boolean;
};

type TitleProps<T extends ElementType> = BaseProps<T, typeof CardTitleVariablesEnum> & {};

type SubtitleProps<T extends ElementType> = BaseProps<T, typeof CardSubtitleVariablesEnum> & {};

type TextProps<T extends ElementType> = BaseProps<T, typeof CardTextVariablesEnum> & {};

type LinkProps<T extends ElementType> = BaseProps<T, typeof CardLinkVariablesEnum> & {};

type HeaderProps<T extends ElementType> = BaseProps<T, typeof CardHeaderVariablesEnum> & {};

type FooterProps<T extends ElementType> = BaseProps<T, typeof CardFooterVariablesEnum> & {};

type GroupProps<T extends ElementType> = BaseProps<T, typeof CardGroupVariablesEnum> & {};

export type CardProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, typeof CardVariablesEnum>;

export type CardBodyProps<T extends ElementType> = PropsWithoutRef<BodyProps<T>, T, typeof CardBodyVariablesEnum>;

export type CardImgProps<T extends ElementType> = PropsWithoutRef<ImgProps<T>, T, typeof CardImgVariablesEnum>;

export type CardTitleProps<T extends ElementType> = PropsWithoutRef<TitleProps<T>, T, typeof CardTitleVariablesEnum>;

export type CardSubtitleProps<T extends ElementType> = PropsWithoutRef<
  SubtitleProps<T>,
  T,
  typeof CardSubtitleVariablesEnum
>;

export type CardTextProps<T extends ElementType> = PropsWithoutRef<TextProps<T>, T, typeof CardTextVariablesEnum>;

export type CardLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, typeof CardLinkVariablesEnum>;

export type CardHeaderProps<T extends ElementType> = PropsWithoutRef<HeaderProps<T>, T, typeof CardHeaderVariablesEnum>;

export type CardFooterProps<T extends ElementType> = PropsWithoutRef<FooterProps<T>, T, typeof CardFooterVariablesEnum>;

export type CardGroupProps<T extends ElementType> = PropsWithoutRef<GroupProps<T>, T, typeof CardGroupVariablesEnum>;
