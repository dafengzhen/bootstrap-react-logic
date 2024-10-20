import { type CSSProperties, type ReactNode, useContext, useState } from 'react';
import { GlobalContext } from '@contexts/global-context.ts';
import { useTranslation } from 'react-i18next';
import ExampleLink from '@components/example-link.tsx';
import clsx from 'clsx';
import { ActionIcons } from '@components/action-icons.tsx';
import useHighlightCode from '@hooks/use-highlight-code.ts';

export default function ExamplePropsCard({
  title,
  hash,
  children,
  headerClassName,
  customBody,
  colgroup,
  items = [],
  isOpen,
  toggleCode,
  code,
  codeLanguage = 'typescript',
  codeDisplayMode = 'direct',
  customCaption,
}: {
  title: string;
  hash: string;
  children?: ReactNode;
  customBody?: boolean;
  headerClassName?: string;
  colgroup?: {
    attr: CSSProperties;
    type: CSSProperties;
    desc: CSSProperties;
    default: CSSProperties;
  };
  items?: {
    attr: string | ReactNode;
    type?: ReactNode;
    desc?: ReactNode;
    default?: ReactNode;
  }[];
  isOpen: boolean;
  toggleCode: () => void;
  code?: string;
  codeLanguage?: string;
  codeDisplayMode?: 'direct' | 'indirectly';
  customCaption?: ReactNode;
}) {
  const globalContext = useContext(GlobalContext);
  const { fullscreen, layout, theme } = globalContext;
  const { i18n } = useTranslation();
  const [_colgroup] = useState(
    colgroup ?? {
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
    },
  );
  const [setElement] = useHighlightCode({ isOpen, code, codeLanguage });

  return (
    <div className="card">
      {customBody && children ? (
        children
      ) : (
        <>
          <div className={clsx('card-header', headerClassName)}>
            <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
              <ExampleLink title={title} hash={hash} />
              <ActionIcons
                isOpen={isOpen}
                code={code}
                fullscreen={fullscreen?.[0]}
                fullscreenState={fullscreen}
                layoutState={layout}
                center={layout?.[0] === 'center'}
                themeState={theme}
                dark={theme?.[0] === 'dark'}
                i18n={i18n}
                onClickCode={toggleCode}
              />
            </div>
          </div>
          <div className={clsx('card-body', codeDisplayMode === 'direct' && isOpen && 'd-none')}>
            <div className="table-responsive">
              <table className="table tw-table-fixed">
                <colgroup>
                  <col style={_colgroup.attr} />
                  <col style={_colgroup.type} />
                  <col style={_colgroup.desc} />
                  <col style={_colgroup.default} />
                </colgroup>
                {customCaption && (
                  <caption>
                    <div className="card mt-4">
                      <div className="card-footer border-top-0 text-secondary">
                        <div className="px-2 py-2 lh-lg">{customCaption}</div>
                      </div>
                    </div>
                  </caption>
                )}
                <thead>
                  <tr>
                    <th scope="col">Attr</th>
                    <th scope="col">Type</th>
                    <th scope="col">Desc</th>
                    <th scope="col">Default</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={typeof item.attr === 'string' ? item.attr : index}>
                      <td>{item.attr}</td>
                      <td>{item.type}</td>
                      <td>{item.desc}</td>
                      <td>{item.default || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      {isOpen && (
        <div className="card-footer border-top-0">
          <pre>
            <code ref={setElement}>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
