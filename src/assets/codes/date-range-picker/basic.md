```tsx
const [value, setValue] = useState<string[]>([]);
const [value2, setValue2] = useState<string[]>([]);
const [value3, setValue3] = useState<string[]>([]);
const [value4, setValue4] = useState<string[]>([]);
const [value5, setValue5] = useState<string[]>([]);
const [value6, setValue6] = useState<string[]>([]);
const [value7, setValue7] = useState<string[]>([]);

<DateRangePicker onChange={setValue} value={value} />

<DateRangePicker onChange={setValue2} pickerType="week" value={value2} />

<DateRangePicker onChange={setValue3} pickerType="month" value={value3} />

<DateRangePicker onChange={setValue4} pickerType="quarter" value={value4} />

<DateRangePicker onChange={setValue5} pickerType="year" value={value5} />

<DateRangePicker onChange={setValue6} pickerType="datetime" value={value6} />

<DateRangePicker onChange={setValue7} pickerType="time" value={value7} />
```
