import { createContext, type Dispatch, type SetStateAction } from 'react';

interface IGlobalContext {
  fullscreen?: [boolean, Dispatch<SetStateAction<boolean>>];
  theme?: ['light' | 'dark', Dispatch<SetStateAction<'light' | 'dark'>>];
}

export const GlobalContext = createContext<IGlobalContext>({});
