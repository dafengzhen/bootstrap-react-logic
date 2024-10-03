/* eslint-disable @typescript-eslint/no-explicit-any */

import clsx, { type ClassValue } from 'clsx';

/**
 * A type that represents either a value of type T or a function returning a value of type T.
 * This utility type is useful for allowing lazy evaluation, where a value can either be
 * provided directly or deferred by wrapping it in a function.
 *
 * @template T - The type of the value or the return type of the function.
 */
type MaybeFunction<T> = T | (() => T);

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
type MergeFn = <T, U>(
  obj1: T,
  obj2: U,
  shouldAssign?: (path: string, value1: any, value2: any) => boolean,
) => T & U;

/**
 * Checks if a value is a plain object.
 *
 * @param value - The value to check.
 * @returns True if the value is a plain object, otherwise false.
 */
const isPlainObject = (value: any): boolean => {
  return (
    typeof value === 'object' &&
    value !== null &&
    Object.prototype.toString.call(value) === '[object Object]'
  );
};

/**
 * Checks if the given value is an array.
 *
 * This utility function utilizes the built-in Array.isArray method
 * to determine if the input is an array. It returns true if the input
 * is an array, and false otherwise.
 *
 * @param obj - The value to check.
 * @returns True if the value is an array; otherwise, false.
 */
const isArray = (obj: any): boolean => {
  return Array.isArray(obj);
};

/**
 * Determines if the given value is a function or a class instance.
 * Functions and class instances are copied directly, without merging.
 *
 * @param obj - The value to check.
 * @returns True if the value is a function or a class instance, otherwise false.
 */
const isFunctionOrClass = (obj: any): boolean => {
  return typeof obj === 'function' || obj.constructor !== Object;
};

/**
 * Checks if an object is a special object (either a Date or a RegExp instance).
 * This function takes an object as input and determines if it is an instance of the Date class or the RegExp class.
 *
 * @param {any} obj - The object to be checked.
 * @returns {boolean} Returns true if the object is a Date or RegExp instance, otherwise false.
 */
const isSpecialObject = (obj: any): boolean => {
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
  transformFn?: (
    value: any,
    key: keyof T,
  ) => { include: boolean; transformedValue?: any; transformedKey?: string },
): Partial<T> => {
  const result: Partial<T> = {};

  for (const key in sourceObject) {
    if (Object.prototype.hasOwnProperty.call(sourceObject, key)) {
      const value = sourceObject[key];
      const isNotExcluded = !exclusionValues.includes(value);

      if (isNotExcluded) {
        const { include, transformedValue, transformedKey } = transformFn
          ? transformFn(value, key as keyof T)
          : { include: true };

        if (include) {
          const finalKey = transformedKey !== undefined ? transformedKey : key;
          result[finalKey as keyof T] =
            transformedValue !== undefined ? transformedValue : value;
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
  transformFn?: (
    value: any,
    key: keyof T,
  ) => { include: boolean; transformedValue?: any; transformedKey?: string },
): Partial<T> => {
  const result: Partial<T> = {};

  for (const key in sourceObject) {
    if (Object.prototype.hasOwnProperty.call(sourceObject, key)) {
      const value = sourceObject[key];
      const { include, transformedValue, transformedKey } = transformFn
        ? transformFn(value, key as keyof T)
        : { include: true };

      if (include) {
        const finalKey = transformedKey !== undefined ? transformedKey : key;
        result[finalKey as keyof T] =
          transformedValue !== undefined ? transformedValue : value;
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
const parseJson = (
  input: string | any,
  callback?: (result: object, isString: boolean) => object | void,
): object => {
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
 * If the first parameter is undefined, it returns the second parameter if provided.
 * If either of the parameters is a function, it evaluates the function
 * and uses its return value to make the comparison.
 *
 * @param param1 - The first parameter, can be a value or a function returning a value.
 * @param param2 - The optional second parameter, can be a value or a function returning a value.
 * @returns The first parameter if it's defined, otherwise the second parameter if provided.
 */
const getValue = <T>(
  param1: MaybeFunction<T>,
  param2?: MaybeFunction<T>,
): T => {
  const resolve = (val: MaybeFunction<T>): T =>
    typeof val === 'function' ? (val as () => T)() : val;

  const resolvedParam1 = resolve(param1);
  return resolvedParam1 !== undefined
    ? resolvedParam1
    : param2
      ? resolve(param2)
      : resolvedParam1;
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

  const mergeArrays = (
    targetArr: any[],
    sourceArr: any[],
    path: string,
  ): any[] => {
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
          target[key] = new sourceValue.constructor(sourceValue);
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
    !(typeof value === 'object' && Object.keys(value).length === 0)
  );
};

/**
 * Creates a logger with a given project name.
 * This logger provides methods to output warning messages for missing parameters.
 *
 * @param {string} [projectName='BRL'] - The name of the project.
 * @returns {{ warnMissingParam: (options: {
 *   propertyName: string;
 *   componentName: string;
 *   expectedType?: string;
 *   level?: 'warn' | 'error' | 'info';
 *   currentValue?: any;
 * }) => void }} - An object containing the logging methods.
 */
const createLogger = (
  projectName: string = 'BRL',
): {
  warnMissingParam: (options: {
    propertyName: string;
    componentName: string;
    expectedType?: string;
    currentValue?: any;
    level?: 'warn' | 'error' | 'info';
  }) => void;
} => {
  /**
   * Gets the current date and time in ISO string format.
   *
   * @returns {string} - The current date and time in ISO format.
   */
  const getCurrentDateTime = (): string => new Date().toISOString();

  /**
   * Logs a message when a parameter is missing or invalid.
   * Can log at 'warn', 'error', or 'info' levels.
   *
   * @param {object} options - Options object for the warning.
   * @param {string} options.propertyName - The name of the missing property.
   * @param {string} options.componentName - The name of the component where the issue occurred.
   * @param {string} [options.expectedType='string'] - The expected data type of the property.
   * @param {'warn' | 'error' | 'info'} [options.level='warn'] - The log level for the message.
   * @param {any} [options.currentValue] - The current value of the property to be logged.
   */
  const warnMissingParam = ({
    propertyName,
    componentName,
    expectedType = 'string',
    level = 'warn',
    currentValue,
  }: {
    propertyName: string;
    componentName: string;
    expectedType?: string;
    currentValue?: any;
    level?: 'warn' | 'error' | 'info';
  }) => {
    const dateTime = getCurrentDateTime();
    const currentValStr =
      currentValue !== undefined ? `, current value is "${currentValue}"` : '';
    const message = `[${projectName}] ${dateTime} ${level.toUpperCase()} ${componentName}: The parameter "${propertyName}" is missing${expectedType ? `, expected type is "${expectedType}"` : ''}${currentValStr}.`;

    switch (level) {
      case 'error':
        console.error(message);
        break;
      case 'info':
        console.info(message);
        break;
      case 'warn':
      default:
        console.warn(message);
        break;
    }
  };

  return { warnMissingParam };
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
  keys: keyof T | (keyof T)[],
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
const isDefined = (value: any, checkEmptyString: boolean = false): boolean => {
  return (
    value !== undefined && value !== null && (!checkEmptyString || value !== '')
  );
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

  const uniqueClassNames = Array.from(
    new Set(classNames.split(' ').filter(Boolean)),
  );

  return uniqueClassNames.join(' ');
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
const mergeClassNames = (
  originalClass: string | undefined,
  newClass: string,
): string => {
  const classSet = new Set(
    [...(originalClass || '').split(' '), ...newClass.split(' ')].filter(
      Boolean,
    ),
  );
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
const processSlotClasses = <
  T extends Record<
    string,
    string | ((originalClass: string) => string | undefined)
  >,
>(
  slotClasses?: T,
  originalClasses?: Partial<Record<keyof T, string>>,
): Partial<{ [K in keyof T]: string }> => {
  if (!slotClasses || Object.keys(slotClasses).length === 0) {
    return originalClasses && Object.keys(originalClasses).length > 0
      ? originalClasses
      : {};
  }

  const result: Partial<{ [K in keyof T]: string }> = {};
  for (const slot in slotClasses) {
    const originalClass = originalClasses?.[slot as keyof T] || '';
    const slotClass = slotClasses[slot as keyof T];

    if (typeof slotClass === 'string') {
      result[slot as keyof T] = slotClass;
    } else if (typeof slotClass === 'function') {
      const processedClass = slotClass(originalClass);
      result[slot as keyof T] =
        processedClass !== undefined ? processedClass : originalClass;
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

export {
  camelToKebab,
  deepMerge,
  filterAndTransformProperties,
  filterTransformAndExcludeProperties,
  getValue,
  isArray,
  isPlainObject,
  isSpecialObject,
  mapAndFilterStyles,
  parseJson,
  filterOptions,
  isValueValid,
  createLogger,
  checkObjectProperties,
  isDefined,
  clsxUnique,
  processClassName,
  mergeClassNames,
  processSlotClasses,
};
