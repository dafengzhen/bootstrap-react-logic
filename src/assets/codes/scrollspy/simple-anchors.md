```tsx
type SectionId4 =
  | 'simple-list-item-1'
  | 'simple-list-item-2'
  | 'simple-list-item-3'
  | 'simple-list-item-4'
  | 'simple-list-item-5';

const sectionIds4: SectionId4[] = [
  'simple-list-item-1',
  'simple-list-item-2',
  'simple-list-item-3',
  'simple-list-item-4',
  'simple-list-item-5',
];

const sections4 = {
  'simple-list-item-1': {
    h4: 'Item 1',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
  'simple-list-item-2': {
    h4: 'Item 2',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
  'simple-list-item-3': {
    h4: 'Item 3',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
  'simple-list-item-4': {
    h4: 'Item 4',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
  'simple-list-item-5': {
    h4: 'Item 4',
    p: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.",
  },
};

const [activeSection4, setActiveSection4] = useState<null | string>(sectionIds4[0]);

const Section4 = ({ sectionId }: { sectionId: SectionId4 }) => {
  const { h4, p } = sections4[sectionId];
  return (
    <>
      <h4 id={sectionId}>{h4}</h4>
      <p>{p}</p>
    </>
  );
};

<div className="row">
  <div className="col-4">
    <div className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center" id="simple-list-example">
      <a
        className={`p-1 rounded ${activeSection4 === 'simple-list-item-1' ? 'active' : ''}`}
        href="#simple-list-item-1"
      >
        Item 1
      </a>
      <a
        className={`p-1 rounded ${activeSection4 === 'simple-list-item-2' ? 'active' : ''}`}
        href="#simple-list-item-2"
      >
        Item 2
      </a>
      <a
        className={`p-1 rounded ${activeSection4 === 'simple-list-item-3' ? 'active' : ''}`}
        href="#simple-list-item-3"
      >
        Item 3
      </a>
      <a
        className={`p-1 rounded ${activeSection4 === 'simple-list-item-4' ? 'active' : ''}`}
        href="#simple-list-item-4"
      >
        Item 4
      </a>
      <a
        className={`p-1 rounded ${activeSection4 === 'simple-list-item-5' ? 'active' : ''}`}
        href="#simple-list-item-5"
      >
        Item 5
      </a>
    </div>
  </div>
  <div className="col-8">
    <Scrollspy
      className="scrollspy-example"
      onActiveChange={setActiveSection4}
      sectionIds={sectionIds4}
      smoothScroll
      tabIndex={0}
    >
      {() => sectionIds4.map((sectionId) => <Section4 key={sectionId} sectionId={sectionId} />)}
    </Scrollspy>
  </div>
</div>;
```
