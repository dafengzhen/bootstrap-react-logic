import type { Locale } from 'date-fns';
import type { ElementType, ReactNode } from 'react';

import type { BaseProps, CalendarVariablesType, PropsWithoutRef } from '../tools';

export interface CalendarData {
  days: CalendarDate[];
  month: number;
  rows: CalendarDate[][];
  weekHeader: string[];
  year: number;
}

export interface CalendarDate {
  active?: boolean;
  date?: Date;
  events?: CalendarEvent[];
  isCurrentMonth?: boolean;
  isSelected?: boolean;
  isToday?: boolean;
  type?: 'header' | 'month' | 'quarter' | 'year';
  value?: string;
}

export interface CalendarEvent {
  allDay?: boolean;
  description?: string;
  endTime?: string;
  id?: number | string;
  startTime?: string;
  title: string;
}

export type CalendarProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, CalendarVariablesType>;

type Props<T extends ElementType> = BaseProps<T, CalendarVariablesType> & {
  /**
   * bottomContent.
   */
  bottomContent?: ReactNode;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * events.
   */
  events?: CalendarEvent[];

  /**
   * forceRows.
   */
  forceRows?: 5 | 6;

  /**
   * initialMonth.
   */
  initialMonth?: number;

  /**
   * initialYear.
   */
  initialYear?: number;

  /**
   * locale.
   */
  locale?: Locale;

  /**
   * onDateClick.
   */
  onDateClick?: (date: CalendarDate) => void;

  /**
   * onMonthChange.
   */
  onMonthChange?: (year: number, month: number) => void;

  /**
   * readOnly.
   */
  readOnly?: boolean;

  /**
   * selectedDate.
   */
  selectedDate?: Date;

  /**
   * topContent.
   */
  topContent?: ReactNode;

  /**
   * weekDays.
   */
  weekDays?: string[];

  /**
   * weekStartsOn.
   */
  weekStartsOn?: 0 | 1;
};
