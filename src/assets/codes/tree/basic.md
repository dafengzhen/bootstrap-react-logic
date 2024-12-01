```tsx
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

const [treeData, setTreeData] = useState<TreeOption[]>(getTreeData());
const [treeData2, setTreeData2] = useState<TreeOption[]>(getTreeData());

<Tree
  label={(item) => (
    <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
  )}
  onOptionChange={setTreeData}
  options={treeData}
/>

<Tree
  label={(item) => (
    <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>
  )}
  onToggle={({ option, toggleNode }) => {
    option.expanded = !option.expanded;
    setTreeData2(toggleNode(option));
  }}
  options={treeData2}
/>
```
