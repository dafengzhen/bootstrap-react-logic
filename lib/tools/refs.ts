import type { MutableRefObject, Ref, RefObject } from 'react';

export type ReactRef<T> = MutableRefObject<T> | Ref<T> | RefObject<T>;
