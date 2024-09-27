import '@assets/styles/App.css';
import { Button } from '@lib/button';
import { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import buttonCodes from '@assets/codes/button';
import clsx from 'clsx';

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
  };
}

type NestedKeys<T> = T extends object
  ? {
      [K in keyof T]-?: K extends string
        ? `${K}` | `${K}.${Exclude<NestedKeys<T[K]>, `${string}.`>}`
        : never;
    }[keyof T]
  : '';

type ButtonKeys = NestedKeys<IStates>;

function App() {
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
    },
  });

  const [mySize, setMySize] = useState<'lg' | 'sm'>('sm');

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((el) => {
      const _el = el as HTMLElement;
      if (!_el.dataset.highlighted) {
        hljs.highlightElement(_el);
      }
    });
  }, []);

  function onClickUpdateState(k: ButtonKeys, v: unknown, c?: () => void) {
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

  function onClickClipboard(k: ButtonKeys, c?: () => void) {
    const code = k.split('.').reduce((acc: any, key) => acc[key], states) as
      | string
      | undefined;

    if (typeof code === 'string' && code !== '') {
      const _code = code.trim();
      navigator.clipboard
        .writeText(_code)
        .then(() => {
          alert('Code copied to clipboard');
        })
        .catch((e) => {
          console.error('Failed to copy code: ', e);
          alert('Failed to copy code: ' + e?.message);
        })
        .finally(() => {
          c?.();
        });
    }
  }

  function onClickUpdateSizeTest() {
    if (mySize === 'sm') {
      setMySize('lg');
    } else {
      setMySize('sm');
    }
  }

  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-4 col-sm-2">
          <div className="list-group">
            <button
              type="button"
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              Button
            </button>
          </div>
        </div>
        <div className="col-8 col-sm-10">
          <div className="d-flex flex-column gap-3">
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div>变体</div>
                  <div className="d-flex gap-2">
                    <i
                      className="bi bi-code tw-cursor-pointer"
                      onClick={() =>
                        onClickUpdateState(
                          'button.variant.openCode',
                          !states.button.variant.openCode,
                        )
                      }
                    ></i>

                    <i
                      className="bi bi-clipboard2 tw-cursor-pointer"
                      onClick={() => onClickClipboard('button.variant.code')}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="card-body">
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
              </div>

              <div
                className={clsx('card-footer', {
                  'd-none': !states.button.variant.openCode,
                })}
              >
                <pre>
                  <code className="language-html">
                    {states.button.variant.code ?? 'TODO'}
                  </code>
                </pre>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div>轮廓</div>
                  <div className="d-flex gap-2">
                    <i
                      className="bi bi-code tw-cursor-pointer"
                      onClick={() =>
                        onClickUpdateState(
                          'button.outline.openCode',
                          !states.button.outline.openCode,
                        )
                      }
                    ></i>

                    <i
                      className="bi bi-clipboard2 tw-cursor-pointer"
                      onClick={() => onClickClipboard('button.outline.code')}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="card-body">
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
              </div>

              <div
                className={clsx('card-footer', {
                  'd-none': !states.button.outline.openCode,
                })}
              >
                <pre>
                  <code className="language-html">
                    {states.button.outline.code ?? 'TODO'}
                  </code>
                </pre>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div>大小</div>
                  <div className="d-flex gap-2">
                    <i
                      className="bi bi-code tw-cursor-pointer"
                      onClick={() =>
                        onClickUpdateState(
                          'button.size.openCode',
                          !states.button.size.openCode,
                        )
                      }
                    ></i>

                    <i
                      className="bi bi-clipboard2 tw-cursor-pointer"
                      onClick={() => onClickClipboard('button.size.code')}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="card-body">
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
              </div>

              <div
                className={clsx('card-footer', {
                  'd-none': !states.button.size.openCode,
                })}
              >
                <pre>
                  <code className="language-html">
                    {states.button.size.code ?? 'TODO'}
                  </code>
                </pre>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div>禁止状态</div>
                  <div className="d-flex gap-2">
                    <i
                      className="bi bi-code tw-cursor-pointer"
                      onClick={() =>
                        onClickUpdateState(
                          'button.disabledState.openCode',
                          !states.button.disabledState.openCode,
                        )
                      }
                    ></i>

                    <i
                      className="bi bi-clipboard2 tw-cursor-pointer"
                      onClick={() =>
                        onClickClipboard('button.disabledState.code')
                      }
                    ></i>
                  </div>
                </div>
              </div>
              <div className="card-body">
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
              </div>

              <div
                className={clsx('card-footer', {
                  'd-none': !states.button.disabledState.openCode,
                })}
              >
                <pre>
                  <code className="language-html">
                    {states.button.disabledState.code ?? 'TODO'}
                  </code>
                </pre>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div>块状按钮</div>
                  <div className="d-flex gap-2">
                    <i
                      className="bi bi-code tw-cursor-pointer"
                      onClick={() =>
                        onClickUpdateState(
                          'button.blockButton.openCode',
                          !states.button.blockButton.openCode,
                        )
                      }
                    ></i>

                    <i
                      className="bi bi-clipboard2 tw-cursor-pointer"
                      onClick={() =>
                        onClickClipboard('button.blockButton.code')
                      }
                    ></i>
                  </div>
                </div>
              </div>
              <div className="card-body">
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
              </div>

              <div
                className={clsx('card-footer', {
                  'd-none': !states.button.blockButton.openCode,
                })}
              >
                <pre>
                  <code className="language-html">
                    {states.button.blockButton.code ?? 'TODO'}
                  </code>
                </pre>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div>切换状态</div>
                  <div className="d-flex gap-2">
                    <i
                      className="bi bi-code tw-cursor-pointer"
                      onClick={() =>
                        onClickUpdateState(
                          'button.toggleState.openCode',
                          !states.button.toggleState.openCode,
                        )
                      }
                    ></i>

                    <i
                      className="bi bi-clipboard2 tw-cursor-pointer"
                      onClick={() =>
                        onClickClipboard('button.toggleState.code')
                      }
                    ></i>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  <div>
                    <Button className="active">Primary</Button>
                  </div>
                  <div>
                    <Button className="active" disabled>
                      Primary
                    </Button>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  <div>
                    <Button variant="primary" className="active">
                      Primary
                    </Button>
                  </div>
                  <div>
                    <Button variant="primary" className="active" disabled>
                      Primary
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={clsx('card-footer', {
                  'd-none': !states.button.toggleState.openCode,
                })}
              >
                <pre>
                  <code className="language-html">
                    {states.button.toggleState.code ?? 'TODO'}
                  </code>
                </pre>
              </div>
            </div>
            <div className="card text-bg-light">
              <div className="card-header">测试</div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  <div>
                    <Button
                      size={mySize}
                      variant="primary"
                      onClick={onClickUpdateSizeTest}
                    >
                      Click Update Button Size ({mySize})
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
