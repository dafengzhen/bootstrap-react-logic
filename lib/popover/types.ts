import type { ElementType, HTMLProps, MouseEvent, ReactNode, RefCallback } from 'react';

import type {
  BaseProps,
  OmittedPropsWithoutRef,
  PopoverArrowVariablesType,
  PopoverBodyVariablesType,
  PopoverHeaderVariablesType,
  PopoverVariablesType,
  PropsWithoutRef,
} from '../tools';

export type PopoverArrowProps<T extends ElementType> = PropsWithoutRef<ArrowProps<T>, T, PopoverArrowVariablesType>;

export type PopoverBodyProps<T extends ElementType> = PropsWithoutRef<BodyProps<T>, T, PopoverBodyVariablesType>;

export type PopoverHeaderProps<T extends ElementType> = PropsWithoutRef<HeaderProps<T>, T, PopoverHeaderVariablesType>;

export type PopoverProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, PopoverVariablesType, 'onChange'>;

type ArrowProps<T extends ElementType> = BaseProps<T, PopoverArrowVariablesType> & {
  /**
   * onRef.
   */
  onRef?: RefCallback<HTMLElement>;
};

type BodyProps<T extends ElementType> = BaseProps<T, PopoverBodyVariablesType> & {};

type HeaderProps<T extends ElementType> = BaseProps<T, PopoverHeaderVariablesType> & {};

type Props<T extends ElementType> = BaseProps<T, PopoverVariablesType> & {
  /**
   * arrowProps.
   */
  arrowProps?: PopoverArrowProps<ElementType>;

  /**
   * body.
   */
  body?: ReactNode;

  /**
   * bodyProps.
   */
  bodyProps?: PopoverBodyProps<ElementType>;

  /**
   * container.
   */
  container?: HTMLElement | string;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * header.
   */
  header?: ReactNode;

  /**
   * headerProps.
   */
  headerProps?: PopoverHeaderProps<ElementType>;

  /**
   * offset.
   */
  offset?:
    | number
    | {
        alignmentAxis?: null | number;
        crossAxis?: number;
        mainAxis?: number;
      };

  /**
   * onChange.
   */
  onChange?: (visible: boolean, event?: MouseEvent<HTMLElement>) => void;

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
};
