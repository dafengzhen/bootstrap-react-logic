import PropsIndicator from '@components/props-indicator.tsx';
import OptionRow from '@components/option-row.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { Accordion } from '@lib/accordion';
import About from '@components/about.tsx';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/accordion/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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
      <Example t={tAccordionPage} state={state} hash="basic">
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
              header: 'Accordion Item #2',
              collapsed: true,
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
              header: 'Accordion Item #3',
              collapsed: true,
              show: false,
            },
          ]}
        />
      </Example>

      <Example t={tAccordionPage} state={state} hash="flush">
        <Accordion
          options={[
            {
              body: (
                <>
                  Placeholder content for this accordion, which is intended to demonstrate the
                  <code>.accordion-flush</code> class. This is the first item's accordion body.
                </>
              ),
              header: 'Accordion Item #1',
              collapsed: true,
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
              header: 'Accordion Item #2',
              collapsed: true,
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
              header: 'Accordion Item #3',
              collapsed: true,
              show: false,
            },
          ]}
          flush
        />
      </Example>

      <Example t={tAccordionPage} hash="alwaysOpen" state={state}>
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
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </>
              ),
              header: 'Accordion Item #2',
              collapsed: true,
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
              header: 'Accordion Item #3',
              collapsed: true,
              show: false,
            },
          ]}
          alwaysOpen
        />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAccordionComponentProps('accordion.desc.flush'),
            attr: 'flush',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAccordionComponentProps('accordion.desc.alwaysOpen'),
            attr: 'alwaysOpen',
            default: '',
          },
          {
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow value={tAccordionComponentProps('accordion.options.id')} label="id?: string | number" />
                <OptionRow value={tAccordionComponentProps('accordion.options.header')} label="header?: string" />
                <OptionRow value={tAccordionComponentProps('accordion.options.body')} label="body?: ReactNode" />
                <OptionRow
                  value={tAccordionComponentProps('accordion.options.collapsed')}
                  label="collapsed?: boolean"
                />
                <OptionRow value={tAccordionComponentProps('accordion.options.show')} label="show?: boolean" />
              </div>
            ),
            desc: tAccordionComponentProps('accordion.desc.options'),
            attr: 'options',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">(id: string | number, visible: boolean) =&gt; void</span>,
            desc: tAccordionComponentProps('accordion.desc.onChange'),
            attr: 'onChange',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAccordionComponentProps('accordion.desc.collapsing'),
            attr: 'collapsing',
            default: 'true',
          },
        ]}
        hash="accordionComponentProps"
        t={tAccordionComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
