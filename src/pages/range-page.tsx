import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import { Label } from '@lib/label';
import { Range } from '@lib/range';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/range/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
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
      <Example hash="basic" state={state} t={tRangePage}>
        <div>
          <Label htmlFor="customRange1">Example range</Label>
          <Range id="customRange1" />
        </div>
      </Example>

      <Example hash="disabled" state={state} t={tRangePage}>
        <div>
          <Label htmlFor="disabledRange">Disabled range</Label>
          <Range id="disabledRange" disabled />
        </div>
      </Example>

      <Example hash="minAndMax" state={state} t={tRangePage}>
        <div>
          <Label htmlFor="customRange2">Example range</Label>
          <Range min="0" max="5" id="customRange2" />
        </div>
      </Example>

      <Example hash="steps" state={state} t={tRangePage}>
        <div>
          <Label htmlFor="customRange3">Example range</Label>
          <Range min="0" max="5" step="0.5" id="customRange3" />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="rangeComponentProps"
        state={state}
        t={tRangeComponentProps}
        items={[
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRangeComponentProps('range.desc.disabled'),
            default: '',
          },
          {
            attr: 'min',
            type: <span className="badge text-bg-secondary">string | number</span>,
            desc: tRangeComponentProps('range.desc.min'),
            default: '',
          },
          {
            attr: 'max',
            type: <span className="badge text-bg-secondary">string | number</span>,
            desc: tRangeComponentProps('range.desc.max'),
            default: '',
          },
          {
            attr: 'step',
            type: <span className="badge text-bg-secondary">string | number</span>,
            desc: tRangeComponentProps('range.desc.step'),
            default: '',
          },
          {
            attr: 'isValid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRangeComponentProps('range.desc.isValid'),
            default: '',
          },
          {
            attr: 'isInvalid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRangeComponentProps('range.desc.isInvalid'),
            default: '',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
