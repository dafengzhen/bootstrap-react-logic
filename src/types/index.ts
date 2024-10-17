export interface IError {
  statusText: string;
  message: string;
}

export type NestedKeys<T> = T extends object
  ? {
      [K in keyof T]-?: K extends string ? `${K}` | `${K}.${Exclude<NestedKeys<T[K]>, `${string}.`>}` : never;
    }[keyof T]
  : '';

export interface ICodeSection {
  openCode: boolean;
  code?: string;
}

export type StateObject = {
  [key: string]: unknown;
};

export interface FoundValue {
  path: string;
  value: unknown;
}

export type IStateSections<T extends string> = {
  [key in T]: ICodeSection;
};

export type CodeType = {
  [key in any]: {
    code?: string;
  };
};
