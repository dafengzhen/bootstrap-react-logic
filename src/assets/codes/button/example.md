```tsx
const [mySize, setMySize] = (useState < 'lg') | ('sm' > 'sm');

function onClickChangeSizeTest() {
  setMySize(mySize === 'sm' ? 'lg' : 'sm');
}

<Button size={mySize} variant="primary" onClick={onClickChangeSizeTest}>
  Click Change Button Size ({mySize})
</Button>;
```
