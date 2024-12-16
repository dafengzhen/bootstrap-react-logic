```tsx
const [collapsible3, setCollapsible3] = useState(true);

const [options4, setOptions4] = useState<SidebarOption[]>([
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
      {
        icon: <i className="bi bi-check-circle"></i>,
        name: 'Completed Orders',
      },
    ],
    icon: <i className="bi bi-table"></i>,
    name: 'Orders',
  },
  {
    children: [
      {
        icon: <i className="bi bi-tags"></i>,
        name: 'Categories',
      },
      {
        icon: <i className="bi bi-box-seam"></i>,
        name: 'Inventory',
      },
    ],
    icon: <i className="bi bi-grid"></i>,
    name: 'Products',
  },
  {
    children: [
      {
        icon: <i className="bi bi-person-plus"></i>,
        name: 'New Customers',
      },
      {
        icon: <i className="bi bi-people"></i>,
        name: 'Loyal Customers',
      },
    ],
    icon: <i className="bi bi-person-circle"></i>,
    name: 'Customers',
  },
]);

<Sidebar
  className="shadow"
  dark
  footer={<Footer />}
  header={header}
  onOptionChange={setOptions4}
  options={options4}
  style={{ height: 512 }}
/>

<Sidebar
  className="shadow"
  footer={<Footer />}
  header={header}
  onOptionChange={setOptions4}
  options={options4}
  style={{ height: 512 }}
/>

<Sidebar
  className="shadow"
  collapsible={collapsible3}
  footer={<Footer />}
  header={{
    ...header,
    end: (
      <i
        className="bi bi-chevron-left d-inline-flex tw-cursor-pointer"
        onClick={() => setCollapsible3(!collapsible3)}
      ></i>
    ),
  }}
  onCollapse={() => {
    setCollapsible3(!collapsible3);
  }}
  onOptionChange={setOptions4}
  options={options4}
  style={{ height: 512 }}
/>
```
