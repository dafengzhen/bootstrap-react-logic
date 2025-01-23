```tsx
const [current6, setCurrent6] = useState(0);

const [options6] = useState<StepOption[]>(
  Array(3).fill({
    icon: <i className="bi bi-check-circle text-3xl"></i>,
    title: 'Step',
  }),
);

function onClick6() {
  setCurrent6(current6 > options6.length - 1 ? 0 : current6 + 1);
}

<Steps current={current6} onClick={onClick6} options={options6} />;
```
