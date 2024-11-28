import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Carousel } from '@lib/carousel';
import { transformCodeObj } from '@src/tools';
import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/carousel/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

const FirstSlide = ({ className = 'd-block w-100', dark }: { className?: string; dark?: boolean }) => {
  return (
    <svg
      aria-label="Placeholder: First slide"
      className={clsx('bd-placeholder-img bd-placeholder-img-lg', className)}
      focusable="false"
      height="400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      width="800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Placeholder</title>
      <rect fill={dark ? '#f5f5f5' : '#777'} height="100%" width="100%"></rect>
      <text dy=".3em" fill={dark ? '#aaa' : '#555'} x="50%" y="50%">
        First slide
      </text>
    </svg>
  );
};

const SecondSlide = ({ className = 'd-block w-100', dark }: { className?: string; dark?: boolean }) => {
  return (
    <svg
      aria-label="Placeholder: Second slide"
      className={clsx('bd-placeholder-img bd-placeholder-img-lg d-block w-100', className)}
      focusable="false"
      height="400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      width="800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Placeholder</title>
      <rect fill={dark ? '#eee' : '#666'} height="100%" width="100%"></rect>
      <text dy=".3em" fill={dark ? '#bbb' : '#444'} x="50%" y="50%">
        Second slide
      </text>
    </svg>
  );
};

const ThirdSlide = ({ className = 'd-block w-100', dark }: { className?: string; dark?: boolean }) => {
  return (
    <svg
      aria-label="Placeholder: Third slide"
      className={clsx('bd-placeholder-img bd-placeholder-img-lg d-block w-100', className)}
      focusable="false"
      height="400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      width="800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Placeholder</title>
      <rect fill={dark ? '#e5e5e5' : '#555'} height="100%" width="100%"></rect>
      <text dy=".3em" fill={dark ? '#999' : '#333'} x="50%" y="50%">
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
      <Example hash="basic" state={state} t={tCarouselPage}>
        <Carousel
          options={[
            {
              active: true,
              item: <FirstSlide />,
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

      <Example hash="indicators" state={state} t={tCarouselPage}>
        <Carousel
          indicators
          options={[
            {
              active: true,
              item: <FirstSlide />,
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

      <Example hash="captions" state={state} t={tCarouselPage}>
        <Carousel
          indicators
          options={[
            {
              active: true,
              caption: (
                <>
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </>
              ),
              item: <FirstSlide />,
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
        />
      </Example>

      <Example hash="crossfade" state={state} t={tCarouselPage}>
        <Carousel
          fade
          options={[
            {
              active: true,
              item: <FirstSlide />,
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

      <Example hash="autoplayingCarousels" state={state} t={tCarouselPage}>
        <Carousel
          options={[
            {
              active: true,
              item: <FirstSlide />,
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
              active: true,
              item: <FirstSlide />,
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

      <Example hash="individualCarouselItemInterval" state={state} t={tCarouselPage}>
        <Carousel
          options={[
            {
              active: true,
              interval: 10000,
              item: <FirstSlide />,
            },
            {
              interval: 2000,
              item: <SecondSlide />,
            },
            {
              item: <ThirdSlide />,
            },
          ]}
          ride="carousel"
        />
      </Example>

      <Example hash="autoplayingCarouselsWithoutControls" state={state} t={tCarouselPage}>
        <Carousel
          controls={false}
          options={[
            {
              active: true,
              item: <FirstSlide className="d-block w-100" />,
            },
            {
              item: <SecondSlide className="d-block w-100" />,
            },
            {
              item: <ThirdSlide className="d-block w-100" />,
            },
          ]}
          ride="carousel"
        />
      </Example>

      <Example hash="disableTouchSwiping" state={state} t={tCarouselPage}>
        <Carousel
          options={[
            {
              active: true,
              item: <FirstSlide />,
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

      <Example hash="darkVariant" state={state} t={tCarouselPage}>
        <Carousel
          data-bs-theme="dark"
          indicators
          options={[
            {
              active: true,
              caption: (
                <>
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </>
              ),
              item: <FirstSlide dark />,
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
        />
      </Example>

      <PropsIndicator />

      <Example
        hash="carouselComponentProps"
        items={[
          {
            attr: 'slide',
            default: 'true',
            desc: tCarouselComponentProps('carousel.desc.slide'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'fade',
            default: '',
            desc: tCarouselComponentProps('carousel.desc.fade'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'options',
            default: '',
            desc: tCarouselComponentProps('carousel.desc.options'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="id?: string | number" value={tCarouselComponentProps('carousel.options.id')} />
                <OptionRow label="item?: ReactNode" value={tCarouselComponentProps('carousel.options.item')} />
                <OptionRow label="caption?: ReactNode" value={tCarouselComponentProps('carousel.options.caption')} />
                <OptionRow label="active?: boolean" value={tCarouselComponentProps('carousel.options.active')} />
                <OptionRow label="interval?: number" value={tCarouselComponentProps('carousel.options.interval')} />
              </div>
            ),
          },
          {
            attr: 'controls',
            default: 'true',
            desc: tCarouselComponentProps('carousel.desc.controls'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'indicators',
            default: '',
            desc: tCarouselComponentProps('carousel.desc.indicators'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'onChange',
            default: '',
            desc: tCarouselComponentProps('carousel.desc.onChange'),
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
          },
          {
            attr: 'ride',
            default: '',
            desc: tCarouselComponentProps('carousel.desc.ride'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'pause',
            default: '',
            desc: tCarouselComponentProps('carousel.desc.pause'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'touch',
            default: '',
            desc: tCarouselComponentProps('carousel.desc.touch'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tCarouselComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
