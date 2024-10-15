const buttonCodes = {
  basic: {
    code: `
<Button>Base class</Button>
    `,
  },
  variant: {
    code: `
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
<Button variant="light">Light</Button>
<Button variant="dark">Dark</Button>
<Button variant="link">Link</Button>
        `,
  },
  outline: {
    code: `
<Button outline="primary">Primary</Button>
<Button outline="secondary">Secondary</Button>
<Button outline="success">Success</Button>
<Button outline="danger">Danger</Button>
<Button outline="warning">Warning</Button>
<Button outline="info">Info</Button>
<Button outline="light">Light</Button>
<Button outline="dark">Dark</Button>
      `,
  },
  size: {
    code: `
<Button variant="primary" size="lg">
  Large
</Button>
<Button variant="secondary" size="sm">
  Small
</Button>
<Button
  variant="secondary"
  size={{
    paddingY: '0.25rem',
    paddingX: '0.5rem',
    fontSize: '0.75rem'
  }}
>
  Custom
</Button>
      `,
  },
  disabledState: {
    code: `
<Button variant="primary" disabled>
  Primary
</Button>
<Button variant="secondary" disabled>
  Secondary
</Button>
<Button as="a" href="#" variant="success" disabled>
  Link
</Button>
    `,
  },
  blockButton: {
    code: `
<div className="d-grid gap-2">
  <Button variant="primary">Primary</Button>
  <Button variant="primary">Primary</Button>
</div>

<div className="d-grid gap-2 d-md-flex">
  <Button variant="primary">Primary</Button>
  <Button variant="primary">Primary</Button>
</div>

<div className="d-grid gap-2 col-6 mx-auto">
  <Button variant="primary">Primary</Button>
  <Button variant="primary">Primary</Button>
</div>
    `,
  },
  toggleState: {
    code: `
<Button active>Button</Button>
<Button active disabled>
  Button
</Button>
<Button variant="primary" active>
  Primary
</Button>
<Button variant="primary" active disabled>
  Primary
</Button>
    `,
  },
  isLoading: {
    code: `
<Button variant="primary" isLoading>
  Primary
</Button>
<Button variant="secondary" isLoading>
  Secondary
</Button>
    `,
  },
  rounded: {
    code: `
<Button outline="primary" rounded>
  Primary
</Button>
<Button outline="secondary" rounded="sm">
  Secondary
</Button>
<Button outline="success" rounded="md">
  Success
</Button>
<Button outline="danger" rounded="lg">
  Danger
</Button>
<Button outline="warning" rounded="xl">
  Warning
</Button>
<Button outline="info" rounded="xxl">
  Info
</Button>
<Button outline="info" rounded="circle">
  C
</Button>
<Button outline="info" rounded="pill">
  Pill
</Button>
    `,
  },
  icon: {
    code: `
<Button
  variant="primary"
  startContent={<i className="bi bi-arrow-up me-1"></i>}
>
  Up
</Button>
<Button
  variant="secondary"
  endContent={<i className="bi bi-arrow-down ms-1"></i>}
>
  Down
</Button>
<Button variant="success">
  <i className="bi bi-arrow-left"></i>
</Button>
    `,
  },
  customStyle: {
    code: `
<Button className="border-0 tw-bg-gradient-to-r tw-from-amber-500 tw-to-pink-500 tw-text-white">
  Custom
</Button>
    `,
  },
  example: {
    code: `
const [mySize, setMySize] = useState<'lg' | 'sm'>('sm');

function onClickChangeSizeTest() {
  setMySize(mySize === 'sm' ? 'lg' : 'sm');
}

<Button
  size={mySize}
  variant="primary"
  onClick={onClickChangeSizeTest}
>
  Click Change Button Size ({mySize})
</Button>
    `,
  },
};

export default buttonCodes;
