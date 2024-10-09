import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import type { NestedKeys } from '@src/types';
import CustomSimpleCard from '@src/components/custom-simple-card';
import AboutComponent from '@components/about-component.tsx';
import { Label } from '@lib/label';
import { Input } from '@lib/input';
import { Textarea } from '@lib/textarea';
import inputCodes from '@assets/codes/input';
import Text from '../../lib/text/text.tsx';
import { Button } from '@lib/button';
import { updateState } from '@src/tools';
import { InputOtp } from '@lib/input-otp';
import { useTranslation } from 'react-i18next';
import generalCodes from '@assets/codes/general';
import PropsIndicator from '@components/props-indicator.tsx';
import GeneralComponentPropsCard from '@components/general-component-props-card.tsx';
import inputComponentPropsCodes from '@assets/codes/input/component-props.ts';

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

interface IComponentPropsStates {
  input: {
    generalComponentProps: {
      openCode: boolean;
      code?: string;
    };
    inputComponentProps: {
      openCode: boolean;
      code?: string;
    };
    inputOtpComponentProps: {
      openCode: boolean;
      code?: string;
    };
    textareaComponentProps: {
      openCode: boolean;
      code?: string;
    };
    labelComponentProps: {
      openCode: boolean;
      code?: string;
    };
    textComponentProps: {
      openCode: boolean;
      code?: string;
    };
  };
}

export default function InputPage() {
  useHighlightCode();
  const navigation = useNavigation();
  const { t: tInputComponentProps } = useTranslation(['inputComponentProps']);
  const { t: tInputOtpComponentProps } = useTranslation(['inputOtpComponentProps']);
  // const { t: tTextComponentProps } = useTranslation(['textComponentProps']);
  const { t: tLabelComponentProps } = useTranslation(['labelComponentProps']);
  const { t: tTextareaComponentProps } = useTranslation(['textareaComponentProps']);
  const { t: tInputPage } = useTranslation(['inputPage']);

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
  const [componentPropsStates, setComponentPropsStates] = useState<IComponentPropsStates>({
    input: {
      generalComponentProps: {
        openCode: false,
        code: generalCodes.generalComponentProps.code.trim(),
      },
      inputComponentProps: {
        openCode: false,
        code: inputComponentPropsCodes.inputComponentProps.code.trim(),
      },
      inputOtpComponentProps: {
        openCode: false,
        code: inputComponentPropsCodes.inputOtpComponentProps.code.trim(),
      },
      textComponentProps: {
        openCode: false,
        code: inputComponentPropsCodes.textComponentProps.code.trim(),
      },
      labelComponentProps: {
        openCode: false,
        code: inputComponentPropsCodes.labelComponentProps.code.trim(),
      },
      textareaComponentProps: {
        openCode: false,
        code: inputComponentPropsCodes.textareaComponentProps.code.trim(),
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

  function onClickUpdateState(k: NestedKeys<IStates>, v: unknown, c?: () => void) {
    updateState(setStates, k, v, c);
  }

  function onClickUpdateComponentPropsState(k: NestedKeys<IComponentPropsStates>, v: unknown, c?: () => void) {
    updateState(setComponentPropsStates, k, v, c);
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <CustomSimpleCard
        title={tInputPage('basic')}
        hash="basic"
        isOpen={states.input.basic.openCode}
        toggleCode={() => onClickUpdateState('input.basic.openCode', !states.input.basic.openCode)}
        code={states.input.basic.code}
      >
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
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tInputPage('size')}
        hash="size"
        isOpen={states.input.size.openCode}
        toggleCode={() => onClickUpdateState('input.size.openCode', !states.input.size.openCode)}
        code={states.input.size.code}
      >
        <div className="d-flex flex-column gap-2">
          <Input size="lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
          <Input type="text" placeholder="Default input" aria-label="default input example" />
          <Input size="sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example" />
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tInputPage('text')}
        hash="text"
        isOpen={states.input.text.openCode}
        toggleCode={() => onClickUpdateState('input.text.openCode', !states.input.text.openCode)}
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
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tInputPage('disabled')}
        hash="disabled"
        isOpen={states.input.disabled.openCode}
        toggleCode={() => onClickUpdateState('input.disabled.openCode', !states.input.disabled.openCode)}
        code={states.input.disabled.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Input type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled />
          </div>

          <div>
            <Input type="text" value="Disabled readonly input" aria-label="Disabled input example" disabled readOnly />
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tInputPage('readonly')}
        hash="readonly"
        isOpen={states.input.readonly.openCode}
        toggleCode={() => onClickUpdateState('input.readonly.openCode', !states.input.readonly.openCode)}
        code={states.input.readonly.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Input type="text" value="Readonly input here..." aria-label="readonly input example" readOnly />
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tInputPage('readonlyPlainText')}
        hash="readonlyPlainText"
        isOpen={states.input.readonlyPlainText.openCode}
        toggleCode={() =>
          onClickUpdateState('input.readonlyPlainText.openCode', !states.input.readonlyPlainText.openCode)
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
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tInputPage('file')}
        hash="file"
        isOpen={states.input.file.openCode}
        toggleCode={() => onClickUpdateState('input.file.openCode', !states.input.file.openCode)}
        code={states.input.file.code}
      >
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
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tInputPage('color')}
        hash="color"
        isOpen={states.input.color.openCode}
        toggleCode={() => onClickUpdateState('input.color.openCode', !states.input.color.openCode)}
        code={states.input.color.code}
      >
        <div className="d-flex flex-column gap-2">
          <div>
            <Label htmlFor="exampleColorInput">Color picker</Label>
            <Input type="color" color id="exampleColorInput" defaultValue="#563d7c" title="Choose your color" />
          </div>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tInputPage('datalist')}
        hash="datalist"
        isOpen={states.input.datalist.openCode}
        toggleCode={() => onClickUpdateState('input.datalist.openCode', !states.input.datalist.openCode)}
        code={states.input.datalist.code}
      >
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
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tInputPage('startEndContent')}
        hash="startEndContent"
        isOpen={states.input.startEndContent.openCode}
        toggleCode={() => onClickUpdateState('input.startEndContent.openCode', !states.input.startEndContent.openCode)}
        code={states.input.startEndContent.code}
      >
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
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tInputPage('otp')}
        hash="otp"
        isOpen={states.input.otp.openCode}
        toggleCode={() => onClickUpdateState('input.otp.openCode', !states.input.otp.openCode)}
        code={states.input.otp.code}
      >
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
      </CustomSimpleCard>

      <PropsIndicator />

      <CustomSimpleCard.ComponentProps
        title="Input"
        hash="inputComponentProps"
        colgroup={colgroup}
        isOpen={componentPropsStates.input.inputComponentProps.openCode}
        code={componentPropsStates.input.inputComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'input.inputComponentProps.openCode',
            !componentPropsStates.input.inputComponentProps.openCode,
          )
        }
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
      ></CustomSimpleCard.ComponentProps>

      <CustomSimpleCard.ComponentProps
        title="InputOtp"
        hash="inputOtpComponentProps"
        colgroup={colgroup}
        isOpen={componentPropsStates.input.inputOtpComponentProps.openCode}
        code={componentPropsStates.input.inputOtpComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'input.inputOtpComponentProps.openCode',
            !componentPropsStates.input.inputOtpComponentProps.openCode,
          )
        }
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
      ></CustomSimpleCard.ComponentProps>

      <CustomSimpleCard.ComponentProps
        title="Textarea"
        hash="textareaComponentProps"
        colgroup={colgroup}
        isOpen={componentPropsStates.input.textareaComponentProps.openCode}
        code={componentPropsStates.input.textareaComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'input.textareaComponentProps.openCode',
            !componentPropsStates.input.textareaComponentProps.openCode,
          )
        }
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
        ]}
      ></CustomSimpleCard.ComponentProps>

      <CustomSimpleCard.ComponentProps
        title="Label"
        hash="labelComponentProps"
        colgroup={colgroup}
        isOpen={componentPropsStates.input.labelComponentProps.openCode}
        code={componentPropsStates.input.labelComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'input.labelComponentProps.openCode',
            !componentPropsStates.input.labelComponentProps.openCode,
          )
        }
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
      ></CustomSimpleCard.ComponentProps>

      <CustomSimpleCard.ComponentProps
        title="Text"
        hash="textComponentProps"
        colgroup={colgroup}
        isOpen={componentPropsStates.input.textComponentProps.openCode}
        code={componentPropsStates.input.textComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'input.textComponentProps.openCode',
            !componentPropsStates.input.textComponentProps.openCode,
          )
        }
        items={[
          {
            attr: '-',
            type: '-',
            desc: '-',
            default: '-',
          },
        ]}
      ></CustomSimpleCard.ComponentProps>

      <GeneralComponentPropsCard
        colgroup={colgroup}
        isOpen={componentPropsStates.input.generalComponentProps.openCode}
        code={componentPropsStates.input.generalComponentProps.code}
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'input.generalComponentProps.openCode',
            !componentPropsStates.input.generalComponentProps.openCode,
          )
        }
      ></GeneralComponentPropsCard>

      <AboutComponent />
    </div>
  );
}
