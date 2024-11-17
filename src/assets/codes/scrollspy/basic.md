```tsx
type SectionId =
  | 'scrollspyHeading1'
  | 'scrollspyHeading2'
  | 'scrollspyHeading3'
  | 'scrollspyHeading4'
  | 'scrollspyHeading5';

const sectionIds: SectionId[] = [
  'scrollspyHeading1',
  'scrollspyHeading2',
  'scrollspyHeading3',
  'scrollspyHeading4',
  'scrollspyHeading5',
];

const sections = {
  scrollspyHeading1: {
    h4: 'First heading',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
  scrollspyHeading2: {
    h4: 'Second heading',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
  scrollspyHeading3: {
    h4: 'Third heading',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
  scrollspyHeading4: {
    h4: 'Fourth heading',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
  scrollspyHeading5: {
    h4: 'Fifth heading',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
};

const Section = ({ sectionId }: { sectionId: SectionId }) => {
  const { h4, p } = sections[sectionId];
  return (
    <>
      <h4 id={sectionId}>{h4}</h4>
      <p>{p}</p>
    </>
  );
};

const [activeSection, setActiveSection] = useState<string | undefined>(sectionIds[0]);

<nav className="navbar bg-body-tertiary px-3 mb-3" id="navbar-example2">
  <a className="navbar-brand" href="#">
    Navbar
  </a>
  <ul className="nav nav-pills">
    <li className="nav-item">
      <a
        className={`nav-link ${activeSection === 'scrollspyHeading1' ? 'active' : ''}`}
        href="#scrollspyHeading1"
      >
        First
      </a>
    </li>
    <li className="nav-item">
      <a
        className={`nav-link ${activeSection === 'scrollspyHeading2' ? 'active' : ''}`}
        href="#scrollspyHeading2"
      >
        Second
      </a>
    </li>
    <li className="nav-item dropdown">
      <a
        aria-expanded="false"
        className={`nav-link dropdown-toggle ${activeSection === 'scrollspyHeading3' || activeSection === 'scrollspyHeading4' || activeSection === 'scrollspyHeading5' ? 'active' : ''}`}
        data-bs-toggle="dropdown"
        href="#"
        role="button"
      >
        Dropdown
      </a>
      <ul className="dropdown-menu">
        <li>
          <a
            className={`dropdown-item ${activeSection === 'scrollspyHeading3' ? 'active' : ''}`}
            href="#scrollspyHeading3"
          >
            Third
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${activeSection === 'scrollspyHeading4' ? 'active' : ''}`}
            href="#scrollspyHeading4"
          >
            Fourth
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            className={`dropdown-item ${activeSection === 'scrollspyHeading5' ? 'active' : ''}`}
            href="#scrollspyHeading5"
          >
            Fifth
          </a>
        </li>
      </ul>
    </li>
  </ul>
</nav>

<Scrollspy
  className="scrollspy-example bg-body-tertiary p-3 rounded-2"
  onActiveChange={setActiveSection}
  sectionIds={sectionIds}
  tabIndex={0}
>
  {() => sectionIds.map((sectionId) => <Section key={sectionId} sectionId={sectionId} />)}
</Scrollspy>
```
