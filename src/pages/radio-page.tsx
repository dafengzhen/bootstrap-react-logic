import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import generalCodes from '@assets/codes/general';
import { Label } from '@lib/label';
import radioComponentPropsCodes from '@assets/codes/radio/component-props.ts';
import radioCodes from '@assets/codes/radio';
import { Radio } from '@lib/radio';
import Example from '@components/example.tsx';
import { createState } from '@tools/handlers.ts';

enum StatesEnum {
  basic,
  disabled,
  inline,
  withoutLabels,
  toggleButtons,
  outlinedStyles,
}

enum PropsStatesEnum {
  radioComponentProps,
  generalComponentProps,
}

export default function RadioPage() {
  const navigation = useNavigation();
  const { t: tRadioComponentProps } = useTranslation(['radioComponentProps']);
  const { t: tRadioPage } = useTranslation(['radioPage']);

  const state = useState({
    radio: createState(StatesEnum, radioCodes),
  });
  const propsState = useState({
    radio: createState(PropsStatesEnum, radioComponentPropsCodes, generalCodes),
  });

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tRadioPage}>
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
      </Example>

      <Example hash="disabled" state={state} t={tRadioPage}>
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
      </Example>

      <Example hash="inline" state={state} t={tRadioPage}>
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
      </Example>

      <Example hash="withoutLabels" state={state} t={tRadioPage}>
        <div className="d-flex flex-column gap-2">
          <Radio />
        </div>
      </Example>

      <Example hash="toggleButtons" state={state} t={tRadioPage}>
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
      </Example>

      <Example hash="outlinedStyles" state={state} t={tRadioPage}>
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
      </Example>

      <PropsIndicator />

      <Example
        hash="radioComponentProps"
        state={propsState}
        t={tRadioComponentProps}
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
          {
            attr: 'isValid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('desc.isValid'),
            default: '',
          },
          {
            attr: 'isInvalid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('desc.isInvalid'),
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
