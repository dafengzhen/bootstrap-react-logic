export interface IError {
  message: string;
  statusText: string;
}

export type NestedKeys<T> = T extends object
  ? {
      [K in keyof T]-?: K extends string ? `${K}.${Exclude<NestedKeys<T[K]>, `${string}.`>}` | `${K}` : never;
    }[keyof T]
  : '';

export interface ICodeSection {
  code?: string;
  openCode: boolean;
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
