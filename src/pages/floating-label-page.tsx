import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import { FloatingLabel } from '@lib/floating-label';
import { Input } from '@lib/input';
import { Label } from '@lib/label';
import { Textarea } from '@lib/textarea';
import { Select, SelectOption } from '@lib/select';
import { InputGroup, InputGroupText } from '@lib/input-group';
import { Text } from '@lib/text';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/floating-label/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
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
          <Input type="email" id="floatingInput" placeholder="name@example.com" />
          <Label htmlFor="floatingInput">Email address</Label>
        </FloatingLabel>

        <FloatingLabel as="form">
          <Input type="text" name="username" autoComplete="username" defaultValue="hiddenUsername" className="d-none" />
          <Input type="password" autoComplete="new-password" id="floatingPassword" placeholder="Password" />
          <Label htmlFor="floatingPassword">Password</Label>
        </FloatingLabel>

        <FloatingLabel as="form">
          <Input type="email" id="floatingInputValue" placeholder="name@example.com" defaultValue="test@example.com" />
          <Label htmlFor="floatingInputValue">Input with value</Label>
        </FloatingLabel>

        <FloatingLabel as="form">
          <Input
            isInvalid
            type="email"
            id="floatingInputInvalid"
            placeholder="name@example.com"
            defaultValue="test@example.com"
          />
          <Label htmlFor="floatingInputInvalid">Invalid input</Label>
        </FloatingLabel>
      </Example>

      <Example hash="textarea" state={state} t={tFloatingLabelPage}>
        <FloatingLabel>
          <Textarea placeholder="Leave a comment here" id="floatingTextarea"></Textarea>
          <Label htmlFor="floatingTextarea">Comments</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Textarea placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}></Textarea>
          <Label htmlFor="floatingTextarea2">Comments</Label>
        </FloatingLabel>
      </Example>

      <Example hash="select" state={state} t={tFloatingLabelPage}>
        <FloatingLabel>
          <Select id="floatingSelect" aria-label="Floating label select example">
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
          <Input type="email" id="floatingInputDisabled" placeholder="name@example.com" disabled />
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
          <Select id="floatingSelectDisabled" aria-label="Floating label disabled select example" disabled>
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
      </Example>

      <Example hash="inputGroups" state={state} t={tFloatingLabelPage}>
        <InputGroup>
          <InputGroupText>@</InputGroupText>
          <FloatingLabel>
            <Input type="text" id="floatingInputGroup1" placeholder="Username" />
            <Label htmlFor="floatingInputGroup1">Username</Label>
          </FloatingLabel>
        </InputGroup>

        <InputGroup hasValidation>
          <InputGroupText>@</InputGroupText>
          <FloatingLabel isInvalid>
            <Input type="text" isInvalid id="floatingInputGroup2" placeholder="Username" required />
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
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="floatingLabelComponentProps"
        state={state}
        t={tFloatingLabelComponentProps}
        items={[
          {
            attr: 'as',
            type: <span className="badge text-bg-secondary">div | form</span>,
            desc: tFloatingLabelComponentProps('floatingLabel.desc.as'),
            default: 'div',
          },
          {
            attr: 'isValid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tFloatingLabelComponentProps('floatingLabel.desc.isValid'),
            default: '',
          },
          {
            attr: 'isInvalid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tFloatingLabelComponentProps('floatingLabel.desc.isInvalid'),
            default: '',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
