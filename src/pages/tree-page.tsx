import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import TypesIndicator from '@components/types-indicator.tsx';
import { Tree, type TreeOption } from '@lib/tree';
import { transformCodeObj } from '@src/tools';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/tree/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

const getTreeData = () => [
  {
    children: [
      {
        children: [{ label: 'Grandchild 1' }, { label: 'Grandchild 2' }],
        expanded: true,
        label: 'Child 1',
      },
      { label: 'Child 2' },
    ],
    expanded: true,
    label: 'Root',
  },
];

const getTreeData2 = () => [
  {
    checked: false,
    children: [
      {
        checked: false,
        children: [
          { checked: false, label: 'Grandchild 1' },
          { checked: false, label: 'Grandchild 2' },
        ],
        expanded: true,
        label: 'Child 1',
      },
      { checked: false, label: 'Child 2' },
    ],
    expanded: true,
    label: 'Root',
  },
];

const getTreeData3 = () => [
  {
    checked: false,
    children: [
      {
        checked: false,
        children: [
          { checked: false, disabled: true, label: 'Grandchild 1' },
          { checked: false, label: 'Grandchild 2' },
        ],
        expanded: true,
        label: 'Child 1',
      },
      { checked: true, disabled: true, label: 'Child 2' },
    ],
    expanded: true,
    label: 'Root',
  },
];

const getTreeData4 = () => [
  {
    checked: false,
    children: [
      {
        checked: false,
        children: [
          { checked: false, label: 'Grandchild 1' },
          { checked: false, label: 'Grandchild 2' },
        ],
        expanded: true,
        label: 'Child 1',
      },
      { checked: true, label: 'Child 2' },
    ],
    expanded: true,
    label: 'Root',
  },
];

export default function BadgePage() {
  const navigation = useNavigation();
  const { t: tTreeComponentProps } = useTranslation(['treeComponentProps']);
  const { t: tTreePage } = useTranslation(['treePage']);
  const state = useState(codes);

  const search = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [treeData, setTreeData] = useState<TreeOption[]>(getTreeData());
  const [treeData2, setTreeData2] = useState<TreeOption[]>(getTreeData());
  const [treeData3, setTreeData3] = useState<TreeOption[]>(getTreeData2());
  const [treeData4, setTreeData4] = useState<TreeOption[]>(getTreeData2());
  const [treeData5, setTreeData5] = useState<TreeOption[]>(getTreeData2());
  const [treeData6, setTreeData6] = useState<TreeOption[]>(getTreeData3());
  const [treeData7, setTreeData7] = useState<TreeOption[]>(getTreeData4());
  const [treeData8, setTreeData8] = useState<TreeOption[]>(getTreeData4());

  function onClickSearch() {
    setSearchTerm(search.current?.value ?? '');
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example gap3 hash="basic" state={state} t={tTreePage}>
        <div>
          <Tree
            label={(item) => (
              <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
            )}
            onOptionChange={setTreeData}
            options={treeData}
          />
        </div>

        <div>
          <Tree
            label={(item) => (
              <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
            )}
            onToggle={({ option, toggleNode }) => {
              option.expanded = !option.expanded;
              setTreeData2(toggleNode());
            }}
            options={treeData2}
          />
        </div>
      </Example>

      <Example gap3 hash="checkbox" state={state} t={tTreePage}>
        <div>
          <Tree
            checkbox
            label={(item) => (
              <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
            )}
            onOptionChange={setTreeData3}
            options={treeData3}
          />
        </div>

        <div>
          <Tree
            checkbox
            label={(item) => (
              <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
            )}
            onCheck={({ option, toggleNode }) => {
              option.checked = !option.checked;
              setTreeData4(toggleNode());
            }}
            onToggle={({ option, toggleNode }) => {
              option.expanded = !option.expanded;
              setTreeData4(toggleNode());
            }}
            options={treeData4}
          />
        </div>

        <div>
          <Tree
            checkbox
            checkMode="all"
            label={(item) => (
              <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
            )}
            onOptionChange={setTreeData5}
            options={treeData5}
          />
        </div>
      </Example>

      <Example gap3 hash="disabled" state={state} t={tTreePage}>
        <div>
          <Tree
            checkbox
            label={(item) => (
              <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
            )}
            onOptionChange={setTreeData6}
            options={treeData6}
          />
        </div>
      </Example>

      <Example gap3 hash="search" state={state} t={tTreePage}>
        <div className="d-flex gap-2" role="search">
          <input
            aria-label="Search"
            className="form-control"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            ref={search}
            type="search"
            value={searchTerm}
          />
          <button className="btn btn-outline-primary" onClick={onClickSearch} type="button">
            Search
          </button>
        </div>

        <div>
          <Tree
            checkbox
            label={(item) => (
              <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
            )}
            onOptionChange={setTreeData7}
            options={treeData7}
            searchTerm={searchTerm}
          />
        </div>

        <div>
          <Tree
            checkbox
            label={(item) => (
              <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
            )}
            onOptionChange={setTreeData8}
            onSearch={(options, searchTerm) => {
              const isEmptySearch = !searchTerm.trim();
              const searchValue = isEmptySearch ? '' : searchTerm.toLowerCase();

              const highlightNode = (node: TreeOption): TreeOption => ({
                ...node,
                children: node.children ? node.children.map(highlightNode) : undefined,
                highlighted: isEmptySearch || (node.label?.toLowerCase().includes(searchValue) ?? false),
              });

              return options.map(highlightNode);
            }}
            options={treeData8}
            searchTerm={searchTerm}
          />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="treeComponentProps"
        items={[
          {
            attr: 'checkbox',
            default: '',
            desc: tTreeComponentProps('tree.desc.checkbox'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'checkMode',
            default: '',
            desc: tTreeComponentProps('tree.desc.checkMode'),
            type: (
              <Link to="#treeComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  CheckMode
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
          {
            attr: 'label',
            default: '',
            desc: tTreeComponentProps('tree.desc.label'),
            type: <span className="badge text-bg-secondary">{'(option: TreeOption) => ReactNode'}</span>,
          },
          {
            attr: 'options',
            default: '',
            desc: tTreeComponentProps('tree.desc.options'),
            type: (
              <Link to="#treeComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  TreeOption[]
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
          {
            attr: 'searchTerm',
            default: '',
            desc: tTreeComponentProps('tree.desc.searchTerm'),
            type: <span className="badge text-bg-secondary">string</span>,
          },
          {
            attr: 'useCustomSearch',
            default: '',
            desc: tTreeComponentProps('tree.desc.useCustomSearch'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tTreeComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="treeComponentProps"
        items={[
          {
            attr: 'onCheck',
            default: '',
            desc: tTreeComponentProps('tree.desc.onCheck'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
          {
            attr: 'onOptionChange',
            default: '',
            desc: tTreeComponentProps('tree.desc.onOptionChange'),
            type: <span className="badge text-bg-secondary">{'(options: TreeOption[]) => void'}</span>,
          },
          {
            attr: 'onSearch',
            default: '',
            desc: tTreeComponentProps('tree.desc.onSearch'),
            type: (
              <span className="badge text-bg-secondary">
                {'(options: TreeOption[], searchTerm: string) => TreeOption[]'}
              </span>
            ),
          },
          {
            attr: 'onSelect',
            default: '',
            desc: tTreeComponentProps('tree.desc.onSelect'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
          {
            attr: 'onToggle',
            default: '',
            desc: tTreeComponentProps('tree.desc.onToggle'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
        ]}
        state={state}
        t={tTreeComponentProps}
      />

      <TypesIndicator />

      <Example
        hash="treeComponentProps"
        items={[
          {
            attr: 'CheckMode',
            default: '',
            desc: tTreeComponentProps('tree.desc.checkMode'),
            type: (
              <div className="row row-cols-auto g-1">
                <div className="col">
                  <span className="badge text-bg-secondary">all</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">child</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">childFirst</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">parent</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">parentFirst</span>
                </div>
              </div>
            ),
          },
          {
            attr: 'TreeOption',
            default: '',
            desc: tTreeComponentProps('tree.desc.treeOption'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="checked?: boolean" value={tTreeComponentProps('tree.options.checked')} />
                <OptionRow label="children?: TreeOption[]" value={tTreeComponentProps('tree.options.children')} />
                <OptionRow label="disabled?: boolean" value={tTreeComponentProps('tree.options.disabled')} />
                <OptionRow label="expanded?: boolean" value={tTreeComponentProps('tree.options.expanded')} />
                <OptionRow label="hidden?: boolean" value={tTreeComponentProps('tree.options.hidden')} />
                <OptionRow label="highlighted?: boolean" value={tTreeComponentProps('tree.options.highlighted')} />
                <OptionRow label="id?: number | string" value={tTreeComponentProps('tree.options.id')} />
                <OptionRow label="indeterminate?: boolean" value={tTreeComponentProps('tree.options.indeterminate')} />
                <OptionRow label="label?: string" value={tTreeComponentProps('tree.options.label')} />
                <OptionRow label="selectable?: boolean" value={tTreeComponentProps('tree.options.selectable')} />
              </div>
            ),
          },
        ]}
        state={state}
        t={tTreeComponentProps}
        types
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
