import type { ListGroupOption } from '@lib/list-group';
import type { VariantType } from '@lib/tools';

import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { ListGroup } from '@lib/list-group';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/list-group/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
      <Example hash="basic" mw400 state={state} t={tListGroupPage}>
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

      <Example hash="activeItems" mw400 state={state} t={tListGroupPage}>
        <ListGroup
          options={[
            {
              active: true,
              item: 'An active item',
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

      <Example hash="disabledItems" mw400 state={state} t={tListGroupPage}>
        <ListGroup
          options={[
            {
              disabled: true,
              item: 'A disabled item',
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

      <Example gap3 hash="linksAndButtons" mw400 state={state} t={tListGroupPage}>
        <ListGroup
          as="div"
          options={[
            {
              active: true,
              item: 'The current link item',
              props: {
                'aria-current': 'true',
                as: 'a',
                href: '#',
              },
            },
            {
              item: 'A second link item',
              props: {
                as: 'a',
                href: '#',
              },
            },
            {
              item: 'A third link item',
              props: {
                as: 'a',
                href: '#',
              },
            },
            {
              item: 'A fourth link item',
              props: {
                as: 'a',
                href: '#',
              },
            },
            {
              item: 'A disabled link item',
              props: {
                as: 'a',
                href: '#',
              },
            },
          ]}
        />

        <ListGroup
          as="div"
          options={[
            {
              active: true,
              item: 'The current button',
              props: {
                'aria-current': 'true',
                as: 'button',
                type: 'button',
              },
            },
            {
              item: 'A second button item',
              props: {
                as: 'button',
                type: 'button',
              },
            },
            {
              item: 'A third button item',
              props: {
                as: 'button',
                type: 'button',
              },
            },
            {
              item: 'A fourth button item',
              props: {
                as: 'button',
                type: 'button',
              },
            },
            {
              disabled: true,
              item: 'A disabled button item',
              props: {
                as: 'button',
                type: 'button',
              },
            },
          ]}
        />
      </Example>

      <Example hash="flush" mw400 state={state} t={tListGroupPage}>
        <ListGroup
          flush
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

      <Example gap3 hash="numbered" mw400 state={state} t={tListGroupPage}>
        <ListGroup
          numbered
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
        />

        <ListGroup
          as="ol"
          numbered
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
        />
      </Example>

      <Example hash="horizontal" mw400 state={state} t={tListGroupPage}>
        <ListGroup
          horizontal
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
        />

        {['sm', 'md', 'lg', 'xl', 'xxl'].map((name) => {
          return (
            <ListGroup
              horizontal={name as 'lg' | 'md' | 'sm' | 'xl' | 'xxl'}
              key={name}
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
            />
          );
        })}
      </Example>

      <Example hash="variants" mw400 state={state} t={tListGroupPage}>
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

      <Example hash="forLinksAndButtons" mw400 state={state} t={tListGroupPage}>
        <ListGroup
          as="div"
          itemAction
          options={[
            {
              item: 'A simple default list group item',
              props: {
                as: 'a',
                href: '#',
              },
            },
            ...(
              ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] as (keyof VariantType)[]
            ).map((variant) => {
              return {
                item: `A simple ${variant} list group item`,
                props: {
                  as: 'a',
                  href: '#',
                },
                variant,
              } as ListGroupOption;
            }),
          ]}
        />
      </Example>

      <Example hash="withBadges" mw400 state={state} t={tListGroupPage}>
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

      <Example hash="customContent" mw400 state={state} t={tListGroupPage}>
        <ListGroup
          options={[
            {
              active: true,
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
                as: 'a',
                href: '#',
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
                as: 'a',
                href: '#',
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
                as: 'a',
                href: '#',
              },
            },
          ]}
        />
      </Example>

      <Example gap3 hash="checkboxesAndRadios" mw400 state={state} t={tListGroupPage}>
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
                    defaultChecked
                    id="firstRadio"
                    name="listGroupRadio"
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
                    id="secondRadio"
                    name="listGroupRadio"
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
                    id="thirdRadio"
                    name="listGroupRadio"
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
        hash="listGroupComponentProps"
        items={[
          {
            attr: 'options',
            default: '',
            desc: tListGroupComponentProps('listGroup.desc.options'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="id?: string | number" value={tListGroupComponentProps('listGroup.options.id')} />
                <OptionRow label="item?: ReactNode" value={tListGroupComponentProps('listGroup.options.item')} />
                <OptionRow label="active?: boolean" value={tListGroupComponentProps('listGroup.options.active')} />
                <OptionRow label="disabled?: boolean" value={tListGroupComponentProps('listGroup.options.disabled')} />
                <OptionRow
                  label="props?: ListGroupItemProps"
                  value={tListGroupComponentProps('listGroup.options.props')}
                />
                <OptionRow label="flexFill?: boolean" value={tListGroupComponentProps('listGroup.options.flexFill')} />
                <OptionRow
                  label="variant?: VariantType"
                  value={tListGroupComponentProps('listGroup.options.variant')}
                />
                <OptionRow
                  label="itemAction?: boolean"
                  value={tListGroupComponentProps('listGroup.options.itemAction')}
                />
              </div>
            ),
          },
          {
            attr: 'flush',
            default: '',
            desc: tListGroupComponentProps('listGroup.desc.flush'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'numbered',
            default: '',
            desc: tListGroupComponentProps('listGroup.desc.numbered'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'horizontal',
            default: '',
            desc: tListGroupComponentProps('listGroup.desc.horizontal'),
            type: (
              <div className="d-flex gap-1">
                <span className="badge text-bg-secondary">boolean</span>
                <span className="badge text-bg-secondary">sm | md | lg | xl | xxl</span>
              </div>
            ),
          },
          {
            attr: 'itemAction',
            default: '',
            desc: tListGroupComponentProps('listGroup.desc.itemAction'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tListGroupComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
