```tsx
type SectionId2 = 'item-1' | 'item-1-1' | 'item-1-2' | 'item-2' | 'item-3' | 'item-3-1' | 'item-3-2';

const sectionIds2: SectionId2[] = ['item-1', 'item-1-1', 'item-1-2', 'item-2', 'item-3', 'item-3-1', 'item-3-2'];

const sections2 = {
  'item-1': {
    h4: 'Item 1',
    p1: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
    p2: 'Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.',
  },
  'item-1-1': {
    h4: 'Item 1-1',
    p1: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
    p2: 'Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.',
  },
  'item-1-2': {
    h4: 'Item 1-2',
    p1: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
    p2: 'Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.',
  },
  'item-2': {
    h4: 'Item 2',
    p1: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
    p2: 'Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.',
  },
  'item-3': {
    h4: 'Item 3',
    p1: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
    p2: 'Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.',
  },
  'item-3-1': {
    h4: 'Item 3-1',
    p1: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
    p2: 'Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.',
  },
  'item-3-2': {
    h4: 'Item 3-2',
    p1: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
    p2: 'Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.',
  },
};

const Section2 = ({ sectionId }: { sectionId: SectionId2 }) => {
  const { h4, p1, p2 } = sections2[sectionId];
  return (
    <div id={sectionId}>
      <h4>{h4}</h4>
      <p>{p1}</p>
      <p>{p2}</p>
    </div>
  );
};

<div className="row">
  <div className="col-4">
    <nav className="h-100 flex-column align-items-stretch pe-4 border-end" id="navbar-example3">
      <nav className="nav nav-pills flex-column">
        <a
          className={`nav-link ${activeSection2 === 'item-1' || activeSection2 === 'item-1-1' || activeSection2 === 'item-1-2' ? 'active' : ''}`}
          href="#item-1"
        >
          Item 1
        </a>
        <nav className="nav nav-pills flex-column">
          <a className={`nav-link ms-3 my-1 ${activeSection2 === 'item-1-1' ? 'active' : ''}`} href="#item-1-1">
            Item 1-1
          </a>
          <a className={`nav-link ms-3 my-1 ${activeSection2 === 'item-1-2' ? 'active' : ''}`} href="#item-1-2">
            Item 1-2
          </a>
        </nav>
        <a className={`nav-link ${activeSection2 === 'item-2' ? 'active' : ''}`} href="#item-2">
          Item 2
        </a>
        <a
          className={`nav-link ${activeSection2 === 'item-3' || activeSection2 === 'item-3-1' || activeSection2 === 'item-3-2' ? 'active' : ''}`}
          href="#item-3"
        >
          Item 3
        </a>
        <nav className="nav nav-pills flex-column">
          <a className={`nav-link ms-3 my-1 ${activeSection2 === 'item-3-1' ? 'active' : ''}`} href="#item-3-1">
            Item 3-1
          </a>
          <a className={`nav-link ms-3 my-1 ${activeSection2 === 'item-3-2' ? 'active' : ''}`} href="#item-3-2">
            Item 3-2
          </a>
        </nav>
      </nav>
    </nav>
  </div>

  <div className="col-8">
    <Scrollspy className="scrollspy-example-2" onActiveChange={setActiveSection2} sectionIds={sectionIds2} tabIndex={0}>
      {() => sectionIds2.map((sectionId) => <Section2 key={sectionId} sectionId={sectionId} />)}
    </Scrollspy>
  </div>
</div>;
```
