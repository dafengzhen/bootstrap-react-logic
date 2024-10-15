import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import type { NestedKeys } from '@src/types';
import CustomSimpleCard from '@src/components/custom-simple-card';
import AboutComponent from '@components/about-component.tsx';
import { updateState } from '@src/tools';
import GeneralComponentPropsCard from '@components/general-component-props-card.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import generalCodes from '@assets/codes/general';
import floatingLabelComponentPropsCodes from '@assets/codes/floating-label/component-props.ts';
import floatingLabelCodes from '@assets/codes/floating-label';
import { FloatingLabel } from '@lib/floating-label';
import { Input } from '@lib/input';
import { Label } from '@lib/label';
import { Textarea } from '@lib/textarea';
import { Select, SelectOption } from '@lib/select';
import { InputGroup, InputGroupText } from '@lib/input-group';
import { Text } from '@lib/text';

interface IStates {
  floatingLabel: {
    basic: {
      openCode: boolean;
      code?: string;
    };
    textarea: {
      openCode: boolean;
      code?: string;
    };
    select: {
      openCode: boolean;
      code?: string;
    };
    disabled: {
      openCode: boolean;
      code?: string;
    };
    readonlyPlaintext: {
      openCode: boolean;
      code?: string;
    };
    inputGroups: {
      openCode: boolean;
      code?: string;
    };
    layout: {
      openCode: boolean;
      code?: string;
    };
  };
}

interface IComponentPropsStates {
  floatingLabel: {
    floatingLabelComponentProps: {
      openCode: boolean;
      code?: string;
    };
    generalComponentProps: {
      openCode: boolean;
      code?: string;
    };
  };
}

export default function FloatingLabelPage() {
  useHighlightCode();
  const navigation = useNavigation();
  const { t: tFloatingLabelComponentProps } = useTranslation(['floatingLabelComponentProps']);
  const { t: tFloatingLabelPage } = useTranslation(['floatingLabelPage']);

  const [states, setStates] = useState<IStates>({
    floatingLabel: {
      basic: {
        openCode: false,
        code: floatingLabelCodes.basic.code.trim(),
      },
      textarea: {
        openCode: false,
        code: floatingLabelCodes.textarea.code.trim(),
      },
      select: {
        openCode: false,
        code: floatingLabelCodes.select.code.trim(),
      },
      disabled: {
        openCode: false,
        code: floatingLabelCodes.disabled.code.trim(),
      },
      readonlyPlaintext: {
        openCode: false,
        code: floatingLabelCodes.readonlyPlaintext.code.trim(),
      },
      inputGroups: {
        openCode: false,
        code: floatingLabelCodes.inputGroups.code.trim(),
      },
      layout: {
        openCode: false,
        code: floatingLabelCodes.layout.code.trim(),
      },
    },
  });
  const [componentPropsStates, setComponentPropsStates] = useState<IComponentPropsStates>({
    floatingLabel: {
      floatingLabelComponentProps: {
        openCode: false,
        code: floatingLabelComponentPropsCodes.floatingLabelComponentProps.code.trim(),
      },
      generalComponentProps: {
        openCode: false,
        code: generalCodes.generalComponentProps.code.trim(),
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
        title={tFloatingLabelPage('basic')}
        hash="basic"
        isOpen={states.floatingLabel.basic.openCode}
        toggleCode={() => onClickUpdateState('floatingLabel.basic.openCode', !states.floatingLabel.basic.openCode)}
        code={states.floatingLabel.basic.code}
      >
        <div className="d-flex flex-column gap-2">
          <FloatingLabel>
            <Input type="email" id="floatingInput" placeholder="name@example.com" />
            <Label htmlFor="floatingInput">Email address</Label>
          </FloatingLabel>

          <FloatingLabel as="form">
            <Input
              type="text"
              name="username"
              autoComplete="username"
              defaultValue="hiddenUsername"
              className="d-none"
            />
            <Input type="password" autoComplete="new-password" id="floatingPassword" placeholder="Password" />
            <Label htmlFor="floatingPassword">Password</Label>
          </FloatingLabel>

          <FloatingLabel as="form">
            <Input
              type="email"
              id="floatingInputValue"
              placeholder="name@example.com"
              defaultValue="test@example.com"
            />
            <Label htmlFor="floatingInputValue">Input with value</Label>
          </FloatingLabel>

          <FloatingLabel as="form">
            <Input
              invalid
              type="email"
              id="floatingInputInvalid"
              placeholder="name@example.com"
              defaultValue="test@example.com"
            />
            <Label htmlFor="floatingInputInvalid">Invalid input</Label>
          </FloatingLabel>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tFloatingLabelPage('textarea')}
        hash="textarea"
        isOpen={states.floatingLabel.textarea.openCode}
        toggleCode={() =>
          onClickUpdateState('floatingLabel.textarea.openCode', !states.floatingLabel.textarea.openCode)
        }
        code={states.floatingLabel.textarea.code}
      >
        <div className="d-flex flex-column gap-2">
          <FloatingLabel>
            <Textarea placeholder="Leave a comment here" id="floatingTextarea"></Textarea>
            <Label htmlFor="floatingTextarea">Comments</Label>
          </FloatingLabel>

          <FloatingLabel>
            <Textarea placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}></Textarea>
            <Label htmlFor="floatingTextarea2">Comments</Label>
          </FloatingLabel>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tFloatingLabelPage('select')}
        hash="select"
        isOpen={states.floatingLabel.select.openCode}
        toggleCode={() => onClickUpdateState('floatingLabel.select.openCode', !states.floatingLabel.select.openCode)}
        code={states.floatingLabel.select.code}
      >
        <div className="d-flex flex-column gap-2">
          <FloatingLabel>
            <Select id="floatingSelect" aria-label="Floating label select example">
              <SelectOption defaultChecked>Open this select menu</SelectOption>
              <SelectOption value="1">One</SelectOption>
              <SelectOption value="2">Two</SelectOption>
              <SelectOption value="3">Three</SelectOption>
            </Select>
            <label htmlFor="floatingSelect">Works with selects</label>
          </FloatingLabel>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tFloatingLabelPage('disabled')}
        hash="disabled"
        isOpen={states.floatingLabel.disabled.openCode}
        toggleCode={() =>
          onClickUpdateState('floatingLabel.disabled.openCode', !states.floatingLabel.disabled.openCode)
        }
        code={states.floatingLabel.disabled.code}
      >
        <div className="d-flex flex-column gap-2">
          <FloatingLabel>
            <Input type="email" id="floatingInputDisabled" placeholder="name@example.com" disabled />
            <Label htmlFor="floatingInputDisabled">Email address</Label>
          </FloatingLabel>

          <FloatingLabel>
            <Textarea placeholder="Leave a comment here" id="floatingTextareaDisabled" disabled></Textarea>
            <Label htmlFor="floatingTextareaDisabled">Comments</Label>
          </FloatingLabel>

          <FloatingLabel>
            <Textarea
              placeholder="Leave a comment here"
              id="floatingTextarea2Disabled"
              style={{ height: 100 }}
              disabled
            >
              Disabled textarea with some text inside
            </Textarea>
            <Label htmlFor="floatingTextarea2Disabled">Comments</Label>
          </FloatingLabel>

          <FloatingLabel>
            <Select id="floatingSelectDisabled" aria-label="Floating label disabled select example" disabled>
              <SelectOption defaultChecked>Open this select menu</SelectOption>
              <SelectOption value="1">One</SelectOption>
              <SelectOption value="2">Two</SelectOption>
              <SelectOption value="3">Three</SelectOption>
            </Select>
            <Label htmlFor="floatingSelectDisabled">Works with selects</Label>
          </FloatingLabel>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tFloatingLabelPage('readonlyPlaintext')}
        hash="readonlyPlaintext"
        isOpen={states.floatingLabel.readonlyPlaintext.openCode}
        toggleCode={() =>
          onClickUpdateState(
            'floatingLabel.readonlyPlaintext.openCode',
            !states.floatingLabel.readonlyPlaintext.openCode,
          )
        }
        code={states.floatingLabel.readonlyPlaintext.code}
      >
        <div className="d-flex flex-column gap-2">
          <FloatingLabel>
            <Input
              type="email"
              readOnly
              readonlyPlainText
              id="floatingEmptyPlaintextInput"
              placeholder="name@example.com"
            />
            <Label htmlFor="floatingEmptyPlaintextInput">Empty input</Label>
          </FloatingLabel>

          <FloatingLabel>
            <Input
              type="email"
              readOnly
              readonlyPlainText
              id="floatingPlaintextInput"
              placeholder="name@example.com"
              value="name@example.com"
            />
            <Label htmlFor="floatingPlaintextInput">Input with value</Label>
          </FloatingLabel>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tFloatingLabelPage('inputGroups')}
        hash="inputGroups"
        isOpen={states.floatingLabel.inputGroups.openCode}
        toggleCode={() =>
          onClickUpdateState('floatingLabel.inputGroups.openCode', !states.floatingLabel.inputGroups.openCode)
        }
        code={states.floatingLabel.inputGroups.code}
      >
        <div className="d-flex flex-column gap-2">
          <InputGroup>
            <InputGroupText>@</InputGroupText>
            <FloatingLabel>
              <Input type="text" id="floatingInputGroup1" placeholder="Username" />
              <Label htmlFor="floatingInputGroup1">Username</Label>
            </FloatingLabel>
          </InputGroup>

          <InputGroup hasValidation>
            <InputGroupText>@</InputGroupText>
            <FloatingLabel invalid>
              <Input type="text" invalid id="floatingInputGroup2" placeholder="Username" required />
              <Label htmlFor="floatingInputGroup2">Username</Label>
            </FloatingLabel>
            <Text invalidFeedback>Please choose a username.</Text>
          </InputGroup>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tFloatingLabelPage('layout')}
        hash="layout"
        isOpen={states.floatingLabel.layout.openCode}
        toggleCode={() => onClickUpdateState('floatingLabel.layout.openCode', !states.floatingLabel.layout.openCode)}
        code={states.floatingLabel.layout.code}
      >
        <div className="d-flex flex-column gap-2">
          <div className="row g-2">
            <div className="col-md">
              <FloatingLabel>
                <Input
                  type="email"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                  defaultValue="mdo@example.com"
                />
                <Label htmlFor="floatingInputGrid">Email address</Label>
              </FloatingLabel>
            </div>

            <div className="col-md">
              <FloatingLabel>
                <Select id="floatingSelectGrid">
                  <SelectOption defaultChecked>Open this select menu</SelectOption>
                  <SelectOption value="1">One</SelectOption>
                  <SelectOption value="2">Two</SelectOption>
                  <SelectOption value="3">Three</SelectOption>
                </Select>
                <Label htmlFor="floatingSelectGrid">Works with selects</Label>
              </FloatingLabel>
            </div>
          </div>
        </div>
      </CustomSimpleCard>

      <PropsIndicator />

      <CustomSimpleCard.ComponentProps
        title="FloatingLabel"
        hash="floatingLabel"
        colgroup={colgroup}
        isOpen={componentPropsStates.floatingLabel.floatingLabelComponentProps.openCode}
        code={componentPropsStates.floatingLabel.floatingLabelComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'floatingLabel.floatingLabelComponentProps.openCode',
            !componentPropsStates.floatingLabel.floatingLabelComponentProps.openCode,
          )
        }
        items={[
          {
            attr: 'as',
            type: <span className="badge text-bg-secondary">div | form</span>,
            desc: tFloatingLabelComponentProps('desc.as'),
            default: 'div',
          },
        ]}
      ></CustomSimpleCard.ComponentProps>

      <GeneralComponentPropsCard
        colgroup={colgroup}
        isOpen={componentPropsStates.floatingLabel.generalComponentProps.openCode}
        code={componentPropsStates.floatingLabel.generalComponentProps.code}
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'floatingLabel.generalComponentProps.openCode',
            !componentPropsStates.floatingLabel.generalComponentProps.openCode,
          )
        }
      ></GeneralComponentPropsCard>

      <AboutComponent />
    </div>
  );
}
