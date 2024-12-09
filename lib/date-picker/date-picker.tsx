import {
  autoUpdate,
  FloatingPortal,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import { format } from 'date-fns';
import { type ChangeEvent, type ElementType, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { DatePickerProps, DatePickerType } from './types.ts';

import { BiCalendar, classx, classxWithOptions, convertBsKeyToVar, formatDateByPickerType, stylex } from '../tools';
import DatePickerDate from './date-picker-date.tsx';
import DatePickerDatetime from './date-picker-datetime.tsx';
import DatePickerMonth from './date-picker-month.tsx';
import DatePickerQuarter from './date-picker-quarter.tsx';
import DatePickerTime from './date-picker-time.tsx';
import DatePickerWeek from './date-picker-week.tsx';
import DatePickerYear from './date-picker-year.tsx';
import datePickerStyles from './date-picker.module.scss';

const currentDate = new Date();

const DatePicker = function DatePicker<T extends ElementType = 'div'>(props: DatePickerProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    disabled,
    dropOldClass,
    locale,
    onChange: onChangeByDefault,
    onInputValueAvailable: onInputValueAvailableByDefault,
    pickerType = 'date',
    placeholder: placeholderByDefault,
    style,
    value: valueByDefault,
    variables,
    ...rest
  } = props;

  const inputElement = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedWeek, setSelectedWeek] = useState<Date>();
  const [selectedMonth, setSelectedMonth] = useState<Date>();
  const [selectedQuarter, setSelectedQuarter] = useState<Date>();
  const [selectedYear, setSelectedYear] = useState<Date>();
  const [selectedDatetime, setSelectedDatetime] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<Date>();
  const placeholder = placeholderByDefault ?? `Please select a ${pickerType}`;

  const { context, floatingStyles, refs } = useFloating({
    middleware: [
      size({
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
    toggle: false,
  });
  const dismiss = useDismiss(context);
  const { getFloatingProps, getReferenceProps } = useInteractions([click, dismiss]);

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'position-relative', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  const onInputFocus = useCallback(() => {
    inputElement.current?.focus();
  }, []);

  const onInputBlur = useCallback(() => {
    inputElement.current?.blur();
  }, []);

  const onClickIcon = useCallback(() => {
    onInputFocus();
    setIsOpen((prevState) => !prevState);
  }, [onInputFocus]);

  const handleValueChange = useCallback(
    (value?: string, type?: DatePickerType) => {
      const _pickerType = type ?? pickerType;
      const result = formatDateByPickerType(value ?? valueByDefault, _pickerType);
      if (result) {
        const available = onInputValueAvailableByDefault?.(result.formattedValue, result.computedDate, _pickerType);
        if (typeof available === 'boolean' && !available) {
          setInputValue('');
          return;
        }

        setInputValue(result.formattedValue);
        if (_pickerType === 'date') {
          setSelectedDate(result.computedDate);
        } else if (_pickerType === 'week') {
          setSelectedWeek(result.computedDate);
        } else if (_pickerType === 'month') {
          setSelectedMonth(result.computedDate);
        } else if (_pickerType === 'quarter') {
          setSelectedQuarter(result.computedDate);
        } else if (_pickerType === 'year') {
          setSelectedYear(result.computedDate);
        } else if (_pickerType === 'datetime') {
          setSelectedDatetime(result.computedDate);
        } else if (_pickerType === 'time') {
          setSelectedTime(result.computedDate);
        }
      } else if (value) {
        setInputValue(value);
      }
    },
    [onInputValueAvailableByDefault, pickerType, valueByDefault],
  );

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim();
      if (value) {
        let type: DatePickerType | null = null;
        let val = null;

        const matchDate = /^\d{4}-\d{2}-\d{2}$/.test(value); // Matches yyyy-MM-dd (date)
        const matchDatetime = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(value); // Matches yyyy-MM-dd HH:mm:ss (datetime)
        const matchMonth = /^\d{4}-\d{2}$/.test(value); // Matches yyyy-MM (month)
        const matchQuarter = /^\d{4} Q[1-4]$/.test(value); // Matches yyyy Q1, yyyy Q2, etc. (quarter)
        const matchTime = /^\d{2}:\d{2}:\d{2}$/.test(value); // Matches HH:mm:ss (time)
        const matchWeek = /^\d{4}-\d{2}-\d{2} ~ \d{4}-\d{2}-\d{2}$/.test(value); // Matches yyyy-MM-dd ~ yyyy-MM-dd (week)
        const matchYear = /^\d{4}$/.test(value); // Matches yyyy (year)

        if (matchDate) {
          val = value;
          type = 'date';
        } else if (matchDatetime) {
          val = value;
          type = 'datetime';
        } else if (matchMonth) {
          val = value + '-01';
          type = 'month';
        } else if (matchQuarter) {
          const year = value.split(' ')[0];
          const quarter = parseInt(value.split(' ')[1].replace('Q', ''), 10);
          const startMonth = (quarter - 1) * 3 + 1;
          val = `${year}-${String(startMonth).padStart(2, '0')}-01`;
          type = 'quarter';
        } else if (matchTime) {
          val = format(currentDate, 'yyyy-MM-dd') + ' ' + value;
          type = 'time';
        } else if (matchWeek) {
          const [startDateStr] = value.split(' ~ ');
          val = startDateStr;
          type = 'week';
        } else if (matchYear) {
          val = `${value}-01-01`;
          type = 'year';
        }

        if (val && type === pickerType) {
          handleValueChange(val, type);
          return;
        }
      }

      setInputValue(value);
    },
    [handleValueChange, pickerType],
  );

  const onDateClick = useCallback(
    (item: { date: Date }) => {
      const result = formatDateByPickerType(item.date, 'date');
      if (!result) {
        return;
      }

      const available = onInputValueAvailableByDefault?.(result.formattedValue, result.computedDate, 'date');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = result.formattedValue;
      const date = result.computedDate;
      setInputValue(value);
      setSelectedDate(date);
      setIsOpen(false);
      onInputBlur();
      onChangeByDefault?.(value, date, 'date');
    },
    [onChangeByDefault, onInputBlur, onInputValueAvailableByDefault],
  );

  const onWeekClick = useCallback(
    (item: { date: Date }) => {
      const result = formatDateByPickerType(item.date, 'week');
      if (!result) {
        return;
      }

      const available = onInputValueAvailableByDefault?.(result.formattedValue, result.computedDate, 'week');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = result.formattedValue;
      const date = result.computedDate;
      setInputValue(value);
      setSelectedWeek(date);
      setIsOpen(false);
      onInputBlur();
      onChangeByDefault?.(value, date, 'week');
    },
    [onChangeByDefault, onInputBlur, onInputValueAvailableByDefault],
  );

  const onMonthClick = useCallback(
    (item: { date: Date }) => {
      const result = formatDateByPickerType(item.date, 'month');
      if (!result) {
        return;
      }

      const available = onInputValueAvailableByDefault?.(result.formattedValue, result.computedDate, 'month');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = result.formattedValue;
      const date = result.computedDate;
      setInputValue(value);
      setSelectedMonth(date);
      setIsOpen(false);
      onInputBlur();
      onChangeByDefault?.(value, date, 'month');
    },
    [onChangeByDefault, onInputBlur, onInputValueAvailableByDefault],
  );

  const onQuarterClick = useCallback(
    (item: { date: Date }) => {
      const result = formatDateByPickerType(item.date, 'quarter');
      if (!result) {
        return;
      }

      const available = onInputValueAvailableByDefault?.(result.formattedValue, result.computedDate, 'quarter');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = result.formattedValue;
      const date = result.computedDate;
      setInputValue(value);
      setSelectedQuarter(date);
      setIsOpen(false);
      onInputBlur();
      onChangeByDefault?.(value, date, 'quarter');
    },
    [onChangeByDefault, onInputBlur, onInputValueAvailableByDefault],
  );

  const onYearClick = useCallback(
    (item: { date: Date }) => {
      const result = formatDateByPickerType(item.date, 'year');
      if (!result) {
        return;
      }

      const available = onInputValueAvailableByDefault?.(result.formattedValue, result.computedDate, 'year');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = result.formattedValue;
      const date = result.computedDate;
      setInputValue(value);
      setSelectedQuarter(date);
      setIsOpen(false);
      onInputBlur();
      onChangeByDefault?.(value, date, 'year');
    },
    [onChangeByDefault, onInputBlur, onInputValueAvailableByDefault],
  );

  const onDatetimeClick = useCallback(
    (item: { date: Date }) => {
      const result = formatDateByPickerType(item.date, 'datetime');
      if (!result) {
        return;
      }

      const available = onInputValueAvailableByDefault?.(result.formattedValue, result.computedDate, 'datetime');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = result.formattedValue;
      const date = result.computedDate;
      setInputValue(value);
      setSelectedDatetime(date);
      setIsOpen(false);
      onInputBlur();
      onChangeByDefault?.(value, date, 'datetime');
    },
    [onChangeByDefault, onInputBlur, onInputValueAvailableByDefault],
  );

  const onTimeClick = useCallback(
    (item: { date: Date }) => {
      const result = formatDateByPickerType(item.date, 'time');
      if (!result) {
        return;
      }

      const available = onInputValueAvailableByDefault?.(result.formattedValue, result.computedDate, 'time');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = result.formattedValue;
      const date = result.computedDate;
      setInputValue(value);
      setSelectedTime(date);
      setIsOpen(false);
      onInputBlur();
      onChangeByDefault?.(value, date, 'time');
    },
    [onChangeByDefault, onInputBlur, onInputValueAvailableByDefault],
  );

  useEffect(() => {
    handleValueChange();
  }, [handleValueChange]);

  return (
    <>
      <Component {...rest} {...renderOptions} {...getReferenceProps()} ref={refs.setReference}>
        <input
          className={classxWithOptions(null, 'form-control', datePickerStyles.brlPe9)}
          onChange={onInputChange}
          placeholder={placeholder}
          ref={inputElement}
          type="text"
          value={inputValue}
        />
        <div
          className={classxWithOptions(
            null,
            'position-absolute top-50 translate-middle-y d-inline-flex',
            datePickerStyles.brlEnd3,
            datePickerStyles.brlCursorPointer,
          )}
          onClick={onClickIcon}
        >
          <BiCalendar />
        </div>
      </Component>

      {isOpen && (
        <FloatingPortal>
          <div className="card card-body shadow" {...getFloatingProps()} ref={refs.setFloating} style={floatingStyles}>
            {pickerType === 'date' && (
              <DatePickerDate locale={locale} onDateClick={onDateClick} selectedDate={selectedDate} />
            )}
            {pickerType === 'week' && (
              <DatePickerWeek locale={locale} onDateClick={onWeekClick} selectedDate={selectedWeek} />
            )}
            {pickerType === 'month' && (
              <DatePickerMonth locale={locale} onDateClick={onMonthClick} selectedDate={selectedMonth} />
            )}
            {pickerType === 'quarter' && (
              <DatePickerQuarter locale={locale} onDateClick={onQuarterClick} selectedDate={selectedQuarter} />
            )}
            {pickerType === 'year' && (
              <DatePickerYear locale={locale} onDateClick={onYearClick} selectedDate={selectedYear} />
            )}
            {pickerType === 'datetime' && (
              <DatePickerDatetime locale={locale} onDateClick={onDatetimeClick} selectedDate={selectedDatetime} />
            )}
            {pickerType === 'time' && <DatePickerTime onDateClick={onTimeClick} selectedDate={selectedTime} />}
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

DatePicker.Date = DatePickerDate;

DatePicker.Week = DatePickerWeek;

DatePicker.Month = DatePickerMonth;

DatePicker.Quarter = DatePickerQuarter;

DatePicker.Year = DatePickerYear;

DatePicker.Time = DatePickerTime;

DatePicker.Datetime = DatePickerDatetime;

DatePicker.displayName = 'BRL.DatePicker';

export default DatePicker;
