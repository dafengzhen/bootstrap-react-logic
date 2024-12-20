import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import TypesIndicator from '@components/types-indicator.tsx';
import { Cascader, type CascaderOption } from '@lib/cascader';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/cascader/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function CascaderPage() {
  const navigation = useNavigation();
  const { t: tCascaderComponentProps } = useTranslation(['cascaderComponentProps']);
  const { t: tCascaderPage } = useTranslation(['cascaderPage']);
  const state = useState(codes);

  const [options] = useState<CascaderOption[]>([
    {
      children: [{ text: 'Option 1-1' }, { text: 'Option 1-2' }],
      text: 'Option 1',
    },
    {
      children: [{ text: 'Option 2-1' }, { text: 'Option 2-2' }],
      text: 'Option 2',
    },
    {
      children: [
        {
          children: [{ text: 'Option 3-1-1' }, { text: 'Option 3-1-2' }],
          text: 'Option 3-1',
        },
      ],
      text: 'Option 3',
    },
  ]);
  const [options2] = useState<CascaderOption[]>([
    {
      children: [{ text: 'Option 1-1' }, { text: 'Option 1-2' }],
      text: 'Option 1',
    },
    {
      children: [{ text: 'Option 2-1' }, { text: 'Option 2-2' }],
      text: 'Option 2',
    },
    {
      children: [
        {
          children: [{ active: true, text: 'Option 3-1-1' }, { text: 'Option 3-1-2' }],
          text: 'Option 3-1',
        },
      ],
      text: 'Option 3',
    },
  ]);
  const [options3] = useState<CascaderOption[]>([
    {
      children: [{ text: 'Option 1-1' }, { text: 'Option 1-2' }],
      text: 'Option 1',
    },
    {
      children: [{ text: 'Option 2-1' }, { text: 'Option 2-2' }],
      text: 'Option 2',
    },
    {
      children: [
        {
          children: [{ active: true, text: 'Option 3-1-1' }, { text: 'Option 3-1-2' }],
          text: 'Option 3-1',
        },
      ],
      text: 'Option 3',
    },
  ]);
  const [options4] = useState<CascaderOption[]>([
    {
      children: [{ text: 'Option 1-1' }, { text: 'Option 1-2' }],
      text: 'Option 1',
    },
    {
      children: [{ text: 'Option 2-1' }, { text: 'Option 2-2' }],
      text: 'Option 2',
    },
    {
      children: [
        {
          children: [{ disabled: true, text: 'Option 3-1-1' }, { text: 'Option 3-1-2' }],
          text: 'Option 3-1',
        },
      ],
      text: 'Option 3',
    },
  ]);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tCascaderPage}>
        <Cascader options={options} />
        <Cascader options={options2} />
      </Example>

      <Example hash="disabled" state={state} t={tCascaderPage}>
        <Cascader disabled options={options3} />
        <Cascader options={options4} />
      </Example>

      <PropsIndicator />

      <Example
        hash="cascaderComponentProps"
        items={[
          {
            attr: 'disabled',
            default: '',
            desc: tCascaderComponentProps('cascader.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'options',
            default: '',
            desc: tCascaderComponentProps('cascader.desc.options'),
            type: (
              <Link to="#cascaderComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  IOption[]
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
          {
            attr: 'placeholder',
            default: '',
            desc: tCascaderComponentProps('cascader.desc.placeholder'),
            type: <span className="badge text-bg-secondary">string</span>,
          },
        ]}
        props
        state={state}
        t={tCascaderComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="cascaderComponentProps"
        items={[
          {
            attr: 'onChange',
            default: '',
            desc: tCascaderComponentProps('cascader.desc.onChange'),
            type: <span className="badge text-bg-secondary">{'onChange: (id: number | string) => void'}</span>,
          },
          {
            attr: 'onClear',
            default: '',
            desc: tCascaderComponentProps('cascader.desc.onClear'),
            type: <span className="badge text-bg-secondary">{'onClear: () => void'}</span>,
          },
        ]}
        state={state}
        t={tCascaderComponentProps}
      />

      <TypesIndicator />

      <Example
        hash="cascaderComponentProps"
        items={[
          {
            attr: 'IOption',
            default: '',
            desc: tCascaderComponentProps('cascader.desc.iOption'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="active?: boolean" value={tCascaderComponentProps('cascader.options.active')} />
                <OptionRow label="children?: IOption[]" value={tCascaderComponentProps('cascader.options.children')} />
                <OptionRow label="disabled?: boolean" value={tCascaderComponentProps('cascader.options.disabled')} />
                <OptionRow label="id?: number | string" value={tCascaderComponentProps('cascader.options.id')} />
                <OptionRow label="level?: number" value={tCascaderComponentProps('cascader.options.level')} />
                <OptionRow
                  label="parentId?: number | string"
                  value={tCascaderComponentProps('cascader.options.parentId')}
                />
                <OptionRow label="text: string" value={tCascaderComponentProps('cascader.options.text')} />
              </div>
            ),
          },
        ]}
        state={state}
        t={tCascaderComponentProps}
        types
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
