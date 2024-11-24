import PropsIndicator from '@components/props-indicator.tsx';
import OptionRow from '@components/option-row.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Progress } from '@lib/progress';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/progress/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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
      <Example t={tProgressPage} state={state} hash="basic">
        <Progress now={0} />
        <Progress now={25} />
        <Progress now={50} />
        <Progress now={75} />
        <Progress now={100} />
      </Example>

      <Example t={tProgressPage} state={state} hash="width">
        <Progress
          barProps={{
            className: 'w-75',
          }}
        />
      </Example>

      <Example t={tProgressPage} hash="height" state={state}>
        <Progress
          style={{
            height: '1px',
          }}
          now={25}
        />

        <Progress
          style={{
            height: '20px',
          }}
          now={25}
        />
      </Example>

      <Example t={tProgressPage} hash="labels" state={state}>
        <Progress now={25}>25%</Progress>
        <Progress barProps={{ className: 'overflow-visible text-dark' }} now={10}>
          Long label text for the progress bar, set to a dark color
        </Progress>
      </Example>

      <Example hash="backgrounds" t={tProgressPage} state={state}>
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

      <Example hash="multipleBars" t={tProgressPage} state={state}>
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

      <Example t={tProgressPage} hash="striped" state={state}>
        <Progress now={10} striped />
        <Progress bg="success" now={25} striped />
        <Progress bg="info" now={50} striped />
        <Progress bg="warning" now={75} striped />
        <Progress bg="danger" now={100} striped />
      </Example>

      <Example hash="animatedStripes" t={tProgressPage} state={state}>
        <Progress animated now={75} striped />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tProgressComponentProps('progress.desc.animated'),
            attr: 'animated',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ProgressBarProps</span>,
            desc: tProgressComponentProps('progress.desc.barProps'),
            attr: 'barProps',
            default: '',
          },
          {
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
            desc: tProgressComponentProps('progress.desc.bg'),
            default: '',
            attr: 'bg',
          },
          {
            type: <span className="badge text-bg-secondary">number</span>,
            desc: tProgressComponentProps('progress.desc.now'),
            attr: 'now',
            default: '',
          },
          {
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow value={tProgressComponentProps('progress.options.animated')} label="animated?: boolean" />
                <OptionRow
                  value={tProgressComponentProps('progress.options.barProps')}
                  label="barProps?: ProgressBarProps"
                />
                <OptionRow value={tProgressComponentProps('progress.options.bg')} label="bg?: string" />
                <OptionRow value={tProgressComponentProps('progress.options.id')} label="id?: number | string" />
                <OptionRow value={tProgressComponentProps('progress.options.now')} label="now?: number" />
                <OptionRow value={tProgressComponentProps('progress.options.props')} label="props?: ProgressProps" />
                <OptionRow value={tProgressComponentProps('progress.options.striped')} label="striped?: boolean" />
              </div>
            ),
            desc: tProgressComponentProps('progress.desc.options'),
            attr: 'options',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tProgressComponentProps('progress.desc.stacked'),
            attr: 'stacked',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ProgressStackedProps</span>,
            desc: tProgressComponentProps('progress.desc.stackedProps'),
            attr: 'stackedProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tProgressComponentProps('progress.desc.striped'),
            attr: 'striped',
            default: '',
          },
        ]}
        hash="progressComponentProps"
        t={tProgressComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
