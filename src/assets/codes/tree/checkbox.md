```tsx
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

const [treeData3, setTreeData3] = useState<TreeOption[]>(getTreeData2());
const [treeData4, setTreeData4] = useState<TreeOption[]>(getTreeData2());
const [treeData5, setTreeData5] = useState<TreeOption[]>(getTreeData2());

<Tree
  checkbox
  label={(item) => (
    <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
  )}
  onOptionChange={setTreeData3}
  options={treeData3}
/>

<Tree
  checkbox
  label={(item) => (
    <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
  )}
  onCheck={({ option, toggleNode }) => {
    option.checked = !option.checked;
    setTreeData4(toggleNode(option));
  }}
  onToggle={({ option, toggleNode }) => {
    option.expanded = !option.expanded;
    setTreeData4(toggleNode(option));
  }}
  options={treeData4}
/>

<Tree
  checkbox
  checkMode="all"
  label={(item) => (
    <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
  )}
  onOptionChange={setTreeData5}
  options={treeData5}
/>
```
