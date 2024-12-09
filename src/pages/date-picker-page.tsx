import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { DatePicker } from '@lib/date-picker';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

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

      <PropsIndicator />

      <Example hash="datePickerComponentProps" items={[]} props state={state} t={tDatePickerComponentProps} />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
