/* eslint-disable @typescript-eslint/no-explicit-any */

import type { NestedKeys } from '@src/types';
import type { SetStateAction } from 'react';

export const updateState = (
  setStates: (value: SetStateAction<any>) => void,
  k: NestedKeys<any>,
  v: unknown,
  c?: () => void,
) => {
  setStates((prev: any) => {
    const keys = k.split('.');
    const newState = { ...prev };

    keys.reduce((acc: any, key, index) => {
      if (index === keys.length - 1) {
        acc[key] = v;
      } else {
        acc[key] = { ...acc[key] };
      }
      return acc[key];
    }, newState);

    return newState;
  });
  c?.();
};
