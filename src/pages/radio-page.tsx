import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import { Label } from '@lib/label';
import { Radio } from '@lib/radio';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/radio/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
  }),
);

export default function RadioPage() {
  const navigation = useNavigation();
  const { t: tRadioComponentProps } = useTranslation(['radioComponentProps']);
  const { t: tRadioPage } = useTranslation(['radioPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tRadioPage}>
        <div className="form-check">
          <Radio name="flexRadioDefault" id="flexRadioDefault1"></Radio>
          <Label formCheckLabel htmlFor="flexRadioDefault1">
            Default radio
          </Label>
        </div>

        <Radio defaultChecked name="flexRadioDefault" id="flexRadioDefault2">
          Default checked radio
        </Radio>
      </Example>

      <Example hash="disabled" state={state} t={tRadioPage}>
        <Radio name="flexRadioDisabled" id="flexRadioDisabled" disabled>
          Disabled radio
        </Radio>

        <div className="form-check">
          <Radio name="flexRadioDisabled" id="flexRadioCheckedDisabled" disabled defaultChecked></Radio>
          <Label formCheckLabel htmlFor="flexRadioCheckedDisabled">
            Disabled checked radio
          </Label>
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
        <Radio />
      </Example>

      <Example hash="toggleButtons" state={state} t={tRadioPage} row overflowXAuto textNowrap>
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
      </Example>

      <Example hash="outlinedStyles" state={state} t={tRadioPage} row overflowXAuto textNowrap>
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
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="radioComponentProps"
        state={state}
        t={tRadioComponentProps}
        items={[
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('radio.desc.disabled'),
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
            desc: tRadioComponentProps('radio.desc.contentClasses'),
            default: '',
          },
          {
            attr: 'switch',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('radio.desc.switch'),
            default: '',
          },
          {
            attr: 'inline',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('radio.desc.inline'),
            default: '',
          },
          {
            attr: 'reverse',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('radio.desc.reverse'),
            default: '',
          },
          {
            attr: 'isValid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('radio.desc.isValid'),
            default: '',
          },
          {
            attr: 'isInvalid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('radio.desc.isInvalid'),
            default: '',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
