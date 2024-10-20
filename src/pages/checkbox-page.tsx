import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import { Checkbox } from '@lib/checkbox';
import { Label } from '@lib/label';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/checkbox/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
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
          <Checkbox value="" id="flexCheckDefault"></Checkbox>
          <Label formCheckLabel htmlFor="flexCheckDefault">
            Default checkbox
          </Label>
        </div>
        <Checkbox defaultChecked value="" id="flexCheckChecked">
          Checked checkbox
        </Checkbox>
      </Example>

      <Example hash="indeterminate" state={state} t={tCheckboxPage}>
        <div className="form-check">
          <Checkbox indeterminate value="" id="flexCheckIndeterminate"></Checkbox>
          <Label formCheckLabel htmlFor="flexCheckIndeterminate">
            Indeterminate checkbox
          </Label>
        </div>
      </Example>

      <Example hash="disabled" state={state} t={tCheckboxPage}>
        <div className="form-check">
          <Checkbox indeterminate value="" id="flexCheckIndeterminateDisabled" disabled></Checkbox>
          <Label formCheckLabel htmlFor="flexCheckIndeterminateDisabled">
            Disabled indeterminate checkbox
          </Label>
        </div>

        <div className="form-check">
          <Checkbox value="" id="flexCheckDisabled" disabled></Checkbox>
          <Label formCheckLabel htmlFor="flexCheckDisabled">
            Disabled checkbox
          </Label>
        </div>

        <div className="form-check">
          <Checkbox value="" id="flexCheckCheckedDisabled" disabled defaultChecked></Checkbox>
          <Label formCheckLabel htmlFor="flexCheckCheckedDisabled">
            Disabled checked checkbox
          </Label>
        </div>
      </Example>

      <Example hash="switch" state={state} t={tCheckboxPage}>
        <Checkbox switch value="" id="flexSwitchCheckDefault">
          Default switch checkbox input
        </Checkbox>

        <div className="form-check form-switch">
          <Checkbox defaultChecked value="" id="flexSwitchCheckChecked" role="switch"></Checkbox>
          <Label formCheckLabel htmlFor="flexSwitchCheckChecked">
            Checked switch checkbox input
          </Label>
        </div>

        <div className="form-check form-switch">
          <Checkbox disabled value="" id="flexSwitchCheckDisabled" role="switch"></Checkbox>
          <Label formCheckLabel htmlFor="flexSwitchCheckDisabled">
            Disabled switch checkbox input
          </Label>
        </div>

        <div className="form-check form-switch">
          <Checkbox defaultChecked disabled value="" id="flexSwitchCheckCheckedDisabled" role="switch"></Checkbox>
          <Label formCheckLabel htmlFor="flexSwitchCheckCheckedDisabled">
            Disabled checked switch checkbox input
          </Label>
        </div>
      </Example>

      <Example hash="inline" state={state} t={tCheckboxPage}>
        <Checkbox inline value="option1" id="inlineCheckbox1">
          1
        </Checkbox>

        <div className="form-check form-check-inline">
          <Checkbox value="option2" id="inlineCheckbox2"></Checkbox>
          <Label formCheckLabel htmlFor="inlineCheckbox2">
            2
          </Label>
        </div>

        <div className="form-check form-check-inline">
          <Checkbox disabled value="option3" id="inlineCheckbox3"></Checkbox>
          <Label formCheckLabel htmlFor="inlineCheckbox3">
            3 (disabled)
          </Label>
        </div>
      </Example>

      <Example hash="reverse" state={state} t={tCheckboxPage}>
        <Checkbox reverse value="" id="reverseCheck1">
          Reverse checkbox
        </Checkbox>

        <div className="form-check form-check-reverse">
          <Checkbox disabled value="" id="reverseCheck2"></Checkbox>
          <Label formCheckLabel htmlFor="reverseCheck2">
            Disabled reverse checkbox
          </Label>
        </div>

        <div className="form-check form-switch form-check-reverse">
          <Checkbox value="" id="flexSwitchCheckReverse"></Checkbox>
          <Label formCheckLabel htmlFor="flexSwitchCheckReverse">
            Reverse switch checkbox input
          </Label>
        </div>
      </Example>

      <Example hash="withoutLabels" state={state} t={tCheckboxPage}>
        <Checkbox value="" />
      </Example>

      <Example hash="toggleButtons" state={state} t={tCheckboxPage}>
        <div className="overflow-x-auto d-flex gap-2 text-nowrap">
          <div>
            <Checkbox dropOldClass value="" className="btn-check" autoComplete="off" id="btn-check"></Checkbox>
            <Label dropOldClass className="btn btn-primary" htmlFor="btn-check">
              Single toggle
            </Label>
          </div>

          <div>
            <Checkbox
              defaultChecked
              dropOldClass
              value=""
              className="btn-check"
              autoComplete="off"
              id="btn-check-2"
            ></Checkbox>
            <Label dropOldClass className="btn btn-primary" htmlFor="btn-check-2">
              Checked
            </Label>
          </div>

          <div>
            <Checkbox
              dropOldClass
              disabled
              value=""
              className="btn-check"
              autoComplete="off"
              id="btn-check-3"
            ></Checkbox>
            <Label dropOldClass className="btn btn-primary" htmlFor="btn-check-3">
              Disabled
            </Label>
          </div>
        </div>
      </Example>

      <Example hash="outlinedStyles" state={state} t={tCheckboxPage}>
        <div className="overflow-x-auto d-flex gap-2 text-nowrap">
          <div>
            <Checkbox dropOldClass value="" className="btn-check" autoComplete="off" id="btn-check-outlined"></Checkbox>
            <Label dropOldClass className="btn btn-outline-primary" htmlFor="btn-check-outlined">
              Single toggle
            </Label>
          </div>

          <div>
            <Checkbox
              defaultChecked
              dropOldClass
              value=""
              className="btn-check"
              autoComplete="off"
              id="btn-check-2-outlined"
            ></Checkbox>
            <Label dropOldClass className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined">
              Checked
            </Label>
          </div>
        </div>
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="checkboxComponentProps"
        state={state}
        t={tCheckboxComponentProps}
        items={[
          {
            attr: 'indeterminate',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.indeterminate'),
            default: '',
          },
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.disabled'),
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
            desc: tCheckboxComponentProps('checkbox.desc.contentClasses'),
            default: '',
          },
          {
            attr: 'switch',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.switch'),
            default: '',
          },
          {
            attr: 'inline',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.inline'),
            default: '',
          },
          {
            attr: 'reverse',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.reverse'),
            default: '',
          },
          {
            attr: 'isValid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.isValid'),
            default: '',
          },
          {
            attr: 'isInvalid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('checkbox.desc.isInvalid'),
            default: '',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
