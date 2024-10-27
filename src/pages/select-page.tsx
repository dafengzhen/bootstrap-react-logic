import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import { Select, SelectOption } from '@lib/select';
import { SelectMultiple } from '@lib/select-multiple';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import OptionRow from '@components/option-row.tsx';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/select/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
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
      <Example hash="basic" state={state} t={tSelectPage}>
        <Select aria-label="Default select example">
          <SelectOption defaultValue="">Open this select menu</SelectOption>
          <SelectOption disabled value="1">
            One
          </SelectOption>
          <SelectOption value="2">Two</SelectOption>
          <SelectOption value="3">Three</SelectOption>
        </Select>
      </Example>

      <Example hash="size" state={state} t={tSelectPage}>
        <Select size="lg" aria-label="Large select example">
          <SelectOption defaultValue="">Open this select menu</SelectOption>
          <SelectOption value="1">One</SelectOption>
          <SelectOption value="2">Two</SelectOption>
          <SelectOption value="3">Three</SelectOption>
        </Select>

        <Select size="sm" aria-label="Small select example">
          <SelectOption defaultValue="">Open this select menu</SelectOption>
          <SelectOption value="1">One</SelectOption>
          <SelectOption value="2">Two</SelectOption>
          <SelectOption value="3">Three</SelectOption>
        </Select>
      </Example>

      <Example hash="multiple" state={state} t={tSelectPage}>
        <Select multiple aria-label="Multiple select example">
          <SelectOption defaultValue="">Open this select menu</SelectOption>
          <SelectOption value="1">One</SelectOption>
          <SelectOption value="2">Two</SelectOption>
          <SelectOption value="3">Three</SelectOption>
        </Select>

        <Select nativeSize={3} aria-label="Size 3 select example">
          <SelectOption defaultValue="">Open this select menu</SelectOption>
          <SelectOption value="1">One</SelectOption>
          <SelectOption value="2">Two</SelectOption>
          <SelectOption value="3">Three</SelectOption>
        </Select>

        <SelectMultiple
          placeholder="Please select"
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
        ></SelectMultiple>

        <SelectMultiple disabled placeholder="Please select"></SelectMultiple>

        <SelectMultiple
          single
          placeholder="Please select"
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
        ></SelectMultiple>

        <SelectMultiple
          placeholder="Please select"
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
        ></SelectMultiple>

        <SelectMultiple
          placeholder="Please select"
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
              text: 'Warning',
              divider: 'bottom',
            },
            {
              text: 'Info',
            },
          ]}
        ></SelectMultiple>

        <SelectMultiple
          placeholder="Please select"
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
        ></SelectMultiple>

        <SelectMultiple
          hideActiveOptions
          selectableCount={4}
          placeholder="Please select"
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
        ></SelectMultiple>
      </Example>

      <Example hash="disabled" state={state} t={tSelectPage}>
        <Select aria-label="Disabled select example" disabled>
          <SelectOption defaultValue="">Open this select menu</SelectOption>
          <SelectOption value="1">One</SelectOption>
          <SelectOption value="2">Two</SelectOption>
          <SelectOption value="3">Three</SelectOption>
        </Select>
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="selectComponentProps"
        state={state}
        t={tSelectComponentProps}
        items={[
          {
            attr: 'size',
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: tSelectComponentProps('select.desc.size'),
            default: '',
          },
          {
            attr: 'nativeSize',
            type: <span className="badge text-bg-secondary">number | undefined</span>,
            desc: tSelectComponentProps('select.desc.nativeSize'),
            default: '',
          },
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('select.desc.disabled'),
            default: '',
          },
          {
            attr: 'isValid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('select.desc.isValid'),
            default: '',
          },
          {
            attr: 'isInvalid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('select.desc.isInvalid'),
            default: '',
          },
        ]}
      />

      <Example
        props
        hash="selectOptionComponentProps"
        state={state}
        t={tSelectComponentProps}
        items={[
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('selectOption.desc.disabled'),
            default: '',
          },
        ]}
      />

      <Example
        props
        hash="selectMultipleComponentProps"
        state={state}
        t={tSelectComponentProps}
        items={[
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('selectMultiple.desc.disabled'),
            default: '',
          },
          {
            attr: 'single',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('selectMultiple.desc.single'),
            default: '',
          },
          {
            attr: 'hideActiveOptions',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('selectMultiple.desc.hideActiveOptions'),
            default: '',
          },
          {
            attr: 'placeholder',
            type: <span className="badge text-bg-secondary">string</span>,
            desc: tSelectComponentProps('selectMultiple.desc.placeholder'),
            default: '',
          },
          {
            attr: 'selectableCount',
            type: <span className="badge text-bg-secondary">number</span>,
            desc: tSelectComponentProps('selectMultiple.desc.selectableCount'),
            default: '',
          },
          {
            attr: 'options',
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="id?: string | number" value={tSelectComponentProps('selectMultiple.options.id')} />
                <OptionRow label="active?: boolean" value={tSelectComponentProps('selectMultiple.options.active')} />
                <OptionRow
                  label="disabled?: boolean"
                  value={tSelectComponentProps('selectMultiple.options.disabled')}
                />
                <OptionRow
                  label="divider?: top | bottom"
                  value={tSelectComponentProps('selectMultiple.options.divider')}
                />
                <OptionRow label="header?: string" value={tSelectComponentProps('selectMultiple.options.header')} />
                <OptionRow label="text: string" value={tSelectComponentProps('selectMultiple.options.text')} />
              </div>
            ),
            desc: tSelectComponentProps('selectMultiple.desc.options'),
            default: '',
          },
          {
            attr: 'contentClasses',
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
            default: '',
          },
          {
            attr: 'onChange',
            type: <span className="badge text-bg-secondary">(id: (string | number)[]) =&gt; void</span>,
            desc: tSelectComponentProps('selectMultiple.desc.onChange'),
            default: '',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
