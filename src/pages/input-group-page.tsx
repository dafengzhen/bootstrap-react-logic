import { InputGroupText, InputGroup } from '@lib/input-group';
import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Textarea } from '@lib/textarea';
import { Button } from '@lib/button';
import { Input } from '@lib/input';
import { Label } from '@lib/label';
import { useState } from 'react';

import Text from '../../lib/text/text.tsx';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/input-group/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

export default function InputGroupPage() {
  const navigation = useNavigation();
  const { t: tInputGroupComponentProps } = useTranslation(['inputGroupComponentProps']);
  const { t: tInputGroupPage } = useTranslation(['inputGroupPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example t={tInputGroupPage} state={state} hash="basic">
        <InputGroup>
          <InputGroupText id="basic-addon1">@</InputGroupText>
          <Input aria-describedby="basic-addon1" placeholder="Username" aria-label="Username" type="text" />
        </InputGroup>

        <InputGroup>
          <Input
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            type="text"
          />
          <InputGroupText id="basic-addon2">@example.com</InputGroupText>
        </InputGroup>

        <div>
          <Label htmlFor="basic-url">Your vanity URL</Label>
          <InputGroup>
            <InputGroupText className="d-inline-block text-truncate" id="basic-addon3">
              https://example.com/users/
            </InputGroupText>
            <Input aria-describedby="basic-addon3 basic-addon4" id="basic-url" type="text" />
          </InputGroup>
          <Text id="basic-addon4">Example help text goes outside the input group.</Text>
        </div>

        <InputGroup>
          <InputGroupText>$</InputGroupText>
          <Input aria-label="Amount (to the nearest dollar)" type="text" />
          <InputGroupText>.00</InputGroupText>
        </InputGroup>

        <InputGroup>
          <Input placeholder="Username" aria-label="Username" type="text" />
          <InputGroupText>@</InputGroupText>
          <Input placeholder="Server" aria-label="Server" type="text" />
        </InputGroup>

        <InputGroup>
          <InputGroupText>With textarea</InputGroupText>
          <Textarea aria-label="With textarea"></Textarea>
        </InputGroup>
      </Example>

      <Example t={tInputGroupPage} hash="nowrap" state={state}>
        <div className="d-flex flex-column gap-2">
          <InputGroup nowrap>
            <InputGroupText id="addon-wrapping">@</InputGroupText>
            <Input aria-describedby="addon-wrapping" placeholder="Username" aria-label="Username" type="text" />
          </InputGroup>
        </div>
      </Example>

      <Example t={tInputGroupPage} state={state} hash="size">
        <InputGroup size="sm">
          <InputGroupText id="inputGroup-sizing-sm">Small</InputGroupText>
          <Input aria-describedby="inputGroup-sizing-sm" aria-label="Sizing example input" type="text" />
        </InputGroup>

        <InputGroup>
          <InputGroupText id="inputGroup-sizing-default">Default</InputGroupText>
          <Input aria-describedby="inputGroup-sizing-default" aria-label="Sizing example input" type="text" />
        </InputGroup>

        <InputGroup size="lg">
          <InputGroupText id="inputGroup-sizing-lg">Large</InputGroupText>
          <Input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" type="text" />
        </InputGroup>
      </Example>

      <Example hash="checkboxAndRadio" t={tInputGroupPage} state={state}>
        <InputGroup>
          <InputGroupText as="div">
            <Input
              aria-label="Checkbox for following text input"
              className="form-check-input mt-0"
              type="checkbox"
              readOnly
            />
          </InputGroupText>
          <Input aria-label="Text input with checkbox" type="text" />
        </InputGroup>

        <InputGroup>
          <InputGroupText as="div">
            <Input
              aria-label="Radio button for following text input"
              className="form-check-input mt-0"
              type="radio"
              readOnly
            />
          </InputGroupText>
          <Input aria-label="Text input with radio button" type="text" />
        </InputGroup>
      </Example>

      <Example hash="multipleInput" t={tInputGroupPage} state={state}>
        <InputGroup>
          <InputGroupText className="!tw-w-full sm:!tw-w-auto">First and last name</InputGroupText>
          <Input className="!tw-w-full sm:!tw-w-auto" aria-label="First name" type="text" />
          <Input className="!tw-w-full sm:!tw-w-auto" aria-label="Last name" type="text" />
        </InputGroup>
      </Example>

      <Example hash="multipleAddons" t={tInputGroupPage} state={state}>
        <InputGroup>
          <InputGroupText>$</InputGroupText>
          <InputGroupText>0.00</InputGroupText>
          <Input aria-label="Dollar amount (with dot and two decimal places)" type="text" />
        </InputGroup>

        <InputGroup>
          <Input aria-label="Dollar amount (with dot and two decimal places)" type="text" />
          <InputGroupText>$</InputGroupText>
          <InputGroupText>0.00</InputGroupText>
        </InputGroup>
      </Example>

      <Example hash="buttonAddons" t={tInputGroupPage} state={state}>
        <InputGroup>
          <Button outline="secondary" id="button-addon1" type="button">
            Button
          </Button>
          <Input
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            placeholder=""
            type="text"
          />
        </InputGroup>

        <InputGroup>
          <Input
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            type="text"
          />
          <Button outline="secondary" id="button-addon2" type="button">
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
          <Input aria-label="Example text with two button addons" placeholder="" type="text" />
        </InputGroup>

        <InputGroup>
          <Input
            aria-label="Recipient's username with two button addons"
            placeholder="Recipient's username"
            type="text"
          />
          <Button outline="secondary" type="button">
            Button
          </Button>
          <Button outline="secondary" type="button">
            Button
          </Button>
        </InputGroup>
      </Example>

      <Example hash="customSelect" t={tInputGroupPage} state={state}>
        <InputGroup>
          <Label htmlFor="inputGroupSelect01" inputGroupText>
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
          <Label htmlFor="inputGroupSelect02" inputGroupText>
            Options
          </Label>
        </InputGroup>

        <InputGroup>
          <Button outline="secondary" type="button">
            Button
          </Button>
          <select aria-label="Example select with button addon" className="form-select" id="inputGroupSelect03">
            <option defaultValue="">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </InputGroup>

        <InputGroup>
          <select aria-label="Example select with button addon" className="form-select" id="inputGroupSelect04">
            <option defaultValue="">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <Button outline="secondary" type="button">
            Button
          </Button>
        </InputGroup>
      </Example>

      <Example hash="customFileInput" t={tInputGroupPage} state={state}>
        <InputGroup>
          <Label htmlFor="inputGroupFile01" inputGroupText>
            Upload
          </Label>
          <Input id="inputGroupFile01" type="file" />
        </InputGroup>

        <InputGroup>
          <Input id="inputGroupFile02" type="file" />
          <Label htmlFor="inputGroupFile02" inputGroupText>
            Upload
          </Label>
        </InputGroup>

        <InputGroup>
          <Button id="inputGroupFileAddon03" outline="secondary" type="button">
            Button
          </Button>
          <Input aria-describedby="inputGroupFileAddon03" id="inputGroupFile03" aria-label="Upload" type="file" />
        </InputGroup>

        <InputGroup>
          <Input aria-describedby="inputGroupFileAddon04" id="inputGroupFile04" aria-label="Upload" type="file" />
          <Button id="inputGroupFileAddon04" outline="secondary" type="button">
            Button
          </Button>
        </InputGroup>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tInputGroupComponentProps('inputGroup.desc.nowrap'),
            attr: 'nowrap',
            default: '-',
          },
          {
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: tInputGroupComponentProps('inputGroup.desc.size'),
            attr: 'size',
            default: '-',
          },
          {
            desc: tInputGroupComponentProps('inputGroup.desc.hasValidation'),
            type: <span className="badge text-bg-secondary">boolean</span>,
            attr: 'hasValidation',
            default: '-',
          },
        ]}
        hash="inputGroupComponentProps"
        t={tInputGroupComponentProps}
        state={state}
        props
      ></Example>

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">div | span</span>,
            desc: tInputGroupComponentProps('inputGroupText.desc.as'),
            default: 'span',
            attr: 'as',
          },
        ]}
        hash="inputGroupTextComponentProps"
        t={tInputGroupComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
