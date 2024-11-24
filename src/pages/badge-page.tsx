import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Badge } from '@lib/badge';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/badge/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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
      <Example t={tBadgePage} state={state} hash="basic">
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

      <Example hash="buttons" t={tBadgePage} state={state}>
        <div>
          <button className="btn btn-primary" type="button">
            Notifications <Badge variant="secondary">4</Badge>
          </button>
        </div>
      </Example>

      <Example hash="positioned" t={tBadgePage} state={state}>
        <div>
          <button className="btn btn-primary position-relative" type="button">
            Inbox
            <Badge
              className="position-absolute top-0 start-100 translate-middle"
              variant="danger"
              variantType="bg"
              rounded="pill"
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

      <Example hash="backgroundColors" t={tBadgePage} state={state} wrap row>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="light">Light</Badge>
        <Badge variant="dark">Dark</Badge>
      </Example>

      <Example hash="pillBadges" t={tBadgePage} state={state} wrap row>
        <Badge variant="primary" rounded="pill">
          Primary
        </Badge>
        <Badge variant="secondary" rounded="pill">
          Secondary
        </Badge>
        <Badge variant="success" rounded="pill">
          Success
        </Badge>
        <Badge variant="danger" rounded="pill">
          Danger
        </Badge>
        <Badge variant="warning" rounded="pill">
          Warning
        </Badge>
        <Badge rounded="pill" variant="info">
          Info
        </Badge>
        <Badge variant="light" rounded="pill">
          Light
        </Badge>
        <Badge rounded="pill" variant="dark">
          Dark
        </Badge>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">span</span>,
            desc: tBadgeComponentProps('badge.desc.as'),
            default: 'span',
            attr: 'as',
          },
          {
            type: (
              <div className="d-flex flex-column">
                {['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'link'].map(
                  (item) => {
                    return (
                      <div key={item}>
                        <span className="badge text-bg-secondary">{item}</span>
                      </div>
                    );
                  },
                )}
              </div>
            ),
            desc: tBadgeComponentProps('badge.desc.variant'),
            attr: 'variant',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">text | bg</span>,
            desc: tBadgeComponentProps('badge.desc.variantType'),
            attr: 'variantType',
            default: 'text',
          },
          {
            type: (
              <>
                <span className="badge text-bg-secondary">xs | sm | md | lg | xl | xxl | circle | pill</span>
                <span className="badge text-bg-secondary ms-1">boolean</span>
              </>
            ),
            desc: tBadgeComponentProps('badge.desc.rounded'),
            attr: 'rounded',
            default: '',
          },
        ]}
        hash="badgeComponentProps"
        t={tBadgeComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
