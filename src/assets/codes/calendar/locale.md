```tsx
import { zhCN } from 'date-fns/locale';

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

<Calendar
  events={events}
  locale={zhCN}
  onDateClick={handleDateClick}
  onMonthChange={handleMonthChange}
  selectedDate={selectedDate}
  style={{ width: 256 }}
/>;
```
