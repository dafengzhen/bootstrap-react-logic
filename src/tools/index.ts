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

export const transformCodeObj = (
  input: Record<string, unknown>,
): {
  [key: string]: {
    code: string;
  };
} => {
  const output: {
    [key: string]: {
      code: string;
    };
  } = {};

  for (const key in input) {
    const pathParts = key.split('/');
    const fileNameWithExtension = pathParts[pathParts.length - 1];
    const fileName = kebabToCamelCase(fileNameWithExtension.split('.')[0]);

    const rawCode = (input[key] as string).trim();
    const lines = rawCode.split('\n');

    if (lines.length > 2 && lines[0].startsWith('```') && lines[lines.length - 1].endsWith('```')) {
      lines.shift();
      lines.pop();
    }

    const cleanedCode = lines.join('\n');
    output[fileName] = { code: cleanedCode || '__NO_DATA__' };
  }

  return output;
};
