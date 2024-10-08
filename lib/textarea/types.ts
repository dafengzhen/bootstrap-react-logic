import type { ElementType } from 'react';
import type { BaseProps, PropsWithoutRef, TextareaVariablesEnum } from '../tools';

type Props<T extends ElementType> = BaseProps<T, typeof TextareaVariablesEnum> & {};

export type TextareaProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, typeof TextareaVariablesEnum>;
