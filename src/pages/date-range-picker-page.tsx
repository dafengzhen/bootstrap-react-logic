import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import TypesIndicator from '@components/types-indicator.tsx';
import { DateRangePicker } from '@lib/date-range-picker';
import { transformCodeObj } from '@src/tools';
import { zhCN } from 'date-fns/locale';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/date-range-picker/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function DateRangePickerPage() {
  const navigation = useNavigation();
  const { t: tDateRangePickerComponentProps } = useTranslation(['dateRangePickerComponentProps']);
  const { t: tDateRangePickerPage } = useTranslation(['dateRangePickerPage']);
  const state = useState(codes);

  const [value, setValue] = useState<string[]>([]);
  const [value2, setValue2] = useState<string[]>([]);
  const [value3, setValue3] = useState<string[]>([]);
  const [value4, setValue4] = useState<string[]>([]);
  const [value5, setValue5] = useState<string[]>([]);
  const [value6, setValue6] = useState<string[]>([]);
  const [value7, setValue7] = useState<string[]>([]);
  const [value8, setValue8] = useState<string[]>([]);
  const [value9, setValue9] = useState<string[]>(['2024-12-10', '2024-12-12']);
  const [value10, setValue10] = useState<string[]>([]);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tDateRangePickerPage}>
        <DateRangePicker onChange={setValue} value={value} />
        <DateRangePicker onChange={setValue2} pickerType="week" value={value2} />
        <DateRangePicker onChange={setValue3} pickerType="month" value={value3} />
        <DateRangePicker onChange={setValue4} pickerType="quarter" value={value4} />
        <DateRangePicker onChange={setValue5} pickerType="year" value={value5} />
        <DateRangePicker onChange={setValue6} pickerType="datetime" value={value6} />
        <DateRangePicker onChange={setValue7} pickerType="time" value={value7} />
      </Example>

      <Example hash="disabled" state={state} t={tDateRangePickerPage}>
        <DateRangePicker disabled onChange={setValue8} value={value8} />
      </Example>

      <Example hash="readOnly" state={state} t={tDateRangePickerPage}>
        <DateRangePicker onChange={setValue9} readOnly value={value9} />
      </Example>

      <Example hash="locale" state={state} t={tDateRangePickerPage}>
        <DateRangePicker locale={zhCN} onChange={setValue10} value={value10} />
      </Example>

      <PropsIndicator />

      <Example
        hash="dateRangePickerComponentProps"
        items={[
          {
            attr: 'disabled',
            default: '',
            desc: tDateRangePickerComponentProps('dateRangePicker.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'locale',
            default: '',
            desc: tDateRangePickerComponentProps('dateRangePicker.desc.locale'),
            type: <span className="badge text-bg-secondary">Locale</span>,
          },
          {
            attr: 'pickerType',
            default: '',
            desc: tDateRangePickerComponentProps('dateRangePicker.desc.pickerType'),
            type: (
              <Link to="#dateRangePickerComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  DatePickerType
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
          {
            attr: 'placeholder',
            default: '',
            desc: tDateRangePickerComponentProps('dateRangePicker.desc.placeholder'),
            type: <span className="badge text-bg-secondary">string</span>,
          },
          {
            attr: 'readOnly',
            default: '',
            desc: tDateRangePickerComponentProps('dateRangePicker.desc.readOnly'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'value',
            default: '',
            desc: tDateRangePickerComponentProps('dateRangePicker.desc.value'),
            type: <span className="badge text-bg-secondary">string</span>,
          },
        ]}
        props
        state={state}
        t={tDateRangePickerComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="dateRangePickerComponentProps"
        items={[
          {
            attr: 'onChange',
            default: '',
            desc: tDateRangePickerComponentProps('dateRangePicker.desc.onChange'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
          {
            attr: 'onInputValueAvailable',
            default: '',
            desc: tDateRangePickerComponentProps('dateRangePicker.desc.onInputValueAvailable'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
        ]}
        state={state}
        t={tDateRangePickerComponentProps}
      />

      <TypesIndicator />

      <Example
        hash="dateRangePickerComponentProps"
        items={[
          {
            attr: 'DateRangePickerType',
            default: '',
            desc: tDateRangePickerComponentProps('dateRangePicker.desc.dateRangePickerType'),
            type: (
              <span className="badge text-bg-secondary">date | datetime | month | quarter | time | week | year</span>
            ),
          },
        ]}
        state={state}
        t={tDateRangePickerComponentProps}
        types
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
