import { setHours as updateHours } from 'date-fns/setHours';
import { setMinutes as updateMinutes } from 'date-fns/setMinutes';
import { setSeconds as updateSeconds } from 'date-fns/setSeconds';
import {
  type ChangeEvent,
  type ElementType,
  type KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { DateRangePickerTimeProps } from './types.ts';

import { BiClock, classx, convertBsKeyToVar, sortDates, stylex } from '../tools';

const currentDates = [new Date(), new Date()];

const padTime = (value: number): string => value.toString().padStart(2, '0');

const DateRangePickerTime = function DatePickerTime<T extends ElementType = 'div'>(props: DateRangePickerTimeProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    dropOldClass,
    onDateClick: onDateClickByDefault,
    selectedDate,
    style,
    variables,
    ...rest
  } = props;

  const effectiveDate = selectedDate && selectedDate.length > 0 ? selectedDate : currentDates;
  const [hours, setHours] = useState<string[]>(effectiveDate.map((date) => padTime(date.getHours())));
  const [minutes, setMinutes] = useState<string[]>(effectiveDate.map((date) => padTime(date.getMinutes())));
  const [seconds, setSeconds] = useState<string[]>(effectiveDate.map((date) => padTime(date.getSeconds())));

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'card card-body border-0 p-0', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  const onDateClick = useCallback(() => {
    const getCombinedDate = (date: Date, index: number) => {
      const hoursInt = parseInt(hours[index], 10) || 0;
      const minutesInt = parseInt(minutes[index], 10) || 0;
      const secondsInt = parseInt(seconds[index], 10) || 0;
      return updateSeconds(updateMinutes(updateHours(date, hoursInt), minutesInt), secondsInt);
    };

    const dates = effectiveDate.map((date, index) => getCombinedDate(date, index));
    onDateClickByDefault?.({ date: sortDates(dates[0], dates[1]) });
  }, [effectiveDate, hours, minutes, onDateClickByDefault, seconds]);

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

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onDateClick();
    }
  };

  useEffect(() => {
    setHours(effectiveDate.map((date) => padTime(date.getHours())));
    setMinutes(effectiveDate.map((date) => padTime(date.getMinutes())));
    setSeconds(effectiveDate.map((date) => padTime(date.getSeconds())));
  }, [effectiveDate]);

  return (
    <Component {...rest} {...renderOptions}>
      <div className="d-flex flex-column gap-2 mt-4 mb-1">
        {['Start', 'End'].map((item, index) => {
          return (
            <div className="input-group" key={index}>
              <span className="input-group-text text-primary-emphasis">{item}Time</span>
              <input
                className="form-control"
                onChange={(e) => handleHoursChange(e, index)}
                onKeyDown={handleKeyDown}
                placeholder="HH"
                type="text"
                value={hours[index]}
              />
              <span className="input-group-text text-secondary">:</span>
              <input
                className="form-control"
                onChange={(e) => handleMinutesChange(e, index)}
                onKeyDown={handleKeyDown}
                placeholder="MM"
                type="text"
                value={minutes[index]}
              />
              <span className="input-group-text text-secondary">:</span>
              <input
                className="form-control"
                onChange={(e) => handleSecondsChange(e, index)}
                onKeyDown={handleKeyDown}
                placeholder="SS"
                type="text"
                value={seconds[index]}
              />
            </div>
          );
        })}
      </div>

      <button
        className="btn btn-outline-primary btn-sm mt-4 mb-1 d-flex justify-content-center align-items-center gap-1"
        onClick={onDateClick}
        type="button"
      >
        <span className="d-inline-flex">
          <BiClock />
        </span>
        <span>Confirm</span>
      </button>
    </Component>
  );
};

DateRangePickerTime.displayName = 'BRL.DateRangePickerTime';

export default DateRangePickerTime;
