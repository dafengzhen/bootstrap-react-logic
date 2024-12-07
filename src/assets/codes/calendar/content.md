```tsx
const [selectedDate2, setSelectedDate2] = useState<Date>(new Date());

const handleDateClick2 = (day: CalendarDate) => {
  setSelectedDate2(day.date);
};

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
/>;
```
