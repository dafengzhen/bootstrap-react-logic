import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { Carousel } from '@lib/carousel';
import clsx from 'clsx';
import OptionRow from '@components/option-row.tsx';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/carousel/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
  }),
);

const FirstSlide = ({ className = 'd-block w-100', dark }: { className?: string; dark?: boolean }) => {
  return (
    <svg
      className={clsx('bd-placeholder-img bd-placeholder-img-lg', className)}
      width="800"
      height="400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: First slide"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill={dark ? '#f5f5f5' : '#777'}></rect>
      <text x="50%" y="50%" fill={dark ? '#aaa' : '#555'} dy=".3em">
        First slide
      </text>
    </svg>
  );
};

const SecondSlide = ({ className = 'd-block w-100', dark }: { className?: string; dark?: boolean }) => {
  return (
    <svg
      className={clsx('bd-placeholder-img bd-placeholder-img-lg d-block w-100', className)}
      width="800"
      height="400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: Second slide"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill={dark ? '#eee' : '#666'}></rect>
      <text x="50%" y="50%" fill={dark ? '#bbb' : '#444'} dy=".3em">
        Second slide
      </text>
    </svg>
  );
};

const ThirdSlide = ({ className = 'd-block w-100', dark }: { className?: string; dark?: boolean }) => {
  return (
    <svg
      className={clsx('bd-placeholder-img bd-placeholder-img-lg d-block w-100', className)}
      width="800"
      height="400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: Third slide"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill={dark ? '#e5e5e5' : '#555'}></rect>
      <text x="50%" y="50%" fill={dark ? '#999' : '#333'} dy=".3em">
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

      <Example hash="indicators" state={state} t={tCarouselPage}>
        <Carousel
          indicators
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

      <Example hash="captions" state={state} t={tCarouselPage}>
        <Carousel
          indicators
          options={[
            {
              active: true,
              item: <FirstSlide />,
              caption: (
                <>
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </>
              ),
            },
            {
              item: <SecondSlide />,
              caption: (
                <>
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </>
              ),
            },
            {
              item: <ThirdSlide />,
              caption: (
                <>
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </>
              ),
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
          ride="carousel"
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

        <Carousel
          ride
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

      <Example hash="individualCarouselItemInterval" state={state} t={tCarouselPage}>
        <Carousel
          ride="carousel"
          options={[
            {
              interval: 10000,
              active: true,
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
        />
      </Example>

      <Example hash="autoplayingCarouselsWithoutControls" state={state} t={tCarouselPage}>
        <Carousel
          controls={false}
          ride="carousel"
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
        />
      </Example>

      <Example hash="disableTouchSwiping" state={state} t={tCarouselPage}>
        <Carousel
          touch={false}
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

      <Example hash="darkVariant" state={state} t={tCarouselPage}>
        <Carousel
          data-bs-theme="dark"
          indicators
          options={[
            {
              active: true,
              item: <FirstSlide dark />,
              caption: (
                <>
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </>
              ),
            },
            {
              item: <SecondSlide dark />,
              caption: (
                <>
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </>
              ),
            },
            {
              item: <ThirdSlide dark />,
              caption: (
                <>
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </>
              ),
            },
          ]}
        />
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="carouselComponentProps"
        state={state}
        t={tCarouselComponentProps}
        items={[
          {
            attr: 'slide',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.slide'),
            default: 'true',
          },
          {
            attr: 'fade',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.fade'),
            default: '',
          },
          {
            attr: 'options',
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="id?: string | number" value={tCarouselComponentProps('carousel.options.id')} />
                <OptionRow label="item?: ReactNode" value={tCarouselComponentProps('carousel.options.item')} />
                <OptionRow label="caption?: ReactNode" value={tCarouselComponentProps('carousel.options.caption')} />
                <OptionRow label="active?: boolean" value={tCarouselComponentProps('carousel.options.active')} />
                <OptionRow label="interval?: number" value={tCarouselComponentProps('carousel.options.interval')} />
              </div>
            ),
            desc: tCarouselComponentProps('carousel.desc.options'),
            default: '',
          },
          {
            attr: 'controls',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.controls'),
            default: 'true',
          },
          {
            attr: 'indicators',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.indicators'),
            default: '',
          },
          {
            attr: 'onChange',
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
            default: '',
          },
          {
            attr: 'ride',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.ride'),
            default: '',
          },
          {
            attr: 'pause',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.pause'),
            default: '',
          },
          {
            attr: 'touch',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCarouselComponentProps('carousel.desc.touch'),
            default: '',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
