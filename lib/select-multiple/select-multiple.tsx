import {
  size as floatingSize,
  useInteractions,
  FloatingPortal,
  useFloating,
  autoUpdate,
  useDismiss,
  useClick,
} from '@floating-ui/react';
import { type ElementType, useCallback, useEffect, Fragment, useState, useMemo } from 'react';

import type { SelectMultipleOption, SelectMultipleProps } from './types.ts';

import {
  pickObjectProperties,
  processSlotClasses,
  convertBsKeyToVar,
  clsxWithOptions,
  groupByProperty,
  filterOptions,
  isValueValid,
  clsxUnique,
  clsxStyle,
  isDefined,
} from '../tools';
import selectMultipleStyles from './select-multiple.module.scss';

const SelectMultiple = function SelectMultiple<T extends ElementType = 'div'>(props: SelectMultipleProps<T>) {
  const {
    options: defaultOptions,
    as: Component = 'div',
    hideActiveOptions,
    selectableCount,
    contentClasses,
    dropOldClass,
    placeholder,
    className,
    variables,
    disabled,
    onChange,
    single,
    style,
    ...rest
  } = props;

  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));
  const noParamContentClasses = pickObjectProperties(contentClasses, ['optionItem', 'selectButton'], true) as Omit<
    keyof typeof contentClasses,
    'selectButton' | 'optionItem'
  >;
  const paramContentClasses = pickObjectProperties(contentClasses, ['optionItem', 'selectButton']) as Pick<
    keyof typeof contentClasses,
    'selectButton' | 'optionItem'
  >;
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<SelectMultipleOption[]>(initialOptions);

  const { floatingStyles, context, refs } = useFloating({
    middleware: [
      floatingSize({
        apply({ availableHeight, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.max(0, availableHeight)}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
    onOpenChange: setIsOpen,
    open: isOpen,
  });

  const click = useClick(context, {
    enabled: !disabled,
  });
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);

  const showGroupFlag = useMemo(() => options.some((item) => isDefined(item.header, true)), [options]);
  const getOptionsByHeader = useMemo(() => groupByProperty(options, 'header'), [options]);
  const getActiveOptions = useMemo(() => {
    if (single) {
      const activeOption = options.find((item) => item.active);
      return activeOption ? [activeOption] : [];
    } else {
      return options.filter((item) => item.active);
    }
  }, [options, single]);
  const getActiveOptionsLength = useMemo(() => getActiveOptions.length, [getActiveOptions.length]);
  const onClickSelectOption = useCallback(
    (index: number) => {
      setOptions((prevOptions) => {
        return prevOptions.map((optionItem, idx) => ({
          ...optionItem,
          active: single ? idx === index : idx === index ? !optionItem.active : optionItem.active,
        }));
      });
    },
    [single],
  );
  const onClickClearOption = useCallback(
    (item: SelectMultipleOption) => {
      const index = options.findIndex((value) => value.id === item.id);
      if (index !== -1) {
        onClickSelectOption(index);
      }
    },
    [onClickSelectOption, options],
  );

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && `form-select ${selectMultipleStyles.brlMinH38px}`,
      disabled && 'bg-body-secondary',
      className,
    );
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        tabIndex: disabled ? undefined : 0,
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [dropOldClass, disabled, className, variables, style]);

  const slotClassName = processSlotClasses(noParamContentClasses, {
    activeOption: clsxWithOptions(
      null,
      'd-flex align-items-center badge text-bg-secondary',
      selectMultipleStyles.brlCursorDefault,
    ),
    mainContainer: clsxWithOptions(
      null,
      typeof selectableCount === 'number' && 'd-flex flex-wrap justify-content-between gap-2',
    ),
    countDisplay: clsxWithOptions(
      null,
      'align-self-center flex-shrink-0 text-secondary',
      selectMultipleStyles.brlScale75,
    ),
    clearIcon: clsxWithOptions(null, 'bi bi-x', selectMultipleStyles.brlCursorPointer),
    floatingMenu: 'overflow-y-auto dropdown-menu rounded-3 shadow show',
    optionsContainer: 'd-flex flex-wrap column-gap-2 row-gap-1',
    placeholder: 'text-secondary user-select-none',
    bottomDivider: 'dropdown-divider',
    topDivider: 'dropdown-divider',
    header: 'dropdown-header',
  });

  useEffect(() => {
    onChange?.(getActiveOptions.map((item) => item.id) as (number | string)[]);
  }, [getActiveOptions, onChange]);

  return (
    <Component {...getReferenceProps()} {...rest} {...renderOptions} ref={refs.setReference}>
      <div className={slotClassName.mainContainer} data-slot-main-container="">
        <div className={slotClassName.optionsContainer} data-slot-options-container="">
          {placeholder && getActiveOptions.length === 0 ? (
            <div className={slotClassName.placeholder} data-slot-placeholder="">
              {placeholder}
            </div>
          ) : (
            getActiveOptions.map((item) => {
              return (
                <div className={slotClassName.activeOption} data-slot-active-option="" key={item.id}>
                  {item.text}
                  <i
                    onClick={(e) => {
                      e.stopPropagation();
                      onClickClearOption(item);
                    }}
                    className={slotClassName.clearIcon}
                    data-slot-clear-icon=""
                    tabIndex={-1}
                  ></i>
                </div>
              );
            })
          )}
        </div>

        {typeof selectableCount === 'number' && (
          <div
            className={slotClassName.countDisplay}
            data-slot-count-display=""
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
                      <h6 className={slotClassName.header} data-slot-header="">
                        {key}
                      </h6>
                    </li>
                  )}

                  {getOptionsByHeader.groupedData[key].map(({ index, item }) => {
                    const paramSlotClassName = processSlotClasses(paramContentClasses, {
                      selectButton: clsxWithOptions(
                        null,
                        'dropdown-item',
                        item.active && 'active',
                        (item.disabled || selectableCount === getActiveOptionsLength) && 'disabled',
                      ),
                      optionItem: clsxWithOptions(null, item.active && hideActiveOptions && 'visually-hidden'),
                    });

                    return (
                      <Fragment key={item.id}>
                        {item.divider === 'top' && (
                          <li>
                            <hr className={slotClassName.topDivider} data-slot-top-divider="" />
                          </li>
                        )}

                        <li className={paramSlotClassName.optionItem} data-slot-option-item="">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onClickSelectOption(index);
                            }}
                            className={paramSlotClassName.selectButton}
                            data-slot-select-button=""
                            type="button"
                          >
                            {item.text}
                          </button>
                        </li>

                        {item.divider === 'bottom' && (
                          <li>
                            <hr className={slotClassName.bottomDivider} data-slot-bottom-divider="" />
                          </li>
                        )}
                      </Fragment>
                    );
                  })}
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
