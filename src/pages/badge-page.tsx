import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import TypesIndicator from '@components/types-indicator.tsx';
import { Badge } from '@lib/badge';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/badge/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function BadgePage() {
  const navigation = useNavigation();
  const { t: tBadgeComponentProps } = useTranslation(['badgeComponentProps']);
  const { t: tBadgePage } = useTranslation(['badgePage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tBadgePage}>
        <h1>
          Example heading <Badge variant="secondary">New</Badge>
        </h1>

        <h2>
          Example heading <Badge variant="secondary">New</Badge>
        </h2>

        <h3>
          Example heading <Badge variant="secondary">New</Badge>
        </h3>

        <h4>
          Example heading <Badge variant="secondary">New</Badge>
        </h4>

        <h5>
          Example heading <Badge variant="secondary">New</Badge>
        </h5>

        <h6>
          Example heading <Badge variant="secondary">New</Badge>
        </h6>
      </Example>

      <Example hash="buttons" state={state} t={tBadgePage}>
        <div>
          <button className="btn btn-primary" type="button">
            Notifications <Badge variant="secondary">4</Badge>
          </button>
        </div>
      </Example>

      <Example hash="positioned" state={state} t={tBadgePage}>
        <div>
          <button className="btn btn-primary position-relative" type="button">
            Inbox
            <Badge
              className="position-absolute top-0 start-100 translate-middle"
              rounded="pill"
              variant="danger"
              variantType="bg"
            >
              99+
              <span className="visually-hidden">unread messages</span>
            </Badge>
          </button>
        </div>

        <div>
          <button className="btn btn-primary position-relative" type="button">
            Profile
            <Badge
              className="position-absolute top-0 start-100 translate-middle p-2 border border-light"
              rounded="circle"
              variant="danger"
              variantType="bg"
            >
              <span className="visually-hidden">New alerts</span>
            </Badge>
          </button>
        </div>
      </Example>

      <Example hash="backgroundColors" row state={state} t={tBadgePage} wrap>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="light">Light</Badge>
        <Badge variant="dark">Dark</Badge>
      </Example>

      <Example hash="pillBadges" row state={state} t={tBadgePage} wrap>
        <Badge rounded="pill" variant="primary">
          Primary
        </Badge>
        <Badge rounded="pill" variant="secondary">
          Secondary
        </Badge>
        <Badge rounded="pill" variant="success">
          Success
        </Badge>
        <Badge rounded="pill" variant="danger">
          Danger
        </Badge>
        <Badge rounded="pill" variant="warning">
          Warning
        </Badge>
        <Badge rounded="pill" variant="info">
          Info
        </Badge>
        <Badge rounded="pill" variant="light">
          Light
        </Badge>
        <Badge rounded="pill" variant="dark">
          Dark
        </Badge>
      </Example>

      <PropsIndicator />

      <Example
        hash="badgeComponentProps"
        items={[
          {
            attr: 'variant',
            default: '',
            desc: tBadgeComponentProps('badge.desc.variant'),
            type: (
              <Link to="#badgeComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  Variant
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
          {
            attr: 'variantType',
            default: 'text',
            desc: tBadgeComponentProps('badge.desc.variantType'),
            type: <span className="badge text-bg-secondary">text | bg</span>,
          },
          {
            attr: 'rounded',
            default: '',
            desc: tBadgeComponentProps('badge.desc.rounded'),
            type: (
              <Link to="#badgeComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  Rounded
                  <i className="bi bi-link ms-1"></i>
                </span>
                <span className="badge text-bg-secondary d-inline ms-1">boolean</span>
              </Link>
            ),
          },
        ]}
        props
        state={state}
        t={tBadgeComponentProps}
      />

      <TypesIndicator />

      <Example
        hash="badgeComponentProps"
        items={[
          {
            attr: 'Variant',
            default: '',
            desc: tBadgeComponentProps('badge.desc.variant'),
            type: (
              <div className="row row-cols-auto g-1">
                <div className="col">
                  <span className="badge text-bg-secondary">secondary</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">primary</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">success</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">warning</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">danger</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">light</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">dark</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">info</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">link</span>
                </div>
              </div>
            ),
          },
          {
            attr: 'Rounded',
            default: '',
            desc: tBadgeComponentProps('badge.desc.rounded'),
            type: (
              <div className="row row-cols-auto g-1">
                <div className="col">
                  <span className="badge text-bg-secondary">circle</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">pill</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">xxl</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">lg</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">md</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">sm</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">xl</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">xs</span>
                </div>
              </div>
            ),
          },
        ]}
        state={state}
        t={tBadgeComponentProps}
        types
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
