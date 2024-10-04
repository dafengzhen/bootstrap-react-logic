import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import type { NestedKeys } from '@src/types';
import CustomSimpleCard from '@src/components/custom-simple-card';
import CustomSimpleCardLink from '@components/custom-simple-card-link.tsx';
import AboutComponent from '@components/about-component.tsx';
import { Label } from '@lib/label';
import { Input } from '@lib/input';
import { Textarea } from '@lib/textarea';
import inputCodes from '@assets/codes/input';
import Text from '../../lib/text/text.tsx';
import { Button } from '@lib/button';
import { updateState } from '@src/tools';
import { InputOtp } from '@lib/input-otp';

interface IStates {
  input: {
    basic: {
      openCode: boolean;
      code?: string;
    };
    size: {
      openCode: boolean;
      code?: string;
    };
    text: {
      openCode: boolean;
      code?: string;
    };
    disabled: {
      openCode: boolean;
      code?: string;
    };
    readonly: {
      openCode: boolean;
      code?: string;
    };
    readonlyPlainText: {
      openCode: boolean;
      code?: string;
    };
    file: {
      openCode: boolean;
      code?: string;
    };
    color: {
      openCode: boolean;
      code?: string;
    };
    datalist: {
      openCode: boolean;
      code?: string;
    };
    startEndContent: {
      openCode: boolean;
      code?: string;
    };
    otp: {
      openCode: boolean;
      code?: string;
    };
  };
}

export default function InputPage() {
  useHighlightCode();
  const navigation = useNavigation();

  const [states, setStates] = useState<IStates>({
    input: {
      basic: {
        openCode: false,
        code: inputCodes.basic.code.trim(),
      },
      size: {
        openCode: false,
        code: inputCodes.size.code.trim(),
      },
      text: {
        openCode: false,
        code: inputCodes.text.code.trim(),
      },
      disabled: {
        openCode: false,
        code: inputCodes.disabled.code.trim(),
      },
      readonly: {
        openCode: false,
        code: inputCodes.readonly.code.trim(),
      },
      readonlyPlainText: {
        openCode: false,
        code: inputCodes.readonlyPlainText.code.trim(),
      },
      file: {
        openCode: false,
        code: inputCodes.file.code.trim(),
      },
      color: {
        openCode: false,
        code: inputCodes.color.code.trim(),
      },
      datalist: {
        openCode: false,
        code: inputCodes.datalist.code.trim(),
      },
      startEndContent: {
        openCode: false,
        code: inputCodes.startEndContent.code.trim(),
      },
      otp: {
        openCode: false,
        code: inputCodes.otp.code.trim(),
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
        isOpen={states.input.basic.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'input.basic.openCode',
            !states.input.basic.openCode,
          )
        }
        code={states.input.basic.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="exampleFormControlInput1">Email address</Label>
            <Input
              type="email"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></Input>
          </div>
          <div>
            <Label htmlFor="exampleFormControlTextarea1">
              Example textarea
            </Label>
            <Textarea id="exampleFormControlTextarea1" rows={3}></Textarea>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="大小"
        hash="size"
        isOpen={states.input.size.openCode}
        toggleCode={() =>
          onClickUpdateState('input.size.openCode', !states.input.size.openCode)
        }
        code={states.input.size.code}
      >
        <div className="d-flex flex-column gap-2">
          <Input
            size="lg"
            type="text"
            placeholder=".form-control-lg"
            aria-label=".form-control-lg example"
          />
          <Input
            type="text"
            placeholder="Default input"
            aria-label="default input example"
          />
          <Input
            size="sm"
            type="text"
            placeholder=".form-control-sm"
            aria-label=".form-control-sm example"
          />
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="文本"
        hash="text"
        isOpen={states.input.text.openCode}
        toggleCode={() =>
          onClickUpdateState('input.text.openCode', !states.input.text.openCode)
        }
        code={states.input.text.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <form>
              <Label htmlFor="inputPassword5">Password</Label>
              <Input
                type="text"
                name="username"
                autoComplete="username"
                defaultValue="hiddenUsername"
                className="d-none"
              />
              <Input
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                autoComplete="new-password"
              />
              <Text>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Text>
            </form>
          </div>
          <div>
            <form>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <Label htmlFor="inputPassword6" colFormLabel>
                    Password
                  </Label>
                </div>
                <div className="col-auto">
                  <Input
                    type="text"
                    name="username"
                    autoComplete="username"
                    defaultValue="hiddenUsername"
                    className="d-none"
                  />
                  <Input
                    type="password"
                    id="inputPassword6"
                    aria-describedby="passwordHelpInline"
                    autoComplete="new-password"
                  />
                </div>
                <div className="col-auto">
                  <Text as="span">Must be 8-20 characters long.</Text>
                </div>
              </div>
            </form>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="禁止"
        hash="disabled"
        isOpen={states.input.disabled.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'input.disabled.openCode',
            !states.input.disabled.openCode,
          )
        }
        code={states.input.disabled.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Input
              type="text"
              placeholder="Disabled input"
              aria-label="Disabled input example"
              disabled
            />
          </div>

          <div>
            <Input
              type="text"
              value="Disabled readonly input"
              aria-label="Disabled input example"
              disabled
              readOnly
            />
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="只读"
        hash="readonly"
        isOpen={states.input.readonly.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'input.readonly.openCode',
            !states.input.readonly.openCode,
          )
        }
        code={states.input.readonly.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Input
              type="text"
              value="Readonly input here..."
              aria-label="readonly input example"
              readOnly
            />
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="只读纯文本"
        hash="readonly"
        isOpen={states.input.readonlyPlainText.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'input.readonlyPlainText.openCode',
            !states.input.readonlyPlainText.openCode,
          )
        }
        code={states.input.readonlyPlainText.code}
      >
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-2">
            <div className="row">
              <Label htmlFor="staticEmail" className="col-sm-2">
                Email
              </Label>
              <div className="col-sm-10">
                <Input
                  type="text"
                  readOnly
                  readonlyPlainText
                  id="staticEmail"
                  value="email@example.com"
                />
              </div>
            </div>
            <form>
              <div className="row">
                <Label htmlFor="inputPassword" className="col-sm-2">
                  Password
                </Label>
                <div className="col-sm-10">
                  <Input
                    type="text"
                    name="username"
                    autoComplete="username"
                    defaultValue="hiddenUsername"
                    className="d-none"
                  />
                  <Input
                    type="password"
                    id="inputPassword"
                    autoComplete="new-password"
                  />
                </div>
              </div>
            </form>
          </div>
          <div>
            <form className="row g-3">
              <div className="col-auto">
                <Label htmlFor="staticEmail2" className="visually-hidden">
                  Email
                </Label>
                <Input
                  type="text"
                  readOnly
                  readonlyPlainText
                  id="staticEmail2"
                  value="email@example.com"
                  autoComplete="username"
                />
              </div>
              <div className="col-auto">
                <Label htmlFor="inputPassword2" className="visually-hidden">
                  Password
                </Label>
                <Input
                  type="text"
                  name="username"
                  autoComplete="username"
                  defaultValue="hiddenUsername"
                  className="d-none"
                />
                <Input
                  type="password"
                  id="inputPassword2"
                  placeholder="Password"
                  autoComplete="new-password"
                />
              </div>
              <div className="col-auto">
                <Button type="button" variant="primary">
                  Confirm identity
                </Button>
              </div>
            </form>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="文件"
        hash="readonly"
        isOpen={states.input.file.openCode}
        toggleCode={() =>
          onClickUpdateState('input.file.openCode', !states.input.file.openCode)
        }
        code={states.input.file.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="formFile">Default file input example</Label>
            <Input type="file" id="formFile" />
          </div>
          <div>
            <Label htmlFor="formFileMultiple">
              Multiple files input example
            </Label>
            <Input type="file" id="formFileMultiple" multiple />
          </div>
          <div>
            <Label htmlFor="formFileDisabled">
              Disabled file input example
            </Label>
            <Input type="file" id="formFileDisabled" disabled />
          </div>
          <div>
            <Label htmlFor="formFileSm">Small file input example</Label>
            <Input size="sm" id="formFileSm" type="file" />
          </div>
          <div>
            <Label htmlFor="formFileLg">Large file input example</Label>
            <Input size="lg" id="formFileLg" type="file" />
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="颜色"
        hash="color"
        isOpen={states.input.color.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'input.color.openCode',
            !states.input.color.openCode,
          )
        }
        code={states.input.color.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="exampleColorInput">Color picker</Label>
            <Input
              type="color"
              color
              id="exampleColorInput"
              defaultValue="#563d7c"
              title="Choose your color"
            />
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="数据列表"
        hash="datalist"
        isOpen={states.input.datalist.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'input.datalist.openCode',
            !states.input.datalist.openCode,
          )
        }
        code={states.input.datalist.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="exampleDataList">Datalist example</Label>
            <Input
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions">
              <option value="San Francisco"></option>
              <option value="New York"></option>
              <option value="Seattle"></option>
              <option value="Los Angeles"></option>
              <option value="Chicago"></option>
            </datalist>
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="前缀和后缀"
        hash="startEndContent"
        isOpen={states.input.startEndContent.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'input.startEndContent.openCode',
            !states.input.startEndContent.openCode,
          )
        }
        code={states.input.startEndContent.code}
      >
        <div className="d-flex flex-column gap-2">
          <Input
            startContent={<i className="bi bi-person"></i>}
            placeholder="Username"
          />
          <Input
            endContent={<i className="bi bi-eye"></i>}
            placeholder="Password"
          />
          <Input
            endContent={
              <>
                <i className="bi bi-x"></i>
                <i className="bi bi-eye ms-1"></i>
              </>
            }
            className="!tw-pe-[3.25rem]"
            placeholder="Password"
          />
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="密码框"
        hash="otp"
        isOpen={states.input.otp.openCode}
        toggleCode={() =>
          onClickUpdateState('input.otp.openCode', !states.input.otp.openCode)
        }
        code={states.input.otp.code}
      >
        <div className="d-flex flex-column gap-2">
          <div className="tw-w-full sm:tw-w-1/4">
            <InputOtp></InputOtp>
          </div>
          <div className="tw-w-full sm:tw-w-1/4">
            <InputOtp
              inputProps={{
                disabled: true,
              }}
            ></InputOtp>
          </div>
        </div>
      </CustomSimpleCard>

      <div className="card">
        <div className="card-header">
          <CustomSimpleCardLink
            title="Input 组件属性"
            hash="inputComponentProps"
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
                    <span className="badge text-bg-secondary">input</span>
                  </td>
                  <td></td>
                  <td>
                    <span className="badge text-bg-secondary">input</span>
                  </td>
                </tr>
                <tr>
                  <td>onRef</td>
                  <td>
                    <span className="badge text-bg-secondary">
                      RefCallback&lt;input&gt;
                    </span>
                  </td>
                  <td>Input</td>
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
                <tr>
                  <td>readonly</td>
                  <td>
                    <span className="badge text-bg-secondary">boolean</span>
                  </td>
                  <td></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>readonlyPlainText</td>
                  <td>
                    <span className="badge text-bg-secondary">boolean</span>
                  </td>
                  <td>Class</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>
                    <span className="badge text-bg-secondary">boolean</span>
                  </td>
                  <td>Class</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>nativeColor</td>
                  <td>
                    <span className="badge text-bg-secondary">
                      string | undefined
                    </span>
                  </td>
                  <td>HTMLAttributes</td>
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
                <tr>
                  <td>startEndContentClasses</td>
                  <td>
                    <div className="d-flex flex-column gap-2">
                      <div>
                        <span className="badge text-bg-secondary">
                          Key : container | start | end | component
                        </span>
                      </div>
                      <div>
                        <span className="badge text-bg-secondary">
                          Value : string | ((originalClass: string) =&gt; string
                          | undefined)
                        </span>
                      </div>
                    </div>
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
            title="InputOtp 组件属性"
            hash="inputOtpComponentProps"
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
                    <span className="badge text-bg-secondary">div</span>
                  </td>
                  <td></td>
                  <td>
                    <span className="badge text-bg-secondary">div</span>
                  </td>
                </tr>
                <tr>
                  <td>length</td>
                  <td>
                    <span className="badge text-bg-secondary">number</span>
                  </td>
                  <td></td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>inputProps</td>
                  <td>
                    <span className="badge text-bg-secondary">
                      InputProps&lt;input&gt;
                    </span>
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
            title="Textarea 组件属性"
            hash="textareaComponentProps"
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
                    <span className="badge text-bg-secondary">textarea</span>
                  </td>
                  <td></td>
                  <td>
                    <span className="badge text-bg-secondary">textarea</span>
                  </td>
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
                  <td>readonly</td>
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
            title="Label 组件属性"
            hash="labelComponentProps"
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
                    <span className="badge text-bg-secondary">label</span>
                  </td>
                  <td></td>
                  <td>
                    <span className="badge text-bg-secondary">label</span>
                  </td>
                </tr>
                <tr>
                  <td>colFormLabel</td>
                  <td>
                    <span className="badge text-bg-secondary">boolean</span>
                  </td>
                  <td>Class</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>inputGroupText</td>
                  <td>
                    <span className="badge text-bg-secondary">boolean</span>
                  </td>
                  <td>Class</td>
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
            title="Text 组件属性"
            hash="textComponentProps"
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
                    <span className="badge text-bg-secondary">div</span>
                    <span className="badge text-bg-secondary ms-1">span</span>
                  </td>
                  <td></td>
                  <td>
                    <span className="badge text-bg-secondary">div</span>
                  </td>
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
