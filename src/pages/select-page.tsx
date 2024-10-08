import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import type { NestedKeys } from '@src/types';
import CustomSimpleCard from '@src/components/custom-simple-card';
import AboutComponent from '@components/about-component.tsx';
import { updateState } from '@src/tools';
import selectCodes from '@assets/codes/select';
import selectComponentPropsCodes from '@assets/codes/select/component-props';
import { Select, SelectOption } from '@lib/select';
import { SelectMultiple } from '@lib/select-multiple';
import GeneralComponentPropsCard from '@components/general-component-props-card.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import OptionRow from '@components/option-row.tsx';
import generalCodes from '@assets/codes/general';

interface IStates {
  select: {
    basic: {
      openCode: boolean;
      code?: string;
    };
    size: {
      openCode: boolean;
      code?: string;
    };
    multiple: {
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
  select: {
    selectComponentProps: {
      openCode: boolean;
      code?: string;
    };
    selectOptionComponentProps: {
      openCode: boolean;
      code?: string;
    };
    selectMultipleComponentProps: {
      openCode: boolean;
      code?: string;
    };
    generalComponentProps: {
      openCode: boolean;
      code?: string;
    };
  };
}

export default function SelectPage() {
  useHighlightCode();
  const navigation = useNavigation();
  const { t: tSelectMultipleComponentProps } = useTranslation(['selectMultipleComponentProps']);
  const { t: tSelectOptionComponentProps } = useTranslation(['selectOptionComponentProps']);
  const { t: tSelectComponentProps } = useTranslation(['selectComponentProps']);
  const { t: tSelectPage } = useTranslation(['selectPage']);

  const [states, setStates] = useState<IStates>({
    select: {
      basic: {
        openCode: false,
        code: selectCodes.basic.code.trim(),
      },
      size: {
        openCode: false,
        code: selectCodes.size.code.trim(),
      },
      multiple: {
        openCode: false,
        code: selectCodes.multiple.code.trim(),
      },
      disabled: {
        openCode: false,
        code: selectCodes.disabled.code.trim(),
      },
    },
  });
  const [componentPropsStates, setComponentPropsStates] = useState<IComponentPropsStates>({
    select: {
      selectComponentProps: {
        openCode: false,
        code: selectComponentPropsCodes.selectComponentProps.code.trim(),
      },
      selectOptionComponentProps: {
        openCode: false,
        code: selectComponentPropsCodes.selectOptionComponentProps.code.trim(),
      },
      selectMultipleComponentProps: {
        openCode: false,
        code: selectComponentPropsCodes.selectMultipleComponentProps.code.trim(),
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
        title={tSelectPage('basic')}
        hash="basic"
        isOpen={states.select.basic.openCode}
        toggleCode={() => onClickUpdateState('select.basic.openCode', !states.select.basic.openCode)}
        code={states.select.basic.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Select aria-label="Default select example">
              <SelectOption defaultValue="">Open this select menu</SelectOption>
              <SelectOption disabled value="1">
                One
              </SelectOption>
              <SelectOption value="2">Two</SelectOption>
              <SelectOption value="3">Three</SelectOption>
            </Select>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tSelectPage('size')}
        hash="size"
        isOpen={states.select.size.openCode}
        toggleCode={() => onClickUpdateState('select.size.openCode', !states.select.size.openCode)}
        code={states.select.size.code}
      >
        <div className="d-flex flex-column gap-2">
          <Select size="lg" aria-label="Large select example">
            <SelectOption defaultValue="">Open this select menu</SelectOption>
            <SelectOption value="1">One</SelectOption>
            <SelectOption value="2">Two</SelectOption>
            <SelectOption value="3">Three</SelectOption>
          </Select>

          <Select size="sm" aria-label="Small select example">
            <SelectOption defaultValue="">Open this select menu</SelectOption>
            <SelectOption value="1">One</SelectOption>
            <SelectOption value="2">Two</SelectOption>
            <SelectOption value="3">Three</SelectOption>
          </Select>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tSelectPage('multiple')}
        hash="multiple"
        isOpen={states.select.multiple.openCode}
        toggleCode={() => onClickUpdateState('select.multiple.openCode', !states.select.multiple.openCode)}
        code={states.select.multiple.code}
      >
        <div className="d-flex flex-column gap-2">
          <Select multiple aria-label="Multiple select example">
            <SelectOption defaultValue="">Open this select menu</SelectOption>
            <SelectOption value="1">One</SelectOption>
            <SelectOption value="2">Two</SelectOption>
            <SelectOption value="3">Three</SelectOption>
          </Select>

          <Select nativeSize={3} aria-label="Size 3 select example">
            <SelectOption defaultValue="">Open this select menu</SelectOption>
            <SelectOption value="1">One</SelectOption>
            <SelectOption value="2">Two</SelectOption>
            <SelectOption value="3">Three</SelectOption>
          </Select>

          <SelectMultiple
            placeholder="Please select"
            options={[
              {
                text: 'Primary',
                value: 1,
              },
              {
                text: 'Secondary',
                value: 1,
              },
              {
                text: 'Success',
                value: 1,
              },
              {
                text: 'Danger',
                value: 2,
              },
              {
                text: 'Warning',
                value: 3,
              },
              {
                text: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>

          <SelectMultiple disabled placeholder="Please select"></SelectMultiple>

          <SelectMultiple
            single
            placeholder="Please select"
            options={[
              {
                text: 'Primary',
                value: 1,
              },
              {
                text: 'Secondary',
                value: 1,
                active: true,
              },
              {
                text: 'Success',
                value: 1,
                disabled: true,
              },
              {
                text: 'Danger',
                value: 2,
              },
              {
                text: 'Warning',
                value: 3,
              },
              {
                text: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>

          <SelectMultiple
            placeholder="Please select"
            options={[
              {
                text: 'Primary',
                value: 1,
              },
              {
                text: 'Secondary',
                value: 1,
                active: true,
              },
              {
                text: 'Success',
                value: 1,
              },
              {
                text: 'Danger',
                value: 2,
                active: true,
              },
              {
                text: 'Warning',
                value: 3,
              },
              {
                text: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>

          <SelectMultiple
            placeholder="Please select"
            options={[
              {
                text: 'Primary',
                value: 1,
              },
              {
                text: 'Secondary',
                value: 1,
                active: true,
              },
              {
                text: 'Success',
                value: 1,
              },
              {
                divider: 'top',
                text: 'Danger',
                value: 2,
              },
              {
                text: 'Warning',
                value: 3,
                divider: 'bottom',
              },
              {
                text: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>

          <SelectMultiple
            placeholder="Please select"
            options={[
              {
                header: 'Status and Importance',
                text: 'Primary',
                value: 1,
              },
              {
                header: 'Status and Importance',
                text: 'Secondary',
                value: 1,
                active: true,
              },
              {
                header: 'Status and Importance',
                text: 'Success',
                value: 1,
              },
              {
                header: 'Status and Importance',
                text: 'Danger',
                value: 2,
                active: true,
              },
              {
                header: 'Warning and Information',
                text: 'Warning',
                value: 3,
              },
              {
                header: 'Warning and Information',
                text: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>

          <SelectMultiple
            hideActiveOptions
            selectableCount={4}
            placeholder="Please select"
            options={[
              {
                text: 'Primary',
                value: 1,
              },
              {
                text: 'Secondary',
                value: 1,
                active: true,
              },
              {
                text: 'Success',
                value: 1,
                active: true,
              },
              {
                text: 'Danger',
                value: 2,
                active: true,
              },
              {
                text: 'Warning',
                value: 3,
              },
              {
                text: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tSelectPage('disabled')}
        hash="disabled"
        isOpen={states.select.disabled.openCode}
        toggleCode={() => onClickUpdateState('select.disabled.openCode', !states.select.disabled.openCode)}
        code={states.select.disabled.code}
      >
        <div className="d-flex flex-column gap-2">
          <Select aria-label="Disabled select example" disabled>
            <SelectOption defaultValue="">Open this select menu</SelectOption>
            <SelectOption value="1">One</SelectOption>
            <SelectOption value="2">Two</SelectOption>
            <SelectOption value="3">Three</SelectOption>
          </Select>
        </div>
      </CustomSimpleCard>

      <PropsIndicator />

      <CustomSimpleCard.ComponentProps
        title="Select"
        hash="selectComponentProps"
        colgroup={colgroup}
        isOpen={componentPropsStates.select.selectComponentProps.openCode}
        code={componentPropsStates.select.selectComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'select.selectComponentProps.openCode',
            !componentPropsStates.select.selectComponentProps.openCode,
          )
        }
        items={[
          {
            attr: 'size',
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: tSelectComponentProps('desc.size'),
            default: '',
          },
          {
            attr: 'nativeSize',
            type: <span className="badge text-bg-secondary">number | undefined</span>,
            desc: tSelectComponentProps('desc.nativeSize'),
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

      <CustomSimpleCard.ComponentProps
        title="SelectOption"
        hash="selectOptionComponentProps"
        colgroup={colgroup}
        isOpen={componentPropsStates.select.selectOptionComponentProps.openCode}
        code={componentPropsStates.select.selectOptionComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'select.selectOptionComponentProps.openCode',
            !componentPropsStates.select.selectOptionComponentProps.openCode,
          )
        }
        items={[
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectOptionComponentProps('desc.disabled'),
            default: '',
          },
        ]}
      ></CustomSimpleCard.ComponentProps>

      <CustomSimpleCard.ComponentProps
        title="SelectMultiple"
        hash="selectMultipleComponentProps"
        colgroup={colgroup}
        isOpen={componentPropsStates.select.selectMultipleComponentProps.openCode}
        code={componentPropsStates.select.selectMultipleComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'select.selectMultipleComponentProps.openCode',
            !componentPropsStates.select.selectMultipleComponentProps.openCode,
          )
        }
        items={[
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectMultipleComponentProps('desc.disabled'),
            default: '',
          },
          {
            attr: 'single',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectMultipleComponentProps('desc.single'),
            default: '',
          },
          {
            attr: 'hideActiveOptions',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectMultipleComponentProps('desc.hideActiveOptions'),
            default: '',
          },
          {
            attr: 'placeholder',
            type: <span className="badge text-bg-secondary">string</span>,
            desc: tSelectMultipleComponentProps('desc.placeholder'),
            default: '',
          },
          {
            attr: 'selectableCount',
            type: <span className="badge text-bg-secondary">number</span>,
            desc: tSelectMultipleComponentProps('desc.selectableCount'),
            default: '',
          },
          {
            attr: 'options',
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="id?: string | number" value={tSelectMultipleComponentProps('options.id')} />
                <OptionRow label="value?: string | number" value={tSelectMultipleComponentProps('options.value')} />
                <OptionRow label="active?: boolean" value={tSelectMultipleComponentProps('options.active')} />
                <OptionRow label="disabled?: boolean" value={tSelectMultipleComponentProps('options.disabled')} />
                <OptionRow label="divider?: top | bottom" value={tSelectMultipleComponentProps('options.divider')} />
                <OptionRow label="header?: string" value={tSelectMultipleComponentProps('options.header')} />
                <OptionRow label="text: string" value={tSelectMultipleComponentProps('options.text')} />
              </div>
            ),
            desc: tSelectMultipleComponentProps('desc.options'),
            default: '',
          },
          {
            attr: 'contentClasses',
            type: (
              <div className="d-flex flex-column">
                <div>
                  <span className="badge text-bg-secondary">Key : mainContainer</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : optionsContainer</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : placeholder</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : activeOption</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : clearIcon</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : countDisplay</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : floatingMenu</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : header</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : topDivider</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : optionItem</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : selectButton</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : bottomDivider</span>
                  <div>
                    <span className="badge text-bg-secondary">
                      Value : string | ((originalClass: string) =&gt; string | undefined)
                    </span>
                  </div>
                </div>
              </div>
            ),
            desc: tSelectMultipleComponentProps('desc.contentClasses'),
            default: '',
          },
          {
            attr: 'onChange',
            type: <span className="badge text-bg-secondary">(value: (string | number)[]) =&gt; void</span>,
            desc: tSelectMultipleComponentProps('desc.onChange'),
            default: '',
          },
        ]}
      ></CustomSimpleCard.ComponentProps>

      <GeneralComponentPropsCard
        colgroup={colgroup}
        isOpen={componentPropsStates.select.generalComponentProps.openCode}
        code={componentPropsStates.select.generalComponentProps.code}
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'select.generalComponentProps.openCode',
            !componentPropsStates.select.generalComponentProps.openCode,
          )
        }
      ></GeneralComponentPropsCard>

      <AboutComponent />
    </div>
  );
}
