import { Button } from '@lib/button';
import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { ButtonGroup } from '@lib/button-group';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/button-group/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
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
            <Button as="a" href="#" variant="primary" active>
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

      <Example hash="checkbox" state={state} t={tButtonGroupPage} overflowXAuto textNowrap>
        <div>
          <ButtonGroup>
            <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btncheck1">
              Checkbox 1
            </label>

            <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btncheck2">
              Checkbox 2
            </label>

            <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btncheck3">
              Checkbox 3
            </label>
          </ButtonGroup>
        </div>
      </Example>

      <Example hash="radio" state={state} t={tButtonGroupPage} overflowXAuto textNowrap>
        <div>
          <ButtonGroup>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              defaultChecked
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              Radio 1
            </label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              Radio 2
            </label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">
              Radio 3
            </label>
          </ButtonGroup>
        </div>
      </Example>

      <Example hash="toolbar" state={state} t={tButtonGroupPage}>
        <ButtonGroup toolbar className="gap-2">
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

        <ButtonGroup toolbar className="gap-2">
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
              type="text"
              className="form-control"
              placeholder="Input group example"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
          </div>
        </ButtonGroup>

        <ButtonGroup toolbar className="justify-content-between gap-2">
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
              type="text"
              className="form-control"
              placeholder="Input group example"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon2"
            />
          </div>
        </ButtonGroup>
      </Example>

      <Example hash="size" state={state} t={tButtonGroupPage} overflowXAuto textNowrap>
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

      <Example hash="vertical" state={state} t={tButtonGroupPage} row wrap>
        <ButtonGroup vertical>
          <Button variant="primary">Button</Button>
          <Button variant="primary">Button</Button>
          <Button variant="primary">Button</Button>
          <Button variant="primary">Button</Button>
        </ButtonGroup>

        <ButtonGroup vertical>
          <input
            type="radio"
            className="btn-check"
            name="vbtn-radio"
            id="vbtn-radio1"
            autoComplete="off"
            defaultChecked
          />
          <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">
            Radio 1
          </label>
          <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autoComplete="off" />
          <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">
            Radio 2
          </label>
          <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" autoComplete="off" />
          <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">
            Radio 3
          </label>
        </ButtonGroup>
      </Example>

      <Example hash="example" state={state} t={tButtonGroupPage} row wrap overflowXAuto textNowrap>
        <ButtonGroup size={mySize}>
          <Button variant="primary" onClick={onClickChangeSizeTest}>
            Click
          </Button>
          <Button variant="primary" onClick={onClickChangeSizeTest}>
            Change Button
          </Button>
          <Button variant="primary" onClick={onClickChangeSizeTest}>
            Size ({mySize})
          </Button>
        </ButtonGroup>
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="buttonGroupComponentProps"
        state={state}
        t={tButtonGroupComponentProps}
        items={[
          {
            attr: 'toolbar',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonGroupComponentProps('buttonGroup.desc.toolbar'),
            default: '',
          },
          {
            attr: 'vertical',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonGroupComponentProps('buttonGroup.desc.vertical'),
            default: '',
          },
          {
            attr: 'size',
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: tButtonGroupComponentProps('buttonGroup.desc.size'),
            default: '',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
