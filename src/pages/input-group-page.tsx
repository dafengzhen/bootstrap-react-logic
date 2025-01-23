import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Button } from '@lib/button';
import { Input } from '@lib/input';
import { InputGroup, InputGroupText } from '@lib/input-group';
import { Label } from '@lib/label';
import { Textarea } from '@lib/textarea';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

import Text from '../../lib/text/text.tsx';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/input-group/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
      <Example hash="basic" state={state} t={tInputGroupPage}>
        <InputGroup>
          <InputGroupText id="basic-addon1">@</InputGroupText>
          <Input aria-describedby="basic-addon1" aria-label="Username" placeholder="Username" type="text" />
        </InputGroup>

        <InputGroup>
          <Input
            aria-describedby="basic-addon2"
            aria-label="Recipient's username"
            placeholder="Recipient's username"
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
          <Input aria-label="Username" placeholder="Username" type="text" />
          <InputGroupText>@</InputGroupText>
          <Input aria-label="Server" placeholder="Server" type="text" />
        </InputGroup>

        <InputGroup>
          <InputGroupText>With textarea</InputGroupText>
          <Textarea aria-label="With textarea"></Textarea>
        </InputGroup>
      </Example>

      <Example hash="nowrap" state={state} t={tInputGroupPage}>
        <div className="d-flex flex-column gap-2">
          <InputGroup nowrap>
            <InputGroupText id="addon-wrapping">@</InputGroupText>
            <Input aria-describedby="addon-wrapping" aria-label="Username" placeholder="Username" type="text" />
          </InputGroup>
        </div>
      </Example>

      <Example hash="size" state={state} t={tInputGroupPage}>
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

      <Example hash="checkboxAndRadio" state={state} t={tInputGroupPage}>
        <InputGroup>
          <InputGroupText as="div">
            <Input
              aria-label="Checkbox for following text input"
              className="form-check-input mt-0"
              readOnly
              type="checkbox"
            />
          </InputGroupText>
          <Input aria-label="Text input with checkbox" type="text" />
        </InputGroup>

        <InputGroup>
          <InputGroupText as="div">
            <Input
              aria-label="Radio button for following text input"
              className="form-check-input mt-0"
              readOnly
              type="radio"
            />
          </InputGroupText>
          <Input aria-label="Text input with radio button" type="text" />
        </InputGroup>
      </Example>

      <Example hash="multipleInput" state={state} t={tInputGroupPage}>
        <InputGroup>
          <InputGroupText className="!w-full sm:!w-auto">First and last name</InputGroupText>
          <Input aria-label="First name" className="!w-full sm:!w-auto" type="text" />
          <Input aria-label="Last name" className="!w-full sm:!w-auto" type="text" />
        </InputGroup>
      </Example>

      <Example hash="multipleAddons" state={state} t={tInputGroupPage}>
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

      <Example hash="buttonAddons" state={state} t={tInputGroupPage}>
        <InputGroup>
          <Button id="button-addon1" outline="secondary" type="button">
            Button
          </Button>
          <Input
            aria-describedby="button-addon1"
            aria-label="Example text with button addon"
            placeholder=""
            type="text"
          />
        </InputGroup>

        <InputGroup>
          <Input
            aria-describedby="button-addon2"
            aria-label="Recipient's username"
            placeholder="Recipient's username"
            type="text"
          />
          <Button id="button-addon2" outline="secondary" type="button">
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

      <Example hash="customSelect" state={state} t={tInputGroupPage}>
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

      <Example hash="customFileInput" state={state} t={tInputGroupPage}>
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
          <Input aria-describedby="inputGroupFileAddon03" aria-label="Upload" id="inputGroupFile03" type="file" />
        </InputGroup>

        <InputGroup>
          <Input aria-describedby="inputGroupFileAddon04" aria-label="Upload" id="inputGroupFile04" type="file" />
          <Button id="inputGroupFileAddon04" outline="secondary" type="button">
            Button
          </Button>
        </InputGroup>
      </Example>

      <PropsIndicator />

      <Example
        hash="inputGroupComponentProps"
        items={[
          {
            attr: 'nowrap',
            default: '-',
            desc: tInputGroupComponentProps('inputGroup.desc.nowrap'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'size',
            default: '-',
            desc: tInputGroupComponentProps('inputGroup.desc.size'),
            type: <span className="badge text-bg-secondary">lg | sm</span>,
          },
          {
            attr: 'hasValidation',
            default: '-',
            desc: tInputGroupComponentProps('inputGroup.desc.hasValidation'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tInputGroupComponentProps}
      ></Example>

      <Example
        hash="inputGroupTextComponentProps"
        items={[
          {
            attr: 'as',
            default: 'span',
            desc: tInputGroupComponentProps('inputGroupText.desc.as'),
            type: <span className="badge text-bg-secondary">div | span</span>,
          },
        ]}
        props
        state={state}
        t={tInputGroupComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
