import {
  type ElementType,
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { IOption, SelectMultipleProps } from './types.ts';
import {
  clsxUnique,
  clsxWithOptions,
  filterAndTransformProperties,
  filterOptions,
  groupByProperty,
  InputVariablesEnum,
  isDefined,
  isValueValid,
  pickObjectProperties,
  processSlotClasses,
  VARIABLE_BS_PREFIX,
} from '../tools';
import {
  FloatingPortal,
  size as floatingSize,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import selectMultipleStyles from './select-multiple.module.scss';

const SelectMultiple = function SelectMultiple<T extends ElementType = 'div'>(
  props: SelectMultipleProps<T>,
) {
  const {
    as: Component = 'div',
    dropOldClass,
    variables,
    className,
    style,
    disabled,
    single,
    hideActiveOptions,
    placeholder,
    options: defaultOptions,
    selectableCount,
    contentClasses,
    onChange,
    ...rest
  } = props;

  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));
  const noParamContentClasses = pickObjectProperties(
    contentClasses,
    ['optionItem', 'selectButton'],
    true,
  ) as Omit<keyof typeof contentClasses, 'optionItem' | 'selectButton'>;
  const paramContentClasses = pickObjectProperties(contentClasses, [
    'optionItem',
    'selectButton',
  ]) as Pick<keyof typeof contentClasses, 'optionItem' | 'selectButton'>;
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<IOption[]>(initialOptions);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      floatingSize({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            minWidth: `${rects.reference.width}px`,
            maxHeight: `${Math.max(0, availableHeight)}px`,
          });
        },
      }),
    ],
  });

  const click = useClick(context, {
    enabled: !disabled,
  });
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  const showGroupFlag = useMemo(
    () => options.some((item) => isDefined(item.header, true)),
    [options],
  );
  const getOptionsByHeader = useMemo(
    () => groupByProperty(options, 'header'),
    [options],
  );
  const getActiveOptions = useMemo(() => {
    if (single) {
      const activeOption = options.find((item) => item.active);
      return activeOption ? [activeOption] : [];
    } else {
      return options.filter((item) => item.active);
    }
  }, [options, single]);
  const getActiveOptionsLength = useMemo(
    () => getActiveOptions.length,
    [getActiveOptions.length],
  );
  const onClickSelectOption = useCallback(
    (index: number) => {
      setOptions((prevOptions) => {
        return prevOptions.map((optionItem, idx) => ({
          ...optionItem,
          active: single
            ? idx === index
            : idx === index
              ? !optionItem.active
              : optionItem.active,
        }));
      });
    },
    [single],
  );
  const onClickClearOption = useCallback(
    (item: IOption) => {
      const index = options.findIndex((value) => value.id === item.id);
      if (index !== -1) {
        onClickSelectOption(index);
      }
    },
    [onClickSelectOption, options],
  );

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        `form-select ${selectMultipleStyles.brlSelectMultipleMinHeight}`,
      disabled && 'bg-body-secondary',
      className,
    );
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = InputVariablesEnum[key];
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
        tabIndex: disabled ? undefined : 0,
      },
      isValueValid,
    );
  }, [dropOldClass, disabled, className, variables, style]);

  useEffect(() => {
    onChange?.(
      getActiveOptions
        .filter((item) => isDefined(item.value))
        .map((item) => item.value) as (string | number)[],
    );
  }, [getActiveOptions, onChange]);

  const slotClassName = processSlotClasses(noParamContentClasses, {
    mainContainer: clsxWithOptions(
      null,
      typeof selectableCount === 'number' &&
        'd-flex flex-wrap justify-content-between gap-2',
    ),
    optionsContainer: 'd-flex flex-wrap column-gap-2 row-gap-1',
    placeholder: 'text-secondary user-select-none',
    activeOption: clsxWithOptions(
      null,
      'd-flex align-items-center badge text-bg-secondary',
      selectMultipleStyles.brlSelectMultipleCursorDefault,
    ),
    clearIcon: clsxWithOptions(
      null,
      'bi bi-x',
      selectMultipleStyles.brlSelectMultipleCursorPointer,
    ),
    countDisplay: clsxWithOptions(
      null,
      'align-self-center flex-shrink-0 text-secondary',
      selectMultipleStyles.brlSelectMultipleScale75,
    ),
    floatingMenu: 'overflow-y-auto dropdown-menu rounded-3 shadow show',
    header: 'dropdown-header',
    topDivider: 'dropdown-divider',
    bottomDivider: 'dropdown-divider',
  });

  return (
    <Component
      {...getReferenceProps()}
      {...rest}
      {...renderOptions}
      ref={refs.setReference}
    >
      <div data-slot-main-container="" className={slotClassName.mainContainer}>
        <div
          data-slot-options-container=""
          className={slotClassName.optionsContainer}
        >
          {placeholder && getActiveOptions.length === 0 ? (
            <div data-slot-placeholder="" className={slotClassName.placeholder}>
              {placeholder}
            </div>
          ) : (
            getActiveOptions.map((item) => {
              return (
                <div
                  data-slot-active-option=""
                  key={item.id}
                  className={slotClassName.activeOption}
                >
                  {item.label}
                  <i
                    data-slot-clear-icon=""
                    tabIndex={-1}
                    className={slotClassName.clearIcon}
                    onClick={(e) => {
                      e.stopPropagation();
                      onClickClearOption(item);
                    }}
                  ></i>
                </div>
              );
            })
          )}
        </div>

        {typeof selectableCount === 'number' && (
          <div
            data-slot-count-display=""
            className={slotClassName.countDisplay}
          >{`${getActiveOptionsLength} / ${selectableCount}`}</div>
        )}
      </div>

      {isOpen && (
        <FloatingPortal>
          <ul
            data-slot-floating-menu=""
            ref={refs.setFloating}
            {...getFloatingProps()}
            className={slotClassName.floatingMenu}
            style={floatingStyles}
          >
            {getOptionsByHeader.keys.map((key) => {
              return (
                <Fragment key={key}>
                  {showGroupFlag && (
                    <li key={key}>
                      <h6 data-slot-header="" className={slotClassName.header}>
                        {key}
                      </h6>
                    </li>
                  )}

                  {getOptionsByHeader.groupedData[key].map(
                    ({ item, index }) => {
                      const paramSlotClassName = processSlotClasses(
                        paramContentClasses,
                        {
                          optionItem: clsxWithOptions(
                            null,
                            item.active &&
                              hideActiveOptions &&
                              'visually-hidden',
                          ),
                          selectButton: clsxWithOptions(
                            null,
                            'dropdown-item',
                            item.active && 'active',
                            (item.disabled ||
                              selectableCount === getActiveOptionsLength) &&
                              'disabled',
                          ),
                        },
                      );

                      return (
                        <Fragment key={item.id}>
                          {item.divider === 'top' && (
                            <li>
                              <hr
                                data-slot-top-divider=""
                                className={slotClassName.topDivider}
                              />
                            </li>
                          )}

                          <li
                            data-slot-option-item=""
                            className={paramSlotClassName.optionItem}
                          >
                            <button
                              data-slot-select-button=""
                              onClick={(e) => {
                                e.stopPropagation();
                                onClickSelectOption(index);
                              }}
                              className={paramSlotClassName.selectButton}
                              type="button"
                            >
                              {item.label}
                            </button>
                          </li>

                          {item.divider === 'bottom' && (
                            <li>
                              <hr
                                data-slot-bottom-divider=""
                                className={slotClassName.bottomDivider}
                              />
                            </li>
                          )}
                        </Fragment>
                      );
                    },
                  )}
                </Fragment>
              );
            })}
          </ul>
        </FloatingPortal>
      )}
    </Component>
  );
};

SelectMultiple.displayName = 'BRL.SelectMultiple';

export default SelectMultiple;
