export type NestedKeys<T> = T extends object
  ? {
      [K in keyof T]-?: K extends string ? `${K}` | `${K}.${Exclude<NestedKeys<T[K]>, `${string}.`>}` : never;
    }[keyof T]
  : '';
