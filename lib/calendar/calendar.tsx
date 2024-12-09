import { format } from 'date-fns';
import { type ElementType, useCallback, useEffect, useMemo, useState } from 'react';

import type { CalendarDate, CalendarProps } from './types.ts';

import {
  BiChevronLeft,
  BiChevronRight,
  classx,
  classxWithOptions,
  convertBsKeyToVar,
  generateCalendar,
  stylex,
  updateCalendarActiveState,
} from '../tools';
import calendarStyles from './calendar.module.scss';

const currentDate = new Date();

const Calendar = function Calendar<T extends ElementType = 'div'>(props: CalendarProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    bottomContent,
    className,
    disabled,
    dropOldClass,
    events,
    forceRows,
    initialMonth,
    initialYear,
    locale,
    onDateClick: onDateClickByDefault,
    onMonthChange: onMonthChangeByDefault,
    readOnly,
    selectedDate,
    style,
    topContent,
    variables,
    weekDays,
    weekStartsOn,
    ...rest
  } = props;

  const [currentYear, setCurrentYear] = useState<number>(initialYear ?? currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(initialMonth ?? currentDate.getMonth());
  const [currentItem, setCurrentItem] = useState<CalendarDate | null>(null);
  const [calendarData, setCalendarData] = useState(
    generateCalendar(currentYear, currentMonth, events, forceRows, weekStartsOn, weekDays, selectedDate, locale),
  );

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'card card-body px-0 py-2', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  const handleMonthChange = useCallback(
    (offset: number) => {
      if (disabled) {
        return;
      }

      setCurrentItem(null);
      const newDate = new Date(currentYear, currentMonth + offset);
      setCurrentYear(newDate.getFullYear());
      setCurrentMonth(newDate.getMonth());

      if (readOnly) {
        return;
      }

      onMonthChangeByDefault?.(newDate.getFullYear(), newDate.getMonth());
    },
    [currentMonth, currentYear, disabled, onMonthChangeByDefault, readOnly],
  );

  const onDateClick = useCallback(
    (item: CalendarDate) => {
      if (disabled) {
        return;
      }

      const _item = { ...item, active: true };
      setCurrentItem(currentItem && currentItem.date!.toISOString() === _item.date!.toISOString() ? null : _item);
      setCalendarData((prevState) => updateCalendarActiveState(_item, prevState));

      if (readOnly) {
        return;
      }

      onDateClickByDefault?.(_item);
    },
    [currentItem, disabled, onDateClickByDefault, readOnly],
  );

  useEffect(() => {
    setCalendarData(
      generateCalendar(currentYear, currentMonth, events, forceRows, weekStartsOn, weekDays, selectedDate, locale),
    );
  }, [currentMonth, currentYear, events, forceRows, locale, selectedDate, weekDays, weekStartsOn]);

  return (
    <Component {...rest} {...renderOptions}>
      {topContent && topContent}

      <div className="list-group border-0 row-gap-1 px-3">
        <div className="row align-items-center position-relative text-center mb-2">
          <div className="col px-1" onClick={() => handleMonthChange(-1)}>
            <div
              className={classxWithOptions(
                null,
                'user-select-none list-group-item list-group-item-action border-0 px-0 py-1 rounded text-secondary',
                disabled ? 'disabled' : calendarStyles.brlCursorPointer,
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
                disabled ? 'disabled' : calendarStyles.brlCursorPointer,
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

        {calendarData.rows.map((row, rowIndex) => (
          <div className="row text-center" key={rowIndex}>
            {row.map((item, index) => {
              if (rowIndex === 0) {
                return (
                  <div className="col px-1" key={`${item.value}${index}`}>
                    <div className="list-group-item border-0 px-0 py-1 rounded text-body-secondary">{item.value}</div>
                  </div>
                );
              }

              return (
                <div className="col px-1" key={item.date!.toISOString()} onClick={() => onDateClick(item)}>
                  <div
                    className={classxWithOptions(
                      null,
                      'list-group-item list-group-item-action px-0 py-1 rounded',
                      disabled ? 'disabled' : calendarStyles.brlCursorPointer,
                      !item.isCurrentMonth && !item.active && 'text-body-tertiary',
                      item.active && 'active',
                      item.isToday
                        ? 'border-secondary-subtle'
                        : item.events && item.events.length > 0
                          ? item.active
                            ? 'border-primary'
                            : 'border-danger-subtle'
                          : 'border-0',
                    )}
                  >
                    {format(item.date!, 'd', { locale })}
                    {item.active && item.events && item.events.length > 0 && <span className="text-danger">•</span>}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="px-2">
        {currentItem && currentItem.events && currentItem.events.length > 0 && (
          <ul
            className={classxWithOptions(
              null,
              'list-group list-group-flush border-top-0 mt-3 overflow-y-auto',
              currentItem.events.length > 1 && 'list-group-numbered',
            )}
            style={{ maxHeight: 120 }}
          >
            {currentItem.events.map((item, index) => {
              return (
                <li
                  className="list-group-item d-flex justify-content-between align-items-start border-bottom-0"
                  key={`${item.id ?? index}-${currentItem.date!.toISOString()}`}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.title}</div>
                    {item.description && <div>{item.description}</div>}
                    {item.endTime && (
                      <div className="small text-body-secondary mt-2">
                        {new Date(item.endTime).toLocaleTimeString()}
                      </div>
                    )}
                  </div>
                  {item.allDay ? (
                    <span className="small text-primary-emphasis text-center">All Day</span>
                  ) : (
                    <>
                      {item.startTime && (
                        <span className="small text-body-secondary">
                          {new Date(item.startTime).toLocaleTimeString()}
                        </span>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {bottomContent && bottomContent}
    </Component>
  );
};

Calendar.displayName = 'BRL.Calendar';

export default Calendar;
