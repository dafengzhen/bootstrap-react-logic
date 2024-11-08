```jsx
const [visible, setVisible] = useState(false);

<Dropdown
  autoClose
  toggle="Default dropdown"
  toggleProps={{
    variant: 'secondary',
  }}
  options={[
    {
      item: 'Menu item',
      href: '#',
    },
    {
      item: 'Menu item',
      href: '#',
    },
    {
      item: 'Menu item',
      href: '#',
    },
  ]}
/>

<Dropdown
  autoClose="inside"
  toggle="Clickable inside"
  toggleProps={{
    variant: 'secondary',
  }}
  options={[
    {
      item: 'Menu item',
      href: '#',
    },
    {
      item: 'Menu item',
      href: '#',
    },
    {
      item: 'Menu item',
      href: '#',
    },
  ]}
/>

<Dropdown
  autoClose="outside"
  toggle="Manual close"
  toggleProps={{
    variant: 'secondary',
  }}
  options={[
    {
      item: 'Menu item',
      href: '#',
    },
    {
      item: 'Menu item',
      href: '#',
    },
    {
      item: 'Menu item',
      href: '#',
    },
  ]}
/>

<Dropdown
  visible={visible}
  autoClose={false}
  toggle="Manual close"
  toggleProps={{
    variant: 'secondary',
    onClick: () => setVisible(!visible),
  }}
  options={[
    {
      item: 'Menu item',
      href: '#',
    },
    {
      item: 'Menu item',
      href: '#',
    },
    {
      item: 'Menu item',
      href: '#',
    },
  ]}
/>
```
