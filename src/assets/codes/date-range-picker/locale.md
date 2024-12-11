```tsx
import { zhCN } from 'date-fns/locale';

const [value10, setValue10] = useState<string[]>([]);

<DateRangePicker locale={zhCN} onChange={setValue10} value={value10} />;
```
