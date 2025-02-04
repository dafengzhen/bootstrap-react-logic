import { format } from 'date-fns';
import { type ElementType, useCallback, useEffect, useMemo, useState } from 'react';

import type { DateRangePickerWeekProps } from './types.ts';

import {
  BiChevronLeft,
  BiChevronRight,
  classx,
  classxWithOptions,
  convertBsKeyToVar,
  generateCalendar,
  sortDates,
  stylex,
  updateCalendarWeekActiveState,
} from '../tools';

const currentDate = new Date();

const DateRangePickerWeek = function DatePickerWeek<T extends ElementType = 'div'>(props: DateRangePickerWeekProps<T>) {
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
    generateCalendar(currentYear, currentMonth, [], 6, 1, undefined, selectedDate, locale, true),
  );
  const [startClick, setStartClick] = useState<Date | null>(null);

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
      const newDate = new Date(currentYear, currentMonth + offset);
      setCurrentYear(newDate.getFullYear());
      setCurrentMonth(newDate.getMonth());
    },
    [currentMonth, currentYear],
  );

  const onDateClick = useCallback(
    (item: any) => {
      const _item = { ...item, active: true };
      setCalendarData((prevState) => updateCalendarWeekActiveState(_item, prevState));

      if (startClick) {
        onDateClickByDefault?.({ date: sortDates(startClick, _item.date) });
        setStartClick(null);
      } else {
        setStartClick(_item.date);
      }
    },
    [onDateClickByDefault, startClick],
  );

  useEffect(() => {
    setCalendarData(generateCalendar(currentYear, currentMonth, [], 6, 1, undefined, selectedDate, locale, true));
  }, [currentMonth, currentYear, locale, selectedDate]);

  return (
    <Component {...rest} {...renderOptions}>
      <div className="list-group border-0 row-gap-1 px-3">
        <div className="row align-items-center position-relative text-center w-100 mb-2">
          <div className="col px-1" onClick={() => handleMonthChange(-1)}>
            <div
              className={classxWithOptions(
                null,
                'user-select-none list-group-item list-group-item-action border-0 px-0 py-1 rounded text-secondary',
                'brl-cursor-pointer',
              )}
            >
              <BiChevronLeft />
            </div>
          </div>
          <div className="col px-1"></div>
          <div className="col px-1"></div>
          <div className="col px-1"></div>
          <div className="col px-1"></div>
          <div className="col px-1"></div>
          <div className="col px-1" onClick={() => handleMonthChange(1)}>
            <div
              className={classxWithOptions(
                null,
                'user-select-none list-group-item list-group-item-action border-0 px-0 py-1 rounded text-secondary',
                'brl-cursor-pointer',
              )}
            >
              <BiChevronRight />
            </div>
          </div>
          <div className="position-absolute top-50 start-50 translate-middle w-auto text-nowrap">
            {format(new Date(currentYear, currentMonth), 'MMMM yyyy', {
              locale,
            })}
          </div>
        </div>

        {calendarData.rows.map((row, rowIndex) => {
          const isActive = rowIndex !== 0 && row.every((item) => item.active);
          return (
            <div
              className={classxWithOptions(
                null,
                'row text-center d-flex list-group-item rounded p-0 border-0',
                rowIndex === 0 ? 'w-100' : `list-group-item-action brl-cursor-pointer`,
                isActive && 'active',
              )}
              key={rowIndex}
            >
              {row.map((item, index) => {
                if (rowIndex === 0) {
                  return (
                    <div className="col px-1" key={`${item.value}${index}`}>
                      <div className="px-0 py-1 rounded text-body-secondary">{item.value}</div>
                    </div>
                  );
                }

                return (
                  <div className="col px-1" key={item.date!.toISOString()} onClick={() => onDateClick(item)}>
                    <div
                      className={classxWithOptions(
                        null,
                        'px-0 py-1 rounded',
                        !item.isCurrentMonth && !item.active && 'text-body-tertiary',
                        item.isToday ? 'border border-secondary-subtle' : 'border-0',
                      )}
                    >
                      {format(item.date!, 'd', { locale })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Component>
  );
};

DateRangePickerWeek.displayName = 'BRL.DateRangePickerWeek';

export default DateRangePickerWeek;
