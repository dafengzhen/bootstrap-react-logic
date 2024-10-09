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
  const { t: tSelectComponentProps } = useTranslation(['checkboxComponentProps']);
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
          <div className="form-check">
            <Checkbox defaultChecked value="" id="flexCheckChecked"></Checkbox>
            <Label formCheckLabel htmlFor="flexCheckChecked">
              Checked checkbox
            </Label>
          </div>
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
            desc: tSelectComponentProps('desc.indeterminate'),
            default: '',
          },
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('desc.disabled'),
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
