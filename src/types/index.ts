export type NestedKeys<T> = T extends object
  ? {
      [K in keyof T]-?: K extends string ? `${K}.${Exclude<NestedKeys<T[K]>, `${string}.`>}` | `${K}` : never;
    }[keyof T]
  : '';

export type IStateSections<T extends string> = {
  [key in T]: ICodeSection;
};

export interface ICodeSection {
  openCode: boolean;
  code?: string;
}

export type CodeType = {
  [key in any]: {
    code?: string;
  };
};

export interface IError {
  statusText: string;
  message: string;
}

export interface FoundValue {
  value: unknown;
  path: string;
}

export type StateObject = {
  [key: string]: unknown;
};
