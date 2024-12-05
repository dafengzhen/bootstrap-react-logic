```tsx
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

const [treeData6, setTreeData6] = useState<TreeOption[]>(getTreeData3());

<Tree
  checkbox
  label={(item) => <span className={`text-primary ${item.expanded ? 'fw-bold' : 'fw-normal'}`}>{item.label}</span>}
  onOptionChange={setTreeData6}
  options={treeData6}
/>;
```
