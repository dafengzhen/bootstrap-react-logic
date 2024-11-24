import PropsIndicator from '@components/props-indicator.tsx';
import { ListGroupOption, ListGroup } from '@lib/list-group';
import OptionRow from '@components/option-row.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { VariantType } from '@lib/tools';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/list-group/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

export default function ListGroupPage() {
  const navigation = useNavigation();
  const { t: tListGroupComponentProps } = useTranslation(['listGroupComponentProps']);
  const { t: tListGroupPage } = useTranslation(['listGroupPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example t={tListGroupPage} state={state} hash="basic" mw400>
        <ListGroup
          options={[
            {
              item: 'An item',
            },
            {
              item: 'A second item',
            },
            {
              item: 'A third item',
            },
            {
              item: 'A fourth item',
            },
            {
              item: 'And a fifth one',
            },
          ]}
        />
      </Example>

      <Example hash="activeItems" t={tListGroupPage} state={state} mw400>
        <ListGroup
          options={[
            {
              item: 'An active item',
              active: true,
            },
            {
              item: 'A second item',
            },
            {
              item: 'A third item',
            },
            {
              item: 'A fourth item',
            },
            {
              item: 'And a fifth one',
            },
          ]}
        />
      </Example>

      <Example hash="disabledItems" t={tListGroupPage} state={state} mw400>
        <ListGroup
          options={[
            {
              item: 'A disabled item',
              disabled: true,
            },
            {
              item: 'A second item',
            },
            {
              item: 'A third item',
            },
            {
              item: 'A fourth item',
            },
            {
              item: 'And a fifth one',
            },
          ]}
        />
      </Example>

      <Example hash="linksAndButtons" t={tListGroupPage} state={state} mw400 gap3>
        <ListGroup
          options={[
            {
              props: {
                'aria-current': 'true',
                href: '#',
                as: 'a',
              },
              item: 'The current link item',
              active: true,
            },
            {
              props: {
                href: '#',
                as: 'a',
              },
              item: 'A second link item',
            },
            {
              props: {
                href: '#',
                as: 'a',
              },
              item: 'A third link item',
            },
            {
              props: {
                href: '#',
                as: 'a',
              },
              item: 'A fourth link item',
            },
            {
              props: {
                href: '#',
                as: 'a',
              },
              item: 'A disabled link item',
            },
          ]}
          as="div"
        />

        <ListGroup
          options={[
            {
              props: {
                'aria-current': 'true',
                type: 'button',
                as: 'button',
              },
              item: 'The current button',
              active: true,
            },
            {
              props: {
                type: 'button',
                as: 'button',
              },
              item: 'A second button item',
            },
            {
              props: {
                type: 'button',
                as: 'button',
              },
              item: 'A third button item',
            },
            {
              props: {
                type: 'button',
                as: 'button',
              },
              item: 'A fourth button item',
            },
            {
              props: {
                type: 'button',
                as: 'button',
              },
              item: 'A disabled button item',
              disabled: true,
            },
          ]}
          as="div"
        />
      </Example>

      <Example t={tListGroupPage} state={state} hash="flush" mw400>
        <ListGroup
          options={[
            {
              item: 'An item',
            },
            {
              item: 'A second item',
            },
            {
              item: 'A third item',
            },
            {
              item: 'A fourth item',
            },
            {
              item: 'And a fifth one',
            },
          ]}
          flush
        />
      </Example>

      <Example t={tListGroupPage} hash="numbered" state={state} mw400 gap3>
        <ListGroup
          options={[
            {
              item: 'A list item',
            },
            {
              item: 'A list item',
            },
            {
              item: 'A list item',
            },
          ]}
          numbered
        />

        <ListGroup
          options={[
            {
              item: (
                <>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Content for list item
                  </div>
                  <span className="badge text-bg-primary rounded-pill">14</span>
                </>
              ),
              props: {
                className: 'd-flex justify-content-between align-items-start',
              },
            },
            {
              item: (
                <>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Content for list item
                  </div>
                  <span className="badge text-bg-primary rounded-pill">14</span>
                </>
              ),
              props: {
                className: 'd-flex justify-content-between align-items-start',
              },
            },
            {
              item: (
                <>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Content for list item
                  </div>
                  <span className="badge text-bg-primary rounded-pill">14</span>
                </>
              ),
              props: {
                className: 'd-flex justify-content-between align-items-start',
              },
            },
          ]}
          numbered
          as="ol"
        />
      </Example>

      <Example t={tListGroupPage} hash="horizontal" state={state} mw400>
        <ListGroup
          options={[
            {
              item: 'An item',
            },
            {
              item: 'A second item',
            },
            {
              item: 'A third item',
            },
          ]}
          horizontal
        />

        {['sm', 'md', 'lg', 'xl', 'xxl'].map((name) => {
          return (
            <ListGroup
              options={[
                {
                  item: 'An item',
                },
                {
                  item: 'A second item',
                },
                {
                  item: 'A third item',
                },
              ]}
              horizontal={name as 'xxl' | 'lg' | 'md' | 'sm' | 'xl'}
              key={name}
            />
          );
        })}
      </Example>

      <Example t={tListGroupPage} hash="variants" state={state} mw400>
        <ListGroup
          options={[
            {
              item: 'A simple default list group item',
            },
            ...(
              ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] as (keyof VariantType)[]
            ).map((variant) => {
              return {
                item: `A simple ${variant} list group item`,
                variant,
              };
            }),
          ]}
        />
      </Example>

      <Example hash="forLinksAndButtons" t={tListGroupPage} state={state} mw400>
        <ListGroup
          options={[
            {
              props: {
                href: '#',
                as: 'a',
              },
              item: 'A simple default list group item',
            },
            ...(
              ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] as (keyof VariantType)[]
            ).map((variant) => {
              return {
                props: {
                  href: '#',
                  as: 'a',
                },
                item: `A simple ${variant} list group item`,
                variant,
              } as ListGroupOption;
            }),
          ]}
          itemAction
          as="div"
        />
      </Example>

      <Example t={tListGroupPage} hash="withBadges" state={state} mw400>
        <ListGroup
          options={[
            {
              item: (
                <>
                  A list item
                  <span className="badge text-bg-primary rounded-pill">14</span>
                </>
              ),
              props: {
                className: 'd-flex justify-content-between align-items-center',
              },
            },
            {
              item: (
                <>
                  A second list item
                  <span className="badge text-bg-primary rounded-pill">2</span>
                </>
              ),
              props: {
                className: 'd-flex justify-content-between align-items-center',
              },
            },
            {
              item: (
                <>
                  A third list item
                  <span className="badge text-bg-primary rounded-pill">1</span>
                </>
              ),
              props: {
                className: 'd-flex justify-content-between align-items-center',
              },
            },
          ]}
        />
      </Example>

      <Example hash="customContent" t={tListGroupPage} state={state} mw400>
        <ListGroup
          options={[
            {
              item: (
                <>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small>And some small print.</small>
                </>
              ),
              props: {
                'aria-current': 'true',
                href: '#',
                as: 'a',
              },
              active: true,
            },
            {
              item: (
                <>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small className="text-body-secondary">And some muted small print.</small>
                </>
              ),
              props: {
                href: '#',
                as: 'a',
              },
            },
            {
              item: (
                <>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small className="text-body-secondary">And some muted small print.</small>
                </>
              ),
              props: {
                href: '#',
                as: 'a',
              },
            },
          ]}
        />
      </Example>

      <Example hash="checkboxesAndRadios" t={tListGroupPage} state={state} mw400 gap3>
        <ListGroup
          options={[
            {
              item: (
                <>
                  <input className="form-check-input me-1" id="firstCheckbox" type="checkbox" value="" />
                  <label className="form-check-label" htmlFor="firstCheckbox">
                    First checkbox
                  </label>
                </>
              ),
            },
            {
              item: (
                <>
                  <input className="form-check-input me-1" id="secondCheckbox" type="checkbox" value="" />
                  <label className="form-check-label" htmlFor="secondCheckbox">
                    Second checkbox
                  </label>
                </>
              ),
            },
            {
              item: (
                <>
                  <input className="form-check-input me-1" id="thirdCheckbox" type="checkbox" value="" />
                  <label className="form-check-label" htmlFor="thirdCheckbox">
                    Third checkbox
                  </label>
                </>
              ),
            },
          ]}
        />

        <ListGroup
          options={[
            {
              item: (
                <>
                  <input
                    className="form-check-input me-1"
                    name="listGroupRadio"
                    id="firstRadio"
                    defaultChecked
                    type="radio"
                    value=""
                  />
                  <label className="form-check-label" htmlFor="firstRadio">
                    First radio
                  </label>
                </>
              ),
            },
            {
              item: (
                <>
                  <input
                    className="form-check-input me-1"
                    name="listGroupRadio"
                    id="secondRadio"
                    type="radio"
                    value=""
                  />
                  <label className="form-check-label" htmlFor="secondRadio">
                    Second radio
                  </label>
                </>
              ),
            },
            {
              item: (
                <>
                  <input
                    className="form-check-input me-1"
                    name="listGroupRadio"
                    id="thirdRadio"
                    type="radio"
                    value=""
                  />
                  <label className="form-check-label" htmlFor="thirdRadio">
                    Third radio
                  </label>
                </>
              ),
            },
          ]}
        />

        <ListGroup
          options={[
            {
              item: (
                <>
                  <input className="form-check-input me-1" id="firstCheckboxStretched" type="checkbox" value="" />
                  <label className="form-check-label stretched-link" htmlFor="firstCheckboxStretched">
                    First checkbox
                  </label>
                </>
              ),
            },
            {
              item: (
                <>
                  <input className="form-check-input me-1" id="secondCheckboxStretched" type="checkbox" value="" />
                  <label className="form-check-label stretched-link" htmlFor="secondCheckboxStretched">
                    Second checkbox
                  </label>
                </>
              ),
            },
            {
              item: (
                <>
                  <input className="form-check-input me-1" id="thirdCheckboxStretched" type="checkbox" value="" />
                  <label className="form-check-label stretched-link" htmlFor="thirdCheckboxStretched">
                    Third checkbox
                  </label>
                </>
              ),
            },
          ]}
        />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow value={tListGroupComponentProps('listGroup.options.id')} label="id?: string | number" />
                <OptionRow value={tListGroupComponentProps('listGroup.options.item')} label="item?: ReactNode" />
                <OptionRow value={tListGroupComponentProps('listGroup.options.active')} label="active?: boolean" />
                <OptionRow value={tListGroupComponentProps('listGroup.options.disabled')} label="disabled?: boolean" />
                <OptionRow
                  value={tListGroupComponentProps('listGroup.options.props')}
                  label="props?: ListGroupItemProps"
                />
                <OptionRow value={tListGroupComponentProps('listGroup.options.flexFill')} label="flexFill?: boolean" />
                <OptionRow
                  value={tListGroupComponentProps('listGroup.options.variant')}
                  label="variant?: VariantType"
                />
                <OptionRow
                  value={tListGroupComponentProps('listGroup.options.itemAction')}
                  label="itemAction?: boolean"
                />
              </div>
            ),
            desc: tListGroupComponentProps('listGroup.desc.options'),
            attr: 'options',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tListGroupComponentProps('listGroup.desc.flush'),
            attr: 'flush',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tListGroupComponentProps('listGroup.desc.numbered'),
            attr: 'numbered',
            default: '',
          },
          {
            type: (
              <div className="d-flex gap-1">
                <span className="badge text-bg-secondary">boolean</span>
                <span className="badge text-bg-secondary">sm | md | lg | xl | xxl</span>
              </div>
            ),
            desc: tListGroupComponentProps('listGroup.desc.horizontal'),
            attr: 'horizontal',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tListGroupComponentProps('listGroup.desc.itemAction'),
            attr: 'itemAction',
            default: '',
          },
        ]}
        hash="listGroupComponentProps"
        t={tListGroupComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
