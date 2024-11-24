import { type CSSProperties, type ReactNode, useContext, useState } from 'react';
import { GlobalContext } from '@contexts/global-context.ts';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import { ActionIcons } from '@components/action-icons.tsx';
import ExampleLink from '@components/example-link.tsx';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

export default function ExamplePropsCard({
  codeLanguage = 'typescript',
  codeDisplayMode = 'direct',
  headerClassName,
  customCaption,
  customBody,
  items = [],
  toggleCode,
  children,
  colgroup,
  isOpen,
  title,
  code,
  hash,
}: {
  colgroup?: {
    default: CSSProperties;
    attr: CSSProperties;
    desc: CSSProperties;
    type: CSSProperties;
  };
  items?: {
    attr: ReactNode | string;
    default?: ReactNode;
    desc?: ReactNode;
    type?: ReactNode;
  }[];
  codeDisplayMode?: 'indirectly' | 'direct';
  customCaption?: ReactNode;
  headerClassName?: string;
  toggleCode: () => void;
  codeLanguage?: string;
  children?: ReactNode;
  customBody?: boolean;
  isOpen: boolean;
  code?: string;
  title: string;
  hash: string;
}) {
  const globalContext = useContext(GlobalContext);
  const { fullscreen, layout, theme } = globalContext;
  const { i18n } = useTranslation();
  const [_colgroup] = useState(
    colgroup ?? {
      default: {
        width: '100px',
      },
      attr: {
        width: '150px',
      },
      desc: {
        width: '100px',
      },
      type: {
        width: '350px',
      },
    },
  );
  const [setElement] = useHighlightCode({ codeLanguage, isOpen, code });

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
                center={layout?.[0] === 'center'}
                dark={theme?.[0] === 'dark'}
                fullscreen={fullscreen?.[0]}
                fullscreenState={fullscreen}
                onClickCode={toggleCode}
                layoutState={layout}
                themeState={theme}
                isOpen={isOpen}
                code={code}
                i18n={i18n}
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
