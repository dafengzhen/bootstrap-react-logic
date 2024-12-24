import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { GlobalContext } from '@contexts/global-context.ts';
import { Watermark } from '@lib/watermark';
import { transformCodeObj } from '@src/tools';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/watermark/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function WatermarkPage() {
  const navigation = useNavigation();
  const { t: tWatermarkComponentProps } = useTranslation(['watermarkComponentProps']);
  const { t: tWatermarkPage } = useTranslation(['watermarkPage']);
  const state = useState(codes);
  const { theme } = useContext(GlobalContext);
  const isDarkMode = ((theme as any)[0] as 'dark' | 'light') === 'dark';

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tWatermarkPage}>
        <Watermark isDarkMode={isDarkMode} text="Watermark">
          <div className="card" style={{ height: 330 }}>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label" htmlFor="exampleFormControlInput1">
                  Email address
                </label>
                <input
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
              </div>
            </div>
          </div>
        </Watermark>
      </Example>

      <Example hash="multilineText" state={state} t={tWatermarkPage}>
        <Watermark isDarkMode={isDarkMode} text={['Text', 'Watermark']}>
          <div className="card" style={{ height: 330 }}>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label" htmlFor="exampleFormControlInput2">
                  Email address
                </label>
                <input
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="name@example.com"
                  type="email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="exampleFormControlTextarea2">
                  Example textarea
                </label>
                <textarea className="form-control" id="exampleFormControlTextarea2" rows={3}></textarea>
              </div>
            </div>
          </div>
        </Watermark>
      </Example>

      <Example hash="image" state={state} t={tWatermarkPage}>
        <Watermark imageUrl="/favicon/android-chrome-192x192.png">
          <div className="card" style={{ height: 330 }}>
            <div className="card-body"></div>
          </div>
        </Watermark>
      </Example>

      <PropsIndicator />

      <Example
        hash="watermarkComponentProps"
        items={[
          {
            attr: 'angle',
            default: '-30',
            desc: tWatermarkComponentProps('watermark.desc.angle'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'fontColor',
            default: 'rgba(0, 0, 0, 0.15)',
            desc: tWatermarkComponentProps('watermark.desc.fontColor'),
            type: <span className="badge text-bg-secondary">string</span>,
          },
          {
            attr: 'fontSize',
            default: '16',
            desc: tWatermarkComponentProps('watermark.desc.fontSize'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'gapX',
            default: '150',
            desc: tWatermarkComponentProps('watermark.desc.gapX'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'gapY',
            default: '150',
            desc: tWatermarkComponentProps('watermark.desc.gapY'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'imageUrl',
            default: '',
            desc: tWatermarkComponentProps('watermark.desc.imageUrl'),
            type: <span className="badge text-bg-secondary">string</span>,
          },
          {
            attr: 'isDarkMode',
            default: '',
            desc: tWatermarkComponentProps('watermark.desc.isDarkMode'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'offsetX',
            default: '0',
            desc: tWatermarkComponentProps('watermark.desc.offsetX'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'offsetY',
            default: '0',
            desc: tWatermarkComponentProps('watermark.desc.offsetY'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'opacity',
            default: '0.4',
            desc: tWatermarkComponentProps('watermark.desc.opacity'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'text',
            default: '',
            desc: tWatermarkComponentProps('watermark.desc.text'),
            type: <span className="badge text-bg-secondary">string | string[]</span>,
          },
          {
            attr: 'zIndex',
            default: '9999',
            desc: tWatermarkComponentProps('watermark.desc.zIndex'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
        ]}
        props
        state={state}
        t={tWatermarkComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
