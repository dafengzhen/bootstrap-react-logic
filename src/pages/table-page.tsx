import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Table } from '@lib/table';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/table/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

export default function TablePage() {
  const navigation = useNavigation();
  const { t: tTableComponentProps } = useTranslation(['tableComponentProps']);
  const { t: tTablePage } = useTranslation(['tablePage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example t={tTablePage} state={state} hash="basic">
        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
        />

        {/*<Table*/}
        {/*  body={[*/}
        {/*    {*/}
        {/*      cells: [{ value: '1' }, { value: 'Mark' }, { value: 'Otto' }, { value: '@mdo' }],*/}
        {/*      scope: 'row',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      cells: [{ value: '2' }, { value: 'Jacob' }, { value: 'Thornton' }, { value: '@fat' }],*/}
        {/*      scope: 'row',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      cells: [{ value: '3' }, { colSpan: 2, value: 'Larry the Bird' }, { value: '@twitter' }],*/}
        {/*      scope: 'row',*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*  head={[*/}
        {/*    { label: '#', scope: 'col' },*/}
        {/*    { label: 'First', scope: 'col' },*/}
        {/*    { label: 'Last', scope: 'col' },*/}
        {/*    { label: 'Handle', scope: 'col' },*/}
        {/*  ]}*/}
        {/*/>*/}
      </Example>

      <Example hash="variants" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['Default', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['Primary', 'Cell', 'Cell'],
              variant: 'primary',
              scope: 'row',
            },
            {
              values: ['Secondary', 'Cell', 'Cell'],
              variant: 'secondary',
              scope: 'row',
            },
            {
              values: ['Success', 'Cell', 'Cell'],
              variant: 'success',
              scope: 'row',
            },
            {
              values: ['Danger', 'Cell', 'Cell'],
              variant: 'danger',
              scope: 'row',
            },
            {
              values: ['Warning', 'Cell', 'Cell'],
              variant: 'warning',
              scope: 'row',
            },
            {
              values: ['Info', 'Cell', 'Cell'],
              variant: 'info',
              scope: 'row',
            },
            {
              values: ['Light', 'Cell', 'Cell'],
              variant: 'light',
              scope: 'row',
            },
            {
              values: ['Dark', 'Cell', 'Cell'],
              variant: 'dark',
              scope: 'row',
            },
          ]}
          head={[
            { label: 'Class', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
          ]}
        />

        {/*<Table*/}
        {/*  body={[*/}
        {/*    {*/}
        {/*      cells: [{ value: 'Default' }, { value: 'Cell' }, { value: 'Cell' }],*/}
        {/*      scope: 'row',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      cells: [{ value: 'Primary' }, { value: 'Cell' }, { value: 'Cell' }],*/}
        {/*      scope: 'row',*/}
        {/*      variant: 'primary',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      cells: [{ value: 'Secondary' }, { value: 'Cell' }, { value: 'Cell' }],*/}
        {/*      scope: 'row',*/}
        {/*      variant: 'secondary',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      cells: [{ value: 'Success' }, { value: 'Cell' }, { value: 'Cell' }],*/}
        {/*      scope: 'row',*/}
        {/*      variant: 'success',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      cells: [{ value: 'Danger' }, { value: 'Cell' }, { value: 'Cell' }],*/}
        {/*      scope: 'row',*/}
        {/*      variant: 'danger',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      cells: [{ value: 'Warning' }, { value: 'Cell' }, { value: 'Cell' }],*/}
        {/*      scope: 'row',*/}
        {/*      variant: 'warning',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      cells: [{ value: 'Info' }, { value: 'Cell' }, { value: 'Cell' }],*/}
        {/*      scope: 'row',*/}
        {/*      variant: 'info',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      cells: [{ value: 'Light' }, { value: 'Cell' }, { value: 'Cell' }],*/}
        {/*      scope: 'row',*/}
        {/*      variant: 'light',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      cells: [{ value: 'Dark' }, { value: 'Cell' }, { value: 'Cell' }],*/}
        {/*      scope: 'row',*/}
        {/*      variant: 'dark',*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*  head={[*/}
        {/*    { label: 'Class', scope: 'col' },*/}
        {/*    { label: 'Heading', scope: 'col' },*/}
        {/*    { label: 'Heading', scope: 'col' },*/}
        {/*  ]}*/}
        {/*/>*/}
      </Example>

      <Example hash="stripedRows" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          striped
        />
      </Example>

      <Example hash="stripedColumns" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          stripedColumns
        />

        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          stripedColumns
          variant="dark"
        />

        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          variant="dark"
          striped
        />

        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          variant="success"
          striped
        />

        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          variant="success"
          stripedColumns
        />
      </Example>

      <Example hash="hoverableRows" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          hover
        />

        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          variant="dark"
          hover
        />

        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          striped
          hover
        />
      </Example>

      <Example hash="activeTables" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              active: true,
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  active: true,
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
        />

        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              active: true,
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  active: true,
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          variant="dark"
        />
      </Example>

      <Example hash="borderedTables" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          bordered
        />

        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          className="border-primary"
          bordered
        />
      </Example>

      <Example hash="tablesWithoutBorders" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          borderless
        />

        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          variant="dark"
          borderless
        />
      </Example>

      <Example hash="smallTables" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          size="sm"
        />

        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          variant="dark"
          size="sm"
        />
      </Example>

      <Example hash="tableGroupDividers" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          bodyProps={{
            divider: true,
          }}
        />
      </Example>

      <Example hash="verticalAlignment" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: [
                <>
                  This cell inherits <code>vertical-align: middle;</code> from the table
                </>,
                <>
                  This cell inherits <code>vertical-align: middle;</code> from the table
                </>,
                <>
                  This cell inherits <code>vertical-align: middle;</code> from the table
                </>,
                <>
                  This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate
                  how the vertical alignment works in the preceding cells.
                </>,
              ],
            },
            {
              values: [
                <>
                  This cell inherits <code>vertical-align: middle;</code> from the table
                </>,
                <>
                  This cell inherits <code>vertical-align: middle;</code> from the table
                </>,
                <>
                  This cell inherits <code>vertical-align: middle;</code> from the table
                </>,
                <>
                  This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate
                  how the vertical alignment works in the preceding cells.
                </>,
              ],
              props: {
                className: 'align-bottom',
              },
            },
            {
              values: [
                <>
                  This cell inherits <code>vertical-align: middle;</code> from the table
                </>,
                <>
                  This cell inherits <code>vertical-align: middle;</code> from the table
                </>,
                {
                  value: (
                    <>
                      This cell inherits <code>vertical-align: middle;</code> from the table
                    </>
                  ),
                  tdProps: {
                    className: 'align-top',
                  },
                },
                <>
                  This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate
                  how the vertical alignment works in the preceding cells.
                </>,
              ],
            },
          ]}
          head={[
            {
              props: {
                className: 'w-25',
              },
              label: 'Heading 1',
              scope: 'col',
            },
            {
              props: {
                className: 'w-25',
              },
              label: 'Heading 2',
              scope: 'col',
            },
            {
              props: {
                className: 'w-25',
              },
              label: 'Heading 3',
              scope: 'col',
            },
            {
              props: {
                className: 'w-25',
              },
              label: 'Heading 4',
              scope: 'col',
            },
          ]}
          responsive
          middle
        />
      </Example>

      <Example hash="nesting" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: [
                {
                  value: (
                    <Table
                      body={[
                        {
                          values: ['A', 'First', 'Last'],
                          scope: 'row',
                        },
                        {
                          values: ['B', 'First', 'Last'],
                          scope: 'row',
                        },
                        {
                          values: ['C', 'First', 'Last'],
                          scope: 'row',
                        },
                      ]}
                      head={[
                        { label: 'Header', scope: 'col' },
                        { label: 'Header', scope: 'col' },
                        { label: 'Header', scope: 'col' },
                      ]}
                      className="mb-0"
                    />
                  ),
                  colSpan: 4,
                },
              ],
            },
            {
              values: [
                '3',
                {
                  value: 'Larry the Bird',
                  colSpan: 2,
                },
                null,
                '@twitter',
              ],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          bordered
          striped
        />
      </Example>

      <Example hash="tableHead" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: ['3', 'Larry', 'the Bird', '@twitter'],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          headProps={{
            variant: 'light',
          }}
        />

        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: ['3', 'Larry', 'the Bird', '@twitter'],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          headProps={{
            variant: 'dark',
          }}
        />
      </Example>

      <Example hash="tableFoot" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: ['3', 'Larry', 'the Bird', '@twitter'],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          foot={[
            {
              values: ['Footer', 'Footer', 'Footer', 'Footer'],
            },
          ]}
        />
      </Example>

      <Example hash="captions" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Mark', 'Otto', '@mdo'],
              scope: 'row',
            },
            {
              values: ['2', 'Jacob', 'Thornton', '@fat'],
              scope: 'row',
            },
            {
              values: ['3', 'Larry', 'the Bird', '@twitter'],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          caption="List of users"
        />
      </Example>

      <Example hash="alwaysResponsive" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
          ]}
          responsive
        />
      </Example>

      <Example hash="breakpointSpecific" t={tTablePage} state={state}>
        <Table
          body={[
            {
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
          ]}
          responsive
        />

        <Table
          body={[
            {
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
          ]}
          responsive="sm"
        />

        <Table
          body={[
            {
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
          ]}
          responsive="md"
        />

        <Table
          body={[
            {
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
          ]}
          responsive="lg"
        />

        <Table
          body={[
            {
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
          ]}
          responsive="xl"
        />

        <Table
          body={[
            {
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
            {
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
              scope: 'row',
            },
          ]}
          head={[
            { scope: 'col', label: '#' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
            { label: 'Heading', scope: 'col' },
          ]}
          responsive="xxl"
        />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">TableBodyOption[]</span>,
            desc: tTableComponentProps('table.desc.body'),
            attr: 'body',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">TableTbodyProps</span>,
            desc: tTableComponentProps('table.desc.bodyProps'),
            attr: 'bodyProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTableComponentProps('table.desc.bordered'),
            attr: 'bordered',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTableComponentProps('table.desc.borderless'),
            attr: 'borderless',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tTableComponentProps('table.desc.caption'),
            attr: 'caption',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">TableCaptionProps</span>,
            desc: tTableComponentProps('table.desc.captionProps'),
            attr: 'captionProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">TableFootOption</span>,
            desc: tTableComponentProps('table.desc.foot'),
            attr: 'foot',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">TableHeadOption</span>,
            desc: tTableComponentProps('table.desc.head'),
            attr: 'head',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">TableTheadProps</span>,
            desc: tTableComponentProps('table.desc.headProps'),
            attr: 'headProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTableComponentProps('table.desc.hover'),
            attr: 'hover',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTableComponentProps('table.desc.middle'),
            attr: 'middle',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">lg | md | sm | xl | xxl | boolean</span>,
            desc: tTableComponentProps('table.desc.responsive'),
            attr: 'responsive',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">TableResponsiveProps</span>,
            desc: tTableComponentProps('table.desc.responsiveProps'),
            attr: 'responsiveProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">sm</span>,
            desc: tTableComponentProps('table.desc.size'),
            attr: 'size',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTableComponentProps('table.desc.striped'),
            attr: 'striped',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tTableComponentProps('table.desc.stripedColumns'),
            attr: 'stripedColumns',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">Variant</span>,
            desc: tTableComponentProps('table.desc.variant'),
            attr: 'variant',
            default: '',
          },
        ]}
        hash="tableComponentProps"
        t={tTableComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
