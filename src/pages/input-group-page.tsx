import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import type { NestedKeys } from '@src/types';
import CustomSimpleCard from '@src/components/custom-simple-card';
import CustomSimpleCardLink from '@components/custom-simple-card-link.tsx';
import AboutComponent from '@components/about-component.tsx';
import { Label } from '@lib/label';
import { Input } from '@lib/input';
import inputGroupCodes from '@assets/codes/input-group';
import Text from '../../lib/text/text.tsx';
import { InputGroup, InputGroupText } from '@lib/input-group';
import { Textarea } from '@lib/textarea';
import { updateState } from '@src/tools';
import { Button } from '@lib/button';

interface IStates {
  inputGroup: {
    basic: {
      openCode: boolean;
      code?: string;
    };
    nowrap: {
      openCode: boolean;
      code?: string;
    };
    size: {
      openCode: boolean;
      code?: string;
    };
    checkboxAndRadio: {
      openCode: boolean;
      code?: string;
    };
    multipleInput: {
      openCode: boolean;
      code?: string;
    };
    multipleAddons: {
      openCode: boolean;
      code?: string;
    };
    buttonAddons: {
      openCode: boolean;
      code?: string;
    };
    customSelect: {
      openCode: boolean;
      code?: string;
    };
    customFileInput: {
      openCode: boolean;
      code?: string;
    };
  };
}

export default function InputGroupPage() {
  useHighlightCode();
  const navigation = useNavigation();

  const [states, setStates] = useState<IStates>({
    inputGroup: {
      basic: {
        openCode: false,
        code: inputGroupCodes.basic.code.trim(),
      },
      nowrap: {
        openCode: false,
        code: inputGroupCodes.nowrap.code.trim(),
      },
      size: {
        openCode: false,
        code: inputGroupCodes.size.code.trim(),
      },
      checkboxAndRadio: {
        openCode: false,
        code: inputGroupCodes.checkboxAndRadio.code.trim(),
      },
      multipleInput: {
        openCode: false,
        code: inputGroupCodes.multipleInput.code.trim(),
      },
      multipleAddons: {
        openCode: false,
        code: inputGroupCodes.multipleAddons.code.trim(),
      },
      buttonAddons: {
        openCode: false,
        code: inputGroupCodes.buttonAddons.code.trim(),
      },
      customSelect: {
        openCode: false,
        code: inputGroupCodes.customSelect.code.trim(),
      },
      customFileInput: {
        openCode: false,
        code: inputGroupCodes.customFileInput.code.trim(),
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
        isOpen={states.inputGroup.basic.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'inputGroup.basic.openCode',
            !states.inputGroup.basic.openCode,
          )
        }
        code={states.inputGroup.basic.code}
      >
        <div className="d-flex flex-column gap-2">
          <InputGroup>
            <InputGroupText id="basic-addon1">@</InputGroupText>
            <Input
              type="text"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup>
            <Input
              type="text"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroupText id="basic-addon2">@example.com</InputGroupText>
          </InputGroup>

          <div>
            <Label htmlFor="basic-url">Your vanity URL</Label>
            <InputGroup>
              <InputGroupText id="basic-addon3">
                https://example.com/users/
              </InputGroupText>
              <Input
                type="text"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </InputGroup>
            <Text id="basic-addon4">
              Example help text goes outside the input group.
            </Text>
          </div>

          <InputGroup>
            <InputGroupText>$</InputGroupText>
            <Input type="text" aria-label="Amount (to the nearest dollar)" />
            <InputGroupText>.00</InputGroupText>
          </InputGroup>

          <InputGroup>
            <Input type="text" placeholder="Username" aria-label="Username" />
            <InputGroupText>@</InputGroupText>
            <Input type="text" placeholder="Server" aria-label="Server" />
          </InputGroup>

          <InputGroup>
            <InputGroupText>With textarea</InputGroupText>
            <Textarea aria-label="With textarea"></Textarea>
          </InputGroup>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="不换行"
        hash="nowrap"
        isOpen={states.inputGroup.nowrap.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'inputGroup.nowrap.openCode',
            !states.inputGroup.nowrap.openCode,
          )
        }
        code={states.inputGroup.nowrap.code}
      >
        <div className="d-flex flex-column gap-2">
          <InputGroup nowrap>
            <InputGroupText id="addon-wrapping">@</InputGroupText>
            <Input
              type="text"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </InputGroup>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="大小"
        hash="size"
        isOpen={states.inputGroup.size.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'inputGroup.size.openCode',
            !states.inputGroup.size.openCode,
          )
        }
        code={states.inputGroup.size.code}
      >
        <div className="d-flex flex-column gap-2">
          <InputGroup size="sm">
            <InputGroupText id="inputGroup-sizing-sm">Small</InputGroupText>
            <Input
              type="text"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          <InputGroup>
            <InputGroupText id="inputGroup-sizing-default">
              Default
            </InputGroupText>
            <Input
              type="text"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <InputGroup size="lg">
            <InputGroupText id="inputGroup-sizing-lg">Large</InputGroupText>
            <Input
              type="text"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </InputGroup>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="选项框和单选框"
        hash="checkboxAndRadio"
        isOpen={states.inputGroup.checkboxAndRadio.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'inputGroup.checkboxAndRadio.openCode',
            !states.inputGroup.checkboxAndRadio.openCode,
          )
        }
        code={states.inputGroup.checkboxAndRadio.code}
      >
        <div className="d-flex flex-column gap-2">
          <InputGroup>
            <InputGroupText as="div">
              <Input
                className="form-check-input mt-0"
                type="checkbox"
                readOnly
                aria-label="Checkbox for following text input"
              />
            </InputGroupText>
            <Input type="text" aria-label="Text input with checkbox" />
          </InputGroup>

          <InputGroup>
            <InputGroupText as="div">
              <Input
                className="form-check-input mt-0"
                type="radio"
                readOnly
                aria-label="Radio button for following text input"
              />
            </InputGroupText>
            <Input type="text" aria-label="Text input with radio button" />
          </InputGroup>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="多个输入框"
        hash="multipleInput"
        isOpen={states.inputGroup.multipleInput.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'inputGroup.multipleInput.openCode',
            !states.inputGroup.multipleInput.openCode,
          )
        }
        code={states.inputGroup.multipleInput.code}
      >
        <div className="d-flex flex-column gap-2">
          <InputGroup>
            <InputGroupText className="input-group-text">
              First and last name
            </InputGroupText>
            <Input type="text" aria-label="First name" />
            <Input type="text" aria-label="Last name" />
          </InputGroup>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="多个附加组件"
        hash="multipleAddons"
        isOpen={states.inputGroup.multipleAddons.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'inputGroup.multipleAddons.openCode',
            !states.inputGroup.multipleAddons.openCode,
          )
        }
        code={states.inputGroup.multipleAddons.code}
      >
        <div className="d-flex flex-column gap-2">
          <InputGroup>
            <InputGroupText>$</InputGroupText>
            <InputGroupText>0.00</InputGroupText>
            <Input
              type="text"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
            <InputGroupText>$</InputGroupText>
            <InputGroupText>0.00</InputGroupText>
          </InputGroup>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="按钮"
        hash="buttonAddons"
        isOpen={states.inputGroup.buttonAddons.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'inputGroup.buttonAddons.openCode',
            !states.inputGroup.buttonAddons.openCode,
          )
        }
        code={states.inputGroup.buttonAddons.code}
      >
        <div className="d-flex flex-column gap-2">
          <InputGroup>
            <Button outline="secondary" type="button" id="button-addon1">
              Button
            </Button>
            <Input
              type="text"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </InputGroup>

          <InputGroup>
            <Input
              type="text"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <Button outline="secondary" type="button" id="button-addon2">
              Button
            </Button>
          </InputGroup>

          <InputGroup>
            <Button outline="secondary" type="button">
              Button
            </Button>
            <Button outline="secondary" type="button">
              Button
            </Button>
            <Input
              type="text"
              placeholder=""
              aria-label="Example text with two button addons"
            />
          </InputGroup>

          <InputGroup>
            <Input
              type="text"
              placeholder="Recipient's username"
              aria-label="Recipient's username with two button addons"
            />
            <Button outline="secondary" type="button">
              Button
            </Button>
            <Button outline="secondary" type="button">
              Button
            </Button>
          </InputGroup>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="选择框"
        hash="customSelect"
        isOpen={states.inputGroup.customSelect.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'inputGroup.customSelect.openCode',
            !states.inputGroup.customSelect.openCode,
          )
        }
        code={states.inputGroup.customSelect.code}
      >
        <div className="d-flex flex-column gap-2">
          <InputGroup>
            <Label inputGroupText htmlFor="inputGroupSelect01">
              Options
            </Label>
            <select className="form-select" id="inputGroupSelect01">
              <option defaultValue="">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </InputGroup>

          <InputGroup>
            <select className="form-select" id="inputGroupSelect02">
              <option defaultValue="">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <Label inputGroupText htmlFor="inputGroupSelect02">
              Options
            </Label>
          </InputGroup>

          <InputGroup>
            <Button outline="secondary" type="button">
              Button
            </Button>
            <select
              className="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option defaultValue="">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </InputGroup>

          <InputGroup>
            <select
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option defaultValue="">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <Button outline="secondary" type="button">
              Button
            </Button>
          </InputGroup>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title="文件框"
        hash="customFileInput"
        isOpen={states.inputGroup.customFileInput.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'inputGroup.customFileInput.openCode',
            !states.inputGroup.customFileInput.openCode,
          )
        }
        code={states.inputGroup.customFileInput.code}
      >
        <div className="d-flex flex-column gap-2">
          <InputGroup>
            <Label inputGroupText htmlFor="inputGroupFile01">
              Upload
            </Label>
            <Input type="file" id="inputGroupFile01" />
          </InputGroup>

          <InputGroup>
            <Input type="file" id="inputGroupFile02" />
            <Label inputGroupText htmlFor="inputGroupFile02">
              Upload
            </Label>
          </InputGroup>

          <InputGroup>
            <Button
              outline="secondary"
              type="button"
              id="inputGroupFileAddon03"
            >
              Button
            </Button>
            <Input
              type="file"
              id="inputGroupFile03"
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
            />
          </InputGroup>

          <InputGroup>
            <Input
              type="file"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
            />
            <Button
              outline="secondary"
              type="button"
              id="inputGroupFileAddon04"
            >
              Button
            </Button>
          </InputGroup>
        </div>
      </CustomSimpleCard>

      <div className="card">
        <div className="card-header">
          <CustomSimpleCardLink
            title="InputGroup 组件属性"
            hash="inputGroupComponentProps"
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
                  <td>div</td>
                </tr>
                <tr>
                  <td>nowrap</td>
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
      </div>

      <div className="card">
        <div className="card-header">
          <CustomSimpleCardLink
            title="InputGroupText 组件属性"
            hash="inputGroupTextComponentProps"
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
                  <td>span</td>
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
                  <td>Clear original className names</td>
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
