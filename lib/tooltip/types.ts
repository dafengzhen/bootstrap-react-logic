import type { ElementType, RefCallback, HTMLProps, ReactNode } from 'react';

import type {
  TooltipArrowVariablesType,
  TooltipInnerVariablesType,
  OmittedPropsWithoutRef,
  TooltipVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export type TooltipProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, TooltipVariablesType, 'onChange'>;

export type TooltipArrowProps<T extends ElementType> = PropsWithoutRef<ArrowProps<T>, T, TooltipArrowVariablesType>;

export type TooltipInnerProps<T extends ElementType> = PropsWithoutRef<InnerProps<T>, T, TooltipInnerVariablesType>;

type Props<T extends ElementType> = {
  /**
   * trigger.
   */
  trigger?: (
    setRef: RefCallback<HTMLElement>,
    getProps: (userProps?: HTMLProps<Element>) => Record<string, unknown>,
  ) => ReactNode;

  /**
   * offset.
   */
  offset?:
    | {
        alignmentAxis?: number | null;
        crossAxis?: number;
        mainAxis?: number;
      }
    | number;

  /**
   * placement.
   */
  placement?: 'bottom' | 'right' | 'start' | 'left' | 'end' | 'top';

  /**
   * triggerType.
   */
  triggerType?: ('focus' | 'hover')[] | 'focus' | 'hover';

  /**
   * arrowProps.
   */
  arrowProps?: TooltipArrowProps<ElementType>;

  /**
   * innerProps.
   */
  innerProps?: TooltipInnerProps<ElementType>;

  /**
   * onChange.
   */
  onChange?: (visible: boolean) => void;

  /**
   * container.
   */
  container?: HTMLElement | string;

  /**
   * triggerWrapper.
   */
  triggerWrapper?: boolean;

  /**
   * inner.
   */
  inner?: ReactNode;

  /**
   * visible.
   */
  visible?: boolean;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * html.
   */
  html?: string;
} & BaseProps<T, TooltipVariablesType>;

type ArrowProps<T extends ElementType> = {
  /**
   * onRef.
   */
  onRef?: RefCallback<HTMLElement>;
} & BaseProps<T, TooltipArrowVariablesType>;

type InnerProps<T extends ElementType> = {
  /**
   * html.
   */
  html?: string;
} & BaseProps<T, TooltipInnerVariablesType>;
