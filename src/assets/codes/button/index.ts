const buttonCodes = {
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
    fontSize: '0.75rem',
  }}
>
  Custom
</Button>
      `,
  },
};

export default buttonCodes;
