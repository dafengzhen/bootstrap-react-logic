import { createContext, type Dispatch, type SetStateAction } from 'react';

export interface IGlobalContext {
  fullscreen?: [boolean, Dispatch<SetStateAction<boolean>>];
  layout?: [Layout, Dispatch<SetStateAction<Layout>>];
  theme?: [Theme, Dispatch<SetStateAction<Theme>>];
}

export type Layout = 'center' | 'default' | 'fullscreen';

export type Theme = 'dark' | 'light';

export const GlobalContext = createContext<IGlobalContext>({});
