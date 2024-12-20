```tsx
const [options3] = useState<CascaderOption[]>([
  {
    children: [{ text: 'Option 1-1' }, { text: 'Option 1-2' }],
    text: 'Option 1',
  },
  {
    children: [{ text: 'Option 2-1' }, { text: 'Option 2-2' }],
    text: 'Option 2',
  },
  {
    children: [
      {
        children: [{ active: true, text: 'Option 3-1-1' }, { text: 'Option 3-1-2' }],
        text: 'Option 3-1',
      },
    ],
    text: 'Option 3',
  },
]);

const [options4] = useState<CascaderOption[]>([
  {
    children: [{ text: 'Option 1-1' }, { text: 'Option 1-2' }],
    text: 'Option 1',
  },
  {
    children: [{ text: 'Option 2-1' }, { text: 'Option 2-2' }],
    text: 'Option 2',
  },
  {
    children: [
      {
        children: [{ disabled: true, text: 'Option 3-1-1' }, { text: 'Option 3-1-2' }],
        text: 'Option 3-1',
      },
    ],
    text: 'Option 3',
  },
]);

<Cascader disabled options={options3} />

<Cascader options={options4} />
```
