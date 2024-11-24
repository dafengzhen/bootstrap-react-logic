import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Label } from '@lib/label';
import { Radio } from '@lib/radio';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/radio/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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
      <Example t={tRadioPage} state={state} hash="basic">
        <div className="form-check">
          <Radio name="flexRadioDefault" id="flexRadioDefault1"></Radio>
          <Label htmlFor="flexRadioDefault1" formCheckLabel>
            Default radio
          </Label>
        </div>

        <Radio name="flexRadioDefault" id="flexRadioDefault2" defaultChecked>
          Default checked radio
        </Radio>
      </Example>

      <Example hash="disabled" t={tRadioPage} state={state}>
        <Radio name="flexRadioDisabled" id="flexRadioDisabled" disabled>
          Disabled radio
        </Radio>

        <div className="form-check">
          <Radio id="flexRadioCheckedDisabled" name="flexRadioDisabled" defaultChecked disabled></Radio>
          <Label htmlFor="flexRadioCheckedDisabled" formCheckLabel>
            Disabled checked radio
          </Label>
        </div>
      </Example>

      <Example t={tRadioPage} hash="inline" state={state}>
        <div>
          <Radio name="inlineRadioOptions" id="inlineRadio1" value="option1" inline>
            1
          </Radio>

          <div className="form-check form-check-inline">
            <Radio name="inlineRadioOptions" id="inlineRadio2" value="option2"></Radio>
            <Label htmlFor="inlineRadio2" formCheckLabel>
              2
            </Label>
          </div>

          <div className="form-check form-check-inline">
            <Radio name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled></Radio>
            <Label htmlFor="inlineRadio3" formCheckLabel>
              3 (disabled)
            </Label>
          </div>
        </div>
      </Example>

      <Example hash="withoutLabels" t={tRadioPage} state={state}>
        <Radio />
      </Example>

      <Example hash="toggleButtons" t={tRadioPage} overflowXAuto state={state} textNowrap row>
        <div>
          <Radio
            className="btn-check"
            autoComplete="off"
            defaultChecked
            name="options"
            dropOldClass
            id="option1"
          ></Radio>
          <Label className="btn btn-secondary" htmlFor="option1" dropOldClass>
            Checked
          </Label>
        </div>

        <div>
          <Radio className="btn-check" autoComplete="off" name="options" dropOldClass id="option2"></Radio>
          <Label className="btn btn-secondary" htmlFor="option2" dropOldClass>
            Radio
          </Label>
        </div>

        <div>
          <Radio className="btn-check" autoComplete="off" name="options" dropOldClass id="option3" disabled></Radio>
          <Label className="btn btn-secondary" htmlFor="option3" dropOldClass>
            Disabled
          </Label>
        </div>

        <div>
          <Radio className="btn-check" autoComplete="off" name="options" dropOldClass id="option4"></Radio>
          <Label className="btn btn-secondary" htmlFor="option4" dropOldClass>
            Radio
          </Label>
        </div>
      </Example>

      <Example hash="outlinedStyles" t={tRadioPage} overflowXAuto state={state} textNowrap row>
        <div>
          <Radio
            name="options-outlined"
            className="btn-check"
            id="success-outlined"
            autoComplete="off"
            defaultChecked
            dropOldClass
          ></Radio>
          <Label className="btn btn-outline-success" htmlFor="success-outlined" dropOldClass>
            Checked success radio
          </Label>
        </div>

        <div>
          <Radio
            name="options-outlined"
            className="btn-check"
            id="danger-outlined"
            autoComplete="off"
            dropOldClass
          ></Radio>
          <Label className="btn btn-outline-danger" htmlFor="danger-outlined" dropOldClass>
            Danger radio
          </Label>
        </div>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('radio.desc.disabled'),
            attr: 'disabled',
            default: '',
          },
          {
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
            attr: 'contentClasses',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('radio.desc.switch'),
            attr: 'switch',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('radio.desc.inline'),
            attr: 'inline',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('radio.desc.reverse'),
            attr: 'reverse',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('radio.desc.isValid'),
            attr: 'isValid',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tRadioComponentProps('radio.desc.isInvalid'),
            attr: 'isInvalid',
            default: '',
          },
        ]}
        hash="radioComponentProps"
        t={tRadioComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
