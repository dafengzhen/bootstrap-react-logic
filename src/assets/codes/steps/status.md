```tsx
const [options7] = useState<StepOption[]>([
  { status: 'complete', title: 'Step 1' },
  { status: 'current', title: 'Step 2' },
  { status: 'upcoming', title: 'Step 3' },
]);

<Steps options={options7} />;
```
