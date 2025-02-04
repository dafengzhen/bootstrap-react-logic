import { type ElementType, useCallback, useMemo, useState } from 'react';

import type { StepOption, StepsProps } from './types.ts';

import { classx, classxWithOptions, convertBsKeyToVar, stylex } from '../tools';

interface IOption extends StepOption {
  id: number | string;
}

const generateInitialOptions = (options: StepOption[] = []): IOption[] =>
  options.map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));

const getStatusClassName = (
  status: null | StepOption['status'],
  isComplete: boolean,
  isCurrent: boolean,
  baseClasses: string,
  type: 'button' | 'progress' | 'text' = 'button',
) => {
  const statusClasses = {
    complete: type === 'progress' ? 'bg-success' : type === 'text' ? 'text-success' : 'btn-success',
    current: type === 'progress' ? 'bg-primary' : type === 'text' ? 'text-primary' : 'btn-primary',
    error: type === 'progress' ? 'bg-danger' : type === 'text' ? 'text-danger' : 'btn-danger',
    upcoming: type === 'progress' ? 'bg-secondary bg-opacity-10' : type === 'text' ? 'text-secondary' : 'btn-secondary',
  };

  if (status && statusClasses[status]) {
    return classxWithOptions(null, baseClasses, statusClasses[status]);
  }

  return classxWithOptions(
    null,
    baseClasses,
    isComplete ? statusClasses.complete : isCurrent ? statusClasses.current : statusClasses.upcoming,
  );
};

const Steps = function Steps<T extends ElementType = 'div'>(props: StepsProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    center = false,
    className,
    current = 0,
    dropOldClass,
    onClick: onClickByDefault,
    options: optionsByDefault,
    style,
    variables,
    vertical = false,
    ...rest
  } = props;

  const [options] = useState<IOption[]>(generateInitialOptions(optionsByDefault));
  const [iconHeight, setIconHeight] = useState(0);
  const [iconWidth, setIconWidth] = useState(0);
  const contentMode = !center && options.some((item) => item.title || item.description);
  const simpleMode =
    !contentMode && options.every((item) => !item.icon && !item.title && !item.description && !item.status);
  const length = options.length;
  const isClickable = typeof onClickByDefault === 'function';

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'row', vertical && 'flex-column', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables, vertical]);

  const onClick = useCallback(
    (index: number) => {
      onClickByDefault?.(index);
    },
    [onClickByDefault],
  );

  if (simpleMode) {
    return (
      <Component {...rest} {...renderOptions}>
        {options.map((item, index) => {
          const isCurrent = index === current;
          const isComplete = index < current;
          const isNotLast = index !== length - 1;

          return (
            <div className={classxWithOptions(null, 'px-0', isNotLast ? 'col' : 'col-auto')} key={item.id}>
              <div
                className={getStatusClassName(
                  item.status,
                  isComplete,
                  isCurrent,
                  vertical ? 'd-inline-flex flex-column' : 'd-flex align-items-center',
                  'text',
                )}
              >
                {item.icon ? (
                  <div
                    className={classxWithOptions(
                      null,
                      getStatusClassName(
                        item.status,
                        isComplete,
                        isCurrent,
                        `d-flex align-items-center justify-content-center`,
                      ),
                      isClickable && 'brl-cursor-pointer',
                    )}
                    onClick={() => onClick(index)}
                    ref={(instance) => {
                      if (instance) {
                        setIconHeight(instance.offsetHeight);
                        setIconWidth(instance.offsetWidth);
                      }
                    }}
                  >
                    {item.icon}
                  </div>
                ) : (
                  <button
                    className={classxWithOptions(
                      null,
                      getStatusClassName(item.status, isComplete, isCurrent, `btn btn-sm rounded-pill brl-w-8 brl-h-8`),
                      !isClickable && 'brl-cursor-default-imp',
                    )}
                    onClick={() => onClick(index)}
                    ref={(instance) => {
                      if (instance) {
                        setIconHeight(instance.offsetHeight);
                        setIconWidth(instance.offsetWidth);
                      }
                    }}
                    type="button"
                  >
                    {index + 1}
                  </button>
                )}

                {isNotLast && (
                  <div
                    className={classxWithOptions(
                      null,
                      'flex-grow-1 position-relative',
                      vertical ? `my-2 brl-min-h-8` : 'mx-2',
                    )}
                  >
                    <div
                      className={classxWithOptions(
                        null,
                        `progress`,
                        vertical
                          ? `flex-column position-absolute top-0 start-50 translate-middle-x h-100 brl-w-05`
                          : `position-absolute top-50 start-0 w-100 brl-h-05`,
                      )}
                      role="progressbar"
                    >
                      <div
                        className={getStatusClassName(
                          item.status,
                          isComplete,
                          isCurrent,
                          `progress-bar ${vertical ? 'h-100' : 'w-100'}`,
                          'progress',
                        )}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Component>
    );
  }

  if (contentMode) {
    return (
      <Component {...rest} {...renderOptions}>
        {options.map((item, index) => {
          const isCurrent = index === current;
          const isComplete = index < current;
          const isNotLast = index !== length - 1;

          return (
            <div className={classxWithOptions(null, 'px-0', isNotLast ? 'col' : 'col-auto')} key={item.id}>
              <div
                className={getStatusClassName(
                  item.status,
                  isComplete,
                  isCurrent,
                  vertical ? 'd-inline-flex flex-column' : 'd-flex align-items-center',
                  'text',
                )}
              >
                <div className="d-inline-flex">
                  <div>
                    {item.icon ? (
                      <div
                        className={classxWithOptions(
                          null,
                          getStatusClassName(
                            item.status,
                            isComplete,
                            isCurrent,
                            `d-flex align-items-center justify-content-center`,
                          ),
                          isClickable && 'brl-cursor-pointer',
                        )}
                        onClick={() => onClick(index)}
                        ref={(instance) => {
                          if (instance) {
                            setIconHeight(instance.offsetHeight);
                            setIconWidth(instance.offsetWidth);
                          }
                        }}
                      >
                        {item.icon}
                      </div>
                    ) : (
                      <button
                        className={classxWithOptions(
                          null,
                          getStatusClassName(
                            item.status,
                            isComplete,
                            isCurrent,
                            `btn btn-sm rounded-pill brl-w-8 brl-h-8`,
                          ),
                          !isClickable && 'brl-cursor-default-imp',
                        )}
                        onClick={() => onClick(index)}
                        ref={(instance) => {
                          if (instance) {
                            setIconHeight(instance.offsetHeight);
                            setIconWidth(instance.offsetWidth);
                          }
                        }}
                        type="button"
                      >
                        {index + 1}
                      </button>
                    )}

                    {vertical && isNotLast && (
                      <div
                        className={classxWithOptions(
                          null,
                          'flex-grow-1 position-relative',
                          vertical ? `my-2 brl-min-h-8` : 'mx-2',
                        )}
                      >
                        <div
                          className={classxWithOptions(
                            null,
                            `progress`,
                            vertical
                              ? `flex-column position-absolute top-0 start-50 translate-middle-x h-100 brl-w-05`
                              : `position-absolute top-50 start-0 w-100 brl-h-05`,
                          )}
                          role="progressbar"
                        >
                          <div
                            className={getStatusClassName(
                              item.status,
                              isComplete,
                              isCurrent,
                              `progress-bar ${vertical ? 'h-100' : 'w-100'}`,
                              'progress',
                            )}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {vertical && (
                    <div className="ms-2">
                      {item.title && (
                        <div
                          className={classxWithOptions(null, isClickable && 'brl-cursor-pointer')}
                          onClick={() => onClick(index)}
                          style={{
                            lineHeight: `${iconHeight / 16}rem`,
                          }}
                        >
                          {item.title}
                        </div>
                      )}

                      {item.description && (
                        <div
                          className={classxWithOptions(
                            null,
                            getStatusClassName(item.status, isComplete, isCurrent, '', 'text'),
                            isClickable && 'brl-cursor-default',
                          )}
                          onClick={() => onClick(index)}
                          style={{ marginLeft: vertical ? 0 : `${iconWidth / 16 + 0.5}rem` }}
                        >
                          {item.description}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {!vertical && item.title && (
                  <div
                    className={classxWithOptions(null, 'ms-2', isClickable && 'brl-cursor-pointer')}
                    onClick={() => onClick(index)}
                  >
                    {item.title}
                  </div>
                )}

                {!vertical && isNotLast && (
                  <div
                    className={classxWithOptions(
                      null,
                      'flex-grow-1 position-relative',
                      vertical ? `my-2 brl-min-h-8` : 'mx-2',
                    )}
                  >
                    <div
                      className={classxWithOptions(
                        null,
                        `progress`,
                        vertical
                          ? `flex-column position-absolute top-0 start-50 translate-middle-x h-100 brl-w-05`
                          : `position-absolute top-50 start-0 w-100 brl-h-05`,
                      )}
                      role="progressbar"
                    >
                      <div
                        className={getStatusClassName(
                          item.status,
                          isComplete,
                          isCurrent,
                          `progress-bar ${vertical ? 'h-100' : 'w-100'}`,
                          'progress',
                        )}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {!vertical && item.description && (
                <div
                  className={classxWithOptions(
                    null,
                    getStatusClassName(item.status, isComplete, isCurrent, '', 'text'),
                    isClickable && 'brl-cursor-default',
                  )}
                  onClick={() => onClick(index)}
                  style={{ marginLeft: vertical ? 0 : `${iconWidth / 16 + 0.5}rem` }}
                >
                  {item.description}
                </div>
              )}
            </div>
          );
        })}
      </Component>
    );
  }

  return (
    <Component {...rest} {...renderOptions}>
      {options.map((item, index) => {
        const isCurrent = index === current;
        const isComplete = index < current;
        const isNotLast = index !== length - 1;

        const prevStatus = index > 0 ? options[index - 1].status : null;
        const prevIsComplete = index > 0 ? index - 1 < current : false;
        const prevIsCurrent = index - 1 === current;

        return (
          <div className="px-0 col" key={item.id}>
            <div
              className={getStatusClassName(
                item.status,
                isComplete,
                isCurrent,
                'd-flex flex-column align-items-center',
                'text',
              )}
            >
              <div className="w-100 d-flex justify-content-center position-relative">
                {index !== 0 && (
                  <div
                    className={classxWithOptions(null, `progress position-absolute top-50 start-0 brl-h-05`)}
                    role="progressbar"
                    style={{ width: `calc(50% - ${iconWidth / 2}px - 0.5rem)` }}
                  >
                    <div
                      className={getStatusClassName(
                        prevStatus,
                        prevIsComplete,
                        prevIsCurrent,
                        `progress-bar w-100`,
                        'progress',
                      )}
                    ></div>
                  </div>
                )}

                {item.icon ? (
                  <div
                    className={classxWithOptions(
                      null,
                      getStatusClassName(
                        item.status,
                        isComplete,
                        isCurrent,
                        `d-flex align-items-center justify-content-center`,
                      ),
                      isClickable && 'brl-cursor-pointer',
                    )}
                    onClick={() => onClick(index)}
                    ref={(instance) => {
                      if (instance) {
                        setIconHeight(instance.offsetHeight);
                        setIconWidth(instance.offsetWidth);
                      }
                    }}
                  >
                    {item.icon}
                  </div>
                ) : (
                  <button
                    className={classxWithOptions(
                      null,
                      getStatusClassName(item.status, isComplete, isCurrent, `btn btn-sm rounded-pill brl-w-8 brl-h-8`),
                      !isClickable && 'brl-cursor-default-imp',
                    )}
                    onClick={() => onClick(index)}
                    ref={(instance) => {
                      if (instance) {
                        setIconHeight(instance.offsetHeight);
                        setIconWidth(instance.offsetWidth);
                      }
                    }}
                    type="button"
                  >
                    {index + 1}
                  </button>
                )}

                {isNotLast && (
                  <div
                    className={classxWithOptions(null, `progress position-absolute top-50 w-50 brl-h-05`)}
                    role="progressbar"
                    style={{ left: `calc(50% + ${iconWidth / 2}px + 0.5rem)` }}
                  >
                    <div
                      className={getStatusClassName(
                        item.status,
                        isComplete,
                        isCurrent,
                        `progress-bar w-100`,
                        'progress',
                      )}
                    ></div>
                  </div>
                )}
              </div>

              {item.title && (
                <div
                  className={classxWithOptions(
                    null,
                    getStatusClassName(item.status, isComplete, isCurrent, '', 'text'),
                    isClickable && 'brl-cursor-pointer',
                  )}
                  onClick={() => onClick(index)}
                >
                  {item.title}
                </div>
              )}

              {item.description && (
                <div
                  className={classxWithOptions(
                    null,
                    getStatusClassName(item.status, isComplete, isCurrent, '', 'text'),
                    isClickable && 'brl-cursor-pointer',
                  )}
                  onClick={() => onClick(index)}
                >
                  {item.description}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </Component>
  );
};

Steps.displayName = 'BRL.Steps';

export default Steps;
