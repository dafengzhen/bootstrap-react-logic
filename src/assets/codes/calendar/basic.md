```tsx
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

const state = useState(codes);

const [selectedDate] = useState<Date>(() => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date;
});

const handleDateClick = (day: CalendarDate) => {
  console.log('Clicked date:', day.date.toLocaleDateString());
};

const handleMonthChange = (year: number, month: number) => {
  console.log('Changed to:', year, month);
};

<Calendar events={events} onDateClick={handleDateClick} onMonthChange={handleMonthChange} />

<Calendar
  events={events}
  onDateClick={handleDateClick}
  onMonthChange={handleMonthChange}
  selectedDate={selectedDate}
  style={{ width: 256 }}
/>
```
