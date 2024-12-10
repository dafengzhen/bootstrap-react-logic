import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import TypesIndicator from '@components/types-indicator.tsx';
import { DatePicker } from '@lib/date-picker';
import { transformCodeObj } from '@src/tools';
import { zhCN } from 'date-fns/locale';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/date-picker/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function DatePickerPage() {
  const navigation = useNavigation();
  const { t: tDatePickerComponentProps } = useTranslation(['datePickerComponentProps']);
  const { t: tDatePickerPage } = useTranslation(['datePickerPage']);
  const state = useState(codes);

  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('2024-12-10');
  const [value10, setValue10] = useState('');

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tDatePickerPage}>
        <DatePicker onChange={setValue} value={value} />
        <DatePicker onChange={setValue2} pickerType="week" value={value2} />
        <DatePicker onChange={setValue3} pickerType="month" value={value3} />
        <DatePicker onChange={setValue4} pickerType="quarter" value={value4} />
        <DatePicker onChange={setValue5} pickerType="year" value={value5} />
        <DatePicker onChange={setValue6} pickerType="datetime" value={value6} />
        <DatePicker onChange={setValue7} pickerType="time" value={value7} />
      </Example>

      <Example hash="disabled" state={state} t={tDatePickerPage}>
        <DatePicker disabled onChange={setValue8} value={value8} />
      </Example>

      <Example hash="readOnly" state={state} t={tDatePickerPage}>
        <DatePicker onChange={setValue9} readOnly value={value9} />
      </Example>

      <Example hash="locale" state={state} t={tDatePickerPage}>
        <DatePicker locale={zhCN} onChange={setValue10} value={value10} />
      </Example>

      <PropsIndicator />

      <Example
        hash="datePickerComponentProps"
        items={[
          {
            attr: 'disabled',
            default: '',
            desc: tDatePickerComponentProps('datePicker.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'locale',
            default: '',
            desc: tDatePickerComponentProps('datePicker.desc.locale'),
            type: <span className="badge text-bg-secondary">Locale</span>,
          },
          {
            attr: 'pickerType',
            default: '',
            desc: tDatePickerComponentProps('datePicker.desc.pickerType'),
            type: (
              <Link to="#datePickerComponentTypes">
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
            desc: tDatePickerComponentProps('datePicker.desc.placeholder'),
            type: <span className="badge text-bg-secondary">string</span>,
          },
          {
            attr: 'readOnly',
            default: '',
            desc: tDatePickerComponentProps('datePicker.desc.readOnly'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'value',
            default: '',
            desc: tDatePickerComponentProps('datePicker.desc.value'),
            type: <span className="badge text-bg-secondary">string</span>,
          },
        ]}
        props
        state={state}
        t={tDatePickerComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="datePickerComponentProps"
        items={[
          {
            attr: 'onChange',
            default: '',
            desc: tDatePickerComponentProps('datePicker.desc.onChange'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
          {
            attr: 'onInputValueAvailable',
            default: '',
            desc: tDatePickerComponentProps('datePicker.desc.onInputValueAvailable'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
        ]}
        state={state}
        t={tDatePickerComponentProps}
      />

      <TypesIndicator />

      <Example
        hash="datePickerComponentProps"
        items={[
          {
            attr: 'DatePickerType',
            default: '',
            desc: tDatePickerComponentProps('datePicker.desc.datePickerType'),
            type: (
              <span className="badge text-bg-secondary">date | datetime | month | quarter | time | week | year</span>
            ),
          },
        ]}
        state={state}
        t={tDatePickerComponentProps}
        types
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
