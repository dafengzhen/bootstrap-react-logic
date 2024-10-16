import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import type { NestedKeys } from '@src/types';
import CustomSimpleCard from '@src/components/custom-simple-card';
import AboutComponent from '@components/about-component.tsx';
import { updateState } from '@src/tools';
import GeneralComponentPropsCard from '@components/general-component-props-card.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import generalCodes from '@assets/codes/general';
import rangeComponentPropsCodes from '@assets/codes/range/component-props.ts';
import rangeCodes from '@assets/codes/range';
import { Label } from '@lib/label';
import { Range } from '@lib/range';

interface IStates {
  range: {
    basic: {
      openCode: boolean;
      code?: string;
    };
    disabled: {
      openCode: boolean;
      code?: string;
    };
    minAndMax: {
      openCode: boolean;
      code?: string;
    };
    steps: {
      openCode: boolean;
      code?: string;
    };
  };
}

interface IComponentPropsStates {
  range: {
    rangeComponentProps: {
      openCode: boolean;
      code?: string;
    };
    generalComponentProps: {
      openCode: boolean;
      code?: string;
    };
  };
}

export default function RangePage() {
  useHighlightCode();
  const navigation = useNavigation();
  const { t: tRangeComponentProps } = useTranslation(['rangeComponentProps']);
  const { t: tRangePage } = useTranslation(['rangePage']);

  const [states, setStates] = useState<IStates>({
    range: {
      basic: {
        openCode: false,
        code: rangeCodes.basic.code.trim(),
      },
      disabled: {
        openCode: false,
        code: rangeCodes.disabled.code.trim(),
      },
      minAndMax: {
        openCode: false,
        code: rangeCodes.minAndMax.code.trim(),
      },
      steps: {
        openCode: false,
        code: rangeCodes.steps.code.trim(),
      },
    },
  });
  const [componentPropsStates, setComponentPropsStates] = useState<IComponentPropsStates>({
    range: {
      rangeComponentProps: {
        openCode: false,
        code: rangeComponentPropsCodes.rangeComponentProps.code.trim(),
      },
      generalComponentProps: {
        openCode: false,
        code: generalCodes.generalComponentProps.code.trim(),
      },
    },
  });
  const [colgroup] = useState({
    attr: {
      width: '150px',
    },
    type: {
      width: '350px',
    },
    desc: {
      width: '100px',
    },
    default: {
      width: '100px',
    },
  });

  function onClickUpdateState(k: NestedKeys<IStates>, v: unknown, c?: () => void) {
    updateState(setStates, k, v, c);
  }

  function onClickUpdateComponentPropsState(k: NestedKeys<IComponentPropsStates>, v: unknown, c?: () => void) {
    updateState(setComponentPropsStates, k, v, c);
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <CustomSimpleCard
        title={tRangePage('basic')}
        hash="basic"
        isOpen={states.range.basic.openCode}
        toggleCode={() => onClickUpdateState('range.basic.openCode', !states.range.basic.openCode)}
        code={states.range.basic.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="customRange1">Example range</Label>
            <Range id="customRange1" />
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tRangePage('disabled')}
        hash="disabled"
        isOpen={states.range.disabled.openCode}
        toggleCode={() => onClickUpdateState('range.disabled.openCode', !states.range.disabled.openCode)}
        code={states.range.disabled.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="disabledRange">Disabled range</Label>
            <Range id="disabledRange" disabled />
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tRangePage('minAndMax')}
        hash="minAndMax"
        isOpen={states.range.minAndMax.openCode}
        toggleCode={() => onClickUpdateState('range.minAndMax.openCode', !states.range.minAndMax.openCode)}
        code={states.range.minAndMax.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="customRange2">Example range</Label>
            <Range min="0" max="5" id="customRange2" />
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tRangePage('steps')}
        hash="steps"
        isOpen={states.range.steps.openCode}
        toggleCode={() => onClickUpdateState('range.steps.openCode', !states.range.steps.openCode)}
        code={states.range.steps.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="customRange3">Example range</Label>
            <Range min="0" max="5" step="0.5" id="customRange3" />
          </div>
        </div>
      </CustomSimpleCard>

      <PropsIndicator />

      <CustomSimpleCard.ComponentProps
        title="Range"
        hash="radioComponentProps"
        colgroup={colgroup}
        isOpen={componentPropsStates.range.rangeComponentProps.openCode}
        code={componentPropsStates.range.rangeComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'range.rangeComponentProps.openCode',
            !componentPropsStates.range.rangeComponentProps.openCode,
          )
        }
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
      ></CustomSimpleCard.ComponentProps>

      <GeneralComponentPropsCard
        colgroup={colgroup}
        isOpen={componentPropsStates.range.generalComponentProps.openCode}
        code={componentPropsStates.range.generalComponentProps.code}
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'range.generalComponentProps.openCode',
            !componentPropsStates.range.generalComponentProps.openCode,
          )
        }
      ></GeneralComponentPropsCard>

      <AboutComponent />
    </div>
  );
}
