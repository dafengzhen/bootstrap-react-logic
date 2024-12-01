import {
  autoUpdate,
  FloatingPortal,
  size as floatingSize,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import { type ElementType, Fragment, useCallback, useEffect, useMemo, useState } from 'react';

import type { SelectMultipleOption, SelectMultipleProps } from './types.ts';

import {
  classx,
  classxWithOptions,
  convertBsKeyToVar,
  groupByProperty,
  isDefined,
  pickObjectProperties,
  processSlotClasses,
  stylex,
} from '../tools';
import selectMultipleStyles from './select-multiple.module.scss';

const SelectMultiple = function SelectMultiple<T extends ElementType = 'div'>(props: SelectMultipleProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    contentClasses,
    disabled,
    dropOldClass,
    hideActiveOptions,
    onChange,
    options: defaultOptions,
    placeholder,
    selectableCount,
    single,
    style,
    variables,
    ...rest
  } = props;

  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));
  const noParamContentClasses = pickObjectProperties(contentClasses, ['optionItem', 'selectButton'], true) as Omit<
    keyof typeof contentClasses,
    'optionItem' | 'selectButton'
  >;
  const paramContentClasses = pickObjectProperties(contentClasses, ['optionItem', 'selectButton']) as Pick<
    keyof typeof contentClasses,
    'optionItem' | 'selectButton'
  >;
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<SelectMultipleOption[]>(initialOptions);

  const { context, floatingStyles, refs } = useFloating({
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
    onOpenChange: setIsOpen,
    open: isOpen,
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context, {
    enabled: !disabled,
  });
  const dismiss = useDismiss(context);
  const { getFloatingProps, getReferenceProps } = useInteractions([click, dismiss]);

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
    const finalClass = classx(
      !dropOldClass && `form-select ${selectMultipleStyles.brlMinH38px}`,
      disabled && 'bg-body-secondary',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
      tabIndex: disabled ? undefined : 0,
    };
  }, [className, disabled, dropOldClass, style, variables]);

  const slotClassName = processSlotClasses(noParamContentClasses, {
    activeOption: classxWithOptions(
      null,
      'd-flex align-items-center badge text-bg-secondary',
      selectMultipleStyles.brlCursorDefault,
    ),
    bottomDivider: 'dropdown-divider',
    clearIcon: classxWithOptions(null, 'bi bi-x', selectMultipleStyles.brlCursorPointer),
    countDisplay: classxWithOptions(
      null,
      'align-self-center flex-shrink-0 text-secondary',
      selectMultipleStyles.brlScale75,
    ),
    floatingMenu: 'overflow-y-auto dropdown-menu rounded-3 shadow show',
    header: 'dropdown-header',
    mainContainer: classxWithOptions(
      null,
      typeof selectableCount === 'number' && 'd-flex flex-wrap justify-content-between gap-2',
    ),
    optionsContainer: 'd-flex flex-wrap column-gap-2 row-gap-1',
    placeholder: 'text-secondary user-select-none',
    topDivider: 'dropdown-divider',
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
                    className={slotClassName.clearIcon}
                    data-slot-clear-icon=""
                    onClick={(e) => {
                      e.stopPropagation();
                      onClickClearOption(item);
                    }}
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
                      optionItem: classxWithOptions(null, item.active && hideActiveOptions && 'visually-hidden'),
                      selectButton: classxWithOptions(
                        null,
                        'dropdown-item',
                        item.active && 'active',
                        (item.disabled || selectableCount === getActiveOptionsLength) && 'disabled',
                      ),
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
                            className={paramSlotClassName.selectButton}
                            data-slot-select-button=""
                            onClick={(e) => {
                              e.stopPropagation();
                              onClickSelectOption(index);
                            }}
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
