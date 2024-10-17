import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import generalCodes from '@assets/codes/general';
import rangeComponentPropsCodes from '@assets/codes/range/component-props.ts';
import rangeCodes from '@assets/codes/range';
import { Label } from '@lib/label';
import { Range } from '@lib/range';
import Example from '@components/example.tsx';
import { createState } from '@tools/handlers.ts';

enum StatesEnum {
  basic,
  disabled,
  minAndMax,
  steps,
}

enum PropsStatesEnum {
  rangeComponentProps,
  generalComponentProps,
}

export default function RangePage() {
  const navigation = useNavigation();
  const { t: tRangeComponentProps } = useTranslation(['rangeComponentProps']);
  const { t: tRangePage } = useTranslation(['rangePage']);

  const state = useState({
    range: createState(StatesEnum, rangeCodes),
  });
  const propsState = useState({
    range: createState(PropsStatesEnum, rangeComponentPropsCodes, generalCodes),
  });

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tRangePage}>
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="customRange1">Example range</Label>
            <Range id="customRange1" />
          </div>
        </div>
      </Example>

      <Example hash="disabled" state={state} t={tRangePage}>
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="disabledRange">Disabled range</Label>
            <Range id="disabledRange" disabled />
          </div>
        </div>
      </Example>

      <Example hash="minAndMax" state={state} t={tRangePage}>
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="customRange2">Example range</Label>
            <Range min="0" max="5" id="customRange2" />
          </div>
        </div>
      </Example>

      <Example hash="steps" state={state} t={tRangePage}>
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="customRange3">Example range</Label>
            <Range min="0" max="5" step="0.5" id="customRange3" />
          </div>
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="rangeComponentProps"
        state={propsState}
        t={tRangeComponentProps}
        items={[
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRangeComponentProps('desc.disabled'),
            default: '',
          },
          {
            attr: 'min',
            type: <span className="badge text-bg-secondary">string | number</span>,
            desc: tRangeComponentProps('desc.min'),
            default: '',
          },
          {
            attr: 'max',
            type: <span className="badge text-bg-secondary">string | number</span>,
            desc: tRangeComponentProps('desc.max'),
            default: '',
          },
          {
            attr: 'step',
            type: <span className="badge text-bg-secondary">string | number</span>,
            desc: tRangeComponentProps('desc.step'),
            default: '',
          },
          {
            attr: 'isValid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRangeComponentProps('desc.isValid'),
            default: '',
          },
          {
            attr: 'isInvalid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRangeComponentProps('desc.isInvalid'),
            default: '',
          },
        ]}
        props
      ></Example>

      <Example hash="generalComponentProps" state={propsState} props></Example>

      <About />
    </div>
  );
}
