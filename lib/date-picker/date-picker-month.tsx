import { format } from 'date-fns';
import { type ElementType, useCallback, useEffect, useMemo, useState } from 'react';

import type { DatePickerMonthProps } from './types.ts';

import {
  BiChevronLeft,
  BiChevronRight,
  classx,
  classxWithOptions,
  convertBsKeyToVar,
  generateCalendar,
  stylex,
  updateCalendarDataTypeActiveState,
} from '../tools';
import datePickerStyles from './date-picker.module.scss';

const currentDate = new Date();

const DatePickerMonth = function DatePickerMonth<T extends ElementType = 'div'>(props: DatePickerMonthProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    dropOldClass,
    locale,
    onDateClick: onDateClickByDefault,
    selectedDate,
    style,
    variables,
    ...rest
  } = props;

  const [currentYear, setCurrentYear] = useState<number>(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(currentDate.getMonth());
  const [calendarData, setCalendarData] = useState(
    generateCalendar(currentYear, currentMonth, [], 6, 1, undefined, selectedDate, locale, false, 'month'),
  );

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'card card-body border-0 p-0', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  const handleMonthChange = useCallback(
    (offset: number) => {
      const newDate = new Date(currentYear + offset, currentMonth);
      setCurrentYear(newDate.getFullYear());
      setCurrentMonth(newDate.getMonth());
    },
    [currentMonth, currentYear],
  );

  const onDateClick = useCallback(
    (item: any, rowIndex: number, index: number) => {
      const updatedItem = { ...item, active: true };
      setCalendarData((prevState) => updateCalendarDataTypeActiveState(updatedItem, rowIndex, index, prevState));
      onDateClickByDefault?.(updatedItem);
    },
    [onDateClickByDefault],
  );

  useEffect(() => {
    setCalendarData(
      generateCalendar(currentYear, currentMonth, [], 6, 1, undefined, selectedDate, locale, false, 'month'),
    );
  }, [currentMonth, currentYear, locale, selectedDate]);

  return (
    <Component {...rest} {...renderOptions}>
      <div className="list-group border-0 row-gap-1 px-3">
        <div className="row align-items-center position-relative text-center mb-2">
          <div className="col px-1" onClick={() => handleMonthChange(-1)}>
            <div
              className={classxWithOptions(
                null,
                'user-select-none list-group-item list-group-item-action border-0 px-0 py-1 rounded text-secondary',
                datePickerStyles.brlCursorPointer,
              )}
            >
              <BiChevronLeft />
            </div>
          </div>
          <div className="col px-1"></div>
          <div className="col px-1"></div>
          <div className="col px-1" onClick={() => handleMonthChange(1)}>
            <div
              className={classxWithOptions(
                null,
                'user-select-none list-group-item list-group-item-action border-0 px-0 py-1 rounded text-secondary',
                datePickerStyles.brlCursorPointer,
              )}
            >
              <BiChevronRight />
            </div>
          </div>
          <div className="position-absolute top-50 start-50 translate-middle w-auto text-nowrap">
            {format(new Date(currentYear, currentMonth), 'yyyy', {
              locale,
            })}
          </div>
        </div>

        {calendarData.rows.map((row, rowIndex) => (
          <div className="row text-center" key={rowIndex}>
            {row.map((item, index) => {
              return (
                <div className="col px-1" key={item.value} onClick={() => onDateClick(item, rowIndex, index)}>
                  <div
                    className={classxWithOptions(
                      null,
                      'position-relative list-group-item list-group-item-action px-0 py-1 rounded border-0',
                      datePickerStyles.brlCursorPointer,
                      item.active && 'active',
                    )}
                  >
                    {item.value}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </Component>
  );
};

DatePickerMonth.displayName = 'BRL.DatePickerMonth';

export default DatePickerMonth;
