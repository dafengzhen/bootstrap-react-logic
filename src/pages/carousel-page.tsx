import PropsIndicator from '@components/props-indicator.tsx';
import OptionRow from '@components/option-row.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Carousel } from '@lib/carousel';
import { useState } from 'react';
import clsx from 'clsx';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/carousel/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

const FirstSlide = ({ className = 'd-block w-100', dark }: { className?: string; dark?: boolean }) => {
  return (
    <svg
      className={clsx('bd-placeholder-img bd-placeholder-img-lg', className)}
      aria-label="Placeholder: First slide"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      height="400"
      width="800"
      role="img"
    >
      <title>Placeholder</title>
      <rect fill={dark ? '#f5f5f5' : '#777'} height="100%" width="100%"></rect>
      <text fill={dark ? '#aaa' : '#555'} dy=".3em" x="50%" y="50%">
        First slide
      </text>
    </svg>
  );
};

const SecondSlide = ({ className = 'd-block w-100', dark }: { className?: string; dark?: boolean }) => {
  return (
    <svg
      className={clsx('bd-placeholder-img bd-placeholder-img-lg d-block w-100', className)}
      aria-label="Placeholder: Second slide"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      height="400"
      width="800"
      role="img"
    >
      <title>Placeholder</title>
      <rect fill={dark ? '#eee' : '#666'} height="100%" width="100%"></rect>
      <text fill={dark ? '#bbb' : '#444'} dy=".3em" x="50%" y="50%">
        Second slide
      </text>
    </svg>
  );
};

const ThirdSlide = ({ className = 'd-block w-100', dark }: { className?: string; dark?: boolean }) => {
  return (
    <svg
      className={clsx('bd-placeholder-img bd-placeholder-img-lg d-block w-100', className)}
      aria-label="Placeholder: Third slide"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      height="400"
      width="800"
      role="img"
    >
      <title>Placeholder</title>
      <rect fill={dark ? '#e5e5e5' : '#555'} height="100%" width="100%"></rect>
      <text fill={dark ? '#999' : '#333'} dy=".3em" x="50%" y="50%">
        Third slide
      </text>
    </svg>
  );
};

export default function CarouselPage() {
  const navigation = useNavigation();
  const { t: tCarouselComponentProps } = useTranslation(['carouselComponentProps']);
  const { t: tCarouselPage } = useTranslation(['carouselPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example t={tCarouselPage} state={state} hash="basic">
        <Carousel
          options={[
            {
              item: <FirstSlide />,
              active: true,
            },
            {
              item: <SecondSlide />,
            },
            {
              item: <ThirdSlide />,
            },
          ]}
        />
      </Example>

      <Example hash="indicators" t={tCarouselPage} state={state}>
        <Carousel
          options={[
            {
              item: <FirstSlide />,
              active: true,
            },
            {
              item: <SecondSlide />,
            },
            {
              item: <ThirdSlide />,
            },
          ]}
          indicators
        />
      </Example>

      <Example t={tCarouselPage} hash="captions" state={state}>
        <Carousel
          options={[
            {
              caption: (
                <>
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </>
              ),
              item: <FirstSlide />,
              active: true,
            },
            {
              caption: (
                <>
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </>
              ),
              item: <SecondSlide />,
            },
            {
              caption: (
                <>
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </>
              ),
              item: <ThirdSlide />,
            },
          ]}
          indicators
        />
      </Example>

      <Example t={tCarouselPage} hash="crossfade" state={state}>
        <Carousel
          options={[
            {
              item: <FirstSlide />,
              active: true,
            },
            {
              item: <SecondSlide />,
            },
            {
              item: <ThirdSlide />,
            },
          ]}
          fade
        />
      </Example>

      <Example hash="autoplayingCarousels" t={tCarouselPage} state={state}>
        <Carousel
          options={[
            {
              item: <FirstSlide />,
              active: true,
            },
            {
              item: <SecondSlide />,
            },
            {
              item: <ThirdSlide />,
            },
          ]}
          ride="carousel"
        />

        <Carousel
          options={[
            {
              item: <FirstSlide />,
              active: true,
            },
            {
              item: <SecondSlide />,
            },
            {
              item: <ThirdSlide />,
            },
          ]}
          ride
        />
      </Example>

      <Example hash="individualCarouselItemInterval" t={tCarouselPage} state={state}>
        <Carousel
          options={[
            {
              item: <FirstSlide />,
              interval: 10000,
              active: true,
            },
            {
              item: <SecondSlide />,
              interval: 2000,
            },
            {
              item: <ThirdSlide />,
            },
          ]}
          ride="carousel"
        />
      </Example>

      <Example hash="autoplayingCarouselsWithoutControls" t={tCarouselPage} state={state}>
        <Carousel
          options={[
            {
              item: <FirstSlide className="d-block w-100" />,
              active: true,
            },
            {
              item: <SecondSlide className="d-block w-100" />,
            },
            {
              item: <ThirdSlide className="d-block w-100" />,
            },
          ]}
          controls={false}
          ride="carousel"
        />
      </Example>

      <Example hash="disableTouchSwiping" t={tCarouselPage} state={state}>
        <Carousel
          options={[
            {
              item: <FirstSlide />,
              active: true,
            },
            {
              item: <SecondSlide />,
            },
            {
              item: <ThirdSlide />,
            },
          ]}
          touch={false}
        />
      </Example>

      <Example hash="darkVariant" t={tCarouselPage} state={state}>
        <Carousel
          options={[
            {
              caption: (
                <>
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </>
              ),
              item: <FirstSlide dark />,
              active: true,
            },
            {
              caption: (
                <>
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </>
              ),
              item: <SecondSlide dark />,
            },
            {
              caption: (
                <>
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </>
              ),
              item: <ThirdSlide dark />,
            },
          ]}
          data-bs-theme="dark"
          indicators
        />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.slide'),
            default: 'true',
            attr: 'slide',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.fade'),
            attr: 'fade',
            default: '',
          },
          {
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow value={tCarouselComponentProps('carousel.options.id')} label="id?: string | number" />
                <OptionRow value={tCarouselComponentProps('carousel.options.item')} label="item?: ReactNode" />
                <OptionRow value={tCarouselComponentProps('carousel.options.caption')} label="caption?: ReactNode" />
                <OptionRow value={tCarouselComponentProps('carousel.options.active')} label="active?: boolean" />
                <OptionRow value={tCarouselComponentProps('carousel.options.interval')} label="interval?: number" />
              </div>
            ),
            desc: tCarouselComponentProps('carousel.desc.options'),
            attr: 'options',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.controls'),
            attr: 'controls',
            default: 'true',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.indicators'),
            attr: 'indicators',
            default: '',
          },
          {
            type: (
              <div className="d-flex flex-column">
                <div>
                  <span className="badge text-bg-secondary">@Param id : string | number;</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    @Param type : 'prev' | 'next' | 'nextIndicator' | 'prevIndicator'
                  </span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">(id, type) =&gt; void</span>
                </div>
              </div>
            ),
            desc: tCarouselComponentProps('carousel.desc.onChange'),
            attr: 'onChange',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.ride'),
            attr: 'ride',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.pause'),
            attr: 'pause',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.touch'),
            attr: 'touch',
            default: '',
          },
        ]}
        hash="carouselComponentProps"
        t={tCarouselComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
