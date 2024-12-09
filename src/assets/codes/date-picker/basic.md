```jsx
const [value, setValue] = useState('');
const [value2, setValue2] = useState('');
const [value3, setValue3] = useState('');
const [value4, setValue4] = useState('');
const [value5, setValue5] = useState('');
const [value6, setValue6] = useState('');
const [value7, setValue7] = useState('');

<DatePicker onChange={setValue} value={value} />

<DatePicker onChange={setValue2} pickerType="week" value={value2} />

<DatePicker onChange={setValue3} pickerType="month" value={value3} />

<DatePicker onChange={setValue4} pickerType="quarter" value={value4} />

<DatePicker onChange={setValue5} pickerType="year" value={value5} />

<DatePicker onChange={setValue6} pickerType="datetime" value={value6} />

<DatePicker onChange={setValue7} pickerType="time" value={value7} />
```
