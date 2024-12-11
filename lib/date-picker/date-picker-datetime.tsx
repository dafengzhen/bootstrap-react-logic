import { format, setHours as updateHours, setMinutes as updateMinutes, setSeconds as updateSeconds } from 'date-fns';
import { type ChangeEvent, type ElementType, useCallback, useEffect, useMemo, useState } from 'react';

import type { DatePickerDatetimeProps } from './types.ts';

import datePickerStyles from '../global.module.scss';
import {
  BiChevronLeft,
  BiChevronRight,
  BiClock,
  classx,
  classxWithOptions,
  convertBsKeyToVar,
  generateCalendar,
  stylex,
  updateCalendarActiveState,
} from '../tools';

const currentDate = new Date();

const padTime = (value: number): string => value.toString().padStart(2, '0');

const DatePickerDatetime = function DatePickerDatetime<T extends ElementType = 'div'>(
  props: DatePickerDatetimeProps<T>,
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

  const effectiveDate = selectedDate ?? currentDate;
  const [currentYear, setCurrentYear] = useState<number>(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(currentDate.getMonth());
  const [calendarData, setCalendarData] = useState(
    generateCalendar(currentYear, currentMonth, [], 6, 1, undefined, selectedDate, locale),
  );
  const [hours, setHours] = useState(padTime(effectiveDate.getHours()));
  const [minutes, setMinutes] = useState(padTime(effectiveDate.getMinutes()));
  const [seconds, setSeconds] = useState(padTime(effectiveDate.getSeconds()));

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
      const hoursInt = parseInt(hours, 10) || 0;
      const minutesInt = parseInt(minutes, 10) || 0;
      const secondsInt = parseInt(seconds, 10) || 0;
      const combinedDate = updateSeconds(updateMinutes(updateHours(item.date, hoursInt), minutesInt), secondsInt);
      const _item = { ...item, active: true, date: combinedDate };
      setCalendarData((prevState) => updateCalendarActiveState(_item, prevState));
      onDateClickByDefault?.(_item);
    },
    [hours, minutes, onDateClickByDefault, seconds],
  );

  const handleHoursChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHours(e.target.value.trim());
  };

  const handleMinutesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinutes(e.target.value.trim());
  };

  const handleSecondsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSeconds(e.target.value.trim());
  };

  useEffect(() => {
    setCalendarData(generateCalendar(currentYear, currentMonth, [], 6, 1, undefined, selectedDate, locale));
    setHours(padTime(effectiveDate.getHours()));
    setMinutes(padTime(effectiveDate.getMinutes()));
    setSeconds(padTime(effectiveDate.getSeconds()));
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
                datePickerStyles.brlCursorPointer,
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
                datePickerStyles.brlCursorPointer,
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
                      datePickerStyles.brlCursorPointer,
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

      <div className="input-group mt-4 mb-1">
        <span className="input-group-text text-primary-emphasis">
          <BiClock />
          <span className="ps-1">Time</span>
        </span>
        <input className="form-control" onChange={handleHoursChange} placeholder="HH" type="text" value={hours} />
        <span className="input-group-text text-secondary">:</span>
        <input className="form-control" onChange={handleMinutesChange} placeholder="MM" type="text" value={minutes} />
        <span className="input-group-text text-secondary">:</span>
        <input className="form-control" onChange={handleSecondsChange} placeholder="SS" type="text" value={seconds} />
      </div>
    </Component>
  );
};

DatePickerDatetime.displayName = 'BRL.DatePickerDatetime';

export default DatePickerDatetime;
