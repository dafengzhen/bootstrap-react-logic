import { type ElementType, useMemo } from 'react';
import type { Props } from '@lib/button-group/types.ts';
import clsx from 'clsx';
import {
  checkObjectProperties,
  createLogger,
  deepMerge,
  DEVELOPMENT,
  filterOptions,
  getValue,
  isDefined,
  isValueValid,
} from '@lib/tools';

const logger = createLogger();

const ButtonGroup = function ButtonGroup<T extends ElementType = 'button'>(
  props: Props<T>,
) {
  const {
    as: Component = 'div',
    children,
    className,
    style,
    role,
    'aria-label': ariaLabel,
    dropOldClass,
    toolbar,
    size,
    vertical,
    render,
    skipCompWrap,
    ...rest
  } = deepMerge(props, props.options, (path) => !path.includes('options'));

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
    const finalClass = clsx(
      !dropOldClass &&
        (vertical
          ? 'btn-group-vertical'
          : toolbar
            ? 'btn-toolbar'
            : 'btn-group'),
      size && `btn-group-${size}`,
      className,
    );
    const finalStyle = style;
    const finalRole = getValue(role);
    const finalAriaLabel = getValue(ariaLabel);

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
        role: finalRole,
        'aria-label': finalAriaLabel,
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
    return render({ ...rest, ...renderOptions });
  }

  const renderContent = render
    ? render({ ...rest, ...renderOptions })
    : children;

  return (
    <Component {...rest} {...renderOptions}>
      {renderContent}
    </Component>
  );
};

ButtonGroup.displayName = 'BRL.ButtonGroup';

export default ButtonGroup;
