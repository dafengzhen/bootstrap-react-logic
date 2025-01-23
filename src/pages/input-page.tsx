import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Button } from '@lib/button';
import { Input } from '@lib/input';
import { InputOtp } from '@lib/input-otp';
import { Label } from '@lib/label';
import { Textarea } from '@lib/textarea';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

import Text from '../../lib/text/text.tsx';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/input/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
      <Example hash="basic" state={state} t={tInputPage}>
        <div>
          <Label htmlFor="exampleFormControlInput1">Email address</Label>
          <Input id="exampleFormControlInput1" placeholder="name@example.com" type="email"></Input>
        </div>

        <div>
          <Label htmlFor="exampleFormControlTextarea1">Example textarea</Label>
          <Textarea id="exampleFormControlTextarea1" rows={3}></Textarea>
        </div>
      </Example>

      <Example hash="size" state={state} t={tInputPage}>
        <Input aria-label=".form-control-lg example" placeholder=".form-control-lg" size="lg" type="text" />
        <Input aria-label="default input example" placeholder="Default input" type="text" />
        <Input aria-label=".form-control-sm example" placeholder=".form-control-sm" size="sm" type="text" />
      </Example>

      <Example hash="text" state={state} t={tInputPage}>
        <form>
          <Label htmlFor="inputPassword5">Password</Label>
          <Input autoComplete="username" className="d-none" defaultValue="hiddenUsername" name="username" type="text" />
          <Input aria-describedby="passwordHelpBlock" autoComplete="new-password" id="inputPassword5" type="password" />
          <Text>
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
            special characters, or emoji.
          </Text>
        </form>

        <form>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <Label colFormLabel htmlFor="inputPassword6">
                Password
              </Label>
            </div>
            <div className="col-auto">
              <Input
                autoComplete="username"
                className="d-none"
                defaultValue="hiddenUsername"
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

      <Example hash="disabled" state={state} t={tInputPage}>
        <Input aria-label="Disabled input example" disabled placeholder="Disabled input" type="text" />

        <Input aria-label="Disabled input example" disabled readOnly type="text" value="Disabled readonly input" />
      </Example>

      <Example hash="readonly" state={state} t={tInputPage}>
        <Input aria-label="readonly input example" readOnly type="text" value="Readonly input here..." />
      </Example>

      <Example hash="readonlyPlaintext" state={state} t={tInputPage}>
        <div className="row">
          <Label className="col-sm-2" htmlFor="staticEmail">
            Email
          </Label>
          <div className="col-sm-10">
            <Input id="staticEmail" readOnly readonlyPlainText type="text" value="email@example.com" />
          </div>
        </div>

        <form>
          <div className="row">
            <Label className="col-sm-2" htmlFor="inputPassword">
              Password
            </Label>
            <div className="col-sm-10">
              <Input
                autoComplete="username"
                className="d-none"
                defaultValue="hiddenUsername"
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
              autoComplete="username"
              id="staticEmail2"
              readOnly
              readonlyPlainText
              type="text"
              value="email@example.com"
            />
          </div>
          <div className="col-auto">
            <Label className="visually-hidden" htmlFor="inputPassword2">
              Password
            </Label>
            <Input
              autoComplete="username"
              className="d-none"
              defaultValue="hiddenUsername"
              name="username"
              type="text"
            />
            <Input autoComplete="new-password" id="inputPassword2" placeholder="Password" type="password" />
          </div>
          <div className="col-auto">
            <Button type="button" variant="primary">
              Confirm identity
            </Button>
          </div>
        </form>
      </Example>

      <Example hash="file" state={state} t={tInputPage}>
        <div>
          <Label htmlFor="formFile">Default file input example</Label>
          <Input id="formFile" type="file" />
        </div>

        <div>
          <Label htmlFor="formFileMultiple">Multiple files input example</Label>
          <Input id="formFileMultiple" multiple type="file" />
        </div>

        <div>
          <Label htmlFor="formFileDisabled">Disabled file input example</Label>
          <Input disabled id="formFileDisabled" type="file" />
        </div>

        <div>
          <Label htmlFor="formFileSm">Small file input example</Label>
          <Input id="formFileSm" size="sm" type="file" />
        </div>

        <div>
          <Label htmlFor="formFileLg">Large file input example</Label>
          <Input id="formFileLg" size="lg" type="file" />
        </div>
      </Example>

      <Example hash="color" state={state} t={tInputPage}>
        <div>
          <Label htmlFor="exampleColorInput">Color picker</Label>
          <Input color defaultValue="#563d7c" id="exampleColorInput" title="Choose your color" type="color" />
        </div>
      </Example>

      <Example hash="datalist" state={state} t={tInputPage}>
        <div>
          <Label htmlFor="exampleDataList">Datalist example</Label>
          <Input id="exampleDataList" list="datalistOptions" placeholder="Type to search..." />
          <datalist id="datalistOptions">
            <option value="San Francisco"></option>
            <option value="New York"></option>
            <option value="Seattle"></option>
            <option value="Los Angeles"></option>
            <option value="Chicago"></option>
          </datalist>
        </div>
      </Example>

      <Example hash="startEndContent" state={state} t={tInputPage}>
        <Input placeholder="Username" startContent={<i className="bi bi-person"></i>} />
        <Input endContent={<i className="bi bi-eye"></i>} placeholder="Password" />
        <Input
          className="pe-3-25rem"
          endContent={
            <>
              <i className="bi bi-x"></i>
              <i className="bi bi-eye ms-1"></i>
            </>
          }
          placeholder="Password"
        />
      </Example>

      <Example hash="otp" state={state} t={tInputPage}>
        <div className="w-full sm:w-1/4">
          <InputOtp defaultValue={['1', '2', '3', '4']}></InputOtp>
        </div>

        <div className="w-full sm:w-1/4">
          <InputOtp></InputOtp>
        </div>

        <div className="w-full sm:w-1/4">
          <InputOtp
            inputProps={{
              disabled: true,
            }}
          ></InputOtp>
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="inputComponentProps"
        items={[
          {
            attr: 'size',
            default: '',
            desc: tInputComponentProps('input.desc.size'),
            type: <span className="badge text-bg-secondary">lg | sm</span>,
          },
          {
            attr: 'nativeSize',
            default: '',
            desc: tInputComponentProps('input.desc.nativeSize'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'disabled',
            default: '',
            desc: tInputComponentProps('input.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'readonly',
            default: '',
            desc: tInputComponentProps('input.desc.readonly'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'readonlyPlainText',
            default: '',
            desc: tInputComponentProps('input.desc.readonlyPlainText'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'isValid',
            default: '',
            desc: tInputComponentProps('input.desc.isValid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'isInvalid',
            default: '',
            desc: tInputComponentProps('input.desc.isInvalid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'color',
            default: '',
            desc: tInputComponentProps('input.desc.color'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'nativeColor',
            default: '',
            desc: tInputComponentProps('input.desc.nativeColor'),
            type: <span className="badge text-bg-secondary">string</span>,
          },
          {
            attr: 'startContent',
            default: '',
            desc: tInputComponentProps('input.desc.startContent'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'endContent',
            default: '',
            desc: tInputComponentProps('input.desc.endContent'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'startEndContentClasses',
            default: '',
            desc: tInputComponentProps('input.desc.startEndContentClasses'),
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
          },
        ]}
        props
        state={state}
        t={tInputComponentProps}
      />

      <Example
        hash="inputOtpComponentProps"
        items={[
          {
            attr: 'length',
            default: '4',
            desc: tInputComponentProps('inputOtp.desc.length'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'defaultValue',
            default: '-',
            desc: tInputComponentProps('inputOtp.desc.defaultValue'),
            type: <span className="badge text-bg-secondary">(string | number)[]</span>,
          },
          {
            attr: 'inputProps',
            default: '-',
            desc: tInputComponentProps('inputOtp.desc.inputProps'),
            type: <span className="badge text-bg-secondary">InputProps</span>,
          },
        ]}
        props
        state={state}
        t={tInputComponentProps}
      />

      <Example
        hash="textareaComponentProps"
        items={[
          {
            attr: 'disabled',
            default: '-',
            desc: tInputComponentProps('textarea.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'readonly',
            default: '-',
            desc: tInputComponentProps('textarea.desc.readonly'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'isValid',
            default: '',
            desc: tInputComponentProps('textarea.desc.isValid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'isInvalid',
            default: '',
            desc: tInputComponentProps('textarea.desc.isInvalid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tInputComponentProps}
      />

      <Example
        hash="labelComponentProps"
        items={[
          {
            attr: 'colFormLabel',
            default: '-',
            desc: tInputComponentProps('label.desc.colFormLabel'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'inputGroupText',
            default: '-',
            desc: tInputComponentProps('label.desc.inputGroupText'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'formCheckLabel',
            default: '-',
            desc: tInputComponentProps('label.desc.formCheckLabel'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tInputComponentProps}
      />

      <Example
        hash="textComponentProps"
        items={[
          {
            attr: 'validFeedback',
            default: '',
            desc: tInputComponentProps('text.desc.validFeedback'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'invalidFeedback',
            default: '',
            desc: tInputComponentProps('text.desc.invalidFeedback'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'validTooltip',
            default: '',
            desc: tInputComponentProps('text.desc.validTooltip'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'invalidTooltip',
            default: '',
            desc: tInputComponentProps('text.desc.invalidTooltip'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tInputComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="inputComponentProps"
        items={[
          {
            attr: 'onRef',
            default: '',
            desc: tInputComponentProps('input.desc.onRef'),
            type: <span className="badge text-bg-secondary">RefCallback</span>,
          },
          {
            attr: 'onChange',
            default: '',
            desc: tInputComponentProps('input.desc.onChange'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
        ]}
        state={state}
        t={tInputComponentProps}
      />

      <Example
        events
        hash="inputOtpComponentProps"
        items={[
          {
            attr: 'onChange',
            default: '',
            desc: tInputComponentProps('inputOtp.desc.onChange'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
        ]}
        state={state}
        t={tInputComponentProps}
      />

      <Example
        events
        hash="textareaComponentProps"
        items={[
          {
            attr: 'onRef',
            default: '',
            desc: tInputComponentProps('textarea.desc.onRef'),
            type: <span className="badge text-bg-secondary">RefCallback</span>,
          },
          {
            attr: 'onChange',
            default: '',
            desc: tInputComponentProps('textarea.desc.onChange'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
        ]}
        state={state}
        t={tInputComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
