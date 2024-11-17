import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Scrollspy } from '@lib/scrollspy';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/scrollspy/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

/// basic

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

/// nestedNav

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

/// listGroup

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

/// simpleAnchors

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

const Section4 = ({ sectionId }: { sectionId: SectionId4 }) => {
  const { h4, p } = sections4[sectionId];
  return (
    <>
      <h4 id={sectionId}>{h4}</h4>
      <p>{p}</p>
    </>
  );
};

///

export default function BadgePage() {
  const navigation = useNavigation();
  const { t: tScrollspyComponentProps } = useTranslation(['scrollspyComponentProps']);
  const { t: tScrollspyPage } = useTranslation(['scrollspyPage']);
  const state = useState(codes);

  const [activeSection, setActiveSection] = useState<null | string>(sectionIds[0]);
  const [activeSection2, setActiveSection2] = useState<null | string>(sectionIds2[0]);
  const [activeSection3, setActiveSection3] = useState<null | string>(sectionIds3[0]);
  const [activeSection4, setActiveSection4] = useState<null | string>(sectionIds4[0]);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tScrollspyPage}>
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
          smoothScroll
          tabIndex={0}
        >
          {() => sectionIds.map((sectionId) => <Section key={sectionId} sectionId={sectionId} />)}
        </Scrollspy>
      </Example>

      <Example hash="nestedNav" state={state} t={tScrollspyPage}>
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
            <Scrollspy
              className="scrollspy-example-2"
              onActiveChange={setActiveSection2}
              sectionIds={sectionIds2}
              smoothScroll
              tabIndex={0}
            >
              {() => sectionIds2.map((sectionId) => <Section2 key={sectionId} sectionId={sectionId} />)}
            </Scrollspy>
          </div>
        </div>
      </Example>

      <Example hash="listGroup" state={state} t={tScrollspyPage}>
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
            <Scrollspy
              className="scrollspy-example"
              onActiveChange={setActiveSection3}
              sectionIds={sectionIds3}
              smoothScroll
              tabIndex={0}
            >
              {() => sectionIds3.map((sectionId) => <Section3 key={sectionId} sectionId={sectionId} />)}
            </Scrollspy>
          </div>
        </div>
      </Example>

      <Example hash="simpleAnchors" state={state} t={tScrollspyPage}>
        <div className="row">
          <div className="col-4">
            <div
              className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center"
              id="simple-list-example"
            >
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
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="scrollspyComponentProps"
        items={[
          {
            attr: 'children',
            default: '',
            desc: tScrollspyComponentProps('scrollspy.desc.children'),
            type: <span className="badge text-bg-secondary ms-1">(activeId: null | string) =&gt; ReactNode</span>,
          },
          {
            attr: 'onActiveChange',
            default: '',
            desc: tScrollspyComponentProps('scrollspy.desc.onActiveChange'),
            type: <span className="badge text-bg-secondary ms-1">(id: null | string) =&gt; void</span>,
          },
          {
            attr: 'rootMargin',
            default: '0px 0px -25%',
            desc: tScrollspyComponentProps('scrollspy.desc.rootMargin'),
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
          },
          {
            attr: 'sectionIds',
            default: '',
            desc: tScrollspyComponentProps('scrollspy.desc.sectionIds'),
            type: <span className="badge text-bg-secondary ms-1">string[]</span>,
          },
          {
            attr: 'smoothScroll',
            default: '',
            desc: tScrollspyComponentProps('scrollspy.desc.smoothScroll'),
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
          },
          {
            attr: 'threshold',
            default: '0.5',
            desc: tScrollspyComponentProps('scrollspy.desc.threshold'),
            type: <span className="badge text-bg-secondary ms-1">number | number[]</span>,
          },
        ]}
        props
        state={state}
        t={tScrollspyComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
