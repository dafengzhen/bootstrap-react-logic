import type { FoundValue, NestedKeys } from '@src/types';
import type { SetStateAction } from 'react';

export const updateState = (
  setStates: (value: SetStateAction<any>) => void,
  keyPath: NestedKeys<any>,
  value: unknown,
  callback?: () => void,
) => {
  setStates((prevState: any) => {
    const keys = keyPath.split('.');
    const newState = { ...prevState };

    keys.reduce((acc: any, key, index) => {
      if (index === keys.length - 1) {
        acc[key] = value;
      } else {
        acc[key] = { ...acc[key] };
      }
      return acc[key];
    }, newState);

    return newState;
  });
  callback?.();
};

export const toKebabCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export const kebabToCamelCase = (str: string): string => {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

export const kebabToCamelCaseLowerFirst = (str: string): string => {
  return kebabToCamelCase(str).replace(/^[A-Z]/, (letter) => letter.toLowerCase());
};

export const getStateByHash = <T extends object>(hash: string, states: T): FoundValue | null => {
  if (!hash || !states) {
    return null;
  }

  const findValue = (obj: object, currentPath: string = ''): FoundValue | null => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newPath = currentPath ? `${currentPath}.${key}` : key;
        if (key === hash) {
          return { path: newPath, value: (obj as any)[key] };
        }

        const value = (obj as any)[key];
        if (typeof value === 'object' && value !== null) {
          const result = findValue(value, newPath);
          if (result) {
            return result;
          }
        }
      }
    }
    return null;
  };

  return findValue(states);
};

export const transformCodeObj = (input: Record<string, unknown>): Record<string, { code: string }> => {
  const output: Record<string, { code: string }> = {};

  Object.entries(input).forEach(([key, rawCode]) => {
    const fileName = kebabToCamelCase(key.split('/').pop()!.split('.')[0]);
    const lines = (rawCode as string).trim().split('\n');

    if (lines.length > 2 && lines[0].startsWith('```') && lines[lines.length - 1].endsWith('```')) {
      lines.shift();
      lines.pop();
    }

    const cleanedCode = lines.join('\n');
    output[fileName] = { code: cleanedCode || '__NO_DATA__' };
  });

  return output;
};

export const sortByProperty = (arr: any[], key: string): any[] => {
  return arr.sort((a, b) => {
    const valueA = a[key]?.toLowerCase?.() || a[key];
    const valueB = b[key]?.toLowerCase?.() || b[key];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return valueA.localeCompare(valueB);
    }

    return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
  });
};
