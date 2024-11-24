import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Label } from '@lib/label';
import { Range } from '@lib/range';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/range/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

export default function RangePage() {
  const navigation = useNavigation();
  const { t: tRangeComponentProps } = useTranslation(['rangeComponentProps']);
  const { t: tRangePage } = useTranslation(['rangePage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example t={tRangePage} state={state} hash="basic">
        <div>
          <Label htmlFor="customRange1">Example range</Label>
          <Range id="customRange1" />
        </div>
      </Example>

      <Example hash="disabled" t={tRangePage} state={state}>
        <div>
          <Label htmlFor="disabledRange">Disabled range</Label>
          <Range id="disabledRange" disabled />
        </div>
      </Example>

      <Example hash="minAndMax" t={tRangePage} state={state}>
        <div>
          <Label htmlFor="customRange2">Example range</Label>
          <Range id="customRange2" max="5" min="0" />
        </div>
      </Example>

      <Example t={tRangePage} state={state} hash="steps">
        <div>
          <Label htmlFor="customRange3">Example range</Label>
          <Range id="customRange3" step="0.5" max="5" min="0" />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRangeComponentProps('range.desc.disabled'),
            attr: 'disabled',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">string | number</span>,
            desc: tRangeComponentProps('range.desc.min'),
            attr: 'min',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">string | number</span>,
            desc: tRangeComponentProps('range.desc.max'),
            attr: 'max',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">string | number</span>,
            desc: tRangeComponentProps('range.desc.step'),
            attr: 'step',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRangeComponentProps('range.desc.isValid'),
            attr: 'isValid',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRangeComponentProps('range.desc.isInvalid'),
            attr: 'isInvalid',
            default: '',
          },
        ]}
        hash="rangeComponentProps"
        t={tRangeComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
