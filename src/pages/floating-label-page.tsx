import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { FloatingLabel } from '@lib/floating-label';
import { Input } from '@lib/input';
import { InputGroup, InputGroupText } from '@lib/input-group';
import { Label } from '@lib/label';
import { Select, SelectOption } from '@lib/select';
import { Text } from '@lib/text';
import { Textarea } from '@lib/textarea';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/floating-label/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function FloatingLabelPage() {
  const navigation = useNavigation();
  const { t: tFloatingLabelComponentProps } = useTranslation(['floatingLabelComponentProps']);
  const { t: tFloatingLabelPage } = useTranslation(['floatingLabelPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tFloatingLabelPage}>
        <FloatingLabel>
          <Input id="floatingInput" placeholder="name@example.com" type="email" />
          <Label htmlFor="floatingInput">Email address</Label>
        </FloatingLabel>

        <FloatingLabel as="form">
          <Input autoComplete="username" className="d-none" defaultValue="hiddenUsername" name="username" type="text" />
          <Input autoComplete="new-password" id="floatingPassword" placeholder="Password" type="password" />
          <Label htmlFor="floatingPassword">Password</Label>
        </FloatingLabel>

        <FloatingLabel as="form">
          <Input defaultValue="test@example.com" id="floatingInputValue" placeholder="name@example.com" type="email" />
          <Label htmlFor="floatingInputValue">Input with value</Label>
        </FloatingLabel>

        <FloatingLabel as="form">
          <Input
            defaultValue="test@example.com"
            id="floatingInputInvalid"
            isInvalid
            placeholder="name@example.com"
            type="email"
          />
          <Label htmlFor="floatingInputInvalid">Invalid input</Label>
        </FloatingLabel>
      </Example>

      <Example hash="textarea" state={state} t={tFloatingLabelPage}>
        <FloatingLabel>
          <Textarea id="floatingTextarea" placeholder="Leave a comment here"></Textarea>
          <Label htmlFor="floatingTextarea">Comments</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Textarea id="floatingTextarea2" placeholder="Leave a comment here" style={{ height: 100 }}></Textarea>
          <Label htmlFor="floatingTextarea2">Comments</Label>
        </FloatingLabel>
      </Example>

      <Example hash="select" state={state} t={tFloatingLabelPage}>
        <FloatingLabel>
          <Select aria-label="Floating label select example" id="floatingSelect">
            <SelectOption defaultChecked>Open this select menu</SelectOption>
            <SelectOption value="1">One</SelectOption>
            <SelectOption value="2">Two</SelectOption>
            <SelectOption value="3">Three</SelectOption>
          </Select>
          <label htmlFor="floatingSelect">Works with selects</label>
        </FloatingLabel>
      </Example>

      <Example hash="disabled" state={state} t={tFloatingLabelPage}>
        <FloatingLabel>
          <Input disabled id="floatingInputDisabled" placeholder="name@example.com" type="email" />
          <Label htmlFor="floatingInputDisabled">Email address</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Textarea disabled id="floatingTextareaDisabled" placeholder="Leave a comment here"></Textarea>
          <Label htmlFor="floatingTextareaDisabled">Comments</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Textarea disabled id="floatingTextarea2Disabled" placeholder="Leave a comment here" style={{ height: 100 }}>
            Disabled textarea with some text inside
          </Textarea>
          <Label htmlFor="floatingTextarea2Disabled">Comments</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Select aria-label="Floating label disabled select example" disabled id="floatingSelectDisabled">
            <SelectOption defaultChecked>Open this select menu</SelectOption>
            <SelectOption value="1">One</SelectOption>
            <SelectOption value="2">Two</SelectOption>
            <SelectOption value="3">Three</SelectOption>
          </Select>
          <Label htmlFor="floatingSelectDisabled">Works with selects</Label>
        </FloatingLabel>
      </Example>

      <Example hash="readonlyPlaintext" state={state} t={tFloatingLabelPage}>
        <FloatingLabel>
          <Input
            id="floatingEmptyPlaintextInput"
            placeholder="name@example.com"
            readOnly
            readonlyPlainText
            type="email"
          />
          <Label htmlFor="floatingEmptyPlaintextInput">Empty input</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Input
            id="floatingPlaintextInput"
            placeholder="name@example.com"
            readOnly
            readonlyPlainText
            type="email"
            value="name@example.com"
          />
          <Label htmlFor="floatingPlaintextInput">Input with value</Label>
        </FloatingLabel>
      </Example>

      <Example hash="inputGroups" state={state} t={tFloatingLabelPage}>
        <InputGroup>
          <InputGroupText>@</InputGroupText>
          <FloatingLabel>
            <Input id="floatingInputGroup1" placeholder="Username" type="text" />
            <Label htmlFor="floatingInputGroup1">Username</Label>
          </FloatingLabel>
        </InputGroup>

        <InputGroup hasValidation>
          <InputGroupText>@</InputGroupText>
          <FloatingLabel isInvalid>
            <Input id="floatingInputGroup2" isInvalid placeholder="Username" required type="text" />
            <Label htmlFor="floatingInputGroup2">Username</Label>
          </FloatingLabel>
          <Text invalidFeedback>Please choose a username.</Text>
        </InputGroup>
      </Example>

      <Example hash="layout" state={state} t={tFloatingLabelPage}>
        <div className="row g-2">
          <div className="col-md">
            <FloatingLabel>
              <Input
                defaultValue="mdo@example.com"
                id="floatingInputGrid"
                placeholder="name@example.com"
                type="email"
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
      </Example>

      <PropsIndicator />

      <Example
        hash="floatingLabelComponentProps"
        items={[
          {
            attr: 'as',
            default: 'div',
            desc: tFloatingLabelComponentProps('floatingLabel.desc.as'),
            type: <span className="badge text-bg-secondary">div | form</span>,
          },
          {
            attr: 'isValid',
            default: '',
            desc: tFloatingLabelComponentProps('floatingLabel.desc.isValid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'isInvalid',
            default: '',
            desc: tFloatingLabelComponentProps('floatingLabel.desc.isInvalid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tFloatingLabelComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
