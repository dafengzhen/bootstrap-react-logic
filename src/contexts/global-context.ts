import { createContext, type Dispatch, type SetStateAction } from 'react';

export type Theme = 'light' | 'dark';

export type Layout = 'default' | 'center' | 'fullscreen';

export interface IGlobalContext {
  fullscreen?: [boolean, Dispatch<SetStateAction<boolean>>];
  theme?: [Theme, Dispatch<SetStateAction<Theme>>];
  layout?: [Layout, Dispatch<SetStateAction<Layout>>];
}

export const GlobalContext = createContext<IGlobalContext>({});
