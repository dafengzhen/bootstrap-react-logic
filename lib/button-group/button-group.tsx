import { type ElementType, useMemo } from 'react';
import type { ButtonGroupProps } from './types.ts';
import {
  ButtonGroupVariablesEnum,
  checkObjectProperties,
  clsxUnique,
  createLogger,
  DEVELOPMENT,
  filterAndTransformProperties,
  filterOptions,
  isDefined,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const logger = createLogger();

const ButtonGroup = function ButtonGroup<T extends ElementType = 'div'>(
  props: ButtonGroupProps<T>,
) {
  const {
    as: Component = 'div',
    dropOldClass,
    variables,
    children,
    className,
    style,
    role,
    'aria-label': ariaLabel,
    toolbar,
    vertical,
    size,
    ...rest
  } = props;

  /* #__PURE__ */ if (process.env.NODE_ENV === DEVELOPMENT) {
    checkObjectProperties(
      {
        role,
        'aria-label': ariaLabel,
      },
      ['role', 'aria-label'],
      (value) => isDefined(value, true),
      (propertyName, value) => {
        logger.warnMissingParam({
          propertyName,
          componentName: 'ButtonGroup',
          currentValue: value,
        });
      },
    );
  }

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        (vertical
          ? 'btn-group-vertical'
          : toolbar
            ? 'btn-toolbar'
            : 'btn-group'),
      size && `btn-group-${size}`,
      className,
    );
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = ButtonGroupVariablesEnum[key];
        return {
          include: true,
          transformedKey: _value ? key : `${VARIABLE_BS_PREFIX}${_value}`,
        };
      }),
      ...style,
    };

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [dropOldClass, vertical, toolbar, size, className, variables, style]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

ButtonGroup.displayName = 'BRL.ButtonGroup';

export default ButtonGroup;
