import { Button } from '@lib/button';
import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import type { NestedKeys } from '@src/types';
import CustomSimpleCard from '@src/components/custom-simple-card';
import { ButtonGroup } from '@lib/button-group';
import buttonGroupCodes from '@assets/codes/button-group';
import AboutComponent from '@components/about-component.tsx';
import { updateState } from '@src/tools';
import PropsIndicator from '@components/props-indicator.tsx';
import GeneralComponentPropsCard from '@components/general-component-props-card.tsx';
import generalCodes from '@assets/codes/general';
import { useTranslation } from 'react-i18next';
import buttonGroupComponentPropsCodes from '@assets/codes/button-group/component-props.ts';

interface IStates {
  buttonGroup: {
    basic: {
      openCode: boolean;
      code?: string;
    };
    checkbox: {
      openCode: boolean;
      code?: string;
    };
    radio: {
      openCode: boolean;
      code?: string;
    };
    toolbar: {
      openCode: boolean;
      code?: string;
    };
    size: {
      openCode: boolean;
      code?: string;
    };
    vertical: {
      openCode: boolean;
      code?: string;
    };
    example: {
      openCode: boolean;
      code?: string;
    };
  };
}

interface IComponentPropsStates {
  buttonGroup: {
    buttonGroupComponentProps: {
      openCode: boolean;
      code?: string;
    };
    generalComponentProps: {
      openCode: boolean;
      code?: string;
    };
  };
}

export default function ButtonGroupPage() {
  useHighlightCode();
  const navigation = useNavigation();
  const { t: tButtonGroupComponentProps } = useTranslation([
    'buttonGroupComponentProps',
  ]);
  const { t: tButtonGroupPage } = useTranslation(['buttonGroupPage']);

  const [states, setStates] = useState<IStates>({
    buttonGroup: {
      basic: {
        openCode: false,
        code: buttonGroupCodes.basic.code.trim(),
      },
      checkbox: {
        openCode: false,
        code: buttonGroupCodes.checkbox.code.trim(),
      },
      radio: {
        openCode: false,
        code: buttonGroupCodes.radio.code.trim(),
      },
      toolbar: {
        openCode: false,
        code: buttonGroupCodes.toolbar.code.trim(),
      },
      size: {
        openCode: false,
        code: buttonGroupCodes.size.code.trim(),
      },
      vertical: {
        openCode: false,
        code: buttonGroupCodes.vertical.code.trim(),
      },
      example: {
        openCode: false,
        code: buttonGroupCodes.example.code.trim(),
      },
    },
  });
  const [componentPropsStates, setComponentPropsStates] =
    useState<IComponentPropsStates>({
      buttonGroup: {
        buttonGroupComponentProps: {
          openCode: false,
          code: buttonGroupComponentPropsCodes.buttonGroupComponentProps.code.trim(),
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
  const [mySize, setMySize] = useState<'lg' | 'sm'>('sm');

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

  function onClickChangeSizeTest() {
    setMySize(mySize === 'sm' ? 'lg' : 'sm');
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <CustomSimpleCard
        title={tButtonGroupPage('basic')}
        hash="basic"
        isOpen={states.buttonGroup.basic.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'buttonGroup.basic.openCode',
            !states.buttonGroup.basic.openCode,
          )
        }
        code={states.buttonGroup.basic.code}
      >
        <div className="d-flex flex-column gap-2 overflow-x-auto text-nowrap">
          <div>
            <ButtonGroup>
              <Button variant="primary">Left</Button>
              <Button variant="primary">Middle</Button>
              <Button variant="primary">Right</Button>
            </ButtonGroup>
          </div>

          <div>
            <ButtonGroup>
              <Button as="a" href="#" variant="primary" active>
                Active link
              </Button>
              <Button as="a" href="#" variant="primary">
                Link
              </Button>
              <Button as="a" href="#" variant="primary">
                Link
              </Button>
            </ButtonGroup>
          </div>

          <div>
            <ButtonGroup>
              <Button variant="danger">Left</Button>
              <Button variant="warning">Middle</Button>
              <Button variant="success">Right</Button>
            </ButtonGroup>
          </div>

          <div>
            <ButtonGroup>
              <Button outline="primary">Left</Button>
              <Button outline="primary">Middle</Button>
              <Button outline="primary">Right</Button>
            </ButtonGroup>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tButtonGroupPage('checkbox')}
        hash="checkbox"
        isOpen={states.buttonGroup.checkbox.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'buttonGroup.checkbox.openCode',
            !states.buttonGroup.checkbox.openCode,
          )
        }
        code={states.buttonGroup.checkbox.code}
      >
        <div className="overflow-x-auto text-nowrap">
          <ButtonGroup>
            <input
              type="checkbox"
              className="btn-check"
              id="btncheck1"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btncheck1">
              Checkbox 1
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="btncheck2"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btncheck2">
              Checkbox 2
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="btncheck3"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btncheck3">
              Checkbox 3
            </label>
          </ButtonGroup>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tButtonGroupPage('radio')}
        hash="radio"
        isOpen={states.buttonGroup.radio.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'buttonGroup.radio.openCode',
            !states.buttonGroup.radio.openCode,
          )
        }
        code={states.buttonGroup.radio.code}
      >
        <div className="overflow-x-auto text-nowrap">
          <ButtonGroup>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              defaultChecked
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              Radio 1
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              Radio 2
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">
              Radio 3
            </label>
          </ButtonGroup>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tButtonGroupPage('toolbar')}
        hash="toolbar"
        isOpen={states.buttonGroup.toolbar.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'buttonGroup.toolbar.openCode',
            !states.buttonGroup.toolbar.openCode,
          )
        }
        code={states.buttonGroup.toolbar.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <ButtonGroup toolbar className="gap-2">
              <ButtonGroup>
                <Button variant="primary">1</Button>
                <Button variant="primary">2</Button>
                <Button variant="primary">3</Button>
                <Button variant="primary">4</Button>
              </ButtonGroup>

              <ButtonGroup>
                <Button variant="secondary">5</Button>
                <Button variant="secondary">6</Button>
                <Button variant="secondary">7</Button>
              </ButtonGroup>

              <ButtonGroup>
                <Button variant="info">8</Button>
              </ButtonGroup>
            </ButtonGroup>
          </div>

          <div>
            <ButtonGroup toolbar className="gap-2">
              <ButtonGroup>
                <Button outline="secondary">1</Button>
                <Button outline="secondary">2</Button>
                <Button outline="secondary">3</Button>
                <Button outline="secondary">4</Button>
              </ButtonGroup>

              <div className="input-group">
                <div className="input-group-text" id="btnGroupAddon">
                  @
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input group example"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
              </div>
            </ButtonGroup>
          </div>

          <div>
            <ButtonGroup toolbar className="justify-content-between gap-2">
              <ButtonGroup>
                <Button outline="secondary">1</Button>
                <Button outline="secondary">2</Button>
                <Button outline="secondary">3</Button>
                <Button outline="secondary">4</Button>
              </ButtonGroup>

              <div className="input-group">
                <div className="input-group-text" id="btnGroupAddon2">
                  @
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input group example"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon2"
                />
              </div>
            </ButtonGroup>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tButtonGroupPage('size')}
        hash="size"
        isOpen={states.buttonGroup.size.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'buttonGroup.size.openCode',
            !states.buttonGroup.size.openCode,
          )
        }
        code={states.buttonGroup.size.code}
      >
        <div className="d-flex flex-column gap-2 overflow-x-auto text-nowrap">
          <div>
            <ButtonGroup size="lg">
              <Button outline="primary">Left</Button>
              <Button outline="primary">Middle</Button>
              <Button outline="primary">Right</Button>
            </ButtonGroup>
          </div>
          <div>
            <ButtonGroup>
              <Button outline="primary">Left</Button>
              <Button outline="primary">Middle</Button>
              <Button outline="primary">Right</Button>
            </ButtonGroup>
          </div>
          <div>
            <ButtonGroup size="sm">
              <Button outline="primary">Left</Button>
              <Button outline="primary">Middle</Button>
              <Button outline="primary">Right</Button>
            </ButtonGroup>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tButtonGroupPage('vertical')}
        hash="vertical"
        isOpen={states.buttonGroup.vertical.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'buttonGroup.vertical.openCode',
            !states.buttonGroup.vertical.openCode,
          )
        }
        code={states.buttonGroup.vertical.code}
      >
        <div className="d-flex gap-2">
          <div>
            <ButtonGroup vertical>
              <Button variant="primary">Button</Button>
              <Button variant="primary">Button</Button>
              <Button variant="primary">Button</Button>
              <Button variant="primary">Button</Button>
            </ButtonGroup>
          </div>

          <div>
            <ButtonGroup vertical>
              <input
                type="radio"
                className="btn-check"
                name="vbtn-radio"
                id="vbtn-radio1"
                autoComplete="off"
                defaultChecked
              />
              <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">
                Radio 1
              </label>
              <input
                type="radio"
                className="btn-check"
                name="vbtn-radio"
                id="vbtn-radio2"
                autoComplete="off"
              />
              <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">
                Radio 2
              </label>
              <input
                type="radio"
                className="btn-check"
                name="vbtn-radio"
                id="vbtn-radio3"
                autoComplete="off"
              />
              <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">
                Radio 3
              </label>
            </ButtonGroup>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tButtonGroupPage('example')}
        hash="example"
        isOpen={states.buttonGroup.example.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'buttonGroup.example.openCode',
            !states.buttonGroup.example.openCode,
          )
        }
        code={states.buttonGroup.example.code}
        codeLanguage="typescript"
      >
        <div className="d-flex flex-wrap gap-2 overflow-x-auto text-nowrap">
          <div>
            <ButtonGroup size={mySize}>
              <Button variant="primary" onClick={onClickChangeSizeTest}>
                Click
              </Button>
              <Button variant="primary" onClick={onClickChangeSizeTest}>
                Change Button
              </Button>
              <Button variant="primary" onClick={onClickChangeSizeTest}>
                Size ({mySize})
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </CustomSimpleCard>

      <PropsIndicator />

      <CustomSimpleCard.ComponentProps
        title="ButtonGroup"
        hash="buttonGroupComponentProps"
        colgroup={colgroup}
        isOpen={
          componentPropsStates.buttonGroup.buttonGroupComponentProps.openCode
        }
        code={componentPropsStates.buttonGroup.buttonGroupComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'buttonGroup.buttonGroupComponentProps.openCode',
            !componentPropsStates.buttonGroup.buttonGroupComponentProps
              .openCode,
          )
        }
        items={[
          {
            attr: 'toolbar',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonGroupComponentProps('desc.toolbar'),
            default: '',
          },
          {
            attr: 'vertical',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonGroupComponentProps('desc.vertical'),
            default: '',
          },
          {
            attr: 'size',
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: tButtonGroupComponentProps('desc.size'),
            default: '',
          },
        ]}
      ></CustomSimpleCard.ComponentProps>

      <GeneralComponentPropsCard
        colgroup={colgroup}
        isOpen={componentPropsStates.buttonGroup.generalComponentProps.openCode}
        code={componentPropsStates.buttonGroup.generalComponentProps.code}
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'buttonGroup.generalComponentProps.openCode',
            !componentPropsStates.buttonGroup.generalComponentProps.openCode,
          )
        }
      ></GeneralComponentPropsCard>

      <AboutComponent />
    </div>
  );
}
