```tsx
const [current, setCurrent] = useState(0);
const [current2, setCurrent2] = useState(0);
const [current3, setCurrent3] = useState(0);
const [current4, setCurrent4] = useState(0);
const [current5, setCurrent5] = useState(0);

const [options] = useState<StepOption[]>(Array(3).fill({}));
const [options2] = useState<StepOption[]>([{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }]);
const [options3] = useState<StepOption[]>([
  { description: 'This is the first step', title: 'Step 1' },
  { description: 'This is the second step, currently in progress', title: 'Step 2' },
  { description: 'This is the upcoming step', title: 'Step 3' },
]);
const [options4] = useState<StepOption[]>([
  { description: 'This is the first step', title: 'Step 1' },
  { description: 'This is the second step, currently in progress', title: 'Step 2' },
  { description: 'This is the upcoming step', title: 'Step 3' },
]);
const [options5] = useState<StepOption[]>([
  { description: 'This is the first step', title: 'Step 1' },
  { description: 'This is the second step, currently in progress', title: 'Step 2' },
  { description: 'This is the upcoming step', title: 'Step 3' },
]);

function onClick() {
  setCurrent(current > options.length - 1 ? 0 : current + 1);
}

function onClick2() {
  setCurrent2(current2 > options2.length - 1 ? 0 : current2 + 1);
}

function onClick3() {
  setCurrent3(current3 > options3.length - 1 ? 0 : current3 + 1);
}

function onClick4() {
  setCurrent4(current4 > options4.length - 1 ? 0 : current4 + 1);
}

function onClick5() {
  setCurrent5(current5 > options5.length - 1 ? 0 : current5 + 1);
}

<Steps current={current} onClick={onClick} options={options} />

<Steps current={current} onClick={onClick} options={options} vertical />

<Steps current={current2} onClick={onClick2} options={options2} />

<Steps current={current3} onClick={onClick3} options={options3} />

<Steps current={current4} onClick={onClick4} options={options4} vertical />

<Steps center current={current5} onClick={onClick5} options={options5} />
```
