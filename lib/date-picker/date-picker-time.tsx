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

import type { DatePickerTimeProps } from './types.ts';

import { BiClock, classx, convertBsKeyToVar, stylex } from '../tools';

const currentDate = new Date();

const padTime = (value: number): string => value.toString().padStart(2, '0');

const DatePickerTime = function DatePickerTime<T extends ElementType = 'div'>(props: DatePickerTimeProps<T>) {
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

  const effectiveDate = selectedDate ?? currentDate;
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

  const onDateClick = useCallback(() => {
    const hoursInt = parseInt(hours, 10) || 0;
    const minutesInt = parseInt(minutes, 10) || 0;
    const secondsInt = parseInt(seconds, 10) || 0;
    const combinedDate = updateSeconds(updateMinutes(updateHours(currentDate, hoursInt), minutesInt), secondsInt);
    const item = { date: combinedDate };
    onDateClickByDefault?.(item);
  }, [hours, minutes, onDateClickByDefault, seconds]);

  const handleHoursChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHours(e.target.value.trim());
  };

  const handleMinutesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinutes(e.target.value.trim());
  };

  const handleSecondsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSeconds(e.target.value.trim());
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onDateClick();
    }
  };

  useEffect(() => {
    setHours(padTime(effectiveDate.getHours()));
    setMinutes(padTime(effectiveDate.getMinutes()));
    setSeconds(padTime(effectiveDate.getSeconds()));
  }, [effectiveDate]);

  return (
    <Component {...rest} {...renderOptions}>
      <div className="input-group">
        <input
          className="form-control"
          onChange={handleHoursChange}
          onKeyDown={handleKeyDown}
          placeholder="HH"
          type="text"
          value={hours}
        />
        <span className="input-group-text text-secondary">:</span>
        <input
          className="form-control"
          onChange={handleMinutesChange}
          onKeyDown={handleKeyDown}
          placeholder="MM"
          type="text"
          value={minutes}
        />
        <span className="input-group-text text-secondary">:</span>
        <input
          className="form-control"
          onChange={handleSecondsChange}
          onKeyDown={handleKeyDown}
          placeholder="SS"
          type="text"
          value={seconds}
        />
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

DatePickerTime.displayName = 'BRL.DatePickerTime';

export default DatePickerTime;
