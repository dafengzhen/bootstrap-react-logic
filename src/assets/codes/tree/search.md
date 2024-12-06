```tsx
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

const search = useRef<HTMLInputElement>(null);
const [searchTerm, setSearchTerm] = useState('');

const [treeData7, setTreeData7] = useState<TreeOption[]>(getTreeData4());
const [treeData8, setTreeData8] = useState<TreeOption[]>(getTreeData4());

function onClickSearch() {
  setSearchTerm(search.current?.value ?? '');
}

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

<Tree
  checkbox
  label={(item) => (
    <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
  )}
  onOptionChange={setTreeData7}
  options={treeData7}
  searchTerm={searchTerm}
/>

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
```
