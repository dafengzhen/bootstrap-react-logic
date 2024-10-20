```tsx
const [mySize, setMySize] = useState<'lg' | 'sm'>('sm');

function onClickChangeSizeTest() {
  setMySize(mySize === 'sm' ? 'lg' : 'sm');
}

<ButtonGroup size={mySize}>
  <Button variant="primary" onClick={onClickChangeSizeTest}>
    Click
  </Button>
  <Button variant="primary" onClick={onClickChangeSizeTest}>
    Change Button
  </Button>
  <Button variant="primary" onClick={onClickChangeSizeTest}>
    Size ({mySize})
  </Button>
</ButtonGroup>;
```
