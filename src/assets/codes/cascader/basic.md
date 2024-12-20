```tsx
const [options] = useState<CascaderOption[]>([
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
        children: [{ text: 'Option 3-1-1' }, { text: 'Option 3-1-2' }],
        text: 'Option 3-1',
      },
    ],
    text: 'Option 3',
  },
]);

const [options2] = useState<CascaderOption[]>([
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

<Cascader options={options} />

<Cascader options={options2} />
```
