import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Select, SelectOption } from '@lib/select';
import { SelectMultiple } from '@lib/select-multiple';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/select/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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

      <Example hash="multiple" state={state} t={tSelectPage}>
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

        <SelectMultiple disabled placeholder="Please select"></SelectMultiple>

        <SelectMultiple
          options={[
            {
              text: 'Primary',
            },
            {
              active: true,
              text: 'Secondary',
            },
            {
              disabled: true,
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
          single
        ></SelectMultiple>

        <SelectMultiple
          options={[
            {
              text: 'Primary',
            },
            {
              active: true,
              text: 'Secondary',
            },
            {
              text: 'Success',
            },
            {
              active: true,

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

        <SelectMultiple
          options={[
            {
              text: 'Primary',
            },
            {
              active: true,
              text: 'Secondary',
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
              active: true,
              header: 'Status and Importance',
              text: 'Secondary',
            },
            {
              header: 'Status and Importance',
              text: 'Success',
            },
            {
              active: true,
              header: 'Status and Importance',
              text: 'Danger',
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
          hideActiveOptions
          options={[
            {
              text: 'Primary',
            },
            {
              active: true,
              text: 'Secondary',
            },
            {
              active: true,
              text: 'Success',
            },
            {
              active: true,
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
          selectableCount={4}
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
        hash="selectComponentProps"
        items={[
          {
            attr: 'size',
            default: '',
            desc: tSelectComponentProps('select.desc.size'),
            type: <span className="badge text-bg-secondary">lg | sm</span>,
          },
          {
            attr: 'nativeSize',
            default: '',
            desc: tSelectComponentProps('select.desc.nativeSize'),
            type: <span className="badge text-bg-secondary">number | undefined</span>,
          },
          {
            attr: 'disabled',
            default: '',
            desc: tSelectComponentProps('select.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'isValid',
            default: '',
            desc: tSelectComponentProps('select.desc.isValid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'isInvalid',
            default: '',
            desc: tSelectComponentProps('select.desc.isInvalid'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tSelectComponentProps}
      />

      <Example
        hash="selectOptionComponentProps"
        items={[
          {
            attr: 'disabled',
            default: '',
            desc: tSelectComponentProps('selectOption.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tSelectComponentProps}
      />

      <Example
        hash="selectMultipleComponentProps"
        items={[
          {
            attr: 'disabled',
            default: '',
            desc: tSelectComponentProps('selectMultiple.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'single',
            default: '',
            desc: tSelectComponentProps('selectMultiple.desc.single'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'hideActiveOptions',
            default: '',
            desc: tSelectComponentProps('selectMultiple.desc.hideActiveOptions'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'placeholder',
            default: '',
            desc: tSelectComponentProps('selectMultiple.desc.placeholder'),
            type: <span className="badge text-bg-secondary">string</span>,
          },
          {
            attr: 'selectableCount',
            default: '',
            desc: tSelectComponentProps('selectMultiple.desc.selectableCount'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'options',
            default: '',
            desc: tSelectComponentProps('selectMultiple.desc.options'),
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
          },
          {
            attr: 'contentClasses',
            default: '',
            desc: tSelectComponentProps('selectMultiple.desc.contentClasses'),
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
          },
        ]}
        props
        state={state}
        t={tSelectComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="selectComponentProps"
        items={[
          {
            attr: 'onChange',
            default: '',
            desc: tSelectComponentProps('select.desc.onChange'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
        ]}
        state={state}
        t={tSelectComponentProps}
      />

      <Example
        events
        hash="selectMultipleComponentProps"
        items={[
          {
            attr: 'onChange',
            default: '',
            desc: tSelectComponentProps('selectMultiple.desc.onChange'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
        ]}
        state={state}
        t={tSelectComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
