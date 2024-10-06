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
    generalProps: {
      openCode: boolean;
      code?: string;
    };
    generalEvents: {
      openCode: boolean;
      code?: string;
    };
  };
}

export default function SelectPage() {
  useHighlightCode();
  const navigation = useNavigation();

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
  const [componentPropsStates, setComponentPropsStates] =
    useState<IComponentPropsStates>({
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
          code: selectComponentPropsCodes.generalComponentProps.code.trim(),
        },
        generalProps: {
          openCode: false,
          code: selectComponentPropsCodes.generalProps.code.trim(),
        },
        generalEvents: {
          openCode: false,
          code: selectComponentPropsCodes.generalEvents.code.trim(),
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

  function onClickUpdateState(
    k: NestedKeys<IStates>,
    v: unknown,
    c?: () => void,
  ) {
    updateState(setStates, k, v, c);
  }

  function onClickUpdateComponentPropsState(
    k: NestedKeys<IComponentPropsStates>,
    v: unknown,
    c?: () => void,
  ) {
    updateState(setComponentPropsStates, k, v, c);
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <CustomSimpleCard
        title="基本"
        hash="basic"
        isOpen={states.select.basic.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'select.basic.openCode',
            !states.select.basic.openCode,
          )
        }
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
        title="大小"
        hash="size"
        isOpen={states.select.size.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'select.size.openCode',
            !states.select.size.openCode,
          )
        }
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
        title="多选"
        hash="multiple"
        isOpen={states.select.multiple.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'select.multiple.openCode',
            !states.select.multiple.openCode,
          )
        }
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
                label: 'Primary',
                value: 1,
              },
              {
                label: 'Secondary',
                value: 1,
              },
              {
                label: 'Success',
                value: 1,
              },
              {
                label: 'Danger',
                value: 2,
              },
              {
                label: 'Warning',
                value: 3,
              },
              {
                label: 'Info',
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
                label: 'Primary',
                value: 1,
              },
              {
                label: 'Secondary',
                value: 1,
                active: true,
              },
              {
                label: 'Success',
                value: 1,
                disabled: true,
              },
              {
                label: 'Danger',
                value: 2,
              },
              {
                label: 'Warning',
                value: 3,
              },
              {
                label: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>

          <SelectMultiple
            placeholder="Please select"
            options={[
              {
                label: 'Primary',
                value: 1,
              },
              {
                label: 'Secondary',
                value: 1,
                active: true,
              },
              {
                label: 'Success',
                value: 1,
              },
              {
                label: 'Danger',
                value: 2,
                active: true,
              },
              {
                label: 'Warning',
                value: 3,
              },
              {
                label: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>

          <SelectMultiple
            placeholder="Please select"
            options={[
              {
                label: 'Primary',
                value: 1,
              },
              {
                label: 'Secondary',
                value: 1,
                active: true,
              },
              {
                label: 'Success',
                value: 1,
              },
              {
                divider: 'top',
                label: 'Danger',
                value: 2,
              },
              {
                label: 'Warning',
                value: 3,
                divider: 'bottom',
              },
              {
                label: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>

          <SelectMultiple
            placeholder="Please select"
            options={[
              {
                header: 'Status and Importance',
                label: 'Primary',
                value: 1,
              },
              {
                header: 'Status and Importance',
                label: 'Secondary',
                value: 1,
                active: true,
              },
              {
                header: 'Status and Importance',
                label: 'Success',
                value: 1,
              },
              {
                header: 'Status and Importance',
                label: 'Danger',
                value: 2,
                active: true,
              },
              {
                header: 'Warning and Information',
                label: 'Warning',
                value: 3,
              },
              {
                header: 'Warning and Information',
                label: 'Info',
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
                label: 'Primary',
                value: 1,
              },
              {
                label: 'Secondary',
                value: 1,
                active: true,
              },
              {
                label: 'Success',
                value: 1,
                active: true,
              },
              {
                label: 'Danger',
                value: 2,
                active: true,
              },
              {
                label: 'Warning',
                value: 3,
              },
              {
                label: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="禁止"
        hash="disabled"
        isOpen={states.select.disabled.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'select.disabled.openCode',
            !states.select.disabled.openCode,
          )
        }
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

      <CustomSimpleCard.ComponentProps
        title="Select 组件属性"
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
            attr: 'as',
            type: <span className="badge text-bg-secondary">select</span>,
            desc: '',
            default: 'select',
          },
          {
            attr: 'size',
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: '',
            default: '',
          },
          {
            attr: 'nativeSize',
            type: (
              <span className="badge text-bg-secondary">
                number | undefined
              </span>
            ),
            desc: 'HTMLAttributes',
            default: '',
          },
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: '',
            default: '',
          },
        ]}
      ></CustomSimpleCard.ComponentProps>

      <CustomSimpleCard.ComponentProps
        title="SelectOption 组件属性"
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
            attr: 'as',
            type: <span className="badge text-bg-secondary">option</span>,
            desc: '',
            default: 'option',
          },
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: '',
            default: '',
          },
        ]}
      ></CustomSimpleCard.ComponentProps>

      <CustomSimpleCard.ComponentProps
        title="SelectMultiple 组件属性"
        hash="selectMultipleComponentProps"
        colgroup={colgroup}
        isOpen={
          componentPropsStates.select.selectMultipleComponentProps.openCode
        }
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
            attr: 'as',
            type: <span className="badge text-bg-secondary">div</span>,
            desc: '',
            default: 'div',
          },
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: '',
            default: '',
          },
          {
            attr: 'single',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: '',
            default: '',
          },
          {
            attr: 'hideActiveOptions',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: '',
            default: '',
          },
          {
            attr: 'placeholder',
            type: <span className="badge text-bg-secondary">string</span>,
            desc: '',
            default: '',
          },
          {
            attr: 'selectableCount',
            type: <span className="badge text-bg-secondary">number</span>,
            desc: '',
            default: '',
          },
          {
            attr: 'options',
            type: (
              <div className="d-flex flex-column">
                <div>
                  <span className="badge text-bg-secondary">
                    id?: string | number
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    value?: string | number
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    active?: boolean;
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    disabled?: boolean
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    divider?: top | bottom
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    header?: string
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">label: string</span>
                </div>
              </div>
            ),
            desc: '',
            default: '',
          },
          {
            attr: 'contentClasses',
            type: (
              <div className="d-flex flex-column">
                <div>
                  <span className="badge text-bg-secondary">
                    Key : mainContainer
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    Key : optionsContainer
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    Key : placeholder
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    Key : activeOption
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    Key : clearIcon
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    Key : countDisplay
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    Key : floatingMenu
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : header</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    Key : topDivider
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    Key : optionItem
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    Key : selectButton
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    Key : bottomDivider
                  </span>
                  <div>
                    <span className="badge text-bg-secondary">
                      Value : string | ((originalClass: string) =&gt; string |
                      undefined)
                    </span>
                  </div>
                </div>
              </div>
            ),
            desc: '',
            default: '',
          },
          {
            attr: 'onChange',
            type: (
              <span className="badge text-bg-secondary">
                (value: (string | number)[]) =&gt; void
              </span>
            ),
            desc: '',
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
