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

interface IOption extends SelectMultipleOption {
  id: number | string;
}

const generateInitialOptions = (options: SelectMultipleOption[] = []): IOption[] =>
  options.map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));

const SelectMultiple = function SelectMultiple<T extends ElementType = 'div'>(props: SelectMultipleProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    contentClasses,
    disabled,
    dropOldClass,
    hideActiveOptions,
    onChange,
    options: optionsByDefault,
    placeholder,
    selectableCount,
    single,
    style,
    variables,
    ...rest
  } = props;

  const [options, setOptions] = useState<IOption[]>(generateInitialOptions(optionsByDefault));
  const [isOpen, setIsOpen] = useState(false);
  const noParamContentClasses = pickObjectProperties(contentClasses, ['optionItem', 'selectButton'], true) as Omit<
    keyof typeof contentClasses,
    'optionItem' | 'selectButton'
  >;
  const paramContentClasses = pickObjectProperties(contentClasses, ['optionItem', 'selectButton']) as Pick<
    keyof typeof contentClasses,
    'optionItem' | 'selectButton'
  >;

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
          active: single
            ? idx === index
              ? !optionItem.active
              : idx === index
            : idx === index
              ? !optionItem.active
              : optionItem.active,
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
      !dropOldClass && `form-select brl-min-h-38-px`,
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
    activeOption: classxWithOptions(null, 'd-flex align-items-center badge text-bg-secondary', 'brl-cursor-default'),
    bottomDivider: 'dropdown-divider',
    clearIcon: classxWithOptions(null, 'bi bi-x', 'brl-cursor-pointer'),
    countDisplay: classxWithOptions(null, 'align-self-center flex-shrink-0 text-secondary', 'brl-scale-75'),
    floatingMenu: 'overflow-y-auto dropdown-menu shadow show',
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
    <>
      <Component {...rest} {...renderOptions} {...getReferenceProps()} ref={refs.setReference}>
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
      </Component>

      {isOpen && (
        <FloatingPortal>
          <ul
            className={slotClassName.floatingMenu}
            {...getFloatingProps()}
            data-slot-floating-menu=""
            ref={refs.setFloating}
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
    </>
  );
};

SelectMultiple.displayName = 'BRL.SelectMultiple';

export default SelectMultiple;
