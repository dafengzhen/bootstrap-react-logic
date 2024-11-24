import type { MutableRefObject, RefObject, Ref } from 'react';

export type ReactRef<T> = MutableRefObject<T> | RefObject<T> | Ref<T>;
