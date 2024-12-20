import clsx, { type ClassValue } from 'clsx';
import cssmix, { type StyleInput } from 'cssmix';
import {
  addDays,
  addYears,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isSameDay,
  isSameMonth,
  isToday,
  isValid,
  isWithinInterval,
  type Locale,
  parseISO,
  startOfMonth,
  startOfQuarter,
  startOfWeek,
  startOfYear,
} from 'date-fns';

import type { CalendarData, CalendarDate, CalendarEvent } from '../calendar';

import { BS_PREFIX, EMPTY_GROUP_FLAG, VARIABLE_BS_PREFIX } from './constants.ts';
import { RoundedClassEnum } from './enums.ts';

/**
 * A type that represents either a value of type T or a function returning a value of type T.
 * This utility type is useful for allowing lazy evaluation, where a value can either be
 * provided directly or deferred by wrapping it in a function.
 *
 * @template T - The type of the value or the return type of the function.
 */
type MaybeFunction<T> = (() => T) | T;

/**
 * Type definition for the deepMerge function.
 * This generic type allows merging two objects of types T and U.
 * Optionally, a custom function (shouldAssign) can be passed to control
 * whether a specific key should be assigned or not during the merge process.
 *
 * @template T - Type of the first object to merge.
 * @template U - Type of the second object to merge.
 * @param obj1 - The first object to merge.
 * @param obj2 - The second object to merge.
 * @param shouldAssign - Optional function to control whether a specific key
 *                       should be merged based on the key's path and values.
 * @returns A merged object that combines properties from both obj1 and obj2.
 */
type MergeFn = <T, U>(obj1: T, obj2: U, shouldAssign?: (path: string, value1: any, value2: any) => boolean) => T & U;

/**
 * Checks if a value is a plain object.
 *
 * A plain object is defined as an object created by the Object constructor
 * or one with a prototype of null.
 *
 * @param value - The value to check.
 * @returns True if the value is a plain object; otherwise, false.
 *
 * @example
 * const obj = { key: 'value' };
 * const result = isPlainObject(obj); // result is true
 * const result2 = isPlainObject([]); // result2 is false
 * const result3 = isPlainObject(null); // result3 is false
 * const result4 = isPlainObject('string'); // result4 is false
 */
const isPlainObject = (value: any): value is { [key: string]: any } => {
  return typeof value === 'object' && value !== null && Object.prototype.toString.call(value) === '[object Object]';
};

/**
 * Checks if the given object is an array.
 *
 * @param obj - The object to check.
 * @returns True if the object is an array; otherwise, false.
 *
 * @template T - The type of the input object.
 * @example
 * const result = isArray([1, 2, 3]); // result is true
 * const result2 = isArray('not an array'); // result2 is false
 */
const isArray = <T>(obj: T): obj is Array<any> & T => {
  return Array.isArray(obj);
};

/**
 * Determines if the given value is a function or a class instance.
 * Functions and class instances are copied directly, without merging.
 *
 * @param obj - The value to check.
 * @returns True if the value is a function or a class instance; otherwise, false.
 *
 * @example
 * const func = () => {};
 * const classInstance = new (class MyClass {})();
 * const notFuncOrClass = { key: 'value' };
 *
 * console.log(isFunctionOrClass(func)); // true
 * console.log(isFunctionOrClass(classInstance)); // true
 * console.log(isFunctionOrClass(notFuncOrClass)); // false
 */
const isFunctionOrClass = (obj: unknown): obj is (...args: any[]) => any | object => {
  return typeof obj === 'function' || (typeof obj === 'object' && obj !== null && obj.constructor !== Object);
};

/**
 * Checks if an object is a special object (either a Date or a RegExp instance).
 * This function takes an object as input and determines if it is an instance of the Date class or the RegExp class.
 *
 * @param obj - The object to be checked.
 * @returns True if the object is a Date or RegExp instance; otherwise, false.
 *
 * @example
 * const dateObj = new Date();
 * const regExpObj = /abc/;
 * const plainObj = { key: 'value' };
 *
 * console.log(isSpecialObject(dateObj)); // true
 * console.log(isSpecialObject(regExpObj)); // true
 * console.log(isSpecialObject(plainObj)); // false
 */
const isSpecialObject = (obj: any): obj is Date | RegExp => {
  return obj instanceof Date || obj instanceof RegExp;
};

/**
 * Maps and filters style values based on the given mapping and conditions.
 *
 * @param styleMapping - An object where keys are target style keys and values are source style keys.
 * @param styleValues  - An object containing style values.
 * @param valueFilter  - An optional filter function that takes a style value and key, returning a boolean to decide inclusion.
 * @returns A new object containing selected style key-value pairs based on mapping and filtering conditions.
 */
const mapAndFilterStyles = (
  styleMapping: Record<string, string>,
  styleValues: any,
  valueFilter?: (value: any, key: string) => boolean,
) => {
  const result: Record<string, string> = {};

  if (!isPlainObject(styleValues)) {
    return result;
  }

  for (const [styleKey, valueKey] of Object.entries(styleMapping)) {
    if (
      valueKey in styleValues &&
      styleValues[valueKey] !== undefined &&
      styleValues[valueKey] !== null &&
      (!valueFilter || valueFilter(styleValues[valueKey], valueKey))
    ) {
      result[styleKey] = styleValues[valueKey];
    }
  }

  return result;
};

/**
 * Filters, transforms, and excludes key-value pairs from the source object based on conditions,
 * with an optional transformation function that handles both filtering and value transformation.
 *
 * @param sourceObject    - The source object to filter from.
 * @param exclusionValues - An array of values; if the source object's value is in this array, that key is excluded.
 * @param transformFn     - An optional function that takes a value and key, returning an object with:
 *                        - include: a boolean indicating whether to include the key,
 *                        - transformedValue: the value to include if different from the original value,
 *                        - transformedKey: the key to use instead of the original key.
 * @returns A new object containing key-value pairs from the source that meet the specified conditions.
 */
const filterTransformAndExcludeProperties = <T>(
  sourceObject: T,
  exclusionValues: Array<any> = [undefined],
  transformFn?: (value: any, key: keyof T) => { include: boolean; transformedKey?: string; transformedValue?: any },
): Partial<T> => {
  const result: Partial<T> = {};

  for (const key in sourceObject) {
    if (Object.prototype.hasOwnProperty.call(sourceObject, key)) {
      const value = sourceObject[key];
      const isNotExcluded = !exclusionValues.includes(value);

      if (isNotExcluded) {
        const { include, transformedKey, transformedValue } = transformFn
          ? transformFn(value, key as keyof T)
          : { include: true };

        if (include) {
          const finalKey = transformedKey !== undefined ? transformedKey : key;
          result[finalKey as keyof T] = transformedValue !== undefined ? transformedValue : value;
        }
      }
    }
  }

  return result;
};

/**
 * Filters and transforms key-value pairs from the source object based on conditions,
 * with an optional transformation function that handles both filtering and value transformation.
 *
 * @param sourceObject  - The source object to filter from.
 * @param transformFn   - An optional function that takes a value and key, returning an object with:
 *                      - include: a boolean indicating whether to include the key,
 *                      - transformedValue: the value to include if different from the original value,
 *                      - transformedKey: the key to use instead of the original key.
 * @returns A new object containing key-value pairs from the source that meet the specified conditions.
 */
const filterAndTransformProperties = <T>(
  sourceObject: T,
  transformFn?: (value: any, key: keyof T) => { include: boolean; transformedKey?: string; transformedValue?: any },
): Partial<T> => {
  const result: Partial<T> = {};

  for (const key in sourceObject) {
    if (Object.prototype.hasOwnProperty.call(sourceObject, key)) {
      const value = sourceObject[key];
      const { include, transformedKey, transformedValue } = transformFn
        ? transformFn(value, key as keyof T)
        : { include: true };

      if (include) {
        const finalKey = transformedKey !== undefined ? transformedKey : key;
        result[finalKey as keyof T] = transformedValue !== undefined ? transformedValue : value;
      }
    }
  }

  return result;
};

/**
 * Converts a camelCase string to a kebab-case string.
 *
 * For example:
 * - "camelCase" => "camel-case"
 * - "thisIsATest" => "this-is-a-test"
 *
 * @param {string} str - The camelCase string to be converted.
 * @returns {string} The converted kebab-case string.
 */
const camelToKebab = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

/**
 * Parses a JSON string or returns an object, and optionally calls a callback with the result.
 * If the callback returns a value, that value will be returned instead.
 *
 * @param input    - A JSON string or an object.
 * @param callback - An optional function to be called with the parsed object or original object,
 *                   and a boolean indicating whether the input was a string.
 * @returns The result of the callback if provided, otherwise the parsed object or original object.
 * @throws Will throw an error if the input is a string that is not valid JSON.
 */
const parseJson = (input: any | string, callback?: (result: object, isString: boolean) => object | void): object => {
  let result: object;
  const isString = typeof input === 'string';

  if (isString) {
    try {
      result = JSON.parse(input);
    } catch {
      throw new Error('Invalid JSON string');
    }
  } else {
    result = input;
  }

  return callback ? callback(result, isString) || result : result;
};

/**
 * A utility function that returns the first parameter if it's not undefined.
 * If the first parameter is undefined, it checks the second parameter (if provided).
 * If the second parameter is also undefined or evaluates to a falsy value,
 * the function will return undefined.
 * If either parameter is a function, it evaluates the function
 * and uses its return value for the comparison.
 *
 * @param param1 - The first parameter, can be a value or a function returning a value.
 * @param param2 - The optional second parameter, can be a value or a function returning a value.
 * @returns The first parameter if it's defined, otherwise the resolved value of the second parameter
 *          if provided and truthy; otherwise, returns undefined.
 */
const getValue = <T>(param1: MaybeFunction<T>, param2?: MaybeFunction<T>): T | undefined => {
  const resolve = (val: MaybeFunction<T>): T => (typeof val === 'function' ? (val as () => T)() : val);

  const resolvedParam1 = resolve(param1);
  return resolvedParam1 !== undefined ? resolvedParam1 : param2 ? resolve(param2) || undefined : resolvedParam1;
};

/**
 * Recursively merges two objects, handling nested objects and arrays.
 * This function can also handle functions and class instances by directly copying them,
 * instead of attempting to merge their internal structure.
 * Optionally, the merging behavior for specific keys can be customized via the shouldAssign function.
 *
 * @param obj1 - The first object to merge.
 * @param obj2 - The second object to merge.
 * @param shouldAssign - Optional function that takes the key's path and the corresponding values from both
 *                       objects. It returns a boolean that determines whether the key should be assigned.
 *                       By default, it always returns true (all keys are merged).
 * @returns A new object containing the merged properties of obj1 and obj2.
 */
const deepMerge: MergeFn = (obj1, obj2, shouldAssign = () => true) => {
  if (!isPlainObject(obj1) || !isPlainObject(obj2)) {
    return obj1 || {};
  }

  const mergeArrays = (targetArr: any[], sourceArr: any[], path: string): any[] => {
    return sourceArr.map((sourceValue, index) => {
      const targetValue = targetArr[index];
      const newPath = `${path}[${index}]`;

      if (isPlainObject(targetValue) && isPlainObject(sourceValue)) {
        return mergeObjects(targetValue, sourceValue, newPath);
      } else if (isArray(sourceValue)) {
        return mergeArrays(targetValue || [], sourceValue, newPath);
      } else {
        return sourceValue;
      }
    });
  };

  const mergeObjects = (target: any, source: any, path: string = '') => {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const targetValue = target[key];
        const sourceValue = source[key];
        const newPath = path ? `${path}.${key}` : key;

        if (!shouldAssign(newPath, targetValue, sourceValue)) {
          continue;
        }

        if (isSpecialObject(sourceValue)) {
          const Constructor = sourceValue.constructor as new (...args: any[]) => typeof sourceValue;
          target[key] = new Constructor(sourceValue);
        } else if (isFunctionOrClass(sourceValue)) {
          target[key] = sourceValue;
        } else if (isPlainObject(targetValue) && isPlainObject(sourceValue)) {
          target[key] = mergeObjects(targetValue, sourceValue, newPath);
        } else if (isArray(targetValue) && isArray(sourceValue)) {
          target[key] = mergeArrays(targetValue, sourceValue, newPath);
        } else {
          target[key] = sourceValue;
        }
      }
    }
    return target;
  };

  return mergeObjects(obj1, obj2);
};

/**
 * Filters the given options based on the provided filter function.
 *
 * @param options - An object containing options to be filtered.
 * @param filterFn - A function that determines whether a key-value pair should be included in the result.
 *                   It receives the value and its corresponding key of the options object, and returns a boolean.
 *                   Defaults to a function that returns true for all key-value pairs.
 * @returns A new object containing only the key-value pairs from the options that pass the filter function.
 *
 * @template T - The type of the options object.
 */
const filterOptions = <T extends Record<string, any>>(
  options: T,
  filterFn: (value: T[keyof T], key: keyof T) => boolean = () => true,
): Partial<T> => {
  const filteredOptions: Partial<T> = {};

  for (const key in options) {
    if (Object.prototype.hasOwnProperty.call(options, key)) {
      const value = options[key];
      if (filterFn(value, key as keyof T)) {
        filteredOptions[key] = value;
      }
    }
  }

  return filteredOptions;
};

/**
 * Checks if the provided value is valid.
 * A value is considered valid if:
 * 1. It is not undefined or null.
 * 2. If it is an object, it should not be an empty object.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} - Returns true if the value is valid, otherwise false.
 */
const isValueValid = (value: unknown): boolean => {
  return (
    value !== undefined &&
    value !== null &&
    value !== false &&
    !(typeof value === 'object' && Object.keys(value).length === 0)
  );
};

/**
 * Initializes a logger with a specified project name.
 * This logger includes methods for generating warnings about missing or incorrect parameters.
 *
 * @param {string} [project='BRL'] - Project name to prefix in log messages.
 * @returns {{ logParamWarning: (options: { param: string; component: string; expectedType?: string; level?: 'warn' | 'error' | 'info'; currentValue?: any; customMessage?: string; }) => void }} - Logging methods.
 */
const initializeLogger = (
  project: string = 'BRL',
): {
  logWarning: (options: {
    component: string;
    currentValue?: any;
    expectedType?: string;
    level?: 'error' | 'info' | 'warn';
    message?: string;
    param: string;
  }) => void;
} => {
  type LogOptions = {
    component: string;
    currentValue?: any;
    expectedType?: string;
    level?: 'error' | 'info' | 'warn';
    message?: string;
    param: string;
  };

  /**
   * Logs a message for missing or incorrect parameters.
   *
   * @param {LogOptions} options - Configuration object for the log message.
   */
  const logWarning = ({
    component,
    currentValue,
    expectedType = 'string',
    level = 'warn',
    message: customMessage,
    param,
  }: LogOptions) => {
    const baseMessage = `Parameter "${param}" is missing${expectedType ? `, expected type: "${expectedType}"` : ''}${currentValue !== undefined ? `, current value: "${currentValue}"` : ''}.`;
    const finalMessage = `[${project + '.' + component}] ${level.toUpperCase()} : ${customMessage || baseMessage}`;

    console[level](finalMessage);
  };

  return { logWarning };
};

/**
 * Checks the properties of an object based on provided keys and a predicate function.
 * If the predicate returns false, it triggers the callback function.
 *
 * @template T
 * @param {T} obj - The object whose properties need to be checked.
 * @param {keyof T | (keyof T)[]} keys - A single key or an array of keys to check.
 * @param {(value: T[keyof T]) => boolean} [predicate=() => true] - A function to evaluate the validity of a property's value.
 * @param {(propertyName: string, value: any) => void} callback - A callback function to handle invalid properties.
 * @returns {boolean} - Returns true if all properties satisfy the predicate; otherwise, false.
 */
const checkObjectProperties = <T extends object>(
  obj: T,
  keys: (keyof T)[] | keyof T,
  predicate: (value: T[keyof T]) => boolean = () => true,
  callback: (propertyName: string, value: any) => void,
): boolean => {
  const checkKey = (key: keyof T) => {
    const value = obj[key];
    const isValid = predicate(value);

    if (!isValid) {
      callback(String(key), value);
    }

    return isValid;
  };

  if (Array.isArray(keys)) {
    return keys.every((key) => checkKey(key));
  } else {
    return checkKey(keys);
  }
};

/**
 * Checks if a value is defined (not undefined, null, or an empty string).
 *
 * @param {any} value - The value to check.
 * @param {boolean} [checkEmptyString=false] - Whether to consider an empty string as undefined.
 * @returns {boolean} - Returns true if the value is neither undefined, null, nor an empty string (if checked); otherwise, false.
 */
const isDefined = <T>(value: T, checkEmptyString: boolean = false): value is Exclude<T, null | undefined> => {
  return value !== undefined && value !== null && (!checkEmptyString || value !== '');
};

/**
 * Combines class names using `clsx`, ensuring uniqueness by removing duplicates.
 * Filters out empty class names to ensure a valid result.
 *
 * @param {ClassValue[]} inputs - Class values such as strings, arrays, or objects.
 * @returns {string | undefined} - A space-separated string of unique class names, or `undefined` if no valid class names.
 */
const classx = (...inputs: ClassValue[]): string | undefined => {
  const classNames = clsx(...inputs);
  if (!classNames) {
    return;
  }

  const uniqueClassNames = new Set(classNames.split(/\s+/).filter(Boolean));
  if (uniqueClassNames.size > 0) {
    return [...uniqueClassNames].join(' ');
  }
};

/**
 * A utility function that wraps the `clsx` function to process class names,
 * and ensures the resulting class names are unique or not based on the provided options.
 *
 * @param {Object | null} [options] - Optional configuration options for class name processing.
 * @param {boolean} [options.dedupe=false] - If true, duplicate class names will be removed. Defaults to false.
 * @param {ClassValue[]} inputs - An array of class values that can include strings,
 * arrays, objects, or any valid input that `clsx` accepts.
 *
 * @returns {string | undefined} - A string of class names separated by a space, with duplicates removed
 *   if `dedupe` is true, or `undefined` if no valid class names are provided.
 */
const classxWithOptions = (options?: null | { dedupe?: boolean }, ...inputs: ClassValue[]): string | undefined => {
  const dedupe = options?.dedupe ?? false;
  return dedupe ? classx(...inputs) : clsx(...inputs) || undefined;
};

/**
 * Processes a given className string by applying a series of processors
 * that manipulate the list of class names. Each processor is a function
 * that takes an array of class names and returns either a modified array
 * or `undefined`.
 *
 * @param {string} className - The original className string containing one or more class names separated by spaces.
 * @param {((classNames: string[]) => string[] | undefined)[]} [processors] - An optional array of functions that process the class names.
 * Each processor is applied in order, modifying the list of class names.
 *
 * @returns {string} - The processed className string with any modifications from the processors, joined back into a single string.
 * Duplicate class names are removed.
 */
const processClassName = (
  className: string,
  processors?: ((classNames: string[]) => string[] | undefined)[],
): string => {
  if (!processors || processors.length === 0) {
    return className;
  }

  let result = className.split(' ').filter(Boolean);
  for (const processor of processors) {
    const processed = processor(result);
    if (isArray(processed)) {
      result = processed as string[];
    }
  }

  return [...new Set(result)].join(' ');
};

/**
 * Merges two class name strings into one, removing duplicates.
 *
 * @param {string | undefined} originalClass - The original class name string.
 * It could contain multiple class names separated by spaces, or be undefined.
 *
 * @param {string} newClass - The new class name string to be merged.
 * This also can contain multiple class names separated by spaces.
 *
 * @returns {string} - A single string of class names, with no duplicates.
 * The class names are joined by a single space.
 */
const mergeClassNames = (originalClass: string | undefined, newClass: string): string => {
  const classSet = new Set([...(originalClass || '').split(' '), ...newClass.split(' ')].filter(Boolean));
  return Array.from(classSet).join(' ');
};

/**
 * This function processes a set of class names (`slotClasses`) for different slots and applies
 * custom logic to generate the final class names. It takes into account both the provided slot
 * classes and any original class names that might already exist (`originalClasses`).
 *
 * @template T - A record where the keys are slot names and values are either strings or
 *               functions that process original class names.
 *
 * @param {T} [slotClasses] - An optional object where the keys represent slot names and the
 *                            values can either be a string (class name) or a function that
 *                            returns a string or `undefined` when given an original class name.
 * @param {Partial<Record<keyof T, string>>} [originalClasses] - An optional object containing
 *                                                              the original class names for
 *                                                              each slot.
 *
 * @returns {Partial<{ [K in keyof T]: string }>} - An object where the keys are the same slot
 *                                                  names from the input, and the values are
 *                                                  the processed class names based on the
 *                                                  provided or original class names.
 */
const processSlotClasses = <T extends Record<string, ((originalClass: string) => string | undefined) | string>>(
  slotClasses?: T,
  originalClasses?: Partial<Record<keyof T, string>>,
): Partial<{ [K in keyof T]: string }> => {
  if (!slotClasses || Object.keys(slotClasses).length === 0) {
    return originalClasses && Object.keys(originalClasses).length > 0 ? originalClasses : {};
  }

  const result: Partial<{ [K in keyof T]: string }> = {};
  for (const slot in slotClasses) {
    const originalClass = originalClasses?.[slot as keyof T] || '';
    const slotClass = slotClasses[slot as keyof T];

    if (typeof slotClass === 'string') {
      result[slot as keyof T] = slotClass;
    } else if (typeof slotClass === 'function') {
      const processedClass = slotClass(originalClass);
      result[slot as keyof T] = processedClass !== undefined ? processedClass : originalClass;
    } else {
      result[slot as keyof T] = originalClass;
    }
  }

  if (originalClasses) {
    for (const key in originalClasses) {
      if (!(key in result)) {
        result[key as keyof T] = originalClasses[key as keyof T] || '';
      }
    }
  }

  return result;
};

/**
 * Generates a random string of the specified length.
 * The string consists of uppercase and lowercase letters, as well as digits.
 *
 * @param {number} [length=18] - The length of the random string to generate. Default is 18.
 * @returns {string} A random string of the specified length.
 */
const generateRandomId = (length: number = 6): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
};

/**
 * Merges two objects' properties and returns a new object.
 *
 * @template T - The type of the original properties.
 * @template R - The type of the replacement properties, defaults to a partial of T.
 *
 * @param {T} [props={}] - The original properties object to merge, defaults to an empty object.
 * @param {R} [replacement={}] - The properties object to replace, defaults to an empty object.
 *
 * @returns {T & R} - A new object containing the merged original and replacement properties.
 */
const mergeProps = <T, R extends Partial<T>>(props: T = {} as T, replacement: R = {} as R): R & T => {
  return { ...props, ...replacement } as R & T;
};

/**
 * Groups an array of objects by a specified property and records the index of each item.
 *
 * @param arr - The array of objects to be grouped.
 * @param propertyName - The name of the property by which to group the objects. Must be a key of the object type T.
 * @returns An object containing the grouped data and an array of keys. The grouped data is represented as a record where keys are strings and values are arrays of objects with the original item and its index in the original array.
 */
const groupByProperty = <T>(
  arr: T[],
  propertyName: keyof T,
): {
  groupedData: Record<string, { index: number; item: T }[]>;
  keys: string[];
} => {
  const groupedData = arr.reduce(
    (acc, item, index) => {
      const propertyValue = item[propertyName];
      const key =
        propertyValue === null || propertyValue === undefined || propertyValue === ''
          ? EMPTY_GROUP_FLAG
          : propertyValue.toString();
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push({ index, item });
      return acc;
    },
    {} as Record<string, { index: number; item: T }[]>,
  );

  return {
    groupedData,
    keys: Object.keys(groupedData),
  };
};

/**
 * A utility function that either picks specific properties from a given object or excludes specific properties to generate a new object.
 * If the input object is null or undefined, an empty object is returned.
 * The third parameter is optional. When set to true, the array of keys is treated as keys to be excluded.
 *
 * @template T The type of the input object, which must be an extension of the object type.
 * @template K The type of the keys of the input object.
 *
 * @param {T | null | undefined} inputObj The input object.
 * @param {K[]} propertyKeys The array of keys to be picked or excluded.
 * @param {boolean} isExcludeKeys Optional flag. Default is false. If true, propertyKeys are treated as keys to be excluded.
 *
 * @returns {Pick<T, K> | Omit<T, K>} The new object generated according to the parameters. If the input object is null or undefined, an empty object is returned.
 */
const pickObjectProperties = <T extends object, K extends keyof T>(
  inputObj: null | T | undefined,
  propertyKeys: K[],
  isExcludeKeys: boolean = false,
): Omit<T, K> | Pick<T, K> => {
  const result: Partial<typeof isExcludeKeys extends true ? Omit<T, K> : Pick<T, K>> = {};

  if (!inputObj) {
    return result as typeof isExcludeKeys extends true ? Omit<T, K> : Pick<T, K>;
  }

  if (isExcludeKeys) {
    const allKeys = Object.keys(inputObj) as K[];
    for (const key of allKeys) {
      if (!propertyKeys.includes(key)) {
        result[key] = inputObj[key];
      }
    }
  } else {
    for (const key of propertyKeys) {
      if (key in inputObj) {
        result[key] = inputObj[key];
      }
    }
  }

  return result as typeof isExcludeKeys extends true ? Omit<T, K> : Pick<T, K>;
};

/**
 * Finds the first truthy class name from a list of class-value pairs.
 *
 * @param {[string, any][]} entries - A list of tuples containing class names and their associated conditions.
 * @returns {string | boolean} - The first class name with a truthy condition, or false if no conditions are truthy.
 */
const findTruthyClass = (...entries: [string, any][]): boolean | string => {
  for (const [className, value] of entries) {
    if (value) {
      return className;
    }
  }
  return false;
};

/**
 * Finds the first truthy class name from a list of class-value pairs,
 * with an optional default value.
 *
 * @param {[string, any][]} entries - A list of tuples containing class names and their associated conditions.
 * @param {string | boolean} [defaultValue=false] - A default value to return if no truthy condition is found.
 * @returns {string | boolean} - The first class name with a truthy condition, or the default value if no conditions are truthy.
 */
const findTruthyClassOrDefault = (
  entries: [string, any][],
  defaultValue: boolean | string = false,
): boolean | string => {
  const result = findTruthyClass(...entries);
  return result !== false ? result : defaultValue;
};

/**
 * Checks if the provided value is a valid number.
 *
 * This function works for both numbers and strings that represent numbers.
 * It ensures that the value is finite and not NaN.
 *
 * @param {unknown} value - The value to check, can be of any type.
 * @returns {value is number} - Returns true if the value is a valid number or a string that can be converted to a valid number, otherwise false.
 */
const isNumber = (value: unknown): value is number | string => {
  if (typeof value === 'number' && isFinite(value)) {
    return true;
  }

  if (typeof value === 'string' && value.trim() !== '') {
    const num = Number(value);
    return !isNaN(num) && isFinite(num);
  }

  return false;
};

/**
 * Converts a given camelCase or PascalCase string to kebab-case.
 *
 * The function identifies the transitions between lowercase and
 * uppercase letters, inserting a hyphen ("-") before each uppercase
 * letter and converting the entire string to lowercase.
 *
 * Example:
 *   "camelCase" => "camel-case"
 *   "PascalCase" => "pascal-case"
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} The converted kebab-case string.
 */
const toKebabCase = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

/**
 * Converts a hyphenated string to camel case.
 *
 * This function takes a string with words separated by hyphens
 * (e.g., "hello-world") and converts it to camel case
 * (e.g., "helloWorld"). It achieves this by replacing each
 * occurrence of a hyphen followed by a lowercase letter
 * with the uppercase version of that letter, effectively
 * removing the hyphen in the process.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} - The camel-cased version of the input string.
 */
const toCamelCase = (str: string): string => {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

/**
 * Converts a kebab-case string to PascalCase.
 *
 * @param {string} str - The kebab-case string to be converted.
 * @returns {string} - The converted PascalCase string.
 *
 * Example:
 * toPascalCase('my-component') => 'MyComponent'
 */
const toPascalCase = (str: string): string => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

/**
 * A utility function for applying styles with optional transformation logic.
 *
 * @param transformer - A function that can modify the style values or keys before they are applied.
 * The transformer function receives the value, key, and the styles object, and can return:
 *   - A transformed key-value pair if modifications are needed.
 *   - A boolean to indicate if the value should be ignored.
 *   - `null` or `undefined` to leave the style unchanged.
 *
 * @param inputs - An array of style inputs that will be processed and merged into a final style object.
 * Each input can be a plain style object or any other format that `cssmix` can process.
 *
 * @returns A transformed style object with the appropriate keys and values after applying the transformer.
 * If no transformer is provided, the styles are returned without modification.
 */
const stylex = (
  transformer:
    | ((
        value: number | string,
        key: string,
        style: Record<string, number | string>,
      ) => boolean | null | undefined | { tKey?: string; tValue?: number | string })
    | null,
  ...inputs: StyleInput[]
) => {
  const styles = cssmix(inputs);
  if (typeof transformer === 'function') {
    for (const [key, value] of Object.entries(styles)) {
      const result = transformer(value, key, styles);
      if (result && typeof result === 'object') {
        const { tKey, tValue } = result;
        const tVal = tValue ?? value;
        if (tKey) {
          delete styles[key];
          styles[tKey] = tVal;
        } else {
          styles[key] = tVal;
        }
      }
    }
  }
  return styles;
};

/**
 * Converts a Bootstrap key to a corresponding CSS variable.
 *
 * @param key The Bootstrap key to convert
 * @returns The converted CSS variable if the key starts with the Bootstrap prefix, otherwise returns the original key
 */
const convertBsKeyToVar = (key: string): string => {
  const prefix = BS_PREFIX;

  if (key.startsWith(prefix)) {
    const trimmedKey = key.slice(prefix.length);
    const kebabKey = toKebabCase(trimmedKey);
    return VARIABLE_BS_PREFIX + kebabKey;
  }

  return key;
};

/**
 * Retrieves the rounded class value.
 *
 * @param key - An optional parameter that can be a key of `RoundedClassEnum` or a boolean.
 *               - If `true`, returns `'rounded'`.
 *               - If `false`, returns `false`.
 *               - If a key of `RoundedClassEnum`, returns the corresponding rounded class string.
 *               - If not provided, returns `undefined`.
 *
 * @returns The corresponding rounded class string or boolean value.
 */
const resolveRoundedClass = (key: boolean | keyof typeof RoundedClassEnum) => {
  return typeof key === 'boolean' ? key && 'rounded' : `rounded-${RoundedClassEnum[key]}`;
};

/**
 * A utility function to calculate a looping index.
 *
 * @param currentIndex - The current index, must be between 0 and totalLength-1.
 * @param totalLength - The total length, representing the range of available indices.
 * @param step - The step size for moving, can be positive or negative.
 * @returns The new index after looping, always between 0 and totalLength-1.
 */
const calculateLoopIndex = (currentIndex: number, totalLength: number, step: number): number => {
  step = step % totalLength;
  const newIndex = (currentIndex + step) % totalLength;
  return newIndex < 0 ? newIndex + totalLength : newIndex;
};

/**
 * Determines the direction between two indices in a circular array.
 *
 * @param {number} currentIndex - The index of the current item.
 * @param {number} targetIndex - The index of the target item.
 * @param {number} totalItems - The total number of items in the array.
 * @returns {Object} An object containing two boolean properties:
 *                   - isNext: true if the targetIndex is the next item.
 *                   - isPrev: true if the targetIndex is the previous item.
 */
const getLoopIndexDirection = (
  currentIndex: number,
  targetIndex: number,
  totalItems: number,
): {
  isNext: boolean;
  isPrev: boolean;
} => {
  const isNext = (targetIndex - currentIndex + totalItems) % totalItems === 1;
  const isPrev = (currentIndex - targetIndex + totalItems) % totalItems === 1;
  return { isNext, isPrev };
};

/**
 * Capitalizes the first letter of a given string.
 *
 * @param str - The input string to be modified.
 * @returns A new string with the first letter capitalized.
 *
 * @example
 * // Returns "Hello"
 * capitalizeFirstLetter("hello");
 */
const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Calculates the width of the scrollbar on the current page and optionally
 * appends a specified unit.
 *
 * This function calculates the difference between the inner width of the
 * window (including the scrollbar) and the client width of the document
 * (excluding the scrollbar). If a unit is specified, it returns the width
 * as a string with the unit appended. If no unit is provided, it returns
 * the width as a number.
 *
 * @param {string} [unit] - Optional unit to append to the scrollbar width.
 *                          Example: "px", "%", "em".
 * @returns {number | string} The width of the scrollbar in pixels, either as
 *                            a number or a string with the specified unit.
 */
const getScrollbarWidth = (unit?: string): number | string => {
  let width = window.innerWidth - document.body.clientWidth + '';

  if (width === '0') {
    const lastScrollbarWidth = document.body.dataset.lastScrollbarWidth;
    if (lastScrollbarWidth) {
      width = lastScrollbarWidth;
    }
  } else {
    document.body.dataset.lastScrollbarWidth = width;
  }

  return unit ? width + unit : width;
};

/**
 * Removes specified classes from a given className string.
 *
 * @param className - The original className string which may contain multiple class names separated by spaces.
 *                    If className is undefined or empty, an empty string is returned.
 * @param classesToRemove - An array of class names to be removed from the className string.
 *
 * @returns A string with the specified classes removed. If no className is provided, returns an empty string.
 *          If no matching classes are found to remove, the original className is returned as is.
 */
const removeClasses = (className: null | string | undefined, classesToRemove: string[]): string => {
  if (!className) {
    return '';
  }

  const classArray = className.split(' ');
  const filteredClasses = classArray.filter((cls) => !classesToRemove.includes(cls));
  return filteredClasses.join(' ');
};

/**
 * Generates a pagination array for a given current page, total pages, and maximum visible page links.
 * Includes controls ('<' and '>') for navigating to previous and next pages if necessary.
 *
 * @param {number} [current] - The current active page. Defaults to 1 if not provided.
 * @param {number} [total] - The total number of pages. Returns an empty array if not provided or 0.
 * @param {number} [maxVisible=4] - The maximum number of visible page links excluding the first and last pages. Defaults to 4.
 * @param {boolean} [alwaysShowEllipsis=false] - Whether to always show '<' and '>' controls, even when not strictly necessary. Defaults to false.
 * @returns {(number | '<' | '>')[]} - An array representing the pagination structure, where:
 *   - Numbers are page numbers.
 *   - '<' represents the previous-page control.
 *   - '>' represents the next-page control.
 *
 * @example
 * // Simple case with fewer total pages than maxVisible
 * generatePagination(2, 4, 5);
 * // Output: [1, 2, 3, 4]
 *
 * @example
 * // Pagination with controls ('<' and '>') and ellipsis
 * generatePagination(5, 10, 5);
 * // Output: [1, '<', 4, 5, 6, '>', 10]
 *
 * @example
 * // Pagination with no controls due to alwaysShowEllipsis being false
 * generatePagination(2, 6, 5);
 * // Output: [1, 2, 3, 4, 5, 6]
 *
 * @example
 * // Pagination with alwaysShowEllipsis enabled
 * generatePagination(2, 6, 5, true);
 * // Output: [1, '<', 2, 3, 4, '>', 6]
 */
const generatePagination = (
  current?: number,
  total?: number,
  maxVisible: number = 4,
  alwaysShowEllipsis: boolean = false,
): ('<' | '>' | number)[] => {
  if (typeof current !== 'number' || typeof total !== 'number' || total === 0) {
    return [];
  }

  if (total <= maxVisible + 2) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pagination: ('<' | '>' | number)[] = [1];
  const half = Math.floor(maxVisible / 2);

  let start = Math.max(2, current - half);
  let end = Math.min(total - 1, current + half);

  // Adjust start/end to ensure the range contains maxVisible items if possible
  if (end - start + 1 < maxVisible) {
    if (start === 2) {
      end = Math.min(total - 1, start + maxVisible - 1);
    } else if (end === total - 1) {
      start = Math.max(2, end - maxVisible + 1);
    }
  }

  if (alwaysShowEllipsis || start > 2) {
    pagination.push('<');
  }

  pagination.push(...Array.from({ length: end - start + 1 }, (_, i) => start + i));

  if (alwaysShowEllipsis || end < total - 1) {
    pagination.push('>');
  }

  pagination.push(total);

  return pagination;
};

/**
 * Generates a map representation of a tree structure.
 * Each node in the map includes metadata such as the node's path and parentId.
 *
 * @template T - The type of the nodes in the tree. Each node must have an `id` and may have `children`.
 * @param {T[]} data - The tree structure to process.
 * @param {null | number | string} [parentId=null] - The parent ID of the current node (default is null).
 * @param {string} [path=''] - The path of the current node in the tree (default is an empty string).
 * @returns {Map<string, T & { _metadata: { id: number | string; parentId?: null | number | string; path: string } }>}
 * A map where keys are node paths and values are nodes with metadata.
 */
const generateTreeNodeMap = <
  T extends {
    children?: T[];
    id: number | string;
  },
>(
  data: T[],
  parentId: null | number | string = null,
  path: string = '',
): Map<string, T & { _metadata: { id: number | string; parentId?: null | number | string; path: string } }> => {
  const map = new Map<
    string,
    T & { _metadata: { id: number | string; parentId?: null | number | string; path: string } }
  >();
  const traverse = (nodes: T[], parentId: null | number | string, currentPath: string) => {
    nodes.forEach((node) => {
      const nodePath = currentPath ? `${currentPath}-${node.id}` : `${node.id}`;
      map.set(nodePath, {
        ...node,
        _metadata: {
          id: node.id,
          path: nodePath,
          ...(parentId !== undefined && parentId !== null ? { parentId } : {}),
        },
      });
      if (node.children && node.children.length > 0) {
        traverse(node.children as T[], node.id, nodePath);
      }
    });
  };

  traverse(data, parentId, path);
  return map;
};

/**
 * Updates a specific node in a tree structure by applying the given updater function.
 *
 * @template T - The type of the nodes in the tree.
 * @param {T[]} tree - The tree structure to update.
 * @param {number | string} nodeId - The ID of the node to update.
 * @param {(node: T) => T} updater - A function that receives a node and returns the updated node.
 * @returns {T[]} - A new tree with the updated node.
 */
const updateTreeNode = <T>(tree: T[], nodeId: number | string, updater: (node: T) => T): T[] => {
  return tree.map((node: any) => {
    if (node.id === nodeId) {
      return updater(node);
    } else if (node.children) {
      const updatedChildren = updateTreeNode(node.children, nodeId, updater);
      if (updatedChildren !== node.children) {
        return { ...node, children: updatedChildren };
      }
    }
    return node;
  });
};

/**
 * Updates a specific node in a tree using a precomputed map of nodes.
 *
 * @template T - The type of the nodes in the tree.
 * @param {T[]} tree - The tree structure to update.
 * @param {Map<string, any>} treeMap - A map where keys are node paths and values are nodes with metadata.
 * @param {string} nodeKey - The key of the node to update in the map.
 * @param {(node: T) => T} updater - A function that receives a node and returns the updated node.
 * @returns {T[]} - A new tree with the updated node.
 */
const updateTreeNodeUsingMap = <T>(
  tree: T[],
  treeMap: Map<string, any>,
  nodeKey: string,
  updater: (node: T) => T,
): T[] => {
  const targetNodeInfo = treeMap.get(nodeKey);
  if (!targetNodeInfo) {
    return tree;
  }

  const path = targetNodeInfo._metadata.path.split('-');
  const updateSubtree = (nodes: T[], currentPath: string[]): T[] => {
    return nodes.map((node: any) => {
      if (node.id === currentPath[0]) {
        if (currentPath.length === 1) {
          return updater(node);
        } else if (node.children) {
          const updatedChildren = updateSubtree(node.children, currentPath.slice(1));
          if (updatedChildren !== node.children) {
            return { ...node, children: updatedChildren };
          }
        }
      }
      return node;
    });
  };

  return updateSubtree(tree, path);
};

/**
 * Updates multiple nodes in a tree using a precomputed map of nodes.
 *
 * @template T - The type of the nodes in the tree.
 * @param {T[]} tree - The tree structure to update.
 * @param {Map<string, any>} treeMap - A map where keys are node paths and values are nodes with metadata.
 * @param {string[]} nodeKeys - An array of keys of the nodes to update in the map.
 * @param {(node: T) => T} updater - A function that receives a node and returns the updated node.
 * @returns {T[]} - A new tree with the updated nodes.
 */
const updateTreeNodesUsingMap = <T>(
  tree: T[],
  treeMap: Map<string, any>,
  nodeKeys: string[],
  updater: (node: T) => T,
): T[] => {
  return nodeKeys.reduce((updatedTree, key) => updateTreeNodeUsingMap(updatedTree, treeMap, key, updater), tree);
};

/**
 * Finds the keys of all parent nodes of a given node in the tree map.
 *
 * @param {string} nodeKey - The key of the node to find parents for.
 * @param {Map<string, any>} treeMap - A map where keys are node paths and values are nodes with metadata.
 * @returns {string[]} - An array of keys for the parent nodes.
 */
const findTreeNodeParentKeys = (nodeKey: string, treeMap: Map<string, any>): string[] => {
  const nodeInfo = treeMap.get(nodeKey);
  if (!nodeInfo) {
    return [];
  }

  const parents: string[] = [];
  const pathParts = nodeInfo._metadata.path.split('-');

  for (let i = pathParts.length - 2; i >= 0; i--) {
    const parentKey = pathParts.slice(0, i + 1).join('-');
    if (treeMap.has(parentKey) && !treeMap.get(parentKey).disabled) {
      parents.push(parentKey);
    }
  }

  return parents;
};

/**
 * Finds the keys of all child nodes of a given node in the tree map.
 *
 * @param {string} nodeKey - The key of the node to find children for.
 * @param {Map<string, any>} treeMap - A map where keys are node paths and values are nodes with metadata.
 * @returns {string[]} - An array of keys for the child nodes.
 */
const findTreeNodeChildKeys = (nodeKey: string, treeMap: Map<string, any>): string[] => {
  const nodeInfo = treeMap.get(nodeKey);
  if (!nodeInfo) {
    return [];
  }

  const children: string[] = [];
  const path = nodeInfo._metadata.path;

  for (const [key, { _metadata }] of treeMap.entries()) {
    if (key !== nodeKey && _metadata.path.startsWith(path) && !treeMap.get(key).disabled) {
      children.push(key);
    }
  }

  return children;
};

/**
 * Updates the `indeterminate` status of all nodes in a tree based on their children's `checked` states.
 *
 * @template T - The type of the nodes in the tree.
 * @param {T[]} tree - The tree structure to update.
 * @returns {void}
 */
const updateTreeNodeIndeterminateStatus = <T>(tree: T[]): void => {
  function traverse(node: any) {
    if (!node.children || node.children.length === 0) {
      node.indeterminate = false;
      return;
    }

    let hasChecked = false;
    let hasUnchecked = false;

    node.children.forEach((child: any) => {
      traverse(child);

      if (child.checked) {
        hasChecked = true;
      }

      if (!child.checked || child.indeterminate) {
        hasUnchecked = true;
      }
    });

    node.indeterminate = hasChecked && hasUnchecked;
  }

  tree.forEach(traverse);
};

/**
 * Updates the `checked` and `indeterminate` statuses of a tree node and synchronizes changes.
 *
 * @template T - The type of the nodes in the tree.
 * @param {T[]} tree - The tree structure to update.
 * @param {any} targetNode - The node that was manually toggled.
 * @returns {void}
 */
const updateTreeNodeStatus = <T>(tree: T[], targetNode: T): void => {
  const _targetNode = targetNode as any;

  const findNodePath = (nodes: any[], targetId: any): null | T[] => {
    for (const node of nodes) {
      if (node.id === targetId) {
        return [node];
      }

      if (node.children) {
        const result = findNodePath(node.children, targetId);
        if (result) {
          return [node, ...result];
        }
      }
    }

    return null;
  };

  const updateChildren = (node: any, checked: boolean): void => {
    if (node.children) {
      node.children.forEach((child: any) => {
        if (!child.disabled) {
          child.checked = checked;
          child.indeterminate = false;
          updateChildren(child, checked);
        }
      });
    }
  };

  const updateParents = (path: any[]): void => {
    for (let i = path.length - 2; i >= 0; i--) {
      const parent = path[i];
      const children = parent.children ?? [];
      const allChecked = children.every((child: any) => !child.disabled && child.checked);
      const anyChecked = children.some((child: any) => !child.disabled && (child.checked || child.indeterminate));

      parent.checked = allChecked;
      parent.indeterminate = !allChecked && anyChecked;
    }
  };

  const path = findNodePath(tree, _targetNode.id);
  if (!path) {
    return;
  }

  const target: any = path[path.length - 1];
  if (!target.disabled) {
    target.checked = _targetNode.checked;
    target.indeterminate = false;
    updateChildren(target, target.checked);
  }

  updateParents(path);
};

/**
 * Deeply clones a given value, including arrays and plain objects.
 *
 * This function supports cloning general data structures with primitive values,
 * arrays, and plain objects. It avoids circular references using a WeakMap.
 * Special objects like Date or RegExp are not handled in this implementation.
 *
 * @template T - The type of the value to clone.
 * @param {T} value - The value to be deeply cloned. It can be a primitive,
 * an array, or a plain object.
 * @returns {T} - A new, deeply cloned copy of the input value.
 *
 * @note - This function does not handle special objects like Date, RegExp,
 * or instances of custom classes. It is optimized for typical JSON-like structures.
 */
const cloneDeep = <T>(value: T): T => {
  const seen = new WeakMap();

  const _cloneDeep = (val: any): any => {
    if (val === null || typeof val !== 'object') {
      return val;
    }

    if (seen.has(val)) {
      return seen.get(val);
    }

    let copy: any;
    if (Array.isArray(val)) {
      copy = [];
      seen.set(val, copy);
      for (const item of val) {
        copy.push(_cloneDeep(item));
      }
    } else {
      copy = {};
      seen.set(val, copy);
      for (const key in val) {
        if (Object.hasOwnProperty.call(val, key)) {
          copy[key] = _cloneDeep(val[key]);
        }
      }
    }

    return copy;
  };

  return _cloneDeep(value);
};

/**
 * Generates a structured calendar data object based on the provided parameters.
 *
 * @param {number} year - The year for the calendar.
 * @param {number} month - The month (0-based index) for the calendar.
 * @param {CalendarEvent[]} [events=[]] - An array of calendar events with start times.
 * @param {5 | 6} [forceRows=6] - The number of rows to enforce in the calendar display (5 or 6).
 * @param {0 | 1} [weekStartsOn=1] - The day the week starts on (0 = Sunday, 1 = Monday).
 * @param {string[]} [weekDays=[]] - Custom week day labels; defaults to localized day initials.
 * @param {Date | Date[] | null} [selectedDate=null] - A single selected date or an array of selected dates.
 * @param {Locale | undefined} [locale=undefined] - Locale settings for date formatting.
 * @param {boolean} [setSelectedWeekActive=false] - Whether to highlight the week containing the selected date(s).
 * @param {'month' | 'quarter' | 'year' | undefined} [dataType=undefined] - The data type for the calendar view
 *  (e.g., 'month' for months, 'quarter' for quarters, or 'year' for years).
 *
 * @returns {CalendarData} - An object containing the days, week headers, rows, and other calendar data.
 */
const generateCalendar = (
  year: number,
  month: number,
  events: CalendarEvent[] = [],
  forceRows: 5 | 6 = 6,
  weekStartsOn: 0 | 1 = 1,
  weekDays: string[] = [],
  selectedDate: Date | Date[] | null = null,
  locale: Locale | undefined = undefined,
  setSelectedWeekActive: boolean = false,
  dataType: 'month' | 'quarter' | 'year' | undefined = undefined,
): CalendarData => {
  const firstDayOfMonth = startOfMonth(new Date(year, month));
  const lastDayOfMonth = endOfMonth(firstDayOfMonth);

  let startDate = startOfWeek(firstDayOfMonth, { weekStartsOn });
  let endDate = endOfWeek(lastDayOfMonth, { weekStartsOn });

  if (forceRows) {
    const totalDays = forceRows * 7;
    startDate = startOfWeek(firstDayOfMonth, { weekStartsOn });
    endDate = addDays(startDate, totalDays - 1);
  }

  const selectedDatesArray = Array.isArray(selectedDate) ? selectedDate : selectedDate ? [selectedDate] : [];
  const selectedDateSet = new Set(selectedDatesArray.map((date) => format(date, 'yyyy-MM-dd')));

  let _todayIndex = -1;
  let _todayFlag = false;

  const days: CalendarDate[] = eachDayOfInterval({ end: endDate, start: startDate }).map((date, index) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const dayEvents = events.filter((event) =>
      event.startTime ? format(new Date(event.startTime), 'yyyy-MM-dd') === formattedDate : false,
    );

    const today = isToday(date);
    const isSelected = selectedDateSet.has(formattedDate);
    let active = today;

    if (today) {
      _todayIndex = index;
    }

    if (isSelected) {
      active = true;

      if (_todayIndex !== -1) {
        _todayFlag = true;
      }
    }

    return {
      active,
      date,
      events: dayEvents,
      isCurrentMonth: isSameMonth(date, firstDayOfMonth),
      isSelected,
      isToday: today,
    };
  });

  if (_todayFlag && _todayIndex !== -1) {
    days[_todayIndex].active = false;
  }

  if (setSelectedWeekActive && selectedDatesArray.length > 0) {
    selectedDatesArray.forEach((selectedDate) => {
      const startOfWeekForSelectedDate = startOfWeek(selectedDate, { weekStartsOn });
      const endOfWeekForSelectedDate = endOfWeek(selectedDate, { weekStartsOn });
      days.forEach((day) => {
        if (isWithinInterval(day.date!, { end: endOfWeekForSelectedDate, start: startOfWeekForSelectedDate })) {
          day.active = true;
        }
      });
    });
  }

  const _weekDays =
    weekDays.length > 0
      ? weekDays
      : Array.from({ length: 7 }, (_, i) =>
          format(new Date(1970, 0, i + 4), 'EEEEE', {
            locale,
          }),
        );
  const weekHeader = _weekDays.slice(weekStartsOn).concat(_weekDays.slice(0, weekStartsOn));

  let rows: CalendarDate[][];
  if (dataType === 'month') {
    const months: CalendarDate[] = Array.from({ length: 12 }, (_, i) => {
      const date = new Date(year, i);
      const value = format(date, 'LL', { locale });
      const isSelectedMonth = selectedDatesArray.some((selectedDate) => selectedDate.getMonth() === i);
      return {
        active: isSelectedMonth,
        date,
        type: 'month',
        value,
      };
    });
    rows = splitIntoRows(months, 3, 4);
  } else if (dataType === 'quarter') {
    const quarters: CalendarDate[] = Array.from({ length: 4 }, (_, i) => {
      const date = new Date(year, i * 3, 1);
      const value = format(date, 'QQ', { locale });
      const quarterStartMonth = i * 3;
      const quarterEndMonth = quarterStartMonth + 2;
      const isSelectedQuarter = selectedDatesArray.some(
        (selectedDate) => selectedDate.getMonth() >= quarterStartMonth && selectedDate.getMonth() <= quarterEndMonth,
      );
      return {
        active: isSelectedQuarter,
        date,
        type: 'quarter',
        value,
      };
    });
    rows = splitIntoRows(quarters, 1, 4);
  } else if (dataType === 'year') {
    const beforeYears = 6;
    const afterYears = 6;
    const totalYears = beforeYears + afterYears + 1;
    const years: CalendarDate[] = Array.from({ length: totalYears }, (_, i) => {
      const offset = i - beforeYears;
      const date = addYears(new Date(year, 0), offset);
      const value = format(date, 'yyyy', { locale });
      const isSelectedYear = selectedDatesArray.some(
        (selectedDate) => selectedDate.getFullYear() === parseInt(value, 10),
      );
      return {
        active: isSelectedYear,
        date,
        type: 'year',
        value,
      };
    });
    rows = splitIntoRows(years, 3, 4);
  } else {
    rows = [
      weekHeader.map((item) => ({
        type: 'header',
        value: item,
      })),
      ...splitIntoRows(days, forceRows || days.length / 7, 7),
    ];
  }

  return {
    days,
    month,
    rows,
    weekHeader,
    year,
  };
};

/**
 * Updates the calendar's active state by marking the specified date as active.
 * The function compares only the date portion (ignoring the time) to determine the active day.
 * It ensures that the `days` array and the `rows` array in the calendar data are updated consistently.
 *
 * @param {CalendarDate} currentItem - The date object representing the current date to be marked as active.
 * @param {CalendarData} calendarData - The calendar data containing `days` (flat list of dates) and `rows` (organized weekly).
 * @returns {CalendarData} A new calendar data object with the active state updated.
 */
const updateCalendarActiveState = (currentItem: CalendarDate, calendarData: CalendarData): CalendarData => {
  const currentDate = currentItem.date!;
  const markActive = (day: CalendarDate) => ({
    ...day,
    active: isSameDay(day.date!, currentDate),
  });

  return {
    ...calendarData,
    days: calendarData.days.map(markActive),
    rows: calendarData.rows.map((week, index) => (index === 0 ? week : week.map(markActive))),
  };
};

/**
 * Updates the active state for the week containing the specified date.
 * The week containing the specified date will be marked as active, while other weeks remain inactive.
 * Only the `rows` in the calendar data are updated.
 *
 * @param {CalendarDate} currentItem - The date object used to determine the active week.
 * @param {CalendarData} calendarData - The calendar data to be updated, which includes `rows`.
 * @returns {CalendarData} A new calendar data object with the active week marked.
 */
const updateCalendarWeekActiveState = (currentItem: CalendarDate, calendarData: CalendarData): CalendarData => {
  const currentDate = currentItem.date!;
  const targetRowIndex = calendarData.rows.findIndex(
    (week, index) => index !== 0 && week.some((day) => isSameDay(day.date!, currentDate)),
  );

  return {
    ...calendarData,
    rows: calendarData.rows.map((week, index) =>
      index === 0
        ? week
        : week.map((day) => ({
            ...day,
            active: index === targetRowIndex,
          })),
    ),
  };
};

/**
 * Updates the active state of a specific date within the calendar's rows.
 * It replaces the item at the specified row and column index with the updated date item.
 *
 * @param {CalendarDate} updatedItem - The updated date item to replace the existing one.
 * @param {number} rowIndex - The index of the row containing the date to be updated.
 * @param {number} colIndex - The index of the column containing the date to be updated.
 * @param {CalendarData} prevState - The previous calendar data.
 * @returns {CalendarData} The updated calendar data with the specific item updated.
 */
const updateCalendarDataTypeActiveState = (
  updatedItem: CalendarDate,
  rowIndex: number,
  colIndex: number,
  prevState: CalendarData,
): CalendarData => {
  const rows = [...prevState.rows];
  const row = [...rows[rowIndex]];
  row[colIndex] = updatedItem;
  rows[rowIndex] = row;
  return {
    ...prevState,
    rows,
  };
};

/**
 * Splits an array of data into a 2D array with a specified number of rows and columns.
 * If the data array has fewer items than the total number of cells (rowsCount * colsCount),
 * the function will optionally fill the missing cells with a provided placeholder value.
 *
 * @param data - The array of data to be split into rows. The type of elements is generic (T[]).
 * @param rowsCount - The number of rows to create in the resulting 2D array.
 * @param colsCount - The number of columns in each row of the resulting 2D array.
 * @param placeholder - An optional value used to fill the missing cells if the data array is shorter than the total number of cells.
 *
 * @returns A 2D array representing the data split into rows and columns.
 *          Each row will contain `colsCount` elements, and the number of rows will be `rowsCount`.
 *          If `placeholder` is provided, it will be used to fill any missing cells.
 */
const splitIntoRows = <T>(data: T[], rowsCount: number, colsCount: number, placeholder?: T): T[][] => {
  const rows: T[][] = [];
  const totalCells = rowsCount * colsCount;
  const dataCopy = [...data];

  if (placeholder) {
    while (dataCopy.length < totalCells) {
      dataCopy.push(placeholder);
    }
  }

  for (let i = 0; i < rowsCount; i++) {
    rows.push(dataCopy.slice(i * colsCount, (i + 1) * colsCount));
  }

  return rows;
};

/**
 * Formats and processes a date value based on the specified picker type.
 *
 * @param value - The input date value (string or Date) to be processed.
 * @param type - The type of picker to determine the formatting logic.
 *                     Supported values: 'date', 'datetime', 'month', 'quarter', 'time', 'week', 'year'.
 * @returns An object containing:
 *          - formattedValue: A string representation of the formatted date.
 *          - computedDate: The processed Date object.
 *          Returns null if the input value is invalid or unsupported.
 *
 * @example
 * const result = formatDateByPickerType('2024-12-09', 'date');
 * if (result) {
 *   console.log(result.formattedValue); // '2024-12-09'
 *   console.log(result.computedDate);   // Mon Dec 09 2024 ...
 * }
 */

/**
 * Formats and processes a date value based on the specified picker type.
 *
 * @param value - The input date value (string, Date, or an array of Dates) to be processed.
 * @param type - The type of picker to determine the formatting logic.
 *                     Supported values: 'date', 'datetime', 'month', 'quarter', 'time', 'week', 'year'.
 * @returns An object containing:
 *          - formattedValue: A string array representation of the formatted date(s).
 *          - computedDate: An array of processed Date objects.
 *          Returns null if the input value is invalid or unsupported.
 *
 * @example
 * const result = formatDateByPickerType(['2024-12-09', '2024-12-10'], 'date');
 * if (result) {
 *   console.log(result.formattedValue); // ['2024-12-09', '2024-12-10']
 *   console.log(result.computedDate);   // [Mon Dec 09 2024 ..., Tue Dec 10 2024 ...]
 * }
 */
const formatDateByPickerType = (
  value: Date | Date[] | null | string | string[] | undefined,
  type: 'date' | 'datetime' | 'month' | 'quarter' | 'time' | 'week' | 'year',
): null | { computedDate: Date[]; formattedValue: string[] } => {
  const normalizeToDateArray = (value: any): Date[] => {
    if (!value) {
      return [];
    }

    const values = Array.isArray(value) ? value : [value];
    return values.map((v) => (typeof v === 'string' ? parseISO(v) : new Date(v))).filter(isValid);
  };

  const dateArray = normalizeToDateArray(value);
  if (dateArray.length === 0) {
    return null;
  }

  const formatSingleDate = (date: Date): { computedDate: Date; formattedValue: string } => {
    switch (type) {
      case 'date':
        return { computedDate: date, formattedValue: format(date, 'yyyy-MM-dd') };
      case 'datetime':
        return { computedDate: date, formattedValue: format(date, 'yyyy-MM-dd HH:mm:ss') };
      case 'month': {
        const monthStart = startOfMonth(date);
        return { computedDate: monthStart, formattedValue: format(monthStart, 'yyyy-MM') };
      }
      case 'quarter': {
        const quarterStart = startOfQuarter(date);
        return {
          computedDate: quarterStart,
          formattedValue: `${format(quarterStart, 'yyyy')} Q${Math.ceil((quarterStart.getMonth() + 1) / 3)}`,
        };
      }
      case 'time':
        return { computedDate: date, formattedValue: format(date, 'HH:mm:ss') };
      case 'week': {
        const weekStart = startOfWeek(date, { weekStartsOn: 1 });
        const weekEnd = new Date(weekStart.getTime() + 6 * 24 * 60 * 60 * 1000);
        return {
          computedDate: weekStart,
          formattedValue: `${format(weekStart, 'yyyy-MM-dd')} ~ ${format(weekEnd, 'yyyy-MM-dd')}`,
        };
      }
      case 'year': {
        const yearStart = startOfYear(date);
        return { computedDate: yearStart, formattedValue: format(yearStart, 'yyyy') };
      }
      default:
        return { computedDate: date, formattedValue: '' };
    }
  };

  const results = dateArray.map(formatSingleDate);

  return {
    computedDate: results.map((res) => res.computedDate),
    formattedValue: results.map((res) => res.formattedValue),
  };
};

/**
 * Sorts two dates and returns them in ascending order.
 * @param date1 - The first date (string or Date object).
 * @param date2 - The second date (string or Date object).
 * @returns A tuple [earlierDate, laterDate] sorted by ascending order.
 */
const sortDates = (date1: Date | string, date2: Date | string): [Date, Date] => {
  const d1 = typeof date1 === 'string' ? parseISO(date1) : date1;
  const d2 = typeof date2 === 'string' ? parseISO(date2) : date2;
  return isAfter(d1, d2) ? [d2, d1] : [d1, d2];
};

export {
  calculateLoopIndex,
  camelToKebab,
  capitalizeFirstLetter,
  checkObjectProperties,
  classx,
  classxWithOptions,
  cloneDeep,
  convertBsKeyToVar,
  deepMerge,
  filterAndTransformProperties,
  filterOptions,
  filterTransformAndExcludeProperties,
  findTreeNodeChildKeys,
  findTreeNodeParentKeys,
  findTruthyClass,
  findTruthyClassOrDefault,
  formatDateByPickerType,
  generateCalendar,
  generatePagination,
  generateRandomId,
  generateTreeNodeMap,
  getLoopIndexDirection,
  getScrollbarWidth,
  getValue,
  groupByProperty,
  initializeLogger,
  isArray,
  isDefined,
  isNumber,
  isPlainObject,
  isSpecialObject,
  isValueValid,
  mapAndFilterStyles,
  mergeClassNames,
  mergeProps,
  parseJson,
  pickObjectProperties,
  processClassName,
  processSlotClasses,
  removeClasses,
  resolveRoundedClass,
  sortDates,
  splitIntoRows,
  stylex,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  updateCalendarActiveState,
  updateCalendarDataTypeActiveState,
  updateCalendarWeekActiveState,
  updateTreeNode,
  updateTreeNodeIndeterminateStatus,
  updateTreeNodeStatus,
  updateTreeNodesUsingMap,
  updateTreeNodeUsingMap,
};
