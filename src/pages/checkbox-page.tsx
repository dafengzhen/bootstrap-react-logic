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
import checkboxCodes from '@assets/codes/checkbox';
import { Checkbox } from '@lib/checkbox';
import { Label } from '@lib/label';
import checkboxComponentPropsCodes from '@assets/codes/checkbox/component-props.ts';

interface IStates {
  checkbox: {
    basic: {
      openCode: boolean;
      code?: string;
    };
    indeterminate: {
      openCode: boolean;
      code?: string;
    };
    disabled: {
      openCode: boolean;
      code?: string;
    };
    switch: {
      openCode: boolean;
      code?: string;
    };
    inline: {
      openCode: boolean;
      code?: string;
    };
    reverse: {
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
  checkbox: {
    checkboxComponentProps: {
      openCode: boolean;
      code?: string;
    };
    generalComponentProps: {
      openCode: boolean;
      code?: string;
    };
  };
}

export default function CheckboxPage() {
  useHighlightCode();
  const navigation = useNavigation();
  const { t: tCheckboxComponentProps } = useTranslation(['checkboxComponentProps']);
  const { t: tCheckboxPage } = useTranslation(['checkboxPage']);

  const [states, setStates] = useState<IStates>({
    checkbox: {
      basic: {
        openCode: false,
        code: checkboxCodes.basic.code.trim(),
      },
      indeterminate: {
        openCode: false,
        code: checkboxCodes.indeterminate.code.trim(),
      },
      disabled: {
        openCode: false,
        code: checkboxCodes.disabled.code.trim(),
      },
      switch: {
        openCode: false,
        code: checkboxCodes.switch.code.trim(),
      },
      inline: {
        openCode: false,
        code: checkboxCodes.inline.code.trim(),
      },
      reverse: {
        openCode: false,
        code: checkboxCodes.reverse.code.trim(),
      },
      withoutLabels: {
        openCode: false,
        code: checkboxCodes.withoutLabels.code.trim(),
      },
      toggleButtons: {
        openCode: false,
        code: checkboxCodes.toggleButtons.code.trim(),
      },
      outlinedStyles: {
        openCode: false,
        code: checkboxCodes.outlinedStyles.code.trim(),
      },
    },
  });
  const [componentPropsStates, setComponentPropsStates] = useState<IComponentPropsStates>({
    checkbox: {
      checkboxComponentProps: {
        openCode: false,
        code: checkboxComponentPropsCodes.checkboxComponentProps.code.trim(),
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
        title={tCheckboxPage('basic')}
        hash="basic"
        isOpen={states.checkbox.basic.openCode}
        toggleCode={() => onClickUpdateState('checkbox.basic.openCode', !states.checkbox.basic.openCode)}
        code={states.checkbox.basic.code}
      >
        <div className="d-flex flex-column gap-2">
          <div className="form-check">
            <Checkbox value="" id="flexCheckDefault"></Checkbox>
            <Label formCheckLabel htmlFor="flexCheckDefault">
              Default checkbox
            </Label>
          </div>
          <Checkbox defaultChecked value="" id="flexCheckChecked">
            Checked checkbox
          </Checkbox>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tCheckboxPage('indeterminate')}
        hash="indeterminate"
        isOpen={states.checkbox.indeterminate.openCode}
        toggleCode={() =>
          onClickUpdateState('checkbox.indeterminate.openCode', !states.checkbox.indeterminate.openCode)
        }
        code={states.checkbox.indeterminate.code}
      >
        <div className="d-flex flex-column gap-2">
          <div className="form-check">
            <Checkbox indeterminate value="" id="flexCheckIndeterminate"></Checkbox>
            <Label formCheckLabel htmlFor="flexCheckIndeterminate">
              Indeterminate checkbox
            </Label>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tCheckboxPage('disabled')}
        hash="disabled"
        isOpen={states.checkbox.disabled.openCode}
        toggleCode={() => onClickUpdateState('checkbox.disabled.openCode', !states.checkbox.disabled.openCode)}
        code={states.checkbox.disabled.code}
      >
        <div className="d-flex flex-column gap-2">
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
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tCheckboxPage('switch')}
        hash="switch"
        isOpen={states.checkbox.switch.openCode}
        toggleCode={() => onClickUpdateState('checkbox.switch.openCode', !states.checkbox.switch.openCode)}
        code={states.checkbox.switch.code}
      >
        <div className="d-flex flex-column gap-2">
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
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tCheckboxPage('inline')}
        hash="inline"
        isOpen={states.checkbox.inline.openCode}
        toggleCode={() => onClickUpdateState('checkbox.inline.openCode', !states.checkbox.inline.openCode)}
        code={states.checkbox.inline.code}
      >
        <div>
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
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tCheckboxPage('reverse')}
        hash="reverse"
        isOpen={states.checkbox.reverse.openCode}
        toggleCode={() => onClickUpdateState('checkbox.reverse.openCode', !states.checkbox.reverse.openCode)}
        code={states.checkbox.reverse.code}
      >
        <div className="d-flex flex-column gap-2">
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
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tCheckboxPage('withoutLabels')}
        hash="withoutLabels"
        isOpen={states.checkbox.withoutLabels.openCode}
        toggleCode={() =>
          onClickUpdateState('checkbox.withoutLabels.openCode', !states.checkbox.withoutLabels.openCode)
        }
        code={states.checkbox.withoutLabels.code}
      >
        <div className="d-flex flex-column gap-2">
          <Checkbox value="" />
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tCheckboxPage('toggleButtons')}
        hash="toggleButtons"
        isOpen={states.checkbox.toggleButtons.openCode}
        toggleCode={() =>
          onClickUpdateState('checkbox.toggleButtons.openCode', !states.checkbox.toggleButtons.openCode)
        }
        code={states.checkbox.toggleButtons.code}
      >
        <div className="d-flex gap-2">
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
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tCheckboxPage('outlinedStyles')}
        hash="outlinedStyles"
        isOpen={states.checkbox.outlinedStyles.openCode}
        toggleCode={() =>
          onClickUpdateState('checkbox.outlinedStyles.openCode', !states.checkbox.outlinedStyles.openCode)
        }
        code={states.checkbox.outlinedStyles.code}
      >
        <div className="d-flex gap-2">
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
      </CustomSimpleCard>

      <PropsIndicator />

      <CustomSimpleCard.ComponentProps
        title="Checkbox"
        hash="checkboxComponentProps"
        colgroup={colgroup}
        isOpen={componentPropsStates.checkbox.checkboxComponentProps.openCode}
        code={componentPropsStates.checkbox.checkboxComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'checkbox.checkboxComponentProps.openCode',
            !componentPropsStates.checkbox.checkboxComponentProps.openCode,
          )
        }
        items={[
          {
            attr: 'indeterminate',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('desc.indeterminate'),
            default: '',
          },
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('desc.disabled'),
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
            desc: tCheckboxComponentProps('desc.contentClasses'),
            default: '',
          },
          {
            attr: 'switch',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('desc.switch'),
            default: '',
          },
          {
            attr: 'inline',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('desc.inline'),
            default: '',
          },
          {
            attr: 'reverse',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCheckboxComponentProps('desc.reverse'),
            default: '',
          },
        ]}
      ></CustomSimpleCard.ComponentProps>

      <GeneralComponentPropsCard
        colgroup={colgroup}
        isOpen={componentPropsStates.checkbox.generalComponentProps.openCode}
        code={componentPropsStates.checkbox.generalComponentProps.code}
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'checkbox.generalComponentProps.openCode',
            !componentPropsStates.checkbox.generalComponentProps.openCode,
          )
        }
      ></GeneralComponentPropsCard>

      <AboutComponent />
    </div>
  );
}
