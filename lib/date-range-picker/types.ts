import type { Locale } from 'date-fns';
import type { ElementType } from 'react';

import type {
  BaseProps,
  DateRangePickerDatetimeVariablesType,
  DateRangePickerDateVariablesType,
  DateRangePickerMonthVariablesType,
  DateRangePickerQuarterVariablesType,
  DateRangePickerTimeVariablesType,
  DateRangePickerVariablesType,
  DateRangePickerWeekVariablesType,
  DateRangePickerYearVariablesType,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
} from '../tools';

export type DateRangePickerDateProps<T extends ElementType> = PropsWithoutRef<
  DateProps<T>,
  T,
  DateRangePickerDateVariablesType
>;

export type DateRangePickerDatetimeProps<T extends ElementType> = PropsWithoutRef<
  DatetimeProps<T>,
  T,
  DateRangePickerDatetimeVariablesType
>;

export type DateRangePickerMonthProps<T extends ElementType> = PropsWithoutRef<
  MonthProps<T>,
  T,
  DateRangePickerMonthVariablesType
>;

export type DateRangePickerProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  DateRangePickerVariablesType,
  'onChange'
>;

export type DateRangePickerQuarterProps<T extends ElementType> = PropsWithoutRef<
  QuarterProps<T>,
  T,
  DateRangePickerQuarterVariablesType
>;

export type DateRangePickerTimeProps<T extends ElementType> = PropsWithoutRef<
  TimeProps<T>,
  T,
  DateRangePickerTimeVariablesType
>;

export type DateRangePickerType = 'date' | 'datetime' | 'month' | 'quarter' | 'time' | 'week' | 'year';

export type DateRangePickerWeekProps<T extends ElementType> = PropsWithoutRef<
  WeekProps<T>,
  T,
  DateRangePickerWeekVariablesType
>;

export type DateRangePickerYearProps<T extends ElementType> = PropsWithoutRef<
  YearProps<T>,
  T,
  DateRangePickerYearVariablesType
>;

type DateProps<T extends ElementType> = BaseProps<T, DateRangePickerDateVariablesType> & {
  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date[] }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date[];
};

type DatetimeProps<T extends ElementType> = BaseProps<T, DateRangePickerDatetimeVariablesType> & {
  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date[] }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date[];
};

type MonthProps<T extends ElementType> = BaseProps<T, DateRangePickerMonthVariablesType> & {
  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date[] }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date[];
};

type Props<T extends ElementType> = BaseProps<T, DateRangePickerVariablesType> & {
  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onChange.
   */
  onChange?: (value: string[], date: Date[], type: DateRangePickerType) => void;

  /**
   * onInputValueAvailable.
   */
  onInputValueAvailable?: (value: string[], date: Date[], type: DateRangePickerType) => boolean | undefined;

  /**
   * pickerType.
   */
  pickerType?: DateRangePickerType;

  /**
   * placeholder.
   */
  placeholder?: string;

  /**
   * readOnly.
   */
  readOnly?: boolean;

  /**
   * value.
   */
  value?: string[];
};

type QuarterProps<T extends ElementType> = BaseProps<T, DateRangePickerQuarterVariablesType> & {
  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date[] }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date[];
};

type TimeProps<T extends ElementType> = BaseProps<T, DateRangePickerTimeVariablesType> & {
  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date[] }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date[];
};

type WeekProps<T extends ElementType> = BaseProps<T, DateRangePickerWeekVariablesType> & {
  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date[] }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date[];
};

type YearProps<T extends ElementType> = BaseProps<T, DateRangePickerYearVariablesType> & {
  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date[] }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date[];
};
