import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { Badge } from '@lib/badge';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/badge/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
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
          <button type="button" className="btn btn-primary">
            Notifications <Badge variant="secondary">4</Badge>
          </button>
        </div>
      </Example>

      <Example hash="positioned" state={state} t={tBadgePage}>
        <div>
          <button type="button" className="btn btn-primary position-relative">
            Inbox
            <Badge
              variant="danger"
              variantType="bg"
              rounded="pill"
              className="position-absolute top-0 start-100 translate-middle"
            >
              99+
              <span className="visually-hidden">unread messages</span>
            </Badge>
          </button>
        </div>

        <div>
          <button type="button" className="btn btn-primary position-relative">
            Profile
            <Badge
              variant="danger"
              variantType="bg"
              rounded="circle"
              className="position-absolute top-0 start-100 translate-middle p-2 border border-light"
            >
              <span className="visually-hidden">New alerts</span>
            </Badge>
          </button>
        </div>
      </Example>

      <Example hash="backgroundColors" state={state} t={tBadgePage} row wrap>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="light">Light</Badge>
        <Badge variant="dark">Dark</Badge>
      </Example>

      <Example hash="pillBadges" state={state} t={tBadgePage} row wrap>
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
        <Badge variant="info" rounded="pill">
          Info
        </Badge>
        <Badge variant="light" rounded="pill">
          Light
        </Badge>
        <Badge variant="dark" rounded="pill">
          Dark
        </Badge>
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="badgeComponentProps"
        state={state}
        t={tBadgeComponentProps}
        items={[
          {
            attr: 'as',
            type: <span className="badge text-bg-secondary">span</span>,
            desc: tBadgeComponentProps('badge.desc.as'),
            default: 'span',
          },
          {
            attr: 'variant',
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
            default: '',
          },
          {
            attr: 'variantType',
            type: <span className="badge text-bg-secondary">text | bg</span>,
            desc: tBadgeComponentProps('badge.desc.variantType'),
            default: 'text',
          },
          {
            attr: 'rounded',
            type: (
              <>
                <span className="badge text-bg-secondary">xs | sm | md | lg | xl | xxl | circle | pill</span>
                <span className="badge text-bg-secondary ms-1">boolean</span>
              </>
            ),
            desc: tBadgeComponentProps('badge.desc.rounded'),
            default: '',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
