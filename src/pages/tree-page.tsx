import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Tree, type TreeOption } from '@lib/tree';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

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

export default function BadgePage() {
  const navigation = useNavigation();
  const { t: tTreeComponentProps } = useTranslation(['treeComponentProps']);
  const { t: tTreePage } = useTranslation(['treePage']);
  const state = useState(codes);

  const [treeData, setTreeData] = useState<TreeOption[]>(getTreeData());
  const [treeData2, setTreeData2] = useState<TreeOption[]>(getTreeData());
  const [treeData3, setTreeData3] = useState<TreeOption[]>(getTreeData2());
  const [treeData4, setTreeData4] = useState<TreeOption[]>(getTreeData2());
  const [treeData5, setTreeData5] = useState<TreeOption[]>(getTreeData2());

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
              setTreeData2(toggleNode(option));
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
              setTreeData4(toggleNode(option));
            }}
            onToggle={({ option, toggleNode }) => {
              option.expanded = !option.expanded;
              setTreeData4(toggleNode(option));
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

      <PropsIndicator />

      <Example hash="treeComponentProps" items={[]} props state={state} t={tTreeComponentProps} />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
