import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Label } from '@lib/label';
import { Radio } from '@lib/radio';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/radio/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
          <Radio id="flexRadioDefault1" name="flexRadioDefault"></Radio>
          <Label formCheckLabel htmlFor="flexRadioDefault1">
            Default radio
          </Label>
        </div>

        <Radio defaultChecked id="flexRadioDefault2" name="flexRadioDefault">
          Default checked radio
        </Radio>
      </Example>

      <Example hash="disabled" state={state} t={tRadioPage}>
        <Radio disabled id="flexRadioDisabled" name="flexRadioDisabled">
          Disabled radio
        </Radio>

        <div className="form-check">
          <Radio defaultChecked disabled id="flexRadioCheckedDisabled" name="flexRadioDisabled"></Radio>
          <Label formCheckLabel htmlFor="flexRadioCheckedDisabled">
            Disabled checked radio
          </Label>
        </div>
      </Example>

      <Example hash="inline" state={state} t={tRadioPage}>
        <div>
          <Radio id="inlineRadio1" inline name="inlineRadioOptions" value="option1">
            1
          </Radio>

          <div className="form-check form-check-inline">
            <Radio id="inlineRadio2" name="inlineRadioOptions" value="option2"></Radio>
            <Label formCheckLabel htmlFor="inlineRadio2">
              2
            </Label>
          </div>

          <div className="form-check form-check-inline">
            <Radio disabled id="inlineRadio3" name="inlineRadioOptions" value="option3"></Radio>
            <Label formCheckLabel htmlFor="inlineRadio3">
              3 (disabled)
            </Label>
          </div>
        </div>
      </Example>

      <Example hash="withoutLabels" state={state} t={tRadioPage}>
        <Radio />
      </Example>

      <Example hash="toggleButtons" overflowXAuto row state={state} t={tRadioPage} textNowrap>
        <div>
          <Radio
            autoComplete="off"
            className="btn-check"
            defaultChecked
            dropOldClass
            id="option1"
            name="options"
          ></Radio>
          <Label className="btn btn-secondary" dropOldClass htmlFor="option1">
            Checked
          </Label>
        </div>

        <div>
          <Radio autoComplete="off" className="btn-check" dropOldClass id="option2" name="options"></Radio>
          <Label className="btn btn-secondary" dropOldClass htmlFor="option2">
            Radio
          </Label>
        </div>

        <div>
          <Radio autoComplete="off" className="btn-check" disabled dropOldClass id="option3" name="options"></Radio>
          <Label className="btn btn-secondary" dropOldClass htmlFor="option3">
            Disabled
          </Label>
        </div>

        <div>
          <Radio autoComplete="off" className="btn-check" dropOldClass id="option4" name="options"></Radio>
          <Label className="btn btn-secondary" dropOldClass htmlFor="option4">
            Radio
          </Label>
        </div>
      </Example>

      <Example hash="outlinedStyles" overflowXAuto row state={state} t={tRadioPage} textNowrap>
        <div>
          <Radio
            autoComplete="off"
            className="btn-check"
            defaultChecked
            dropOldClass
            id="success-outlined"
            name="options-outlined"
          ></Radio>
          <Label className="btn btn-outline-success" dropOldClass htmlFor="success-outlined">
            Checked success radio
          </Label>
        </div>

        <div>
          <Radio
            autoComplete="off"
            className="btn-check"
            dropOldClass
            id="danger-outlined"
            name="options-outlined"
          ></Radio>
          <Label className="btn btn-outline-danger" dropOldClass htmlFor="danger-outlined">
            Danger radio
          </Label>
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="radioComponentProps"
        items={[
          {
            attr: 'disabled',
            default: '',
            desc: tRadioComponentProps('radio.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'contentClasses',
            default: '',
            desc: tRadioComponentProps('radio.desc.contentClasses'),
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
          },
          {
            attr: 'switch',
            default: '',
            desc: tRadioComponentProps('radio.desc.switch'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'inline',
            default: '',
            desc: tRadioComponentProps('radio.desc.inline'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'reverse',
            default: '',
            desc: tRadioComponentProps('radio.desc.reverse'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'isValid',
            default: '',
            desc: tRadioComponentProps('radio.desc.isValid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'isInvalid',
            default: '',
            desc: tRadioComponentProps('radio.desc.isInvalid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tRadioComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
