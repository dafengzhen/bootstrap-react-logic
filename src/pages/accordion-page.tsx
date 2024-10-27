import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { Accordion } from '@lib/accordion';
import OptionRow from '@components/option-row.tsx';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/accordion/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
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
              header: 'Accordion Item #1',
              body: (
                <>
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </>
              ),
            },
            {
              collapsed: true,
              show: false,
              header: 'Accordion Item #2',
              body: (
                <>
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </>
              ),
            },
            {
              collapsed: true,
              show: false,
              header: 'Accordion Item #3',
              body: (
                <>
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </>
              ),
            },
          ]}
        />
      </Example>

      <Example hash="flush" state={state} t={tAccordionPage}>
        <Accordion
          flush
          options={[
            {
              collapsed: true,
              show: false,
              header: 'Accordion Item #1',
              body: (
                <>
                  Placeholder content for this accordion, which is intended to demonstrate the
                  <code>.accordion-flush</code> class. This is the first item's accordion body.
                </>
              ),
            },
            {
              collapsed: true,
              show: false,
              header: 'Accordion Item #2',
              body: (
                <>
                  Placeholder content for this accordion, which is intended to demonstrate the
                  <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this
                  being filled with some actual content.
                </>
              ),
            },
            {
              collapsed: true,
              show: false,
              header: 'Accordion Item #3',
              body: (
                <>
                  Placeholder content for this accordion, which is intended to demonstrate the
                  <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the space to make it look, at least at first
                  glance, a bit more representative of how this would look in a real-world application.
                </>
              ),
            },
          ]}
        />
      </Example>

      <Example hash="alwaysOpen" state={state} t={tAccordionPage}>
        <Accordion
          alwaysOpen
          options={[
            {
              header: 'Accordion Item #1',
              body: (
                <>
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </>
              ),
            },
            {
              collapsed: true,
              show: false,
              header: 'Accordion Item #2',
              body: (
                <>
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </>
              ),
            },
            {
              collapsed: true,
              show: false,
              header: 'Accordion Item #3',
              body: (
                <>
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </>
              ),
            },
          ]}
        />
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="accordionComponentProps"
        state={state}
        t={tAccordionComponentProps}
        items={[
          {
            attr: 'flush',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAccordionComponentProps('accordion.desc.flush'),
            default: '',
          },
          {
            attr: 'alwaysOpen',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAccordionComponentProps('accordion.desc.alwaysOpen'),
            default: '',
          },
          {
            attr: 'options',
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
            desc: tAccordionComponentProps('accordion.desc.options'),
            default: '',
          },
          {
            attr: 'onChange',
            type: <span className="badge text-bg-secondary">(id: string | number, visible: boolean) =&gt; void</span>,
            desc: tAccordionComponentProps('accordion.desc.onChange'),
            default: '',
          },
          {
            attr: 'collapsing',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAccordionComponentProps('accordion.desc.collapsing'),
            default: 'true',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
