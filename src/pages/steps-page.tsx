import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import TypesIndicator from '@components/types-indicator.tsx';
import { type StepOption, Steps } from '@lib/steps';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/steps/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function StepsPage() {
  const navigation = useNavigation();
  const { t: tStepsComponentProps } = useTranslation(['stepsComponentProps']);
  const { t: tStepsPage } = useTranslation(['stepsPage']);
  const state = useState(codes);

  const [current, setCurrent] = useState(0);
  const [current2, setCurrent2] = useState(0);
  const [current3, setCurrent3] = useState(0);
  const [current4, setCurrent4] = useState(0);
  const [current5, setCurrent5] = useState(0);
  const [current6, setCurrent6] = useState(0);

  const [options] = useState<StepOption[]>(Array(3).fill({}));
  const [options2] = useState<StepOption[]>([{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }]);
  const [options3] = useState<StepOption[]>([
    { description: 'This is the first step', title: 'Step 1' },
    { description: 'This is the second step, currently in progress', title: 'Step 2' },
    { description: 'This is the upcoming step', title: 'Step 3' },
  ]);
  const [options4] = useState<StepOption[]>([
    { description: 'This is the first step', title: 'Step 1' },
    { description: 'This is the second step, currently in progress', title: 'Step 2' },
    { description: 'This is the upcoming step', title: 'Step 3' },
  ]);
  const [options5] = useState<StepOption[]>([
    { description: 'This is the first step', title: 'Step 1' },
    { description: 'This is the second step, currently in progress', title: 'Step 2' },
    { description: 'This is the upcoming step', title: 'Step 3' },
  ]);
  const [options6] = useState<StepOption[]>(
    Array(3).fill({
      icon: <i className="bi bi-check-circle text-3xl"></i>,
      title: 'Step',
    }),
  );
  const [options7] = useState<StepOption[]>([
    { status: 'complete', title: 'Step 1' },
    { status: 'current', title: 'Step 2' },
    { status: 'upcoming', title: 'Step 3' },
  ]);

  function onClick() {
    setCurrent(current > options.length - 1 ? 0 : current + 1);
  }

  function onClick2() {
    setCurrent2(current2 > options2.length - 1 ? 0 : current2 + 1);
  }

  function onClick3() {
    setCurrent3(current3 > options3.length - 1 ? 0 : current3 + 1);
  }

  function onClick4() {
    setCurrent4(current4 > options4.length - 1 ? 0 : current4 + 1);
  }

  function onClick5() {
    setCurrent5(current5 > options5.length - 1 ? 0 : current5 + 1);
  }

  function onClick6() {
    setCurrent6(current6 > options6.length - 1 ? 0 : current6 + 1);
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tStepsPage}>
        <div className="m-2">
          <Steps current={current} onClick={onClick} options={options} />
        </div>

        <div className="m-2">
          <Steps current={current} onClick={onClick} options={options} vertical />
        </div>

        <div className="m-2">
          <Steps current={current2} onClick={onClick2} options={options2} />
        </div>

        <div className="m-2">
          <Steps current={current3} onClick={onClick3} options={options3} />
        </div>

        <div className="m-2">
          <Steps current={current4} onClick={onClick4} options={options4} vertical />
        </div>

        <div className="m-2">
          <Steps center current={current5} onClick={onClick5} options={options5} />
        </div>
      </Example>

      <Example hash="icon" state={state} t={tStepsPage}>
        <div className="m-2">
          <Steps current={current6} onClick={onClick6} options={options6} />
        </div>
      </Example>

      <Example hash="status" state={state} t={tStepsPage}>
        <div className="m-2">
          <Steps options={options7} />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="stepsComponentProps"
        items={[
          {
            attr: 'center',
            default: '',
            desc: tStepsComponentProps('steps.desc.center'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'current',
            default: '',
            desc: tStepsComponentProps('steps.desc.current'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'options',
            default: '',
            desc: tStepsComponentProps('steps.desc.options'),
            type: (
              <Link to="#stepsComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  IOption[]
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
          {
            attr: 'vertical',
            default: '',
            desc: tStepsComponentProps('steps.desc.vertical'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tStepsComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="stepsComponentProps"
        items={[
          {
            attr: 'onClick',
            default: '',
            desc: tStepsComponentProps('steps.desc.onClick'),
            type: <span className="badge text-bg-secondary">{'onClick: (index: number) => void'}</span>,
          },
        ]}
        state={state}
        t={tStepsComponentProps}
      />

      <TypesIndicator />

      <Example
        hash="stepsComponentProps"
        items={[
          {
            attr: 'IOption',
            default: '',
            desc: tStepsComponentProps('steps.desc.iOption'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="description?: ReactNode" value={tStepsComponentProps('steps.options.description')} />
                <OptionRow label="icon?: ReactNode" value={tStepsComponentProps('steps.options.id')} />
                <OptionRow label="id?: number | string" value={tStepsComponentProps('steps.options.id')} />
                <OptionRow
                  label="status?: complete | current | error | upcoming"
                  value={tStepsComponentProps('steps.options.status')}
                />
                <OptionRow label="title?: ReactNode" value={tStepsComponentProps('steps.options.title')} />
              </div>
            ),
          },
        ]}
        state={state}
        t={tStepsComponentProps}
        types
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
