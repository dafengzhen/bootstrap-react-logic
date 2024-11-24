import { type SetStateAction, createContext, type Dispatch } from 'react';

export interface IGlobalContext {
  fullscreen?: [boolean, Dispatch<SetStateAction<boolean>>];
  layout?: [Layout, Dispatch<SetStateAction<Layout>>];
  theme?: [Theme, Dispatch<SetStateAction<Theme>>];
}

export type Layout = 'fullscreen' | 'default' | 'center';

export type Theme = 'light' | 'dark';

export const GlobalContext = createContext<IGlobalContext>({});
