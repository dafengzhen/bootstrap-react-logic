/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Checks if a value is a plain object.
 *
 * @param value - The value to check.
 * @returns True if the value is a plain object, otherwise false.
 */
const isPlainObject = (value: any) => {
  return (
    typeof value === 'object' &&
    value !== null &&
    Object.prototype.toString.call(value) === '[object Object]'
  );
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

export {
  isPlainObject,
  mapAndFilterStyles,
  filterTransformAndExcludeProperties,
  filterAndTransformProperties,
  camelToKebab,
  parseJson,
};
