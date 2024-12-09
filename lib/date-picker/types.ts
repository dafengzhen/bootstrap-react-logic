import type { Locale } from 'date-fns';
import type { ElementType } from 'react';

import type {
  BaseProps,
  DatePickerDatetimeVariablesType,
  DatePickerDateVariablesType,
  DatePickerMonthVariablesType,
  DatePickerQuarterVariablesType,
  DatePickerTimeVariablesType,
  DatePickerVariablesType,
  DatePickerWeekVariablesType,
  DatePickerYearVariablesType,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
} from '../tools';

export type DatePickerDateProps<T extends ElementType> = PropsWithoutRef<DateProps<T>, T, DatePickerDateVariablesType>;

export type DatePickerDatetimeProps<T extends ElementType> = PropsWithoutRef<
  DatetimeProps<T>,
  T,
  DatePickerDatetimeVariablesType
>;

export type DatePickerMonthProps<T extends ElementType> = PropsWithoutRef<
  MonthProps<T>,
  T,
  DatePickerMonthVariablesType
>;

export type DatePickerProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  DatePickerVariablesType,
  'onChange'
>;

export type DatePickerQuarterProps<T extends ElementType> = PropsWithoutRef<
  QuarterProps<T>,
  T,
  DatePickerQuarterVariablesType
>;

export type DatePickerTimeProps<T extends ElementType> = PropsWithoutRef<TimeProps<T>, T, DatePickerTimeVariablesType>;

export type DatePickerType = 'date' | 'datetime' | 'month' | 'quarter' | 'time' | 'week' | 'year';

export type DatePickerWeekProps<T extends ElementType> = PropsWithoutRef<WeekProps<T>, T, DatePickerWeekVariablesType>;

export type DatePickerYearProps<T extends ElementType> = PropsWithoutRef<YearProps<T>, T, DatePickerYearVariablesType>;

type DateProps<T extends ElementType> = BaseProps<T, DatePickerDateVariablesType> & {
  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date;
};

type DatetimeProps<T extends ElementType> = BaseProps<T, DatePickerDatetimeVariablesType> & {
  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date;
};

type MonthProps<T extends ElementType> = BaseProps<T, DatePickerMonthVariablesType> & {
  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date;
};

type Props<T extends ElementType> = BaseProps<T, DatePickerVariablesType> & {
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
  onChange?: (value: string, date: Date, type: DatePickerType) => void;

  /**
   * onInputValueAvailable.
   */
  onInputValueAvailable?: (value: string, date: Date, type: DatePickerType) => boolean | undefined;

  /**
   * pickerType.
   */
  pickerType?: DatePickerType;

  /**
   * placeholder.
   */
  placeholder?: string;

  /**
   * value.
   */
  value?: string;
};

type QuarterProps<T extends ElementType> = BaseProps<T, DatePickerQuarterVariablesType> & {
  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date;
};

type TimeProps<T extends ElementType> = BaseProps<T, DatePickerTimeVariablesType> & {
  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date;
};

type WeekProps<T extends ElementType> = BaseProps<T, DatePickerWeekVariablesType> & {
  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date;
};

type YearProps<T extends ElementType> = BaseProps<T, DatePickerYearVariablesType> & {
  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onDateClick.
   */
  onDateClick?: (date: { date: Date }) => void;

  /**
   * selectedDate.
   */
  selectedDate?: Date;
};
