```tsx
type SectionId3 = 'list-item-1' | 'list-item-2' | 'list-item-3' | 'list-item-4';

const sectionIds3: SectionId3[] = ['list-item-1', 'list-item-2', 'list-item-3', 'list-item-4'];

const sections3 = {
  'list-item-1': {
    h4: 'Item 1',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
  'list-item-2': {
    h4: 'Item 2',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
  'list-item-3': {
    h4: 'Item 3',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
  'list-item-4': {
    h4: 'Item 4',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
};

const Section3 = ({ sectionId }: { sectionId: SectionId3 }) => {
  const { h4, p } = sections3[sectionId];
  return (
    <>
      <h4 id={sectionId}>{h4}</h4>
      <p>{p}</p>
    </>
  );
};

<div className="row">
  <div className="col-4">
    <div className="list-group" id="list-example">
      <a
        className={`list-group-item list-group-item-action ${activeSection3 === 'list-item-1' ? 'active' : ''}`}
        href="#list-item-1"
      >
        Item 1
      </a>
      <a
        className={`list-group-item list-group-item-action ${activeSection3 === 'list-item-2' ? 'active' : ''}`}
        href="#list-item-2"
      >
        Item 2
      </a>
      <a
        className={`list-group-item list-group-item-action ${activeSection3 === 'list-item-3' ? 'active' : ''}`}
        href="#list-item-3"
      >
        Item 3
      </a>
      <a
        className={`list-group-item list-group-item-action ${activeSection3 === 'list-item-4' ? 'active' : ''}`}
        href="#list-item-4"
      >
        Item 4
      </a>
    </div>
  </div>
  <div className="col-8">
    <Scrollspy className="scrollspy-example" onActiveChange={setActiveSection3} sectionIds={sectionIds3} tabIndex={0}>
      {() => sectionIds3.map((sectionId) => <Section3 key={sectionId} sectionId={sectionId} />)}
    </Scrollspy>
  </div>
</div>;
```
