import EventsIndicator from '@components/events-indicator.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { InputOtp } from '@lib/input-otp';
import { Textarea } from '@lib/textarea';
import { Button } from '@lib/button';
import { Input } from '@lib/input';
import { Label } from '@lib/label';
import { useState } from 'react';

import Text from '../../lib/text/text.tsx';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/input/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

export default function InputPage() {
  const navigation = useNavigation();
  const { t: tInputComponentProps } = useTranslation(['inputComponentProps']);
  const { t: tInputPage } = useTranslation(['inputPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example t={tInputPage} state={state} hash="basic">
        <div>
          <Label htmlFor="exampleFormControlInput1">Email address</Label>
          <Input placeholder="name@example.com" id="exampleFormControlInput1" type="email"></Input>
        </div>

        <div>
          <Label htmlFor="exampleFormControlTextarea1">Example textarea</Label>
          <Textarea id="exampleFormControlTextarea1" rows={3}></Textarea>
        </div>
      </Example>

      <Example t={tInputPage} state={state} hash="size">
        <Input aria-label=".form-control-lg example" placeholder=".form-control-lg" type="text" size="lg" />
        <Input aria-label="default input example" placeholder="Default input" type="text" />
        <Input aria-label=".form-control-sm example" placeholder=".form-control-sm" type="text" size="sm" />
      </Example>

      <Example t={tInputPage} state={state} hash="text">
        <form>
          <Label htmlFor="inputPassword5">Password</Label>
          <Input defaultValue="hiddenUsername" autoComplete="username" className="d-none" name="username" type="text" />
          <Input aria-describedby="passwordHelpBlock" autoComplete="new-password" id="inputPassword5" type="password" />
          <Text>
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
            special characters, or emoji.
          </Text>
        </form>

        <form>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <Label htmlFor="inputPassword6" colFormLabel>
                Password
              </Label>
            </div>
            <div className="col-auto">
              <Input
                defaultValue="hiddenUsername"
                autoComplete="username"
                className="d-none"
                name="username"
                type="text"
              />
              <Input
                aria-describedby="passwordHelpInline"
                autoComplete="new-password"
                id="inputPassword6"
                type="password"
              />
            </div>
            <div className="col-auto">
              <Text as="span">Must be 8-20 characters long.</Text>
            </div>
          </div>
        </form>
      </Example>

      <Example hash="disabled" t={tInputPage} state={state}>
        <Input aria-label="Disabled input example" placeholder="Disabled input" type="text" disabled />

        <Input aria-label="Disabled input example" value="Disabled readonly input" type="text" disabled readOnly />
      </Example>

      <Example hash="readonly" t={tInputPage} state={state}>
        <Input aria-label="readonly input example" value="Readonly input here..." type="text" readOnly />
      </Example>

      <Example hash="readonlyPlaintext" t={tInputPage} state={state}>
        <div className="row">
          <Label htmlFor="staticEmail" className="col-sm-2">
            Email
          </Label>
          <div className="col-sm-10">
            <Input value="email@example.com" readonlyPlainText id="staticEmail" type="text" readOnly />
          </div>
        </div>

        <form>
          <div className="row">
            <Label htmlFor="inputPassword" className="col-sm-2">
              Password
            </Label>
            <div className="col-sm-10">
              <Input
                defaultValue="hiddenUsername"
                autoComplete="username"
                className="d-none"
                name="username"
                type="text"
              />
              <Input autoComplete="new-password" id="inputPassword" type="password" />
            </div>
          </div>
        </form>

        <form className="row g-3">
          <div className="col-auto">
            <Label className="visually-hidden" htmlFor="staticEmail2">
              Email
            </Label>
            <Input
              value="email@example.com"
              autoComplete="username"
              id="staticEmail2"
              readonlyPlainText
              type="text"
              readOnly
            />
          </div>
          <div className="col-auto">
            <Label className="visually-hidden" htmlFor="inputPassword2">
              Password
            </Label>
            <Input
              defaultValue="hiddenUsername"
              autoComplete="username"
              className="d-none"
              name="username"
              type="text"
            />
            <Input autoComplete="new-password" placeholder="Password" id="inputPassword2" type="password" />
          </div>
          <div className="col-auto">
            <Button variant="primary" type="button">
              Confirm identity
            </Button>
          </div>
        </form>
      </Example>

      <Example t={tInputPage} state={state} hash="file">
        <div>
          <Label htmlFor="formFile">Default file input example</Label>
          <Input id="formFile" type="file" />
        </div>

        <div>
          <Label htmlFor="formFileMultiple">Multiple files input example</Label>
          <Input id="formFileMultiple" type="file" multiple />
        </div>

        <div>
          <Label htmlFor="formFileDisabled">Disabled file input example</Label>
          <Input id="formFileDisabled" type="file" disabled />
        </div>

        <div>
          <Label htmlFor="formFileSm">Small file input example</Label>
          <Input id="formFileSm" type="file" size="sm" />
        </div>

        <div>
          <Label htmlFor="formFileLg">Large file input example</Label>
          <Input id="formFileLg" type="file" size="lg" />
        </div>
      </Example>

      <Example t={tInputPage} state={state} hash="color">
        <div>
          <Label htmlFor="exampleColorInput">Color picker</Label>
          <Input title="Choose your color" defaultValue="#563d7c" id="exampleColorInput" type="color" color />
        </div>
      </Example>

      <Example hash="datalist" t={tInputPage} state={state}>
        <div>
          <Label htmlFor="exampleDataList">Datalist example</Label>
          <Input placeholder="Type to search..." list="datalistOptions" id="exampleDataList" />
          <datalist id="datalistOptions">
            <option value="San Francisco"></option>
            <option value="New York"></option>
            <option value="Seattle"></option>
            <option value="Los Angeles"></option>
            <option value="Chicago"></option>
          </datalist>
        </div>
      </Example>

      <Example hash="startEndContent" t={tInputPage} state={state}>
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
      </Example>

      <Example t={tInputPage} state={state} hash="otp">
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
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: tInputComponentProps('input.desc.size'),
            attr: 'size',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">number</span>,
            desc: tInputComponentProps('input.desc.nativeSize'),
            attr: 'nativeSize',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('input.desc.disabled'),
            attr: 'disabled',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('input.desc.readonly'),
            attr: 'readonly',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('input.desc.readonlyPlainText'),
            attr: 'readonlyPlainText',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('input.desc.isValid'),
            attr: 'isValid',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('input.desc.isInvalid'),
            attr: 'isInvalid',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('input.desc.color'),
            attr: 'color',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">string</span>,
            desc: tInputComponentProps('input.desc.nativeColor'),
            attr: 'nativeColor',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tInputComponentProps('input.desc.startContent'),
            attr: 'startContent',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tInputComponentProps('input.desc.endContent'),
            attr: 'endContent',
            default: '',
          },
          {
            type: (
              <div className="d-flex flex-column">
                <div>
                  <span className="badge text-bg-secondary">Key : container | start | end | component</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    {'Value : string | ((originalClass: string) => string)'}
                  </span>
                </div>
              </div>
            ),
            desc: tInputComponentProps('input.desc.startEndContentClasses'),
            attr: 'startEndContentClasses',
            default: '',
          },
        ]}
        hash="inputComponentProps"
        t={tInputComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">number</span>,
            desc: tInputComponentProps('inputOtp.desc.length'),
            attr: 'length',
            default: '4',
          },
          {
            type: <span className="badge text-bg-secondary">(string | number)[]</span>,
            desc: tInputComponentProps('inputOtp.desc.defaultValue'),
            attr: 'defaultValue',
            default: '-',
          },
          {
            type: <span className="badge text-bg-secondary">InputProps</span>,
            desc: tInputComponentProps('inputOtp.desc.inputProps'),
            attr: 'inputProps',
            default: '-',
          },
        ]}
        hash="inputOtpComponentProps"
        t={tInputComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('textarea.desc.disabled'),
            attr: 'disabled',
            default: '-',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('textarea.desc.readonly'),
            attr: 'readonly',
            default: '-',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('textarea.desc.isValid'),
            attr: 'isValid',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('textarea.desc.isInvalid'),
            attr: 'isInvalid',
            default: '',
          },
        ]}
        hash="textareaComponentProps"
        t={tInputComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('label.desc.colFormLabel'),
            attr: 'colFormLabel',
            default: '-',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('label.desc.inputGroupText'),
            attr: 'inputGroupText',
            default: '-',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('label.desc.formCheckLabel'),
            attr: 'formCheckLabel',
            default: '-',
          },
        ]}
        hash="labelComponentProps"
        t={tInputComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('text.desc.validFeedback'),
            attr: 'validFeedback',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('text.desc.invalidFeedback'),
            attr: 'invalidFeedback',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('text.desc.validTooltip'),
            attr: 'validTooltip',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputComponentProps('text.desc.invalidTooltip'),
            attr: 'invalidTooltip',
            default: '',
          },
        ]}
        hash="textComponentProps"
        t={tInputComponentProps}
        state={state}
        props
      />

      <EventsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">RefCallback</span>,
            desc: tInputComponentProps('input.desc.onRef'),
            attr: 'onRef',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">Function</span>,
            desc: tInputComponentProps('input.desc.onChange'),
            attr: 'onChange',
            default: '',
          },
        ]}
        hash="inputComponentProps"
        t={tInputComponentProps}
        state={state}
        events
      />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">Function</span>,
            desc: tInputComponentProps('inputOtp.desc.onChange'),
            attr: 'onChange',
            default: '',
          },
        ]}
        hash="inputOtpComponentProps"
        t={tInputComponentProps}
        state={state}
        events
      />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">RefCallback</span>,
            desc: tInputComponentProps('textarea.desc.onRef'),
            attr: 'onRef',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">Function</span>,
            desc: tInputComponentProps('textarea.desc.onChange'),
            attr: 'onChange',
            default: '',
          },
        ]}
        hash="textareaComponentProps"
        t={tInputComponentProps}
        state={state}
        events
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
