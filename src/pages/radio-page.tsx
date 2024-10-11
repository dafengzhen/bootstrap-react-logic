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
import { Label } from '@lib/label';
import radioComponentPropsCodes from '@assets/codes/radio/component-props.ts';
import radioCodes from '@assets/codes/radio';
import { Radio } from '@lib/radio';

interface IStates {
  radio: {
    basic: {
      openCode: boolean;
      code?: string;
    };
    disabled: {
      openCode: boolean;
      code?: string;
    };
    inline: {
      openCode: boolean;
      code?: string;
    };
    withoutLabels: {
      openCode: boolean;
      code?: string;
    };
    toggleButtons: {
      openCode: boolean;
      code?: string;
    };
    outlinedStyles: {
      openCode: boolean;
      code?: string;
    };
  };
}

interface IComponentPropsStates {
  radio: {
    radioComponentProps: {
      openCode: boolean;
      code?: string;
    };
    generalComponentProps: {
      openCode: boolean;
      code?: string;
    };
  };
}

export default function RadioPage() {
  useHighlightCode();
  const navigation = useNavigation();
  const { t: tRadioComponentProps } = useTranslation(['radioComponentProps']);
  const { t: tRadioPage } = useTranslation(['radioPage']);

  const [states, setStates] = useState<IStates>({
    radio: {
      basic: {
        openCode: false,
        code: radioCodes.basic.code.trim(),
      },
      disabled: {
        openCode: false,
        code: radioCodes.disabled.code.trim(),
      },
      inline: {
        openCode: false,
        code: radioCodes.inline.code.trim(),
      },
      withoutLabels: {
        openCode: false,
        code: radioCodes.withoutLabels.code.trim(),
      },
      toggleButtons: {
        openCode: false,
        code: radioCodes.toggleButtons.code.trim(),
      },
      outlinedStyles: {
        openCode: false,
        code: radioCodes.outlinedStyles.code.trim(),
      },
    },
  });
  const [componentPropsStates, setComponentPropsStates] = useState<IComponentPropsStates>({
    radio: {
      radioComponentProps: {
        openCode: false,
        code: radioComponentPropsCodes.radioComponentProps.code.trim(),
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
        title={tRadioPage('basic')}
        hash="basic"
        isOpen={states.radio.basic.openCode}
        toggleCode={() => onClickUpdateState('radio.basic.openCode', !states.radio.basic.openCode)}
        code={states.radio.basic.code}
      >
        <div className="d-flex flex-column gap-2">
          <div className="form-check">
            <Radio name="flexRadioDefault" id="flexRadioDefault1"></Radio>
            <Label formCheckLabel htmlFor="flexRadioDefault1">
              Default radio
            </Label>
          </div>

          <Radio defaultChecked name="flexRadioDefault" id="flexRadioDefault2">
            Default checked radio
          </Radio>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tRadioPage('disabled')}
        hash="disabled"
        isOpen={states.radio.disabled.openCode}
        toggleCode={() => onClickUpdateState('radio.disabled.openCode', !states.radio.disabled.openCode)}
        code={states.radio.disabled.code}
      >
        <div className="d-flex flex-column gap-2">
          <Radio name="flexRadioDisabled" id="flexRadioDisabled" disabled>
            Disabled radio
          </Radio>

          <div className="form-check">
            <Radio name="flexRadioDisabled" id="flexRadioCheckedDisabled" disabled defaultChecked></Radio>
            <Label formCheckLabel htmlFor="flexRadioCheckedDisabled">
              Disabled checked radio
            </Label>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tRadioPage('inline')}
        hash="inline"
        isOpen={states.radio.inline.openCode}
        toggleCode={() => onClickUpdateState('radio.inline.openCode', !states.radio.inline.openCode)}
        code={states.radio.inline.code}
      >
        <div>
          <Radio inline name="inlineRadioOptions" id="inlineRadio1" value="option1">
            1
          </Radio>

          <div className="form-check form-check-inline">
            <Radio name="inlineRadioOptions" id="inlineRadio2" value="option2"></Radio>
            <Label formCheckLabel htmlFor="inlineRadio2">
              2
            </Label>
          </div>

          <div className="form-check form-check-inline">
            <Radio name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled></Radio>
            <Label formCheckLabel htmlFor="inlineRadio3">
              3 (disabled)
            </Label>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tRadioPage('withoutLabels')}
        hash="withoutLabels"
        isOpen={states.radio.withoutLabels.openCode}
        toggleCode={() => onClickUpdateState('radio.withoutLabels.openCode', !states.radio.withoutLabels.openCode)}
        code={states.radio.withoutLabels.code}
      >
        <div className="d-flex flex-column gap-2">
          <Radio />
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tRadioPage('toggleButtons')}
        hash="toggleButtons"
        isOpen={states.radio.toggleButtons.openCode}
        toggleCode={() => onClickUpdateState('radio.toggleButtons.openCode', !states.radio.toggleButtons.openCode)}
        code={states.radio.toggleButtons.code}
      >
        <div className="d-flex gap-2">
          <div>
            <Radio
              dropOldClass
              className="btn-check"
              name="options"
              id="option1"
              autoComplete="off"
              defaultChecked
            ></Radio>
            <Label dropOldClass className="btn btn-secondary" htmlFor="option1">
              Checked
            </Label>
          </div>

          <div>
            <Radio dropOldClass className="btn-check" name="options" id="option2" autoComplete="off"></Radio>
            <Label dropOldClass className="btn btn-secondary" htmlFor="option2">
              Radio
            </Label>
          </div>

          <div>
            <Radio dropOldClass className="btn-check" name="options" id="option3" autoComplete="off" disabled></Radio>
            <Label dropOldClass className="btn btn-secondary" htmlFor="option3">
              Disabled
            </Label>
          </div>

          <div>
            <Radio dropOldClass className="btn-check" name="options" id="option4" autoComplete="off"></Radio>
            <Label dropOldClass className="btn btn-secondary" htmlFor="option4">
              Radio
            </Label>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tRadioPage('outlinedStyles')}
        hash="outlinedStyles"
        isOpen={states.radio.outlinedStyles.openCode}
        toggleCode={() => onClickUpdateState('radio.outlinedStyles.openCode', !states.radio.outlinedStyles.openCode)}
        code={states.radio.outlinedStyles.code}
      >
        <div className="d-flex gap-2">
          <div>
            <Radio
              dropOldClass
              className="btn-check"
              name="options-outlined"
              id="success-outlined"
              autoComplete="off"
              defaultChecked
            ></Radio>
            <Label dropOldClass className="btn btn-outline-success" htmlFor="success-outlined">
              Checked success radio
            </Label>
          </div>

          <div>
            <Radio
              dropOldClass
              className="btn-check"
              name="options-outlined"
              id="danger-outlined"
              autoComplete="off"
            ></Radio>
            <Label dropOldClass className="btn btn-outline-danger" htmlFor="danger-outlined">
              Danger radio
            </Label>
          </div>
        </div>
      </CustomSimpleCard>

      <PropsIndicator />

      <CustomSimpleCard.ComponentProps
        title="Radio"
        hash="radioComponentProps"
        colgroup={colgroup}
        isOpen={componentPropsStates.radio.radioComponentProps.openCode}
        code={componentPropsStates.radio.radioComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'radio.radioComponentProps.openCode',
            !componentPropsStates.radio.radioComponentProps.openCode,
          )
        }
        items={[
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('desc.disabled'),
            default: '',
          },
          {
            attr: 'contentClasses',
            type: (
              <div className="d-flex flex-column gap-2">
                <div>
                  <span className="badge text-bg-secondary">Key : container | component | label</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    Value : string | ((originalClass: string) =&gt; string | undefined)
                  </span>
                </div>
              </div>
            ),
            desc: tRadioComponentProps('desc.contentClasses'),
            default: '',
          },
          {
            attr: 'switch',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('desc.switch'),
            default: '',
          },
          {
            attr: 'inline',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('desc.inline'),
            default: '',
          },
          {
            attr: 'reverse',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('desc.reverse'),
            default: '',
          },
        ]}
      ></CustomSimpleCard.ComponentProps>

      <GeneralComponentPropsCard
        colgroup={colgroup}
        isOpen={componentPropsStates.radio.generalComponentProps.openCode}
        code={componentPropsStates.radio.generalComponentProps.code}
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'radio.generalComponentProps.openCode',
            !componentPropsStates.radio.generalComponentProps.openCode,
          )
        }
      ></GeneralComponentPropsCard>

      <AboutComponent />
    </div>
  );
}
