import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import TypesIndicator from '@components/types-indicator.tsx';
import { Calendar, type CalendarDate } from '@lib/calendar';
import { transformCodeObj } from '@src/tools';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/calendar/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

const events = [
  {
    allDay: false,
    description: 'Description for Event 90',
    endTime: '2024-12-26 11:00:31',
    id: 1,
    startTime: '2024-12-26 10:00:31',
    title: 'Event 75',
  },
  {
    allDay: true,
    description: 'Description for Event 31',
    endTime: '2024-12-04 14:06:31',
    id: 2,
    startTime: '2024-12-04 13:06:31',
    title: 'Event 99',
  },
  {
    allDay: true,
    description: 'Description for Event 44',
    endTime: '2024-12-04 19:47:04',
    id: 3,
    startTime: '2024-12-04 17:47:04',
    title: 'Event 0',
  },
  {
    allDay: true,
    description: 'Description for Event 39',
    endTime: '2024-12-20 04:14:27',
    id: 4,
    startTime: '2024-12-20 02:14:27',
    title: 'Event 74',
  },
  {
    allDay: false,
    description: 'Description for Event 49',
    endTime: '2024-12-20 19:51:02',
    id: 5,
    startTime: '2024-12-20 18:51:02',
    title: 'Event 25',
  },
  {
    allDay: false,
    description: 'Description for Event 48',
    endTime: '2024-12-20 08:06:40',
    id: 6,
    startTime: '2024-12-20 06:06:40',
    title: 'Event 7',
  },
];

export default function CalendarPage() {
  const navigation = useNavigation();
  const { t: tCalendarComponentProps } = useTranslation(['calendarComponentProps']);
  const { t: tCalendarPage } = useTranslation(['calendarPage']);
  const state = useState(codes);

  const [selectedDate] = useState<Date>(() => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
  });
  const [selectedDate2, setSelectedDate2] = useState<Date>(new Date());

  const handleDateClick = (day: CalendarDate) => {
    console.log('Clicked date:', day.date!.toLocaleDateString());
  };

  const handleDateClick2 = (day: CalendarDate) => {
    setSelectedDate2(day.date!);
  };

  const handleMonthChange = (year: number, month: number) => {
    console.log('Changed to:', year, month);
  };

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example gap3 hash="basic" state={state} t={tCalendarPage}>
        <Calendar events={events} onDateClick={handleDateClick} onMonthChange={handleMonthChange} />

        <Calendar
          events={events}
          onDateClick={handleDateClick}
          onMonthChange={handleMonthChange}
          selectedDate={selectedDate}
          style={{ width: 256 }}
        />
      </Example>

      <Example hash="locale" state={state} t={tCalendarPage}>
        <Calendar
          events={events}
          locale={zhCN}
          onDateClick={handleDateClick}
          onMonthChange={handleMonthChange}
          selectedDate={selectedDate}
          style={{ width: 256 }}
        />
      </Example>

      <Example hash="disabled" state={state} t={tCalendarPage}>
        <Calendar disabled style={{ width: 256 }} />
      </Example>

      <Example hash="readOnly" state={state} t={tCalendarPage}>
        <Calendar events={events} readOnly style={{ width: 256 }} />
      </Example>

      <Example hash="content" state={state} t={tCalendarPage}>
        <Calendar
          events={events}
          onDateClick={handleDateClick2}
          onMonthChange={handleMonthChange}
          style={{ width: 256 }}
          topContent={
            <div className="alert alert-secondary mx-2 p-3 py-2" role="alert">
              <strong>Selected</strong>: {selectedDate2 && format(selectedDate2, 'MM/dd/yyyy')}
            </div>
          }
        />
      </Example>

      <PropsIndicator />

      <Example
        hash="calendarComponentProps"
        items={[
          {
            attr: 'bottomContent',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.bottomContent'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'disabled',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'events',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.events'),
            type: (
              <Link to="#calendarComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  CalendarEvent[]
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
          {
            attr: 'forceRows',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.forceRows'),
            type: <span className="badge text-bg-secondary">5 | 6</span>,
          },
          {
            attr: 'initialMonth',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.initialMonth'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'initialYear',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.initialYear'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'locale',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.locale'),
            type: <span className="badge text-bg-secondary">Locale</span>,
          },
          {
            attr: 'readOnly',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.readOnly'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'selectedDate',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.selectedDate'),
            type: <span className="badge text-bg-secondary">Date</span>,
          },
          {
            attr: 'topContent',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.topContent'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'weekDays',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.weekDays'),
            type: <span className="badge text-bg-secondary">string[]</span>,
          },
          {
            attr: 'weekStartsOn',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.weekStartsOn'),
            type: <span className="badge text-bg-secondary">0 | 1</span>,
          },
        ]}
        props
        state={state}
        t={tCalendarComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="calendarComponentProps"
        items={[
          {
            attr: 'onDateClick',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.onDateClick'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
          {
            attr: 'onMonthChange',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.onMonthChange'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
        ]}
        state={state}
        t={tCalendarComponentProps}
      />

      <TypesIndicator />

      <Example
        hash="calendarComponentProps"
        items={[
          {
            attr: 'CalendarEvent',
            default: '',
            desc: tCalendarComponentProps('calendar.desc.calendarEvent'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="allDay?: boolean" value={tCalendarComponentProps('calendar.options.allDay')} />
                <OptionRow
                  label="description?: string"
                  value={tCalendarComponentProps('calendar.options.description')}
                />
                <OptionRow label="endTime?: string" value={tCalendarComponentProps('calendar.options.endTime')} />
                <OptionRow label="id?: number | string" value={tCalendarComponentProps('calendar.options.id')} />
                <OptionRow label="startTime?: string" value={tCalendarComponentProps('calendar.options.startTime')} />
                <OptionRow label="title: string" value={tCalendarComponentProps('calendar.options.title')} />
              </div>
            ),
          },
        ]}
        state={state}
        t={tCalendarComponentProps}
        types
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
