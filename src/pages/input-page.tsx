import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import { Label } from '@lib/label';
import { Input } from '@lib/input';
import { Textarea } from '@lib/textarea';
import inputCodes from '@assets/codes/input';
import Text from '../../lib/text/text.tsx';
import { Button } from '@lib/button';
import { InputOtp } from '@lib/input-otp';
import { useTranslation } from 'react-i18next';
import generalCodes from '@assets/codes/general';
import PropsIndicator from '@components/props-indicator.tsx';
import inputComponentPropsCodes from '@assets/codes/input/component-props.ts';
import Example from '@components/example.tsx';
import { createState } from '@tools/handlers.ts';

enum StatesEnum {
  basic,
  size,
  text,
  disabled,
  readonly,
  readonlyPlainText,
  file,
  color,
  datalist,
  startEndContent,
  otp,
}

enum PropsStatesEnum {
  generalComponentProps,
  inputComponentProps,
  inputOtpComponentProps,
  textareaComponentProps,
  labelComponentProps,
  textComponentProps,
}

export default function InputPage() {
  const navigation = useNavigation();
  const { t: tInputComponentProps } = useTranslation(['inputComponentProps']);
  const { t: tInputOtpComponentProps } = useTranslation(['inputOtpComponentProps']);
  const { t: tTextComponentProps } = useTranslation(['textComponentProps']);
  const { t: tLabelComponentProps } = useTranslation(['labelComponentProps']);
  const { t: tTextareaComponentProps } = useTranslation(['textareaComponentProps']);
  const { t: tInputPage } = useTranslation(['inputPage']);

  const state = useState({
    input: createState(StatesEnum, inputCodes),
  });
  const propsState = useState({
    input: createState(PropsStatesEnum, inputComponentPropsCodes, generalCodes),
  });

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tInputPage}>
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="exampleFormControlInput1">Email address</Label>
            <Input type="email" id="exampleFormControlInput1" placeholder="name@example.com"></Input>
          </div>
          <div>
            <Label htmlFor="exampleFormControlTextarea1">Example textarea</Label>
            <Textarea id="exampleFormControlTextarea1" rows={3}></Textarea>
          </div>
        </div>
      </Example>

      <Example hash="size" state={state} t={tInputPage}>
        <div className="d-flex flex-column gap-2">
          <Input size="lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
          <Input type="text" placeholder="Default input" aria-label="default input example" />
          <Input size="sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example" />
        </div>
      </Example>

      <Example hash="text" state={state} t={tInputPage}>
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
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
                special characters, or emoji.
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
      </Example>

      <Example hash="disabled" state={state} t={tInputPage}>
        <div className="d-flex flex-column gap-2">
          <div>
            <Input type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled />
          </div>

          <div>
            <Input type="text" value="Disabled readonly input" aria-label="Disabled input example" disabled readOnly />
          </div>
        </div>
      </Example>

      <Example hash="readonly" state={state} t={tInputPage}>
        <div className="d-flex flex-column gap-2">
          <div>
            <Input type="text" value="Readonly input here..." aria-label="readonly input example" readOnly />
          </div>
        </div>
      </Example>

      <Example hash="readonlyPlainText" state={state} t={tInputPage}>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-2">
            <div className="row">
              <Label htmlFor="staticEmail" className="col-sm-2">
                Email
              </Label>
              <div className="col-sm-10">
                <Input type="text" readOnly readonlyPlainText id="staticEmail" value="email@example.com" />
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
                  <Input type="password" id="inputPassword" autoComplete="new-password" />
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
                <Input type="password" id="inputPassword2" placeholder="Password" autoComplete="new-password" />
              </div>
              <div className="col-auto">
                <Button type="button" variant="primary">
                  Confirm identity
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Example>

      <Example hash="file" state={state} t={tInputPage}>
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="formFile">Default file input example</Label>
            <Input type="file" id="formFile" />
          </div>
          <div>
            <Label htmlFor="formFileMultiple">Multiple files input example</Label>
            <Input type="file" id="formFileMultiple" multiple />
          </div>
          <div>
            <Label htmlFor="formFileDisabled">Disabled file input example</Label>
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
      </Example>

      <Example hash="color" state={state} t={tInputPage}>
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="exampleColorInput">Color picker</Label>
            <Input type="color" color id="exampleColorInput" defaultValue="#563d7c" title="Choose your color" />
          </div>
        </div>
      </Example>

      <Example hash="datalist" state={state} t={tInputPage}>
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="exampleDataList">Datalist example</Label>
            <Input list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
            <datalist id="datalistOptions">
              <option value="San Francisco"></option>
              <option value="New York"></option>
              <option value="Seattle"></option>
              <option value="Los Angeles"></option>
              <option value="Chicago"></option>
            </datalist>
          </div>
        </div>
      </Example>

      <Example hash="startEndContent" state={state} t={tInputPage}>
        <div className="d-flex flex-column gap-2">
          <Input startContent={<i className="bi bi-person"></i>} placeholder="Username" />
          <Input endContent={<i className="bi bi-eye"></i>} placeholder="Password" />
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
      </Example>

      <Example hash="otp" state={state} t={tInputPage}>
        <div className="d-flex flex-column gap-2">
          <div className="tw-w-full sm:tw-w-1/4">
            <InputOtp defaultValue={['1', '2', '3', '4']}></InputOtp>
          </div>
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
      </Example>

      <PropsIndicator />

      <Example
        hash="inputComponentProps"
        state={propsState}
        t={tInputComponentProps}
        items={[
          {
            attr: 'onRef',
            type: <span className="badge text-bg-secondary">RefCallback&lt;input&gt;</span>,
            desc: tInputComponentProps('desc.onRef'),
            default: '',
          },
          {
            attr: 'size',
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: tInputComponentProps('desc.size'),
            default: '',
          },
          {
            attr: 'nativeSize',
            type: <span className="badge text-bg-secondary">number | undefined</span>,
            desc: tInputComponentProps('desc.nativeSize'),
            default: '',
          },
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('desc.disabled'),
            default: '',
          },
          {
            attr: 'readonly',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('desc.readonly'),
            default: '',
          },
          {
            attr: 'readonlyPlainText',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('desc.readonlyPlainText'),
            default: '',
          },
          {
            attr: 'isValid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('desc.isValid'),
            default: '',
          },
          {
            attr: 'isInvalid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('desc.isInvalid'),
            default: '',
          },
          {
            attr: 'color',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('desc.color'),
            default: '',
          },
          {
            attr: 'nativeColor',
            type: <span className="badge text-bg-secondary">string | undefined</span>,
            desc: tInputComponentProps('desc.nativeColor'),
            default: '',
          },
          {
            attr: 'startContent',
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tInputComponentProps('desc.startContent'),
            default: '',
          },
          {
            attr: 'endContent',
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tInputComponentProps('desc.endContent'),
            default: '',
          },
          {
            attr: 'startEndContentClasses',
            type: (
              <div className="d-flex flex-column gap-2">
                <div>
                  <span className="badge text-bg-secondary">Key : container | start | end | component</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    Value : string | ((originalClass: string) =&gt; string | undefined)
                  </span>
                </div>
              </div>
            ),
            desc: tInputComponentProps('desc.startEndContentClasses'),
            default: '',
          },
        ]}
        props
      ></Example>

      <Example
        hash="inputOtpComponentProps"
        state={propsState}
        t={tInputOtpComponentProps}
        items={[
          {
            attr: 'length',
            type: <span className="badge text-bg-secondary">number</span>,
            desc: tInputOtpComponentProps('desc.length'),
            default: '4',
          },
          {
            attr: 'defaultValue',
            type: <span className="badge text-bg-secondary">(string | number)[]</span>,
            desc: tInputOtpComponentProps('desc.defaultValue'),
            default: '-',
          },
          {
            attr: 'inputProps',
            type: <span className="badge text-bg-secondary">InputProps&lt;input&gt;</span>,
            desc: tInputOtpComponentProps('desc.inputProps'),
            default: '-',
          },
        ]}
        props
      ></Example>

      <Example
        hash="textareaComponentProps"
        state={propsState}
        t={tTextComponentProps}
        items={[
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTextareaComponentProps('desc.disabled'),
            default: '-',
          },
          {
            attr: 'readonly',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTextareaComponentProps('desc.readonly'),
            default: '-',
          },
          {
            attr: 'isValid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTextareaComponentProps('desc.isValid'),
            default: '',
          },
          {
            attr: 'isInvalid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTextareaComponentProps('desc.isInvalid'),
            default: '',
          },
        ]}
        props
      ></Example>

      <Example
        hash="labelComponentProps"
        state={propsState}
        t={tLabelComponentProps}
        items={[
          {
            attr: 'colFormLabel',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tLabelComponentProps('desc.colFormLabel'),
            default: '-',
          },
          {
            attr: 'inputGroupText',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tLabelComponentProps('desc.inputGroupText'),
            default: '-',
          },
          {
            attr: 'formCheckLabel',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tLabelComponentProps('desc.formCheckLabel'),
            default: '-',
          },
        ]}
        props
      ></Example>

      <Example
        hash="textComponentProps"
        state={propsState}
        t={tTextareaComponentProps}
        items={[
          {
            attr: 'validFeedback',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTextComponentProps('desc.validFeedback'),
            default: '',
          },
          {
            attr: 'invalidFeedback',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTextComponentProps('desc.invalidFeedback'),
            default: '',
          },
          {
            attr: 'validTooltip',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTextComponentProps('desc.validTooltip'),
            default: '',
          },
          {
            attr: 'invalidTooltip',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTextComponentProps('desc.invalidTooltip'),
            default: '',
          },
        ]}
        props
      ></Example>

      <Example hash="generalComponentProps" state={propsState} props></Example>

      <About />
    </div>
  );
}
