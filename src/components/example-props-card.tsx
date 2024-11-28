import { ActionIcons } from '@components/action-icons.tsx';
import ExampleLink from '@components/example-link.tsx';
import { GlobalContext } from '@contexts/global-context.ts';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import { sortByProperty } from '@src/tools';
import clsx from 'clsx';
import { type CSSProperties, type ReactNode, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ExamplePropsCard({
  children,
  code,
  codeDisplayMode = 'direct',
  codeLanguage = 'typescript',
  colgroup,
  customBody,
  customCaption,
  hash,
  headerClassName,
  isOpen,
  items = [],
  showCode,
  title,
  toggleCode,
}: {
  children?: ReactNode;
  code?: string;
  codeDisplayMode?: 'direct' | 'indirectly';
  codeLanguage?: string;
  colgroup?: {
    attr: CSSProperties;
    default: CSSProperties;
    desc: CSSProperties;
    type: CSSProperties;
  };
  customBody?: boolean;
  customCaption?: ReactNode;
  hash: string;
  headerClassName?: string;
  isOpen: boolean;
  items?: {
    attr: ReactNode | string;
    default?: ReactNode;
    desc?: ReactNode;
    type?: ReactNode;
  }[];
  showCode?: boolean;
  title: string;
  toggleCode: () => void;
}) {
  const globalContext = useContext(GlobalContext);
  const { fullscreen, layout, theme } = globalContext;
  const { i18n } = useTranslation();
  const [_colgroup] = useState(
    colgroup ?? {
      attr: {
        width: '150px',
      },
      default: {
        width: '100px',
      },
      desc: {
        width: '100px',
      },
      type: {
        width: '350px',
      },
    },
  );
  const [setElement] = useHighlightCode({ code, codeLanguage, isOpen });
  const _items = sortByProperty(items, 'attr');

  return (
    <div className="card">
      {customBody && children ? (
        children
      ) : (
        <>
          <div className={clsx('card-header', headerClassName)}>
            <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
              <ExampleLink hash={hash} title={title} />
              <ActionIcons
                center={layout?.[0] === 'center'}
                code={code}
                dark={theme?.[0] === 'dark'}
                fullscreen={fullscreen?.[0]}
                fullscreenState={fullscreen}
                i18n={i18n}
                isOpen={isOpen}
                layoutState={layout}
                onClickCode={toggleCode}
                showCode={showCode}
                themeState={theme}
              />
            </div>
          </div>
          <div className={clsx('card-body', codeDisplayMode === 'direct' && isOpen && 'd-none')}>
            <div className="table-responsive">
              <table className="table tw-table-fixed table-borderless">
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
                  {_items.map((item, index) => (
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
