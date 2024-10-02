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
    },
  });

  function onClickUpdateState(
    k: NestedKeys<IStates>,
    v: unknown,
    c?: () => void,
  ) {
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
        hash="size"
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

      <div className="card">
        <div className="card-header">
          <CustomSimpleCardLink
            title="Input 组件属性"
            hash="inputComponentProps"
          />
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
                    <span className="badge text-bg-secondary">input</span>
                  </td>
                  <td></td>
                  <td>
                    <span className="badge text-bg-secondary">input</span>
                  </td>
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
            title="Textarea 组件属性"
            hash="textareaComponentProps"
          />
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
                    <span className="badge text-bg-secondary">textarea</span>
                  </td>
                  <td></td>
                  <td>
                    <span className="badge text-bg-secondary">textarea</span>
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
            title="Label 组件属性"
            hash="labelComponentProps"
          />
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
            title="Text 组件属性"
            hash="textComponentProps"
          />
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
