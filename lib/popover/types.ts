import type { ElementType, RefCallback, MouseEvent, HTMLProps, ReactNode } from 'react';

import type {
  PopoverHeaderVariablesType,
  PopoverArrowVariablesType,
  PopoverBodyVariablesType,
  OmittedPropsWithoutRef,
  PopoverVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export type PopoverProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, PopoverVariablesType, 'onChange'>;

export type PopoverHeaderProps<T extends ElementType> = PropsWithoutRef<HeaderProps<T>, T, PopoverHeaderVariablesType>;

export type PopoverArrowProps<T extends ElementType> = PropsWithoutRef<ArrowProps<T>, T, PopoverArrowVariablesType>;

export type PopoverBodyProps<T extends ElementType> = PropsWithoutRef<BodyProps<T>, T, PopoverBodyVariablesType>;

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
   * onChange.
   */
  onChange?: (visible: boolean, event?: MouseEvent<HTMLElement>) => void;

  /**
   * placement.
   */
  placement?: 'bottom' | 'right' | 'start' | 'left' | 'end' | 'top';

  /**
   * triggerType.
   */
  triggerType?: ('focus' | 'hover')[] | 'focus' | 'hover';

  /**
   * headerProps.
   */
  headerProps?: PopoverHeaderProps<ElementType>;

  /**
   * arrowProps.
   */
  arrowProps?: PopoverArrowProps<ElementType>;

  /**
   * bodyProps.
   */
  bodyProps?: PopoverBodyProps<ElementType>;

  /**
   * container.
   */
  container?: HTMLElement | string;

  /**
   * triggerWrapper.
   */
  triggerWrapper?: boolean;

  /**
   * header.
   */
  header?: ReactNode;

  /**
   * visible.
   */
  visible?: boolean;

  /**
   * body.
   */
  body?: ReactNode;

  /**
   * fade.
   */
  fade?: boolean;
} & BaseProps<T, PopoverVariablesType>;

type ArrowProps<T extends ElementType> = {
  /**
   * onRef.
   */
  onRef?: RefCallback<HTMLElement>;
} & BaseProps<T, PopoverArrowVariablesType>;

type HeaderProps<T extends ElementType> = BaseProps<T, PopoverHeaderVariablesType> & {};

type BodyProps<T extends ElementType> = BaseProps<T, PopoverBodyVariablesType> & {};
