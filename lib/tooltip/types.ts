import type { ElementType, HTMLProps, ReactNode, RefCallback } from 'react';

import type {
  BaseProps,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
  TooltipArrowVariablesType,
  TooltipInnerVariablesType,
  TooltipVariablesType,
} from '../tools';

type Props<T extends ElementType> = {
  /**
   * arrowProps.
   */
  arrowProps?: TooltipArrowProps<ElementType>;

  /**
   * container.
   */
  container?: HTMLElement | string;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * html.
   */
  html?: string;

  /**
   * inner.
   */
  inner?: ReactNode;

  /**
   * innerProps.
   */
  innerProps?: TooltipInnerProps<ElementType>;

  /**
   * offset.
   */
  offset?:
    | {
        alignmentAxis?: null | number;
        crossAxis?: number;
        mainAxis?: number;
      }
    | number;

  /**
   * onChange.
   */
  onChange?: (visible: boolean) => void;

  /**
   * placement.
   */
  placement?: 'bottom' | 'end' | 'left' | 'right' | 'start' | 'top';

  /**
   * trigger.
   */
  trigger?: (
    setRef: RefCallback<HTMLElement>,
    getProps: (userProps?: HTMLProps<Element>) => Record<string, unknown>,
  ) => ReactNode;

  /**
   * triggerType.
   */
  triggerType?: 'focus' | 'hover' | ('focus' | 'hover')[];

  /**
   * triggerWrapper.
   */
  triggerWrapper?: boolean;

  /**
   * visible.
   */
  visible?: boolean;
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

export type TooltipProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, TooltipVariablesType, 'onChange'>;

export type TooltipArrowProps<T extends ElementType> = PropsWithoutRef<ArrowProps<T>, T, TooltipArrowVariablesType>;

export type TooltipInnerProps<T extends ElementType> = PropsWithoutRef<InnerProps<T>, T, TooltipInnerVariablesType>;
