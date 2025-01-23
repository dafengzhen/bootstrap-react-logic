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

import type { DateRangePickerProps, DateRangePickerType } from './types.ts';

import datePickerStyles from '../bootstrap-react-logic.module.css';
import {
  BiCalendar,
  classx,
  classxWithOptions,
  convertBsKeyToVar,
  formatDateByPickerType,
  sortDates,
  stylex,
} from '../tools';
import DateRangePickerDate from './date-range-picker-date.tsx';
import DateRangePickerDatetime from './date-range-picker-datetime.tsx';
import DateRangePickerMonth from './date-range-picker-month.tsx';
import DateRangePickerQuarter from './date-range-picker-quarter.tsx';
import DateRangePickerTime from './date-range-picker-time.tsx';
import DateRangePickerWeek from './date-range-picker-week.tsx';
import DateRangePickerYear from './date-range-picker-year.tsx';

const currentDate = new Date();

const DateRangePicker = function DateRangePicker<T extends ElementType = 'div'>(props: DateRangePickerProps<T>) {
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
    readOnly,
    style,
    value: valueByDefault,
    variables,
    ...rest
  } = props;

  const inputElement = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date[]>([]);
  const [selectedWeek, setSelectedWeek] = useState<Date[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<Date[]>([]);
  const [selectedQuarter, setSelectedQuarter] = useState<Date[]>([]);
  const [selectedYear, setSelectedYear] = useState<Date[]>([]);
  const [selectedDatetime, setSelectedDatetime] = useState<Date[]>([]);
  const [selectedTime, setSelectedTime] = useState<Date[]>([]);
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
    enabled: !(disabled || readOnly),
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
    if (disabled || readOnly) {
      return;
    }

    onInputFocus();
    setIsOpen((prevState) => !prevState);
  }, [disabled, onInputFocus, readOnly]);

  const handleValueChange = useCallback(
    (value?: string[], type?: DateRangePickerType) => {
      const _pickerType = type ?? pickerType;
      const _value = value ?? valueByDefault ?? [];
      const result = formatDateByPickerType(sortDates(_value[0], _value[1]), _pickerType);
      if (result) {
        const formattedValue = result.formattedValue;
        const computedDate = result.computedDate;
        const available = onInputValueAvailableByDefault?.(formattedValue, computedDate, _pickerType);
        if (typeof available === 'boolean' && !available) {
          setInputValue('');
          return;
        }

        setInputValue(formattedValue.join(' ~ '));
        if (_pickerType === 'date') {
          setSelectedDate(computedDate);
        } else if (_pickerType === 'week') {
          setSelectedWeek(computedDate);
        } else if (_pickerType === 'month') {
          setSelectedMonth(computedDate);
        } else if (_pickerType === 'quarter') {
          setSelectedQuarter(computedDate);
        } else if (_pickerType === 'year') {
          setSelectedYear(computedDate);
        } else if (_pickerType === 'datetime') {
          setSelectedDatetime(computedDate);
        } else if (_pickerType === 'time') {
          setSelectedTime(computedDate);
        }
      } else if (value) {
        setInputValue(value.join(' ~ '));
      }
    },
    [onInputValueAvailableByDefault, pickerType, valueByDefault],
  );

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim();
      if (value) {
        let type: DateRangePickerType | null = null;
        let val: null | string[] = null;

        const matchDateRange = /^\d{4}-\d{2}-\d{2} ~ \d{4}-\d{2}-\d{2}$/.test(value); // Matches yyyy-MM-dd ~ yyyy-MM-dd (date range)
        const matchDatetimeRange = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} ~ \d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(
          value,
        ); // Matches datetime range
        const matchMonthRange = /^\d{4}-\d{2} ~ \d{4}-\d{2}$/.test(value); // Matches month range
        const matchQuarterRange = /^\d{4} Q[1-4] ~ \d{4} Q[1-4]$/.test(value); // Matches quarter range
        const matchTimeRange = /^\d{2}:\d{2}:\d{2} ~ \d{2}:\d{2}:\d{2}$/.test(value); // Matches time range
        const matchWeekRange = /^\d{4}-\d{2}-\d{2} ~ \d{4}-\d{2}-\d{2}$/.test(value); // Matches week range
        const matchYearRange = /^\d{4} ~ \d{4}$/.test(value); // Matches year range

        if (matchDateRange) {
          val = value.split(' ~ ');
          type = 'date';
        } else if (matchDatetimeRange) {
          val = value.split(' ~ ');
          type = 'datetime';
        } else if (matchMonthRange) {
          val = value.split(' ~ ').map((month) => `${month}-01`);
          type = 'month';
        } else if (matchQuarterRange) {
          val = value.split(' ~ ').map((quarter) => {
            const [year, quarterStr] = quarter.split(' ');
            const startMonth = (parseInt(quarterStr.replace('Q', ''), 10) - 1) * 3 + 1;
            return `${year}-${String(startMonth).padStart(2, '0')}-01`;
          });
          type = 'quarter';
        } else if (matchTimeRange) {
          val = value.split(' ~ ').map((time) => format(currentDate, 'yyyy-MM-dd') + ' ' + time);
          type = 'time';
        } else if (matchWeekRange) {
          val = value.split(' ~ ');
          type = 'week';
        } else if (matchYearRange) {
          val = value.split(' ~ ').map((year) => `${year}-01-01`);
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
    (item: { date: Date[] }) => {
      const result = formatDateByPickerType(item.date, 'date');
      if (!result) {
        return;
      }

      const formattedValue = result.formattedValue;
      const computedDate = result.computedDate;
      const available = onInputValueAvailableByDefault?.(formattedValue, computedDate, 'date');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = formattedValue;
      const date = computedDate;
      setInputValue(value.join(' ~ '));
      setSelectedDate(date);
      setIsOpen(false);
      onInputBlur();
      onChangeByDefault?.(value, date, 'date');
    },
    [onChangeByDefault, onInputBlur, onInputValueAvailableByDefault],
  );

  const onWeekClick = useCallback(
    (item: { date: Date[] }) => {
      const result = formatDateByPickerType(item.date, 'week');
      if (!result) {
        return;
      }

      const formattedValue = result.formattedValue;
      const computedDate = result.computedDate;
      const available = onInputValueAvailableByDefault?.(formattedValue, computedDate, 'week');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = formattedValue;
      const date = computedDate;
      setInputValue(value.join(' ~ '));
      setSelectedWeek(date);
      setIsOpen(false);
      onInputBlur();
      onChangeByDefault?.(value, date, 'week');
    },
    [onChangeByDefault, onInputBlur, onInputValueAvailableByDefault],
  );

  const onMonthClick = useCallback(
    (item: { date: Date[] }) => {
      const result = formatDateByPickerType(item.date, 'month');
      if (!result) {
        return;
      }

      const formattedValue = result.formattedValue;
      const computedDate = result.computedDate;
      const available = onInputValueAvailableByDefault?.(formattedValue, computedDate, 'month');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = formattedValue;
      const date = computedDate;
      setInputValue(value.join(' ~ '));
      setSelectedMonth(date);
      setIsOpen(false);
      onInputBlur();
      onChangeByDefault?.(value, date, 'month');
    },
    [onChangeByDefault, onInputBlur, onInputValueAvailableByDefault],
  );

  const onQuarterClick = useCallback(
    (item: { date: Date[] }) => {
      const result = formatDateByPickerType(item.date, 'quarter');
      if (!result) {
        return;
      }

      const formattedValue = result.formattedValue;
      const computedDate = result.computedDate;
      const available = onInputValueAvailableByDefault?.(formattedValue, computedDate, 'quarter');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = formattedValue;
      const date = computedDate;
      setInputValue(value.join(' ~ '));
      setSelectedQuarter(date);
      setIsOpen(false);
      onInputBlur();
      onChangeByDefault?.(value, date, 'quarter');
    },
    [onChangeByDefault, onInputBlur, onInputValueAvailableByDefault],
  );

  const onYearClick = useCallback(
    (item: { date: Date[] }) => {
      const result = formatDateByPickerType(item.date, 'year');
      if (!result) {
        return;
      }

      const formattedValue = result.formattedValue;
      const computedDate = result.computedDate;
      const available = onInputValueAvailableByDefault?.(formattedValue, computedDate, 'year');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = formattedValue;
      const date = computedDate;
      setInputValue(value.join(' ~ '));
      setSelectedQuarter(date);
      setIsOpen(false);
      onInputBlur();
      onChangeByDefault?.(value, date, 'year');
    },
    [onChangeByDefault, onInputBlur, onInputValueAvailableByDefault],
  );

  const onDatetimeClick = useCallback(
    (item: { date: Date[] }) => {
      const result = formatDateByPickerType(item.date, 'datetime');
      if (!result) {
        return;
      }

      const formattedValue = result.formattedValue;
      const computedDate = result.computedDate;
      const available = onInputValueAvailableByDefault?.(formattedValue, computedDate, 'datetime');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = formattedValue;
      const date = computedDate;
      setInputValue(value.join(' ~ '));
      setSelectedDatetime(date);
      setIsOpen(false);
      onInputBlur();
      onChangeByDefault?.(value, date, 'datetime');
    },
    [onChangeByDefault, onInputBlur, onInputValueAvailableByDefault],
  );

  const onTimeClick = useCallback(
    (item: { date: Date[] }) => {
      const result = formatDateByPickerType(item.date, 'time');
      if (!result) {
        return;
      }

      const formattedValue = result.formattedValue;
      const computedDate = result.computedDate;
      const available = onInputValueAvailableByDefault?.(formattedValue, computedDate, 'time');
      if (typeof available === 'boolean' && !available) {
        return;
      }

      const value = formattedValue;
      const date = computedDate;
      setInputValue(value.join(' ~ '));
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
          disabled={disabled}
          onChange={onInputChange}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={inputElement}
          type="text"
          value={inputValue}
        />
        <div
          className={classxWithOptions(
            null,
            'position-absolute top-50 translate-middle-y d-inline-flex',
            datePickerStyles.brlEnd3,
            disabled || readOnly ? 'text-secondary' : datePickerStyles.brlCursorPointer,
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
              <DateRangePickerDate locale={locale} onDateClick={onDateClick} selectedDate={selectedDate} />
            )}
            {pickerType === 'week' && (
              <DateRangePickerWeek locale={locale} onDateClick={onWeekClick} selectedDate={selectedWeek} />
            )}
            {pickerType === 'month' && (
              <DateRangePickerMonth locale={locale} onDateClick={onMonthClick} selectedDate={selectedMonth} />
            )}
            {pickerType === 'quarter' && (
              <DateRangePickerQuarter locale={locale} onDateClick={onQuarterClick} selectedDate={selectedQuarter} />
            )}
            {pickerType === 'year' && (
              <DateRangePickerYear locale={locale} onDateClick={onYearClick} selectedDate={selectedYear} />
            )}
            {pickerType === 'datetime' && (
              <DateRangePickerDatetime locale={locale} onDateClick={onDatetimeClick} selectedDate={selectedDatetime} />
            )}
            {pickerType === 'time' && <DateRangePickerTime onDateClick={onTimeClick} selectedDate={selectedTime} />}
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

DateRangePicker.Date = DateRangePickerDate;

DateRangePicker.Week = DateRangePickerWeek;

DateRangePicker.Month = DateRangePickerMonth;

DateRangePicker.Quarter = DateRangePickerQuarter;

DateRangePicker.Year = DateRangePickerYear;

DateRangePicker.Time = DateRangePickerTime;

DateRangePicker.Datetime = DateRangePickerDatetime;

DateRangePicker.displayName = 'BRL.DateRangePicker';

export default DateRangePicker;
