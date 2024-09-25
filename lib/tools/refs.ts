import type { MutableRefObject, Ref, RefObject } from 'react';

export type ReactRef<T> = RefObject<T> | MutableRefObject<T> | Ref<T>;
