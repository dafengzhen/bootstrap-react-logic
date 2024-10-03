import { Button } from '@lib/button';
import { useState } from 'react';
import buttonCodes from '@assets/codes/button';
import { useNavigation } from 'react-router-dom';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import type { NestedKeys } from '@src/types';
import CustomSimpleCard from '@src/components/custom-simple-card';
import CustomSimpleCardLink from '@components/custom-simple-card-link.tsx';
import AboutComponent from '@components/about-component.tsx';
import { updateState } from '@src/tools';

interface IStates {
  button: {
    variant: {
      openCode: boolean;
      code?: string;
    };
    outline: {
      openCode: boolean;
      code?: string;
    };
    size: {
      openCode: boolean;
      code?: string;
    };
    disabledState: {
      openCode: boolean;
      code?: string;
    };
    blockButton: {
      openCode: boolean;
      code?: string;
    };
    toggleState: {
      openCode: boolean;
      code?: string;
    };
    isLoading: {
      openCode: boolean;
      code?: string;
    };
    rounded: {
      openCode: boolean;
      code?: string;
    };
    icon: {
      openCode: boolean;
      code?: string;
    };
    customStyle: {
      openCode: boolean;
      code?: string;
    };
    example: {
      openCode: boolean;
      code?: string;
    };
  };
}

export default function ButtonPage() {
  useHighlightCode();
  const navigation = useNavigation();

  const [states, setStates] = useState<IStates>({
    button: {
      variant: {
        openCode: false,
        code: buttonCodes.variant.code.trim(),
      },
      outline: {
        openCode: false,
        code: buttonCodes.outline.code.trim(),
      },
      size: {
        openCode: false,
        code: buttonCodes.size.code.trim(),
      },
      disabledState: {
        openCode: false,
        code: buttonCodes.disabledState.code.trim(),
      },
      blockButton: {
        openCode: false,
        code: buttonCodes.blockButton.code.trim(),
      },
      toggleState: {
        openCode: false,
        code: buttonCodes.toggleState.code.trim(),
      },
      isLoading: {
        openCode: false,
        code: buttonCodes.isLoading.code.trim(),
      },
      rounded: {
        openCode: false,
        code: buttonCodes.rounded.code.trim(),
      },
      icon: {
        openCode: false,
        code: buttonCodes.icon.code.trim(),
      },
      customStyle: {
        openCode: false,
        code: buttonCodes.customStyle.code.trim(),
      },
      example: {
        openCode: false,
        code: buttonCodes.example.code.trim(),
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

  function onClickChangeSizeTest() {
    setMySize(mySize === 'sm' ? 'lg' : 'sm');
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <CustomSimpleCard
        title="变体"
        hash="variant"
        isOpen={states.button.variant.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'button.variant.openCode',
            !states.button.variant.openCode,
          )
        }
        code={states.button.variant.code}
      >
        <div className="d-flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="轮廓"
        hash="outline"
        isOpen={states.button.outline.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'button.outline.openCode',
            !states.button.outline.openCode,
          )
        }
        code={states.button.outline.code}
      >
        <div className="d-flex flex-wrap gap-2">
          <Button outline="primary">Primary</Button>
          <Button outline="secondary">Secondary</Button>
          <Button outline="success">Success</Button>
          <Button outline="danger">Danger</Button>
          <Button outline="warning">Warning</Button>
          <Button outline="info">Info</Button>
          <Button outline="light">Light</Button>
          <Button outline="dark">Dark</Button>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="圆形"
        hash="rounded"
        isOpen={states.button.rounded.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'button.rounded.openCode',
            !states.button.rounded.openCode,
          )
        }
        code={states.button.rounded.code}
      >
        <div className="d-flex flex-wrap gap-2">
          <Button outline="primary" rounded>
            Primary
          </Button>
          <Button outline="secondary" rounded="sm">
            Secondary
          </Button>
          <Button outline="success" rounded="md">
            Success
          </Button>
          <Button outline="danger" rounded="lg">
            Danger
          </Button>
          <Button outline="warning" rounded="xl">
            Warning
          </Button>
          <Button outline="info" rounded="xxl">
            Info
          </Button>
          <Button outline="info" rounded="circle">
            C
          </Button>
          <Button outline="info" rounded="pill">
            Pill
          </Button>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="大小"
        hash="size"
        isOpen={states.button.size.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'button.size.openCode',
            !states.button.size.openCode,
          )
        }
        code={states.button.size.code}
      >
        <div className="d-flex flex-wrap align-items-center gap-2">
          <div>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
          <div>
            <Button variant="secondary" size="sm">
              Small
            </Button>
          </div>
          <div>
            <Button
              variant="secondary"
              size={{
                paddingY: '0.25rem',
                paddingX: '0.5rem',
                fontSize: '0.75rem',
              }}
            >
              Custom
            </Button>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="禁止状态"
        hash="disabledState"
        isOpen={states.button.disabledState.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'button.disabledState.openCode',
            !states.button.disabledState.openCode,
          )
        }
        code={states.button.disabledState.code}
      >
        <div className="d-flex flex-wrap align-items-center gap-2">
          <div>
            <Button variant="primary" disabled>
              Primary
            </Button>
          </div>
          <div>
            <Button variant="secondary" disabled>
              Secondary
            </Button>
          </div>
          <div>
            <Button as="a" href="#" variant="success" disabled>
              Link
            </Button>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="块状按钮"
        hash="blockButton"
        isOpen={states.button.blockButton.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'button.blockButton.openCode',
            !states.button.blockButton.openCode,
          )
        }
        code={states.button.blockButton.code}
      >
        <div className="d-flex flex-wrap flex-column gap-4">
          <div className="d-grid gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="primary">Primary</Button>
          </div>

          <div className="d-grid gap-2 d-md-flex">
            <Button variant="primary">Primary</Button>
            <Button variant="primary">Primary</Button>
          </div>

          <div className="d-grid gap-2 col-6 mx-auto">
            <Button variant="primary">Primary</Button>
            <Button variant="primary">Primary</Button>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="切换状态"
        hash="toggleState"
        isOpen={states.button.toggleState.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'button.toggleState.openCode',
            !states.button.toggleState.openCode,
          )
        }
        code={states.button.toggleState.code}
      >
        <div className="d-flex flex-wrap gap-2">
          <div>
            <Button active>Button</Button>
          </div>
          <div>
            <Button active disabled>
              Button
            </Button>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-2 mt-2">
          <div>
            <Button variant="primary" active>
              Primary
            </Button>
          </div>
          <div>
            <Button variant="primary" active disabled>
              Primary
            </Button>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="加载状态"
        hash="isLoading"
        isOpen={states.button.isLoading.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'button.isLoading.openCode',
            !states.button.isLoading.openCode,
          )
        }
        code={states.button.isLoading.code}
      >
        <div className="d-flex flex-wrap gap-2">
          <Button variant="primary" isLoading>
            Primary
          </Button>
          <Button variant="secondary" isLoading>
            Secondary
          </Button>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="图标"
        hash="icon"
        isOpen={states.button.icon.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'button.icon.openCode',
            !states.button.icon.openCode,
          )
        }
        code={states.button.icon.code}
      >
        <div className="d-flex flex-wrap gap-2">
          <Button
            variant="primary"
            startContent={<i className="bi bi-arrow-up me-1"></i>}
          >
            Up
          </Button>
          <Button
            variant="secondary"
            endContent={<i className="bi bi-arrow-down ms-1"></i>}
          >
            Down
          </Button>
          <Button variant="success">
            <i className="bi bi-arrow-left"></i>
          </Button>
          <Button
            variant="success"
            render={() => <i className="bi bi-arrow-right"></i>}
          ></Button>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="自定义样式"
        hash="customStyle"
        isOpen={states.button.customStyle.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'button.customStyle.openCode',
            !states.button.customStyle.openCode,
          )
        }
        code={states.button.customStyle.code}
      >
        <div className="d-flex flex-wrap gap-2">
          <Button className="border-0 tw-bg-gradient-to-r tw-from-amber-500 tw-to-pink-500 tw-text-white">
            Custom
          </Button>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="示例"
        hash="example"
        isOpen={states.button.example.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'button.example.openCode',
            !states.button.example.openCode,
          )
        }
        code={states.button.example.code}
        codeLanguage="typescript"
      >
        <div className="d-flex flex-wrap gap-2 overflow-x-auto text-nowrap">
          <div>
            <Button
              size={mySize}
              variant="primary"
              onClick={onClickChangeSizeTest}
            >
              Click Change Button Size ({mySize})
            </Button>
          </div>
        </div>
      </CustomSimpleCard>

      <div className="card">
        <div className="card-header">
          <CustomSimpleCardLink title="组件属性" hash="componentProps" />
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table tw-table-fixed">
              <colgroup>
                <col style={colgroup.attr} />
                <col style={colgroup.type} />
                <col style={colgroup.desc} />
                <col style={colgroup.default} />
              </colgroup>
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
                    <span className="badge text-bg-secondary">button | a</span>
                  </td>
                  <td></td>
                  <td>
                    <span className="badge text-bg-secondary">button</span>
                  </td>
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
                  <td>dropOldClass</td>
                  <td>
                    <span className="badge text-bg-secondary">boolean</span>
                  </td>
                  <td>Clear original class names</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>variables</td>
                  <td>
                    <span className="badge text-bg-secondary">object</span>
                  </td>
                  <td>Style variables</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>variant</td>
                  <td>
                    <span className="badge text-bg-secondary">
                      primary | secondary | success | info | warning | danger |
                      light | dark | link
                    </span>
                  </td>
                  <td></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>outline</td>
                  <td>
                    <span className="badge text-bg-secondary">
                      primary | secondary | success | info | warning | danger |
                      light | dark | link
                    </span>
                  </td>
                  <td></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>
                    <span className="badge text-bg-secondary">boolean</span>
                  </td>
                  <td></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>active</td>
                  <td>
                    <span className="badge text-bg-secondary">boolean</span>
                  </td>
                  <td></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>isLoading</td>
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
                <tr>
                  <td>rounded</td>
                  <td>
                    <span className="badge text-bg-secondary">
                      none | sm | md | lg | xl | xxl
                    </span>
                    <span className="badge text-bg-secondary ms-1">
                      boolean
                    </span>
                  </td>
                  <td></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>startContent</td>
                  <td>
                    <span className="badge text-bg-secondary">ReactNode</span>
                  </td>
                  <td></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>endContent</td>
                  <td>
                    <span className="badge text-bg-secondary">ReactNode</span>
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
            <table className="table tw-table-fixed">
              <colgroup>
                <col style={colgroup.attr} />
                <col style={colgroup.type} />
                <col style={colgroup.desc} />
                <col style={colgroup.default} />
              </colgroup>
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
            <table className="table tw-table-fixed">
              <colgroup>
                <col style={colgroup.attr} />
                <col style={colgroup.type} />
                <col style={colgroup.desc} />
                <col style={colgroup.default} />
              </colgroup>
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
                  <td>onClick</td>
                  <td>
                    <span className="badge text-bg-secondary">
                      MouseEventHandler
                    </span>
                  </td>
                  <td></td>
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
      </div>

      <AboutComponent />
    </div>
  );
}
