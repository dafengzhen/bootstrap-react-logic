import { Button } from '@lib/button';
import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import type { NestedKeys } from '@src/types';
import CustomSimpleCard from '@src/components/custom-simple-card';
import CustomSimpleCardLink from '@components/custom-simple-card-link.tsx';
import { ButtonGroup } from '@lib/button-group';
import buttonGroupCodes from '@assets/codes/button-group';
import AboutComponent from '@components/about-component.tsx';

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

type ButtonGroupKeys = NestedKeys<IStates>;

export default function ButtonGroupPage() {
  useHighlightCode();
  const navigation = useNavigation();

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
  const [mySize, setMySize] = useState<'lg' | 'sm'>('sm');

  function onClickUpdateState(k: ButtonGroupKeys, v: unknown, c?: () => void) {
    setStates((prev) => {
      const keys = k.split('.');
      const newState = { ...prev };

      /* eslint-disable @typescript-eslint/no-explicit-any */
      keys.reduce((acc: any, key, index) => {
        if (index === keys.length - 1) {
          acc[key] = v;
        } else {
          acc[key] = { ...acc[key] };
        }
        return acc[key];
      }, newState);

      return newState;
    });
    c?.();
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
        title="基本"
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
        <div className="d-flex flex-column gap-2">
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
        title="选项框"
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
        title="单选框"
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
        title="工具组"
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
        title="大小"
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
        title="垂直"
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
        title="示例"
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

      <div className="card">
        <div className="card-header">
          <CustomSimpleCardLink title="组件属性" hash="componentProps" />
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Attr</th>
                  <th scope="col">Type</th>
                  <th scope="col">Desc</th>
                  <th scope="col">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>as</td>
                  <td>
                    <span className="badge text-bg-secondary">div</span>
                  </td>
                  <td></td>
                  <td>
                    <span className="badge text-bg-secondary">button</span>
                  </td>
                </tr>
                <tr>
                  <td>dropOldClass</td>
                  <td>
                    <span className="badge text-bg-secondary">boolean</span>
                  </td>
                  <td>Clear original class names</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>render</td>
                  <td>
                    <span className="badge text-bg-secondary">
                      (renderOptions) =&gt; ReactNode
                    </span>
                  </td>
                  <td>Customize rendering logic</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>skipCompWrap</td>
                  <td>
                    <span className="badge text-bg-secondary">boolean</span>
                  </td>
                  <td>Skip component wrapper</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>options</td>
                  <td>
                    <span className="badge text-bg-secondary">
                      Omit&lt;Props, as | render | options&gt;
                    </span>
                  </td>
                  <td>Custom property wrapper layer of components</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>toolbar</td>
                  <td>
                    <span className="badge text-bg-secondary">boolean</span>
                  </td>
                  <td></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>vertical</td>
                  <td>
                    <span className="badge text-bg-secondary">boolean</span>
                  </td>
                  <td></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>
                    <span className="badge text-bg-secondary">lg | sm</span>
                  </td>
                  <td></td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-header border-top rounded-top">
          <CustomSimpleCardLink title="通用属性" hash="generalProps" />
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Attr</th>
                  <th scope="col">Type</th>
                  <th scope="col">Desc</th>
                  <th scope="col">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>className</td>
                  <td>
                    <span className="badge text-bg-secondary">string</span>
                  </td>
                  <td></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>
                    <span className="badge text-bg-secondary">object</span>
                  </td>
                  <td></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>children</td>
                  <td>
                    <span className="badge text-bg-secondary">Button</span>
                    <span className="badge text-bg-secondary ms-1">
                      ReactNode
                    </span>
                  </td>
                  <td>
                    <CustomSimpleCardLink
                      underline
                      title="Button"
                      href="/pages/button"
                    />
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>...</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-header border-top rounded-top">
          <CustomSimpleCardLink title="通用事件" hash="generalProps" />
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Attr</th>
                  <th scope="col">Type</th>
                  <th scope="col">Desc</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>onClick</td>
                  <td>
                    <span className="badge text-bg-secondary">
                      MouseEventHandler
                    </span>
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>...</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AboutComponent />
    </div>
  );
}
