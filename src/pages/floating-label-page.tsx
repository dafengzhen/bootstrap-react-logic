import { InputGroupText, InputGroup } from '@lib/input-group';
import PropsIndicator from '@components/props-indicator.tsx';
import { FloatingLabel } from '@lib/floating-label';
import { SelectOption, Select } from '@lib/select';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Textarea } from '@lib/textarea';
import { Input } from '@lib/input';
import { Label } from '@lib/label';
import { Text } from '@lib/text';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/floating-label/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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
      <Example t={tFloatingLabelPage} state={state} hash="basic">
        <FloatingLabel>
          <Input placeholder="name@example.com" id="floatingInput" type="email" />
          <Label htmlFor="floatingInput">Email address</Label>
        </FloatingLabel>

        <FloatingLabel as="form">
          <Input defaultValue="hiddenUsername" autoComplete="username" className="d-none" name="username" type="text" />
          <Input autoComplete="new-password" placeholder="Password" id="floatingPassword" type="password" />
          <Label htmlFor="floatingPassword">Password</Label>
        </FloatingLabel>

        <FloatingLabel as="form">
          <Input defaultValue="test@example.com" placeholder="name@example.com" id="floatingInputValue" type="email" />
          <Label htmlFor="floatingInputValue">Input with value</Label>
        </FloatingLabel>

        <FloatingLabel as="form">
          <Input
            defaultValue="test@example.com"
            placeholder="name@example.com"
            id="floatingInputInvalid"
            type="email"
            isInvalid
          />
          <Label htmlFor="floatingInputInvalid">Invalid input</Label>
        </FloatingLabel>
      </Example>

      <Example t={tFloatingLabelPage} hash="textarea" state={state}>
        <FloatingLabel>
          <Textarea placeholder="Leave a comment here" id="floatingTextarea"></Textarea>
          <Label htmlFor="floatingTextarea">Comments</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Textarea placeholder="Leave a comment here" style={{ height: 100 }} id="floatingTextarea2"></Textarea>
          <Label htmlFor="floatingTextarea2">Comments</Label>
        </FloatingLabel>
      </Example>

      <Example t={tFloatingLabelPage} hash="select" state={state}>
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

      <Example t={tFloatingLabelPage} hash="disabled" state={state}>
        <FloatingLabel>
          <Input placeholder="name@example.com" id="floatingInputDisabled" type="email" disabled />
          <Label htmlFor="floatingInputDisabled">Email address</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Textarea placeholder="Leave a comment here" id="floatingTextareaDisabled" disabled></Textarea>
          <Label htmlFor="floatingTextareaDisabled">Comments</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Textarea placeholder="Leave a comment here" id="floatingTextarea2Disabled" style={{ height: 100 }} disabled>
            Disabled textarea with some text inside
          </Textarea>
          <Label htmlFor="floatingTextarea2Disabled">Comments</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Select aria-label="Floating label disabled select example" id="floatingSelectDisabled" disabled>
            <SelectOption defaultChecked>Open this select menu</SelectOption>
            <SelectOption value="1">One</SelectOption>
            <SelectOption value="2">Two</SelectOption>
            <SelectOption value="3">Three</SelectOption>
          </Select>
          <Label htmlFor="floatingSelectDisabled">Works with selects</Label>
        </FloatingLabel>
      </Example>

      <Example hash="readonlyPlaintext" t={tFloatingLabelPage} state={state}>
        <FloatingLabel>
          <Input
            id="floatingEmptyPlaintextInput"
            placeholder="name@example.com"
            readonlyPlainText
            type="email"
            readOnly
          />
          <Label htmlFor="floatingEmptyPlaintextInput">Empty input</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Input
            placeholder="name@example.com"
            id="floatingPlaintextInput"
            value="name@example.com"
            readonlyPlainText
            type="email"
            readOnly
          />
          <Label htmlFor="floatingPlaintextInput">Input with value</Label>
        </FloatingLabel>
      </Example>

      <Example t={tFloatingLabelPage} hash="inputGroups" state={state}>
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
            <Input id="floatingInputGroup2" placeholder="Username" type="text" isInvalid required />
            <Label htmlFor="floatingInputGroup2">Username</Label>
          </FloatingLabel>
          <Text invalidFeedback>Please choose a username.</Text>
        </InputGroup>
      </Example>

      <Example t={tFloatingLabelPage} hash="layout" state={state}>
        <div className="row g-2">
          <div className="col-md">
            <FloatingLabel>
              <Input
                defaultValue="mdo@example.com"
                placeholder="name@example.com"
                id="floatingInputGrid"
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
        items={[
          {
            type: <span className="badge text-bg-secondary">div | form</span>,
            desc: tFloatingLabelComponentProps('floatingLabel.desc.as'),
            default: 'div',
            attr: 'as',
          },
          {
            desc: tFloatingLabelComponentProps('floatingLabel.desc.isValid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
            attr: 'isValid',
            default: '',
          },
          {
            desc: tFloatingLabelComponentProps('floatingLabel.desc.isInvalid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
            attr: 'isInvalid',
            default: '',
          },
        ]}
        hash="floatingLabelComponentProps"
        t={tFloatingLabelComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
