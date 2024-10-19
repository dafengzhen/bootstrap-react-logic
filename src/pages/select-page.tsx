import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import selectCodes from '@assets/codes/select';
import selectComponentPropsCodes from '@assets/codes/select/component-props';
import { Select, SelectOption } from '@lib/select';
import { SelectMultiple } from '@lib/select-multiple';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import OptionRow from '@components/option-row.tsx';
import generalCodes from '@assets/codes/general';
import Example from '@components/example.tsx';
import { createState } from '@tools/handlers.ts';

enum StatesEnum {
  basic,
  size,
  multiple,
  disabled,
  selectComponentProps,
  selectOptionComponentProps,
  selectMultipleComponentProps,
  generalComponentProps,
}

export default function SelectPage() {
  const navigation = useNavigation();
  const { t: tSelectComponentProps } = useTranslation(['selectComponentProps']);
  const { t: tSelectOptionComponentProps } = useTranslation(['selectOptionComponentProps']);
  const { t: tSelectMultipleComponentProps } = useTranslation(['selectMultipleComponentProps']);
  const { t: tSelectPage } = useTranslation(['selectPage']);

  const state = useState({
    select: createState(StatesEnum, selectCodes, selectComponentPropsCodes, generalCodes),
  });

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tSelectPage}>
        <div className="d-flex flex-column gap-2">
          <div>
            <Select aria-label="Default select example">
              <SelectOption defaultValue="">Open this select menu</SelectOption>
              <SelectOption disabled value="1">
                One
              </SelectOption>
              <SelectOption value="2">Two</SelectOption>
              <SelectOption value="3">Three</SelectOption>
            </Select>
          </div>
        </div>
      </Example>

      <Example hash="size" state={state} t={tSelectPage}>
        <div className="d-flex flex-column gap-2">
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
        </div>
      </Example>

      <Example hash="multiple" state={state} t={tSelectPage}>
        <div className="d-flex flex-column gap-2">
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
                value: 1,
              },
              {
                text: 'Secondary',
                value: 1,
              },
              {
                text: 'Success',
                value: 1,
              },
              {
                text: 'Danger',
                value: 2,
              },
              {
                text: 'Warning',
                value: 3,
              },
              {
                text: 'Info',
                value: 4,
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
                value: 1,
              },
              {
                text: 'Secondary',
                value: 1,
                active: true,
              },
              {
                text: 'Success',
                value: 1,
                disabled: true,
              },
              {
                text: 'Danger',
                value: 2,
              },
              {
                text: 'Warning',
                value: 3,
              },
              {
                text: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>

          <SelectMultiple
            placeholder="Please select"
            options={[
              {
                text: 'Primary',
                value: 1,
              },
              {
                text: 'Secondary',
                value: 1,
                active: true,
              },
              {
                text: 'Success',
                value: 1,
              },
              {
                text: 'Danger',
                value: 2,
                active: true,
              },
              {
                text: 'Warning',
                value: 3,
              },
              {
                text: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>

          <SelectMultiple
            placeholder="Please select"
            options={[
              {
                text: 'Primary',
                value: 1,
              },
              {
                text: 'Secondary',
                value: 1,
                active: true,
              },
              {
                text: 'Success',
                value: 1,
              },
              {
                divider: 'top',
                text: 'Danger',
                value: 2,
              },
              {
                text: 'Warning',
                value: 3,
                divider: 'bottom',
              },
              {
                text: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>

          <SelectMultiple
            placeholder="Please select"
            options={[
              {
                header: 'Status and Importance',
                text: 'Primary',
                value: 1,
              },
              {
                header: 'Status and Importance',
                text: 'Secondary',
                value: 1,
                active: true,
              },
              {
                header: 'Status and Importance',
                text: 'Success',
                value: 1,
              },
              {
                header: 'Status and Importance',
                text: 'Danger',
                value: 2,
                active: true,
              },
              {
                header: 'Warning and Information',
                text: 'Warning',
                value: 3,
              },
              {
                header: 'Warning and Information',
                text: 'Info',
                value: 4,
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
                value: 1,
              },
              {
                text: 'Secondary',
                value: 1,
                active: true,
              },
              {
                text: 'Success',
                value: 1,
                active: true,
              },
              {
                text: 'Danger',
                value: 2,
                active: true,
              },
              {
                text: 'Warning',
                value: 3,
              },
              {
                text: 'Info',
                value: 4,
              },
            ]}
          ></SelectMultiple>
        </div>
      </Example>

      <Example hash="disabled" state={state} t={tSelectPage}>
        <div className="d-flex flex-column gap-2">
          <Select aria-label="Disabled select example" disabled>
            <SelectOption defaultValue="">Open this select menu</SelectOption>
            <SelectOption value="1">One</SelectOption>
            <SelectOption value="2">Two</SelectOption>
            <SelectOption value="3">Three</SelectOption>
          </Select>
        </div>
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
            desc: tSelectComponentProps('desc.size'),
            default: '',
          },
          {
            attr: 'nativeSize',
            type: <span className="badge text-bg-secondary">number | undefined</span>,
            desc: tSelectComponentProps('desc.nativeSize'),
            default: '',
          },
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('desc.disabled'),
            default: '',
          },
          {
            attr: 'isValid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('desc.isValid'),
            default: '',
          },
          {
            attr: 'isInvalid',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectComponentProps('desc.isInvalid'),
            default: '',
          },
        ]}
      ></Example>

      <Example
        props
        hash="selectOptionComponentProps"
        state={state}
        t={tSelectOptionComponentProps}
        items={[
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectOptionComponentProps('desc.disabled'),
            default: '',
          },
        ]}
      ></Example>

      <Example
        props
        hash="selectMultipleComponentProps"
        state={state}
        t={tSelectMultipleComponentProps}
        items={[
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectMultipleComponentProps('desc.disabled'),
            default: '',
          },
          {
            attr: 'single',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectMultipleComponentProps('desc.single'),
            default: '',
          },
          {
            attr: 'hideActiveOptions',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSelectMultipleComponentProps('desc.hideActiveOptions'),
            default: '',
          },
          {
            attr: 'placeholder',
            type: <span className="badge text-bg-secondary">string</span>,
            desc: tSelectMultipleComponentProps('desc.placeholder'),
            default: '',
          },
          {
            attr: 'selectableCount',
            type: <span className="badge text-bg-secondary">number</span>,
            desc: tSelectMultipleComponentProps('desc.selectableCount'),
            default: '',
          },
          {
            attr: 'options',
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="id?: string | number" value={tSelectMultipleComponentProps('options.id')} />
                <OptionRow label="value?: string | number" value={tSelectMultipleComponentProps('options.value')} />
                <OptionRow label="active?: boolean" value={tSelectMultipleComponentProps('options.active')} />
                <OptionRow label="disabled?: boolean" value={tSelectMultipleComponentProps('options.disabled')} />
                <OptionRow label="divider?: top | bottom" value={tSelectMultipleComponentProps('options.divider')} />
                <OptionRow label="header?: string" value={tSelectMultipleComponentProps('options.header')} />
                <OptionRow label="text: string" value={tSelectMultipleComponentProps('options.text')} />
              </div>
            ),
            desc: tSelectMultipleComponentProps('desc.options'),
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
            desc: tSelectMultipleComponentProps('desc.contentClasses'),
            default: '',
          },
          {
            attr: 'onChange',
            type: <span className="badge text-bg-secondary">(value: (string | number)[]) =&gt; void</span>,
            desc: tSelectMultipleComponentProps('desc.onChange'),
            default: '',
          },
        ]}
      ></Example>

      <Example props hash="generalComponentProps" state={state}></Example>

      <About />
    </div>
  );
}
