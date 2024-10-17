import type { FoundValue, NestedKeys } from '@src/types';
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

export const toKebabCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export const toCamelCase = (str: string): string => {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

export const toPascalCase = (str: string): string => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

export const getStateByHash = <T extends object>(hash: string, states: T): FoundValue | null => {
  if (!hash || !states) {
    return null;
  }

  function findValue(obj: object, currentPath: string = ''): FoundValue | null {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newPath = currentPath ? `${currentPath}.${key}` : key;

        if (key === hash) {
          return { path: newPath, value: (obj as any)[key] };
        }

        const value = (obj as any)[key];
        if (typeof value === 'object' && value !== null) {
          const result = findValue(value, newPath);
          if (result) return result;
        }
      }
    }
    return null;
  }

  return findValue(states);
};
