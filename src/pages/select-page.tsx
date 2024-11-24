import PropsIndicator from '@components/props-indicator.tsx';
import { SelectMultiple } from '@lib/select-multiple';
import OptionRow from '@components/option-row.tsx';
import { SelectOption, Select } from '@lib/select';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/select/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

export default function SelectPage() {
  const navigation = useNavigation();
  const { t: tSelectComponentProps } = useTranslation(['selectComponentProps']);
  const { t: tSelectPage } = useTranslation(['selectPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example t={tSelectPage} state={state} hash="basic">
        <Select aria-label="Default select example">
          <SelectOption defaultValue="">Open this select menu</SelectOption>
          <SelectOption value="1" disabled>
            One
          </SelectOption>
          <SelectOption value="2">Two</SelectOption>
          <SelectOption value="3">Three</SelectOption>
        </Select>
      </Example>

      <Example t={tSelectPage} state={state} hash="size">
        <Select aria-label="Large select example" size="lg">
          <SelectOption defaultValue="">Open this select menu</SelectOption>
          <SelectOption value="1">One</SelectOption>
          <SelectOption value="2">Two</SelectOption>
          <SelectOption value="3">Three</SelectOption>
        </Select>

        <Select aria-label="Small select example" size="sm">
          <SelectOption defaultValue="">Open this select menu</SelectOption>
          <SelectOption value="1">One</SelectOption>
          <SelectOption value="2">Two</SelectOption>
          <SelectOption value="3">Three</SelectOption>
        </Select>
      </Example>

      <Example hash="multiple" t={tSelectPage} state={state}>
        <Select aria-label="Multiple select example" multiple>
          <SelectOption defaultValue="">Open this select menu</SelectOption>
          <SelectOption value="1">One</SelectOption>
          <SelectOption value="2">Two</SelectOption>
          <SelectOption value="3">Three</SelectOption>
        </Select>

        <Select aria-label="Size 3 select example" nativeSize={3}>
          <SelectOption defaultValue="">Open this select menu</SelectOption>
          <SelectOption value="1">One</SelectOption>
          <SelectOption value="2">Two</SelectOption>
          <SelectOption value="3">Three</SelectOption>
        </Select>

        <SelectMultiple
          options={[
            {
              text: 'Primary',
            },
            {
              text: 'Secondary',
            },
            {
              text: 'Success',
            },
            {
              text: 'Danger',
            },
            {
              text: 'Warning',
            },
            {
              text: 'Info',
            },
          ]}
          placeholder="Please select"
        ></SelectMultiple>

        <SelectMultiple placeholder="Please select" disabled></SelectMultiple>

        <SelectMultiple
          options={[
            {
              text: 'Primary',
            },
            {
              text: 'Secondary',
              active: true,
            },
            {
              text: 'Success',
              disabled: true,
            },
            {
              text: 'Danger',
            },
            {
              text: 'Warning',
            },
            {
              text: 'Info',
            },
          ]}
          placeholder="Please select"
          single
        ></SelectMultiple>

        <SelectMultiple
          options={[
            {
              text: 'Primary',
            },
            {
              text: 'Secondary',
              active: true,
            },
            {
              text: 'Success',
            },
            {
              text: 'Danger',

              active: true,
            },
            {
              text: 'Warning',
            },
            {
              text: 'Info',
            },
          ]}
          placeholder="Please select"
        ></SelectMultiple>

        <SelectMultiple
          options={[
            {
              text: 'Primary',
            },
            {
              text: 'Secondary',
              active: true,
            },
            {
              text: 'Success',
            },
            {
              divider: 'top',
              text: 'Danger',
            },
            {
              divider: 'bottom',
              text: 'Warning',
            },
            {
              text: 'Info',
            },
          ]}
          placeholder="Please select"
        ></SelectMultiple>

        <SelectMultiple
          options={[
            {
              header: 'Status and Importance',
              text: 'Primary',
            },
            {
              header: 'Status and Importance',
              text: 'Secondary',
              active: true,
            },
            {
              header: 'Status and Importance',
              text: 'Success',
            },
            {
              header: 'Status and Importance',
              text: 'Danger',
              active: true,
            },
            {
              header: 'Warning and Information',
              text: 'Warning',
            },
            {
              header: 'Warning and Information',
              text: 'Info',
            },
          ]}
          placeholder="Please select"
        ></SelectMultiple>

        <SelectMultiple
          options={[
            {
              text: 'Primary',
            },
            {
              text: 'Secondary',
              active: true,
            },
            {
              text: 'Success',
              active: true,
            },
            {
              text: 'Danger',
              active: true,
            },
            {
              text: 'Warning',
            },
            {
              text: 'Info',
            },
          ]}
          placeholder="Please select"
          selectableCount={4}
          hideActiveOptions
        ></SelectMultiple>
      </Example>

      <Example hash="disabled" t={tSelectPage} state={state}>
        <Select aria-label="Disabled select example" disabled>
          <SelectOption defaultValue="">Open this select menu</SelectOption>
          <SelectOption value="1">One</SelectOption>
          <SelectOption value="2">Two</SelectOption>
          <SelectOption value="3">Three</SelectOption>
        </Select>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: tSelectComponentProps('select.desc.size'),
            attr: 'size',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">number | undefined</span>,
            desc: tSelectComponentProps('select.desc.nativeSize'),
            attr: 'nativeSize',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('select.desc.disabled'),
            attr: 'disabled',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('select.desc.isValid'),
            attr: 'isValid',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('select.desc.isInvalid'),
            attr: 'isInvalid',
            default: '',
          },
        ]}
        hash="selectComponentProps"
        t={tSelectComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('selectOption.desc.disabled'),
            attr: 'disabled',
            default: '',
          },
        ]}
        hash="selectOptionComponentProps"
        t={tSelectComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('selectMultiple.desc.disabled'),
            attr: 'disabled',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('selectMultiple.desc.single'),
            attr: 'single',
            default: '',
          },
          {
            desc: tSelectComponentProps('selectMultiple.desc.hideActiveOptions'),
            type: <span className="badge text-bg-secondary">boolean</span>,
            attr: 'hideActiveOptions',
            default: '',
          },
          {
            desc: tSelectComponentProps('selectMultiple.desc.placeholder'),
            type: <span className="badge text-bg-secondary">string</span>,
            attr: 'placeholder',
            default: '',
          },
          {
            desc: tSelectComponentProps('selectMultiple.desc.selectableCount'),
            type: <span className="badge text-bg-secondary">number</span>,
            attr: 'selectableCount',
            default: '',
          },
          {
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow value={tSelectComponentProps('selectMultiple.options.id')} label="id?: string | number" />
                <OptionRow value={tSelectComponentProps('selectMultiple.options.active')} label="active?: boolean" />
                <OptionRow
                  value={tSelectComponentProps('selectMultiple.options.disabled')}
                  label="disabled?: boolean"
                />
                <OptionRow
                  value={tSelectComponentProps('selectMultiple.options.divider')}
                  label="divider?: top | bottom"
                />
                <OptionRow value={tSelectComponentProps('selectMultiple.options.header')} label="header?: string" />
                <OptionRow value={tSelectComponentProps('selectMultiple.options.text')} label="text: string" />
              </div>
            ),
            desc: tSelectComponentProps('selectMultiple.desc.options'),
            attr: 'options',
            default: '',
          },
          {
            type: (
              <div className="d-flex flex-column">
                <div>
                  <span className="badge text-bg-secondary">Key : mainContainer</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : optionsContainer</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : placeholder</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : activeOption</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : clearIcon</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : countDisplay</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : floatingMenu</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : header</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : topDivider</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : optionItem</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : selectButton</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">Key : bottomDivider</span>
                  <div>
                    <span className="badge text-bg-secondary">
                      Value : string | ((originalClass: string) =&gt; string | undefined)
                    </span>
                  </div>
                </div>
              </div>
            ),
            desc: tSelectComponentProps('selectMultiple.desc.contentClasses'),
            attr: 'contentClasses',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">(id: (string | number)[]) =&gt; void</span>,
            desc: tSelectComponentProps('selectMultiple.desc.onChange'),
            attr: 'onChange',
            default: '',
          },
        ]}
        hash="selectMultipleComponentProps"
        t={tSelectComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
