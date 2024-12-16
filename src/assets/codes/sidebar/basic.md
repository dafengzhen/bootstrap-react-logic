```tsx
const header = {
  icon: <i className="bi bi-layout-sidebar d-inline-flex fs-3"></i>,
  name: <span className="fs-5">Sidebar</span>,
};

const Footer = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      <span className="me-3">Is this useful?</span>
      <button aria-label="Like" className="btn btn-secondary py-1 rounded-3 border-0" type="button">
        <i className="bi bi-hand-thumbs-up"></i>
      </button>
      <button aria-label="Dislike" className="btn btn-secondary py-1 rounded-3 border-0" type="button">
        <i className="bi bi-hand-thumbs-down"></i>
      </button>
    </div>
  );
};

const [collapsible, setCollapsible] = useState(true);

const [options, setOptions] = useState<SidebarOption[]>([
  {
    active: true,
    icon: <i className="bi bi-house-door"></i>,
    name: 'Home',
  },
  {
    icon: <i className="bi bi-speedometer2"></i>,
    name: 'Dashboard',
  },
  {
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
  onOptionChange={setOptions}
  options={options}
  style={{ height: 512 }}
/>

<Sidebar
  className="shadow"
  footer={<Footer />}
  header={header}
  onOptionChange={setOptions}
  options={options}
  style={{ height: 512 }}
/>

<Sidebar
  className="shadow"
  collapsible={collapsible}
  footer={<Footer />}
  header={{
    ...header,
    end: (
      <i
        className="bi bi-chevron-left d-inline-flex tw-cursor-pointer"
        onClick={() => setCollapsible(!collapsible)}
      ></i>
    ),
  }}
  onCollapse={() => {
    setCollapsible(!collapsible);
  }}
  onOptionChange={setOptions}
  options={options}
  style={{ height: 512 }}
/>
```
