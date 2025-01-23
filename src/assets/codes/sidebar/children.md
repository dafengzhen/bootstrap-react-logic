```tsx
const [collapsible2, setCollapsible2] = useState(true);
const [collapsible3, setCollapsible3] = useState(true);

const [options2, setOptions2] = useState<SidebarOption[]>([
  {
    active: true,
    icon: <i className="bi bi-house-door"></i>,
    name: 'Home',
  },
  {
    children: [
      {
        icon: <i className="bi bi-bar-chart"></i>,
        name: 'Analytics',
      },
      {
        icon: <i className="bi bi-graph-up"></i>,
        name: 'Performance',
      },
    ],
    icon: <i className="bi bi-speedometer2"></i>,
    name: 'Dashboard',
  },
  {
    children: [
      {
        icon: <i className="bi bi-clock"></i>,
        name: 'Pending Orders',
      },
    ],
    icon: <i className="bi bi-table"></i>,
    name: 'Orders',
  },
  {
    icon: <i className="bi bi-grid"></i>,
    name: 'Products',
  },
  {
    icon: <i className="bi bi-person-circle"></i>,
    name: 'Customers',
  },
]);
const [options3, setOptions3] = useState<SidebarOption[]>([
  {
    active: true,
    icon: <i className="bi bi-house-door"></i>,
    name: 'Home',
  },
  {
    children: [
      {
        name: 'Analytics',
      },
      {
        name: 'Performance',
      },
    ],
    icon: <i className="bi bi-speedometer2"></i>,
    name: 'Dashboard',
  },
  {
    children: [
      {
        name: 'Pending Orders',
      },
    ],
    icon: <i className="bi bi-table"></i>,
    name: 'Orders',
  },
  {
    icon: <i className="bi bi-grid"></i>,
    name: 'Products',
  },
  {
    icon: <i className="bi bi-person-circle"></i>,
    name: 'Customers',
  },
]);

<Sidebar
  className="shadow"
  dark
  footer={<Footer />}
  header={header}
  onOptionChange={setOptions2}
  options={options2}
  style={{ height: 512 }}
/>

<Sidebar
  className="shadow"
  footer={<Footer />}
  header={header}
  onOptionChange={setOptions3}
  options={options3}
  style={{ height: 512 }}
/>

<Sidebar
  className="shadow"
  collapsible={collapsible2}
  footer={<Footer />}
  header={{
    ...header,
    end: (
      <i
        className="bi bi-chevron-left d-inline-flex cursor-pointer"
        onClick={() => setCollapsible2(!collapsible2)}
      ></i>
    ),
  }}
  onCollapse={() => {
    setCollapsible2(!collapsible2);
  }}
  onOptionChange={setOptions2}
  options={options2}
  style={{ height: 512 }}
/>
```
