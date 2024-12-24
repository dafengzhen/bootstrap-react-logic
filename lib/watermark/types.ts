import type { ElementType } from 'react';

import type { BaseProps, PropsWithoutRef, WatermarkVariablesType } from '../tools';

export type WatermarkProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, WatermarkVariablesType>;

type Props<T extends ElementType> = BaseProps<T, WatermarkVariablesType> & {
  /**
   * angle.
   */
  angle?: number;

  /**
   * fontColor.
   */
  fontColor?: string;

  /**
   * fontSize.
   */
  fontSize?: number;

  /**
   * gapX.
   */
  gapX?: number;

  /**
   * gapY.
   */
  gapY?: number;

  /**
   * imageUrl.
   */
  imageUrl?: string;

  /**
   * isDarkMode.
   */
  isDarkMode?: boolean;

  /**
   * offsetX.
   */
  offsetX?: number;

  /**
   * offsetY.
   */
  offsetY?: number;

  /**
   * opacity.
   */
  opacity?: number;

  /**
   * text.
   */
  text?: string | string[];

  /**
   * zIndex.
   */
  zIndex?: number;
};
