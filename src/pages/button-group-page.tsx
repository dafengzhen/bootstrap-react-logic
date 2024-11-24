import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { ButtonGroup } from '@lib/button-group';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Button } from '@lib/button';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/button-group/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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
      <Example t={tButtonGroupPage} state={state} hash="basic">
        <div className="overflow-x-auto text-nowrap">
          <ButtonGroup>
            <Button variant="primary">Left</Button>
            <Button variant="primary">Middle</Button>
            <Button variant="primary">Right</Button>
          </ButtonGroup>
        </div>

        <div className="overflow-x-auto text-nowrap">
          <ButtonGroup>
            <Button variant="primary" href="#" active as="a">
              Active link
            </Button>
            <Button variant="primary" href="#" as="a">
              Link
            </Button>
            <Button variant="primary" href="#" as="a">
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

      <Example t={tButtonGroupPage} hash="checkbox" overflowXAuto state={state} textNowrap>
        <div>
          <ButtonGroup>
            <input className="btn-check" autoComplete="off" type="checkbox" id="btncheck1" />
            <label className="btn btn-outline-primary" htmlFor="btncheck1">
              Checkbox 1
            </label>

            <input className="btn-check" autoComplete="off" type="checkbox" id="btncheck2" />
            <label className="btn btn-outline-primary" htmlFor="btncheck2">
              Checkbox 2
            </label>

            <input className="btn-check" autoComplete="off" type="checkbox" id="btncheck3" />
            <label className="btn btn-outline-primary" htmlFor="btncheck3">
              Checkbox 3
            </label>
          </ButtonGroup>
        </div>
      </Example>

      <Example t={tButtonGroupPage} overflowXAuto state={state} hash="radio" textNowrap>
        <div>
          <ButtonGroup>
            <input
              className="btn-check"
              autoComplete="off"
              name="btnradio"
              defaultChecked
              id="btnradio1"
              type="radio"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              Radio 1
            </label>

            <input className="btn-check" autoComplete="off" name="btnradio" id="btnradio2" type="radio" />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              Radio 2
            </label>

            <input className="btn-check" autoComplete="off" name="btnradio" id="btnradio3" type="radio" />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">
              Radio 3
            </label>
          </ButtonGroup>
        </div>
      </Example>

      <Example t={tButtonGroupPage} hash="toolbar" state={state}>
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
              placeholder="Input group example"
              aria-describedby="btnGroupAddon"
              aria-label="Input group example"
              className="form-control"
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
              placeholder="Input group example"
              aria-label="Input group example"
              className="form-control"
              type="text"
            />
          </div>
        </ButtonGroup>
      </Example>

      <Example t={tButtonGroupPage} overflowXAuto state={state} hash="size" textNowrap>
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

      <Example t={tButtonGroupPage} hash="vertical" state={state} wrap row>
        <ButtonGroup vertical>
          <Button variant="primary">Button</Button>
          <Button variant="primary">Button</Button>
          <Button variant="primary">Button</Button>
          <Button variant="primary">Button</Button>
        </ButtonGroup>

        <ButtonGroup vertical>
          <input
            className="btn-check"
            autoComplete="off"
            name="vbtn-radio"
            id="vbtn-radio1"
            defaultChecked
            type="radio"
          />
          <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">
            Radio 1
          </label>
          <input className="btn-check" autoComplete="off" name="vbtn-radio" id="vbtn-radio2" type="radio" />
          <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">
            Radio 2
          </label>
          <input className="btn-check" autoComplete="off" name="vbtn-radio" id="vbtn-radio3" type="radio" />
          <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">
            Radio 3
          </label>
        </ButtonGroup>
      </Example>

      <Example t={tButtonGroupPage} hash="example" overflowXAuto state={state} textNowrap wrap row>
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
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonGroupComponentProps('buttonGroup.desc.toolbar'),
            attr: 'toolbar',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonGroupComponentProps('buttonGroup.desc.vertical'),
            attr: 'vertical',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: tButtonGroupComponentProps('buttonGroup.desc.size'),
            attr: 'size',
            default: '',
          },
        ]}
        hash="buttonGroupComponentProps"
        t={tButtonGroupComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
