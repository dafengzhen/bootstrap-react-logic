import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Accordion } from '@lib/accordion';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/accordion/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function AccordionPage() {
  const navigation = useNavigation();
  const { t: tAccordionComponentProps } = useTranslation(['accordionComponentProps']);
  const { t: tAccordionPage } = useTranslation(['accordionPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tAccordionPage}>
        <Accordion
          options={[
            {
              body: (
                <>
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </>
              ),
              header: 'Accordion Item #1',
            },
            {
              body: (
                <>
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </>
              ),
              collapsed: true,
              header: 'Accordion Item #2',
              show: false,
            },
            {
              body: (
                <>
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </>
              ),
              collapsed: true,
              header: 'Accordion Item #3',
              show: false,
            },
          ]}
        />
      </Example>

      <Example hash="flush" state={state} t={tAccordionPage}>
        <Accordion
          flush
          options={[
            {
              body: (
                <>
                  Placeholder content for this accordion, which is intended to demonstrate the
                  <code>.accordion-flush</code> class. This is the first item's accordion body.
                </>
              ),
              collapsed: true,
              header: 'Accordion Item #1',
              show: false,
            },
            {
              body: (
                <>
                  Placeholder content for this accordion, which is intended to demonstrate the
                  <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this
                  being filled with some actual content.
                </>
              ),
              collapsed: true,
              header: 'Accordion Item #2',
              show: false,
            },
            {
              body: (
                <>
                  Placeholder content for this accordion, which is intended to demonstrate the
                  <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the space to make it look, at least at first
                  glance, a bit more representative of how this would look in a real-world application.
                </>
              ),
              collapsed: true,
              header: 'Accordion Item #3',
              show: false,
            },
          ]}
        />
      </Example>

      <Example hash="alwaysOpen" state={state} t={tAccordionPage}>
        <Accordion
          alwaysOpen
          options={[
            {
              body: (
                <>
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </>
              ),
              header: 'Accordion Item #1',
            },
            {
              body: (
                <>
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </>
              ),
              collapsed: true,
              header: 'Accordion Item #2',
              show: false,
            },
            {
              body: (
                <>
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </>
              ),
              collapsed: true,
              header: 'Accordion Item #3',
              show: false,
            },
          ]}
        />
      </Example>

      <PropsIndicator />

      <Example
        hash="accordionComponentProps"
        items={[
          {
            attr: 'flush',
            default: '',
            desc: tAccordionComponentProps('accordion.desc.flush'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'alwaysOpen',
            default: '',
            desc: tAccordionComponentProps('accordion.desc.alwaysOpen'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'options',
            default: '',
            desc: tAccordionComponentProps('accordion.desc.options'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="id?: string | number" value={tAccordionComponentProps('accordion.options.id')} />
                <OptionRow label="header?: string" value={tAccordionComponentProps('accordion.options.header')} />
                <OptionRow label="body?: ReactNode" value={tAccordionComponentProps('accordion.options.body')} />
                <OptionRow
                  label="collapsed?: boolean"
                  value={tAccordionComponentProps('accordion.options.collapsed')}
                />
                <OptionRow label="show?: boolean" value={tAccordionComponentProps('accordion.options.show')} />
              </div>
            ),
          },
          {
            attr: 'onChange',
            default: '',
            desc: tAccordionComponentProps('accordion.desc.onChange'),
            type: <span className="badge text-bg-secondary">(id: string | number, visible: boolean) =&gt; void</span>,
          },
          {
            attr: 'collapsing',
            default: 'true',
            desc: tAccordionComponentProps('accordion.desc.collapsing'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tAccordionComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
