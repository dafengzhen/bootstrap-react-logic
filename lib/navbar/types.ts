import type { ElementType } from 'react';
import type { BaseProps, NavbarVariablesType, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = BaseProps<T, NavbarVariablesType> & {};

export type NavbarProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, NavbarVariablesType>;
