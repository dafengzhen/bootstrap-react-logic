import { format, setHours as updateHours, setMinutes as updateMinutes, setSeconds as updateSeconds } from 'date-fns';
import { type ChangeEvent, type ElementType, useCallback, useEffect, useMemo, useState } from 'react';

import type { DateRangePickerDatetimeProps } from './types.ts';

import {
  BiChevronLeft,
  BiChevronRight,
  BiClock,
  classx,
  classxWithOptions,
  convertBsKeyToVar,
  generateCalendar,
  sortDates,
  stylex,
  updateCalendarActiveState,
} from '../tools';

const currentDate = new Date();
const currentDates = [new Date(), new Date()];

const padTime = (value: number): string => value.toString().padStart(2, '0');

const DateRangePickerDatetime = function DatePickerDatetime<T extends ElementType = 'div'>(
  props: DateRangePickerDatetimeProps<T>,
) {
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

  const effectiveDate = selectedDate && selectedDate.length > 0 ? selectedDate : currentDates;
  const [currentYear, setCurrentYear] = useState<number>(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(currentDate.getMonth());
  const [calendarData, setCalendarData] = useState(
    generateCalendar(currentYear, currentMonth, [], 6, 1, undefined, selectedDate, locale),
  );
  const [hours, setHours] = useState<string[]>(effectiveDate.map((date) => padTime(date.getHours())));
  const [minutes, setMinutes] = useState<string[]>(effectiveDate.map((date) => padTime(date.getMinutes())));
  const [seconds, setSeconds] = useState<string[]>(effectiveDate.map((date) => padTime(date.getSeconds())));
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
      const getCombinedDate = (date: Date, index: number) => {
        const hoursInt = parseInt(hours[index], 10) || 0;
        const minutesInt = parseInt(minutes[index], 10) || 0;
        const secondsInt = parseInt(seconds[index], 10) || 0;
        return updateSeconds(updateMinutes(updateHours(date, hoursInt), minutesInt), secondsInt);
      };

      const combinedDate = getCombinedDate(item.date, startClick ? 1 : 0);
      const _item = { ...item, active: true, date: combinedDate };
      setCalendarData((prevState) => updateCalendarActiveState(_item, prevState));

      if (startClick) {
        onDateClickByDefault?.({ date: sortDates(startClick, _item.date) });
        setStartClick(null);
      } else {
        setStartClick(_item.date);
      }
    },
    [hours, minutes, onDateClickByDefault, seconds, startClick],
  );

  const handleHoursChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedHours = [...hours];
    updatedHours[index] = e.target.value.trim();
    setHours(updatedHours);
  };

  const handleMinutesChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedMinutes = [...minutes];
    updatedMinutes[index] = e.target.value.trim();
    setMinutes(updatedMinutes);
  };

  const handleSecondsChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedSeconds = [...seconds];
    updatedSeconds[index] = e.target.value.trim();
    setSeconds(updatedSeconds);
  };

  useEffect(() => {
    setCalendarData(generateCalendar(currentYear, currentMonth, [], 6, 1, undefined, selectedDate, locale));
    setHours(effectiveDate.map((date) => padTime(date.getHours())));
    setMinutes(effectiveDate.map((date) => padTime(date.getMinutes())));
    setSeconds(effectiveDate.map((date) => padTime(date.getSeconds())));
  }, [currentMonth, currentYear, effectiveDate, locale, selectedDate]);

  return (
    <Component {...rest} {...renderOptions}>
      <div className="list-group border-0 row-gap-1 px-3">
        <div className="row align-items-center position-relative text-center mb-2">
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
                      'brl-cursor-pointer',
                      !item.isCurrentMonth && !item.active && 'text-body-tertiary',
                      item.active && 'active',
                      item.isToday ? 'border-secondary-subtle' : 'border-0',
                    )}
                  >
                    {format(item.date!, 'd', { locale })}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="d-flex flex-column gap-2 mt-4 mb-1">
        {['Start', 'End'].map((item, index) => {
          return (
            <div className="input-group" key={index}>
              <span className="input-group-text text-primary-emphasis">
                <BiClock />
                <span className="ps-1">{item}Time</span>
              </span>
              <input
                className="form-control"
                onChange={(e) => handleHoursChange(e, index)}
                placeholder="HH"
                type="text"
                value={hours[index]}
              />
              <span className="input-group-text text-secondary">:</span>
              <input
                className="form-control"
                onChange={(e) => handleMinutesChange(e, index)}
                placeholder="MM"
                type="text"
                value={minutes[index]}
              />
              <span className="input-group-text text-secondary">:</span>
              <input
                className="form-control"
                onChange={(e) => handleSecondsChange(e, index)}
                placeholder="SS"
                type="text"
                value={seconds[index]}
              />
            </div>
          );
        })}
      </div>
    </Component>
  );
};

DateRangePickerDatetime.displayName = 'BRL.DateRangePickerDatetime';

export default DateRangePickerDatetime;
