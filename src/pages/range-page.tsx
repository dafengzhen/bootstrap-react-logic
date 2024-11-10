import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Label } from '@lib/label';
import { Range } from '@lib/range';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/range/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
          <Range disabled id="disabledRange" />
        </div>
      </Example>

      <Example hash="minAndMax" state={state} t={tRangePage}>
        <div>
          <Label htmlFor="customRange2">Example range</Label>
          <Range id="customRange2" max="5" min="0" />
        </div>
      </Example>

      <Example hash="steps" state={state} t={tRangePage}>
        <div>
          <Label htmlFor="customRange3">Example range</Label>
          <Range id="customRange3" max="5" min="0" step="0.5" />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="rangeComponentProps"
        items={[
          {
            attr: 'disabled',
            default: '',
            desc: tRangeComponentProps('range.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'min',
            default: '',
            desc: tRangeComponentProps('range.desc.min'),
            type: <span className="badge text-bg-secondary">string | number</span>,
          },
          {
            attr: 'max',
            default: '',
            desc: tRangeComponentProps('range.desc.max'),
            type: <span className="badge text-bg-secondary">string | number</span>,
          },
          {
            attr: 'step',
            default: '',
            desc: tRangeComponentProps('range.desc.step'),
            type: <span className="badge text-bg-secondary">string | number</span>,
          },
          {
            attr: 'isValid',
            default: '',
            desc: tRangeComponentProps('range.desc.isValid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'isInvalid',
            default: '',
            desc: tRangeComponentProps('range.desc.isInvalid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tRangeComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
