import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Button } from '@lib/button';
import { ButtonGroup } from '@lib/button-group';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/button-group/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function ButtonGroupPage() {
  const navigation = useNavigation();
  const { t: tButtonGroupComponentProps } = useTranslation(['buttonGroupComponentProps']);
  const { t: tButtonGroupPage } = useTranslation(['buttonGroupPage']);
  const state = useState(codes);
  const [mySize, setMySize] = useState<'lg' | 'sm'>('sm');

  function onClickChangeSizeTest() {
    setMySize(mySize === 'sm' ? 'lg' : 'sm');
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tButtonGroupPage}>
        <div className="overflow-x-auto text-nowrap">
          <ButtonGroup>
            <Button variant="primary">Left</Button>
            <Button variant="primary">Middle</Button>
            <Button variant="primary">Right</Button>
          </ButtonGroup>
        </div>

        <div className="overflow-x-auto text-nowrap">
          <ButtonGroup>
            <Button active as="a" href="#" variant="primary">
              Active link
            </Button>
            <Button as="a" href="#" variant="primary">
              Link
            </Button>
            <Button as="a" href="#" variant="primary">
              Link
            </Button>
          </ButtonGroup>
        </div>

        <div className="overflow-x-auto text-nowrap">
          <ButtonGroup>
            <Button variant="danger">Left</Button>
            <Button variant="warning">Middle</Button>
            <Button variant="success">Right</Button>
          </ButtonGroup>
        </div>

        <div className="overflow-x-auto text-nowrap">
          <ButtonGroup>
            <Button outline="primary">Left</Button>
            <Button outline="primary">Middle</Button>
            <Button outline="primary">Right</Button>
          </ButtonGroup>
        </div>
      </Example>

      <Example hash="checkbox" overflowXAuto state={state} t={tButtonGroupPage} textNowrap>
        <div>
          <ButtonGroup>
            <input autoComplete="off" className="btn-check" id="btncheck1" type="checkbox" />
            <label className="btn btn-outline-primary" htmlFor="btncheck1">
              Checkbox 1
            </label>

            <input autoComplete="off" className="btn-check" id="btncheck2" type="checkbox" />
            <label className="btn btn-outline-primary" htmlFor="btncheck2">
              Checkbox 2
            </label>

            <input autoComplete="off" className="btn-check" id="btncheck3" type="checkbox" />
            <label className="btn btn-outline-primary" htmlFor="btncheck3">
              Checkbox 3
            </label>
          </ButtonGroup>
        </div>
      </Example>

      <Example hash="radio" overflowXAuto state={state} t={tButtonGroupPage} textNowrap>
        <div>
          <ButtonGroup>
            <input
              autoComplete="off"
              className="btn-check"
              defaultChecked
              id="btnradio1"
              name="btnradio"
              type="radio"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              Radio 1
            </label>

            <input autoComplete="off" className="btn-check" id="btnradio2" name="btnradio" type="radio" />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              Radio 2
            </label>

            <input autoComplete="off" className="btn-check" id="btnradio3" name="btnradio" type="radio" />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">
              Radio 3
            </label>
          </ButtonGroup>
        </div>
      </Example>

      <Example hash="toolbar" state={state} t={tButtonGroupPage}>
        <ButtonGroup className="gap-2" toolbar>
          <ButtonGroup>
            <Button variant="primary">1</Button>
            <Button variant="primary">2</Button>
            <Button variant="primary">3</Button>
            <Button variant="primary">4</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button variant="secondary">5</Button>
            <Button variant="secondary">6</Button>
            <Button variant="secondary">7</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button variant="info">8</Button>
          </ButtonGroup>
        </ButtonGroup>

        <ButtonGroup className="gap-2" toolbar>
          <ButtonGroup>
            <Button outline="secondary">1</Button>
            <Button outline="secondary">2</Button>
            <Button outline="secondary">3</Button>
            <Button outline="secondary">4</Button>
          </ButtonGroup>

          <div className="input-group">
            <div className="input-group-text" id="btnGroupAddon">
              @
            </div>
            <input
              aria-describedby="btnGroupAddon"
              aria-label="Input group example"
              className="form-control"
              placeholder="Input group example"
              type="text"
            />
          </div>
        </ButtonGroup>

        <ButtonGroup className="justify-content-between gap-2" toolbar>
          <ButtonGroup>
            <Button outline="secondary">1</Button>
            <Button outline="secondary">2</Button>
            <Button outline="secondary">3</Button>
            <Button outline="secondary">4</Button>
          </ButtonGroup>

          <div className="input-group">
            <div className="input-group-text" id="btnGroupAddon2">
              @
            </div>
            <input
              aria-describedby="btnGroupAddon2"
              aria-label="Input group example"
              className="form-control"
              placeholder="Input group example"
              type="text"
            />
          </div>
        </ButtonGroup>
      </Example>

      <Example hash="size" overflowXAuto state={state} t={tButtonGroupPage} textNowrap>
        <div>
          <ButtonGroup size="lg">
            <Button outline="primary">Left</Button>
            <Button outline="primary">Middle</Button>
            <Button outline="primary">Right</Button>
          </ButtonGroup>
        </div>

        <div>
          <ButtonGroup>
            <Button outline="primary">Left</Button>
            <Button outline="primary">Middle</Button>
            <Button outline="primary">Right</Button>
          </ButtonGroup>
        </div>

        <div>
          <ButtonGroup size="sm">
            <Button outline="primary">Left</Button>
            <Button outline="primary">Middle</Button>
            <Button outline="primary">Right</Button>
          </ButtonGroup>
        </div>
      </Example>

      <Example hash="vertical" row state={state} t={tButtonGroupPage} wrap>
        <ButtonGroup vertical>
          <Button variant="primary">Button</Button>
          <Button variant="primary">Button</Button>
          <Button variant="primary">Button</Button>
          <Button variant="primary">Button</Button>
        </ButtonGroup>

        <ButtonGroup vertical>
          <input
            autoComplete="off"
            className="btn-check"
            defaultChecked
            id="vbtn-radio1"
            name="vbtn-radio"
            type="radio"
          />
          <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">
            Radio 1
          </label>
          <input autoComplete="off" className="btn-check" id="vbtn-radio2" name="vbtn-radio" type="radio" />
          <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">
            Radio 2
          </label>
          <input autoComplete="off" className="btn-check" id="vbtn-radio3" name="vbtn-radio" type="radio" />
          <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">
            Radio 3
          </label>
        </ButtonGroup>
      </Example>

      <Example hash="example" overflowXAuto row state={state} t={tButtonGroupPage} textNowrap wrap>
        <ButtonGroup size={mySize}>
          <Button onClick={onClickChangeSizeTest} variant="primary">
            Click
          </Button>
          <Button onClick={onClickChangeSizeTest} variant="primary">
            Change Button
          </Button>
          <Button onClick={onClickChangeSizeTest} variant="primary">
            Size ({mySize})
          </Button>
        </ButtonGroup>
      </Example>

      <PropsIndicator />

      <Example
        hash="buttonGroupComponentProps"
        items={[
          {
            attr: 'toolbar',
            default: '',
            desc: tButtonGroupComponentProps('buttonGroup.desc.toolbar'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'vertical',
            default: '',
            desc: tButtonGroupComponentProps('buttonGroup.desc.vertical'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'size',
            default: '',
            desc: tButtonGroupComponentProps('buttonGroup.desc.size'),
            type: <span className="badge text-bg-secondary">lg | sm</span>,
          },
        ]}
        props
        state={state}
        t={tButtonGroupComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
