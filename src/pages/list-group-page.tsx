import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { ListGroup, ListGroupOption } from '@lib/list-group';
import { VariantType } from '@lib/tools';
import OptionRow from '@components/option-row.tsx';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/list-group/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
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
      <Example hash="basic" state={state} t={tListGroupPage} mw400>
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

      <Example hash="activeItems" state={state} t={tListGroupPage} mw400>
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

      <Example hash="disabledItems" state={state} t={tListGroupPage} mw400>
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

      <Example hash="linksAndButtons" state={state} t={tListGroupPage} gap3 mw400>
        <ListGroup
          as="div"
          options={[
            {
              item: 'The current link item',
              active: true,
              props: {
                as: 'a',
                href: '#',
                'aria-current': 'true',
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
              item: 'The current button',
              active: true,
              props: {
                as: 'button',
                type: 'button',
                'aria-current': 'true',
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
              item: 'A disabled button item',
              disabled: true,
              props: {
                as: 'button',
                type: 'button',
              },
            },
          ]}
        />
      </Example>

      <Example hash="flush" state={state} t={tListGroupPage} mw400>
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

      <Example hash="numbered" state={state} t={tListGroupPage} gap3 mw400>
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

      <Example hash="horizontal" state={state} t={tListGroupPage} mw400>
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
              key={name}
              horizontal={name as 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
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

      <Example hash="variants" state={state} t={tListGroupPage} mw400>
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

      <Example hash="forLinksAndButtons" state={state} t={tListGroupPage} mw400>
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
                variant,
                props: {
                  as: 'a',
                  href: '#',
                },
              } as ListGroupOption;
            }),
          ]}
        />
      </Example>

      <Example hash="withBadges" state={state} t={tListGroupPage} mw400>
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

      <Example hash="customContent" state={state} t={tListGroupPage} mw400>
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
              active: true,
              props: {
                as: 'a',
                href: '#',
                'aria-current': 'true',
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

      <Example hash="checkboxesAndRadios" state={state} t={tListGroupPage} mw400 gap3>
        <ListGroup
          options={[
            {
              item: (
                <>
                  <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                  <label className="form-check-label" htmlFor="firstCheckbox">
                    First checkbox
                  </label>
                </>
              ),
            },
            {
              item: (
                <>
                  <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                  <label className="form-check-label" htmlFor="secondCheckbox">
                    Second checkbox
                  </label>
                </>
              ),
            },
            {
              item: (
                <>
                  <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
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
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="firstRadio"
                    defaultChecked
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
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="secondRadio"
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
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="thirdRadio"
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
                  <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched" />
                  <label className="form-check-label stretched-link" htmlFor="firstCheckboxStretched">
                    First checkbox
                  </label>
                </>
              ),
            },
            {
              item: (
                <>
                  <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched" />
                  <label className="form-check-label stretched-link" htmlFor="secondCheckboxStretched">
                    Second checkbox
                  </label>
                </>
              ),
            },
            {
              item: (
                <>
                  <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
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
        props
        hash="listGroupComponentProps"
        state={state}
        t={tListGroupComponentProps}
        items={[
          {
            attr: 'options',
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
            desc: tListGroupComponentProps('listGroup.desc.options'),
            default: '',
          },
          {
            attr: 'flush',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tListGroupComponentProps('listGroup.desc.flush'),
            default: '',
          },
          {
            attr: 'numbered',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tListGroupComponentProps('listGroup.desc.numbered'),
            default: '',
          },
          {
            attr: 'horizontal',
            type: (
              <div className="d-flex gap-1">
                <span className="badge text-bg-secondary">boolean</span>
                <span className="badge text-bg-secondary">sm | md | lg | xl | xxl</span>
              </div>
            ),
            desc: tListGroupComponentProps('listGroup.desc.horizontal'),
            default: '',
          },
          {
            attr: 'itemAction',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tListGroupComponentProps('listGroup.desc.itemAction'),
            default: '',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
