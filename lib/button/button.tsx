import type { Props } from '@lib/button/types.ts';
import clsx from 'clsx';
import {
  filterAndTransformProperties,
  mapAndFilterStyles,
  parseJson,
  VARIABLE_BS_BTN_PREFIX,
  VARIABLE_BS_PREFIX,
  VARIABLE_BTN_MAP,
} from '@lib/tools';

export default function Button(props: Props) {
  const { as, variant, outline, size, className, style, variables, children } =
    props;

  const Component = as || 'button';

  return (
    <Component
      className={clsx(
        'btn',
        variant && `btn-${variant}`,
        outline && `btn-outline-${outline}`,
        typeof size === 'string' && `btn-${size}`,
        className,
      )}
      style={{
        ...parseJson(variables, (result, isString) =>
          isString
            ? result
            : filterAndTransformProperties(result, (_, key) => {
                const _key = VARIABLE_BTN_MAP[key];
                return {
                  include: !!_key,
                  transformedKey: `${VARIABLE_BS_PREFIX}-${_key}`,
                };
              }),
        ),
        ...mapAndFilterStyles(
          {
            [`${VARIABLE_BS_BTN_PREFIX}-padding-y`]: 'paddingY',
            [`${VARIABLE_BS_BTN_PREFIX}-padding-x`]: 'paddingX',
            [`${VARIABLE_BS_BTN_PREFIX}-font-size`]: 'fontSize',
          },
          size,
        ),
        ...style,
      }}
      role="button"
    >
      {children}
    </Component>
  );
}
