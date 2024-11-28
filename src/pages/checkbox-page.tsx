import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Checkbox } from '@lib/checkbox';
import { Label } from '@lib/label';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/checkbox/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function CheckboxPage() {
  const navigation = useNavigation();
  const { t: tCheckboxComponentProps } = useTranslation(['checkboxComponentProps']);
  const { t: tCheckboxPage } = useTranslation(['checkboxPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tCheckboxPage}>
        <div className="form-check">
          <Checkbox id="flexCheckDefault" value=""></Checkbox>
          <Label formCheckLabel htmlFor="flexCheckDefault">
            Default checkbox
          </Label>
        </div>

        <Checkbox defaultChecked id="flexCheckChecked" value="">
          Checked checkbox
        </Checkbox>
      </Example>

      <Example hash="indeterminate" state={state} t={tCheckboxPage}>
        <div className="form-check">
          <Checkbox id="flexCheckIndeterminate" indeterminate value=""></Checkbox>
          <Label formCheckLabel htmlFor="flexCheckIndeterminate">
            Indeterminate checkbox
          </Label>
        </div>
      </Example>

      <Example hash="disabled" state={state} t={tCheckboxPage}>
        <div className="form-check">
          <Checkbox disabled id="flexCheckIndeterminateDisabled" indeterminate value=""></Checkbox>
          <Label formCheckLabel htmlFor="flexCheckIndeterminateDisabled">
            Disabled indeterminate checkbox
          </Label>
        </div>

        <div className="form-check">
          <Checkbox disabled id="flexCheckDisabled" value=""></Checkbox>
          <Label formCheckLabel htmlFor="flexCheckDisabled">
            Disabled checkbox
          </Label>
        </div>

        <div className="form-check">
          <Checkbox defaultChecked disabled id="flexCheckCheckedDisabled" value=""></Checkbox>
          <Label formCheckLabel htmlFor="flexCheckCheckedDisabled">
            Disabled checked checkbox
          </Label>
        </div>
      </Example>

      <Example hash="switch" state={state} t={tCheckboxPage}>
        <Checkbox id="flexSwitchCheckDefault" switch value="">
          Default switch checkbox input
        </Checkbox>

        <div className="form-check form-switch">
          <Checkbox defaultChecked id="flexSwitchCheckChecked" role="switch" value=""></Checkbox>
          <Label formCheckLabel htmlFor="flexSwitchCheckChecked">
            Checked switch checkbox input
          </Label>
        </div>

        <div className="form-check form-switch">
          <Checkbox disabled id="flexSwitchCheckDisabled" role="switch" value=""></Checkbox>
          <Label formCheckLabel htmlFor="flexSwitchCheckDisabled">
            Disabled switch checkbox input
          </Label>
        </div>

        <div className="form-check form-switch">
          <Checkbox defaultChecked disabled id="flexSwitchCheckCheckedDisabled" role="switch" value=""></Checkbox>
          <Label formCheckLabel htmlFor="flexSwitchCheckCheckedDisabled">
            Disabled checked switch checkbox input
          </Label>
        </div>
      </Example>

      <Example hash="inline" state={state} t={tCheckboxPage}>
        <Checkbox id="inlineCheckbox1" inline value="option1">
          1
        </Checkbox>

        <div className="form-check form-check-inline">
          <Checkbox id="inlineCheckbox2" value="option2"></Checkbox>
          <Label formCheckLabel htmlFor="inlineCheckbox2">
            2
          </Label>
        </div>

        <div className="form-check form-check-inline">
          <Checkbox disabled id="inlineCheckbox3" value="option3"></Checkbox>
          <Label formCheckLabel htmlFor="inlineCheckbox3">
            3 (disabled)
          </Label>
        </div>
      </Example>

      <Example hash="reverse" state={state} t={tCheckboxPage}>
        <Checkbox id="reverseCheck1" reverse value="">
          Reverse checkbox
        </Checkbox>

        <div className="form-check form-check-reverse">
          <Checkbox disabled id="reverseCheck2" value=""></Checkbox>
          <Label formCheckLabel htmlFor="reverseCheck2">
            Disabled reverse checkbox
          </Label>
        </div>

        <div className="form-check form-switch form-check-reverse">
          <Checkbox id="flexSwitchCheckReverse" value=""></Checkbox>
          <Label formCheckLabel htmlFor="flexSwitchCheckReverse">
            Reverse switch checkbox input
          </Label>
        </div>
      </Example>

      <Example hash="withoutLabels" state={state} t={tCheckboxPage}>
        <Checkbox value="" />
      </Example>

      <Example hash="toggleButtons" overflowXAuto row state={state} t={tCheckboxPage} textNowrap>
        <div>
          <Checkbox autoComplete="off" className="btn-check" dropOldClass id="btn-check" value=""></Checkbox>
          <Label className="btn btn-primary" dropOldClass htmlFor="btn-check">
            Single toggle
          </Label>
        </div>

        <div>
          <Checkbox
            autoComplete="off"
            className="btn-check"
            defaultChecked
            dropOldClass
            id="btn-check-2"
            value=""
          ></Checkbox>
          <Label className="btn btn-primary" dropOldClass htmlFor="btn-check-2">
            Checked
          </Label>
        </div>

        <div>
          <Checkbox autoComplete="off" className="btn-check" disabled dropOldClass id="btn-check-3" value=""></Checkbox>
          <Label className="btn btn-primary" dropOldClass htmlFor="btn-check-3">
            Disabled
          </Label>
        </div>
      </Example>

      <Example hash="outlinedStyles" overflowXAuto row state={state} t={tCheckboxPage} textNowrap>
        <div>
          <Checkbox autoComplete="off" className="btn-check" dropOldClass id="btn-check-outlined" value=""></Checkbox>
          <Label className="btn btn-outline-primary" dropOldClass htmlFor="btn-check-outlined">
            Single toggle
          </Label>
        </div>

        <div>
          <Checkbox
            autoComplete="off"
            className="btn-check"
            defaultChecked
            dropOldClass
            id="btn-check-2-outlined"
            value=""
          ></Checkbox>
          <Label className="btn btn-outline-secondary" dropOldClass htmlFor="btn-check-2-outlined">
            Checked
          </Label>
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="checkboxComponentProps"
        items={[
          {
            attr: 'indeterminate',
            default: '',
            desc: tCheckboxComponentProps('checkbox.desc.indeterminate'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'disabled',
            default: '',
            desc: tCheckboxComponentProps('checkbox.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'contentClasses',
            default: '',
            desc: tCheckboxComponentProps('checkbox.desc.contentClasses'),
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
            desc: tCheckboxComponentProps('checkbox.desc.switch'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'inline',
            default: '',
            desc: tCheckboxComponentProps('checkbox.desc.inline'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'reverse',
            default: '',
            desc: tCheckboxComponentProps('checkbox.desc.reverse'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'isValid',
            default: '',
            desc: tCheckboxComponentProps('checkbox.desc.isValid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'isInvalid',
            default: '',
            desc: tCheckboxComponentProps('checkbox.desc.isInvalid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tCheckboxComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
