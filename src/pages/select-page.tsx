import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import type { NestedKeys } from '@src/types';
import CustomSimpleCard from '@src/components/custom-simple-card';
import CustomSimpleCardLink from '@components/custom-simple-card-link.tsx';
import AboutComponent from '@components/about-component.tsx';
import { updateState } from '@src/tools';
import selectCodes from '@assets/codes/select';
import { Select, SelectOption } from '@lib/select';

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

      <div className="card">
        <div className="card-header">
          <CustomSimpleCardLink
            title="Select 组件属性"
            hash="selectComponentProps"
          />
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
                    <span className="badge text-bg-secondary">select</span>
                  </td>
                  <td></td>
                  <td>select</td>
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
                  <td>nativeSize</td>
                  <td>
                    <span className="badge text-bg-secondary">
                      number | undefined
                    </span>
                  </td>
                  <td>HTMLAttributes</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <CustomSimpleCardLink
            title="SelectOption 组件属性"
            hash="selectOptionComponentProps"
          />
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
                    <span className="badge text-bg-secondary">option</span>
                  </td>
                  <td></td>
                  <td>option</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>
                    <span className="badge text-bg-secondary">boolean</span>
                  </td>
                  <td></td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <CustomSimpleCardLink
            title="通用组件属性"
            hash="generalComponentProps"
          />
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
