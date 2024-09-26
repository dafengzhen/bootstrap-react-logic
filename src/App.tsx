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
    },
  });

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

  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col col-2">
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
        <div className="col col=10">
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
                <div className="d-flex gap-2">
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
                <div className="d-flex gap-2">
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
                <div className="d-flex align-items-center gap-2">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
