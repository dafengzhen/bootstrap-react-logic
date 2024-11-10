import clsx, { type ClassValue } from 'clsx';

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
 * A utility function that wraps the `clsx` function to process class names,
 * ensures the resulting class names are unique by removing duplicates.
 *
 * @param {ClassValue[]} inputs - An array of class values that can include strings,
 * arrays, objects, or any valid input that `clsx` accepts.
 *
 * @returns {string} - A string of unique class names separated by a space.
 */
const clsxUnique = (...inputs: ClassValue[]): string => {
  const classNames = clsx(...inputs);

  const uniqueClassNames = Array.from(new Set(classNames.split(' ').filter(Boolean)));

  return uniqueClassNames.join(' ');
};

/**
 * A utility function that wraps the `clsx` function to process class names,
 * and ensures the resulting class names are unique or not based on options.
 *
 * @param {Object | null | undefined} [options] - Optional configuration options for class name processing.
 * @param {boolean} [options.dedupe=false] - Whether to remove duplicate class names. Defaults to false.
 * @param {ClassValue[]} inputs - An array of class values that can include strings,
 * arrays, objects, or any valid input that `clsx` accepts.
 *
 * @returns {string} - A string of class names separated by a space, with duplicates removed if `dedupe` is true.
 */
const clsxWithOptions = (options?: { dedupe?: boolean } | null | undefined, ...inputs: ClassValue[]): string => {
  const dedupe = options?.dedupe ?? false;
  return dedupe ? clsxUnique(...inputs) : clsx(...inputs);
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
 * Returns the first non-empty class name from a class mapping object.
 *
 * The function takes an object where the keys are class names and
 * the values are the corresponding conditions. It returns the first
 * class name whose value is considered "truthy" (i.e., not null, undefined,
 * false, 0, empty string, etc.).
 *
 * @param {Record<string, any>} classMap - A mapping of class names to their corresponding values.
 * @returns {string | boolean} - The first non-empty class name, or false if all values are empty.
 */
const getFirstNonEmptyClass = (classMap: Record<string, any>): boolean | string => {
  for (const [className, value] of Object.entries(classMap)) {
    if (value) {
      return className;
    }
  }
  return false;
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
 * Conditionally applies styles based on a given set of conditions and optional transformation logic.
 *
 * @param {Record<string, any>} [style={}] - An optional object where the keys represent style properties and the values represent style values.
 * Defaults to an empty object if not provided.
 * @param {Record<string, boolean | undefined> | boolean} [conditions] - An optional object mapping style property keys to booleans
 * indicating whether they should be included. If a boolean is provided, `true` will include all keys, while `false` excludes all.
 * @param {(value: any, key: string, style: Record<string, any>) => { include?: boolean; transformedKey: string } | string | boolean | undefined} [transformer] - An optional
 * function that allows for custom logic to transform or filter style keys. The function should return either:
 *   - `true`, `undefined` or an object with `include: true` to include the style.
 *   - `false` or an object with `include: false` to exclude the style.
 *   - A `string`, which will be treated as a new key for the style.
 *   - An object with `transformedKey` to rename the key and an optional `include` flag to determine whether to include it.
 *
 * @returns {Record<string, any>} - A new object containing the filtered and/or transformed styles.
 *
 * @example
 * const style = { color: 'red', fontSize: '12px' };
 * const conditions = { color: true, fontSize: false };
 * const transformedStyles = clsxStyle(style, conditions);
 * // Result: { color: 'red' }
 *
 * @example
 * const style = { color: 'blue', fontSize: '16px' };
 * const transformer = (value, key, style) => key === 'color' ? 'textColor' : undefined;
 * const transformedStyles = clsxStyle(style, true, transformer);
 * // Result: { textColor: 'blue' }
 */
const clsxStyle = (
  style: Record<string, any> = {},
  conditions?: boolean | Record<string, boolean | undefined>,
  transformer?: (
    value: any,
    key: string,
    style: Record<string, any>,
  ) =>
    | {
        include?: boolean;
        transformedKey?: string;
      }
    | boolean
    | string
    | undefined,
): Record<string, any> => {
  const finalStyle: Record<string, any> = {};

  const conditionKeys =
    typeof conditions === 'boolean'
      ? conditions
        ? Object.keys(style)
        : []
      : conditions
        ? Object.keys(conditions).filter((key) => conditions[key])
        : Object.keys(style);

  conditionKeys.forEach((key) => {
    const value = style[key];
    const transformed = transformer ? transformer(value, key, style) : { include: true, transformedKey: key };

    if (typeof transformed === 'string') {
      finalStyle[transformed] = value;
    } else if (transformed === undefined || transformed === true) {
      finalStyle[key] = value;
    } else if (typeof transformed === 'boolean' && transformed) {
      finalStyle[key] = value;
    } else if (
      typeof transformed === 'object' &&
      (transformed.include === undefined || transformed.include) &&
      transformed.transformedKey
    ) {
      finalStyle[transformed.transformedKey] = value;
    }
  });

  return finalStyle;
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
const resolveRoundedClass = (key?: boolean | keyof typeof RoundedClassEnum) => {
  if (key !== undefined) {
    if (typeof key === 'boolean') {
      return key && 'rounded';
    } else {
      return `rounded-${RoundedClassEnum[key]}`;
    }
  }
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
 * Returns the key of the first property in the object with a truthy value.
 * If all values are falsy, it returns the default value.
 *
 * @param obj - The object to check, with properties that may have truthy or falsy values
 * @param defaultValue - The default value to return if all properties have falsy values
 * @returns {string} - The key of the first truthy property or the default value
 *
 * @example
 * const obj = { a: false, b: 0, c: null, d: 'value' };
 * const result = getTruthyKeyOrDefault(obj, 'default');
 * // result is 'd'
 *
 * @example
 * const obj = { a: false, b: 0, c: null };
 * const result = getTruthyKeyOrDefault(obj, 'default');
 * // result is 'default'
 */
const getTruthyKeyOrDefault = <T extends Record<string, any>>(obj: T, defaultValue: string): string => {
  for (const key in obj) {
    if (obj[key]) {
      return key;
    }
  }
  return defaultValue;
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

export {
  calculateLoopIndex,
  camelToKebab,
  capitalizeFirstLetter,
  checkObjectProperties,
  clsxStyle,
  clsxUnique,
  clsxWithOptions,
  convertBsKeyToVar,
  deepMerge,
  filterAndTransformProperties,
  filterOptions,
  filterTransformAndExcludeProperties,
  generateRandomId,
  getFirstNonEmptyClass,
  getLoopIndexDirection,
  getScrollbarWidth,
  getTruthyKeyOrDefault,
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
  resolveRoundedClass,
  toCamelCase,
  toKebabCase,
  toPascalCase,
};
