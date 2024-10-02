import { type ElementType, useMemo } from 'react';
import type { ElementProps, Props } from './types.ts';
import {
  ButtonGroupVariablesEnum,
  checkObjectProperties,
  clsxUnique,
  createLogger,
  DEVELOPMENT,
  filterAndTransformProperties,
  filterOptions,
  type IntrinsicElements,
  isDefined,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const logger = createLogger();

const ButtonGroup = function ButtonGroup<T extends ElementType>(
  props: Props<T>,
) {
  const {
    as: Component = 'div',
    render,
    skipCompWrap,
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
  }, [
    dropOldClass,
    vertical,
    toolbar,
    size,
    className,
    style,
    role,
    ariaLabel,
  ]);

  if (render && skipCompWrap) {
    return render({ ...rest, ...renderOptions } as ElementProps<T>);
  }

  const renderContent = render
    ? render({ ...rest, ...renderOptions } as ElementProps<T>)
    : children;

  return (
    <Component {...(rest as IntrinsicElements['div'])} {...renderOptions}>
      {renderContent}
    </Component>
  );
};

ButtonGroup.displayName = 'BRL.ButtonGroup';

export default ButtonGroup;
