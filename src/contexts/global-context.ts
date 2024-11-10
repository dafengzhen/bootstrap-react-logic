import { createContext, type Dispatch, type SetStateAction } from 'react';

export type Theme = 'dark' | 'light';

export type Layout = 'center' | 'default' | 'fullscreen';

export interface IGlobalContext {
  fullscreen?: [boolean, Dispatch<SetStateAction<boolean>>];
  layout?: [Layout, Dispatch<SetStateAction<Layout>>];
  theme?: [Theme, Dispatch<SetStateAction<Theme>>];
}

export const GlobalContext = createContext<IGlobalContext>({});
