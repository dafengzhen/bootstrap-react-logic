import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Badge } from '@lib/badge';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

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
            attr: 'as',
            default: 'span',
            desc: tBadgeComponentProps('badge.desc.as'),
            type: <span className="badge text-bg-secondary">span</span>,
          },
          {
            attr: 'variant',
            default: '',
            desc: tBadgeComponentProps('badge.desc.variant'),
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
              <>
                <span className="badge text-bg-secondary">xs | sm | md | lg | xl | xxl | circle | pill</span>
                <span className="badge text-bg-secondary ms-1">boolean</span>
              </>
            ),
          },
        ]}
        props
        state={state}
        t={tBadgeComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
