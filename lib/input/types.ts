import type {
  CSSProperties,
  DetailedHTMLProps,
  ElementRef,
  ElementType,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  ReactNode,
} from 'react';
import { InputVariablesEnum, IntrinsicElements, SlotValue } from '../tools';

type Variables = {
  [key in keyof typeof InputVariablesEnum]?: string | number;
} & CSSProperties;

export type ElementProps<T extends ElementType> =
  T extends keyof IntrinsicElements
    ? DetailedHTMLProps<
        T extends 'input'
          ? Omit<
              InputHTMLAttributes<IntrinsicElements[T]>,
              'size' | 'color' | 'prefix'
            >
          : HTMLAttributes<IntrinsicElements[T]>,
        IntrinsicElements[T]
      >
    : never;

export type Props<T extends ElementType> = ElementProps<T> & {
  /**
   * Determines which element type to render as (e.g., input or other).
   */
  as?: T;

  /**
   * Custom render function to customize the rendering of the component.
   */
  render?: (renderOptions: ElementProps<T>) => ReactNode;

  /**
   * Flag to indicate whether to drop old class names.
   */
  dropOldClass?: boolean;

  /**
   * Flag to skip wrapping the component in an additional element.
   */
  skipCompWrap?: boolean;

  /**
   * variables.
   */
  variables?: Variables;

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * nativeSize.
   */
  nativeSize?: number | undefined;

  /**
   * readonlyPlainText.
   */
  readonlyPlainText?: boolean;

  /**
   * color
   */
  color?: boolean;

  /**
   * nativeColor.
   */
  nativeColor?: string | undefined;

  /**
   * startContent.
   */
  startContent?: ReactNode;

  /**
   * endContent.
   */
  endContent?: ReactNode;

  /**
   * startEndContentClasses.
   */
  startEndContentClasses?: {
    container?: SlotValue;
    start?: SlotValue;
    end?: SlotValue;
    component?: SlotValue;
  };

  /**
   * onRef.
   */
  onRef?: LegacyRef<ElementRef<T>>;
};
