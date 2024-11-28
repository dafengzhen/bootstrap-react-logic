import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Progress } from '@lib/progress';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/progress/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function ProgressPage() {
  const navigation = useNavigation();
  const { t: tProgressComponentProps } = useTranslation(['progressComponentProps']);
  const { t: tProgressPage } = useTranslation(['progressPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tProgressPage}>
        <Progress now={0} />
        <Progress now={25} />
        <Progress now={50} />
        <Progress now={75} />
        <Progress now={100} />
      </Example>

      <Example hash="width" state={state} t={tProgressPage}>
        <Progress
          barProps={{
            className: 'w-75',
          }}
        />
      </Example>

      <Example hash="height" state={state} t={tProgressPage}>
        <Progress
          now={25}
          style={{
            height: '1px',
          }}
        />

        <Progress
          now={25}
          style={{
            height: '20px',
          }}
        />
      </Example>

      <Example hash="labels" state={state} t={tProgressPage}>
        <Progress now={25}>25%</Progress>
        <Progress barProps={{ className: 'overflow-visible text-dark' }} now={10}>
          Long label text for the progress bar, set to a dark color
        </Progress>
      </Example>

      <Example hash="backgrounds" state={state} t={tProgressPage}>
        <Progress bg="success" now={25} />
        <Progress bg="info" now={50} />
        <Progress bg="warning" now={75} />
        <Progress bg="danger" now={100} />

        <Progress bg="success" now={25}>
          25%
        </Progress>
        <Progress barProps={{ className: 'text-dark' }} bg="info" now={50}>
          50%
        </Progress>
        <Progress barProps={{ className: 'text-dark' }} bg="warning" now={75}>
          75%
        </Progress>
        <Progress bg="danger" now={100}>
          100%
        </Progress>

        <Progress barProps={{ className: 'text-bg-warning' }} bg="warning" now={75}>
          75%
        </Progress>
      </Example>

      <Example hash="multipleBars" state={state} t={tProgressPage}>
        <Progress
          options={[
            {
              now: 15,
            },
            {
              bg: 'success',
              now: 30,
            },
            {
              bg: 'info',
              now: 20,
            },
          ]}
          stacked
        />
      </Example>

      <Example hash="striped" state={state} t={tProgressPage}>
        <Progress now={10} striped />
        <Progress bg="success" now={25} striped />
        <Progress bg="info" now={50} striped />
        <Progress bg="warning" now={75} striped />
        <Progress bg="danger" now={100} striped />
      </Example>

      <Example hash="animatedStripes" state={state} t={tProgressPage}>
        <Progress animated now={75} striped />
      </Example>

      <PropsIndicator />

      <Example
        hash="progressComponentProps"
        items={[
          {
            attr: 'animated',
            default: '',
            desc: tProgressComponentProps('progress.desc.animated'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'barProps',
            default: '',
            desc: tProgressComponentProps('progress.desc.barProps'),
            type: <span className="badge text-bg-secondary">ProgressBarProps</span>,
          },
          {
            attr: 'bg',
            default: '',
            desc: tProgressComponentProps('progress.desc.bg'),
            type: (
              <div className="row">
                <div className="col-auto">
                  <span className="badge text-bg-secondary">danger</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">dark</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">info</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">light</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">primary</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">secondary</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">success</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">warning</span>
                </div>
              </div>
            ),
          },
          {
            attr: 'now',
            default: '',
            desc: tProgressComponentProps('progress.desc.now'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'options',
            default: '',
            desc: tProgressComponentProps('progress.desc.options'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="animated?: boolean" value={tProgressComponentProps('progress.options.animated')} />
                <OptionRow
                  label="barProps?: ProgressBarProps"
                  value={tProgressComponentProps('progress.options.barProps')}
                />
                <OptionRow label="bg?: string" value={tProgressComponentProps('progress.options.bg')} />
                <OptionRow label="id?: number | string" value={tProgressComponentProps('progress.options.id')} />
                <OptionRow label="now?: number" value={tProgressComponentProps('progress.options.now')} />
                <OptionRow label="props?: ProgressProps" value={tProgressComponentProps('progress.options.props')} />
                <OptionRow label="striped?: boolean" value={tProgressComponentProps('progress.options.striped')} />
              </div>
            ),
          },
          {
            attr: 'stacked',
            default: '',
            desc: tProgressComponentProps('progress.desc.stacked'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'stackedProps',
            default: '',
            desc: tProgressComponentProps('progress.desc.stackedProps'),
            type: <span className="badge text-bg-secondary">ProgressStackedProps</span>,
          },
          {
            attr: 'striped',
            default: '',
            desc: tProgressComponentProps('progress.desc.striped'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tProgressComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
