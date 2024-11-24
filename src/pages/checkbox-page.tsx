import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Checkbox } from '@lib/checkbox';
import { Label } from '@lib/label';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/checkbox/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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
      <Example t={tCheckboxPage} state={state} hash="basic">
        <div className="form-check">
          <Checkbox id="flexCheckDefault" value=""></Checkbox>
          <Label htmlFor="flexCheckDefault" formCheckLabel>
            Default checkbox
          </Label>
        </div>

        <Checkbox id="flexCheckChecked" defaultChecked value="">
          Checked checkbox
        </Checkbox>
      </Example>

      <Example hash="indeterminate" t={tCheckboxPage} state={state}>
        <div className="form-check">
          <Checkbox id="flexCheckIndeterminate" indeterminate value=""></Checkbox>
          <Label htmlFor="flexCheckIndeterminate" formCheckLabel>
            Indeterminate checkbox
          </Label>
        </div>
      </Example>

      <Example t={tCheckboxPage} hash="disabled" state={state}>
        <div className="form-check">
          <Checkbox id="flexCheckIndeterminateDisabled" indeterminate disabled value=""></Checkbox>
          <Label htmlFor="flexCheckIndeterminateDisabled" formCheckLabel>
            Disabled indeterminate checkbox
          </Label>
        </div>

        <div className="form-check">
          <Checkbox id="flexCheckDisabled" disabled value=""></Checkbox>
          <Label htmlFor="flexCheckDisabled" formCheckLabel>
            Disabled checkbox
          </Label>
        </div>

        <div className="form-check">
          <Checkbox id="flexCheckCheckedDisabled" defaultChecked disabled value=""></Checkbox>
          <Label htmlFor="flexCheckCheckedDisabled" formCheckLabel>
            Disabled checked checkbox
          </Label>
        </div>
      </Example>

      <Example t={tCheckboxPage} hash="switch" state={state}>
        <Checkbox id="flexSwitchCheckDefault" value="" switch>
          Default switch checkbox input
        </Checkbox>

        <div className="form-check form-switch">
          <Checkbox id="flexSwitchCheckChecked" defaultChecked role="switch" value=""></Checkbox>
          <Label htmlFor="flexSwitchCheckChecked" formCheckLabel>
            Checked switch checkbox input
          </Label>
        </div>

        <div className="form-check form-switch">
          <Checkbox id="flexSwitchCheckDisabled" role="switch" disabled value=""></Checkbox>
          <Label htmlFor="flexSwitchCheckDisabled" formCheckLabel>
            Disabled switch checkbox input
          </Label>
        </div>

        <div className="form-check form-switch">
          <Checkbox id="flexSwitchCheckCheckedDisabled" defaultChecked role="switch" disabled value=""></Checkbox>
          <Label htmlFor="flexSwitchCheckCheckedDisabled" formCheckLabel>
            Disabled checked switch checkbox input
          </Label>
        </div>
      </Example>

      <Example t={tCheckboxPage} hash="inline" state={state}>
        <Checkbox id="inlineCheckbox1" value="option1" inline>
          1
        </Checkbox>

        <div className="form-check form-check-inline">
          <Checkbox id="inlineCheckbox2" value="option2"></Checkbox>
          <Label htmlFor="inlineCheckbox2" formCheckLabel>
            2
          </Label>
        </div>

        <div className="form-check form-check-inline">
          <Checkbox id="inlineCheckbox3" value="option3" disabled></Checkbox>
          <Label htmlFor="inlineCheckbox3" formCheckLabel>
            3 (disabled)
          </Label>
        </div>
      </Example>

      <Example t={tCheckboxPage} hash="reverse" state={state}>
        <Checkbox id="reverseCheck1" value="" reverse>
          Reverse checkbox
        </Checkbox>

        <div className="form-check form-check-reverse">
          <Checkbox id="reverseCheck2" disabled value=""></Checkbox>
          <Label htmlFor="reverseCheck2" formCheckLabel>
            Disabled reverse checkbox
          </Label>
        </div>

        <div className="form-check form-switch form-check-reverse">
          <Checkbox id="flexSwitchCheckReverse" value=""></Checkbox>
          <Label htmlFor="flexSwitchCheckReverse" formCheckLabel>
            Reverse switch checkbox input
          </Label>
        </div>
      </Example>

      <Example hash="withoutLabels" t={tCheckboxPage} state={state}>
        <Checkbox value="" />
      </Example>

      <Example hash="toggleButtons" t={tCheckboxPage} overflowXAuto state={state} textNowrap row>
        <div>
          <Checkbox className="btn-check" autoComplete="off" id="btn-check" dropOldClass value=""></Checkbox>
          <Label className="btn btn-primary" htmlFor="btn-check" dropOldClass>
            Single toggle
          </Label>
        </div>

        <div>
          <Checkbox
            className="btn-check"
            autoComplete="off"
            id="btn-check-2"
            defaultChecked
            dropOldClass
            value=""
          ></Checkbox>
          <Label className="btn btn-primary" htmlFor="btn-check-2" dropOldClass>
            Checked
          </Label>
        </div>

        <div>
          <Checkbox className="btn-check" autoComplete="off" id="btn-check-3" dropOldClass disabled value=""></Checkbox>
          <Label className="btn btn-primary" htmlFor="btn-check-3" dropOldClass>
            Disabled
          </Label>
        </div>
      </Example>

      <Example hash="outlinedStyles" t={tCheckboxPage} overflowXAuto state={state} textNowrap row>
        <div>
          <Checkbox id="btn-check-outlined" className="btn-check" autoComplete="off" dropOldClass value=""></Checkbox>
          <Label className="btn btn-outline-primary" htmlFor="btn-check-outlined" dropOldClass>
            Single toggle
          </Label>
        </div>

        <div>
          <Checkbox
            id="btn-check-2-outlined"
            className="btn-check"
            autoComplete="off"
            defaultChecked
            dropOldClass
            value=""
          ></Checkbox>
          <Label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined" dropOldClass>
            Checked
          </Label>
        </div>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.indeterminate'),
            attr: 'indeterminate',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.disabled'),
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
            desc: tCheckboxComponentProps('checkbox.desc.contentClasses'),
            attr: 'contentClasses',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.switch'),
            attr: 'switch',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.inline'),
            attr: 'inline',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.reverse'),
            attr: 'reverse',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.isValid'),
            attr: 'isValid',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.isInvalid'),
            attr: 'isInvalid',
            default: '',
          },
        ]}
        hash="checkboxComponentProps"
        t={tCheckboxComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
