import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Table } from '@lib/table';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/table/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
      <Example hash="basic" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
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

      <Example hash="variants" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['Default', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['Primary', 'Cell', 'Cell'],
              variant: 'primary',
            },
            {
              scope: 'row',
              values: ['Secondary', 'Cell', 'Cell'],
              variant: 'secondary',
            },
            {
              scope: 'row',
              values: ['Success', 'Cell', 'Cell'],
              variant: 'success',
            },
            {
              scope: 'row',
              values: ['Danger', 'Cell', 'Cell'],
              variant: 'danger',
            },
            {
              scope: 'row',
              values: ['Warning', 'Cell', 'Cell'],
              variant: 'warning',
            },
            {
              scope: 'row',
              values: ['Info', 'Cell', 'Cell'],
              variant: 'info',
            },
            {
              scope: 'row',
              values: ['Light', 'Cell', 'Cell'],
              variant: 'light',
            },
            {
              scope: 'row',
              values: ['Dark', 'Cell', 'Cell'],
              variant: 'dark',
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

      <Example hash="stripedRows" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          striped
        />
      </Example>

      <Example hash="stripedColumns" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          stripedColumns
        />

        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
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
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          striped
          variant="dark"
        />

        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          striped
          variant="success"
        />

        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          stripedColumns
          variant="success"
        />
      </Example>

      <Example hash="hoverableRows" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          hover
        />

        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          hover
          variant="dark"
        />

        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          hover
          striped
        />
      </Example>

      <Example hash="activeTables" state={state} t={tTablePage}>
        <Table
          body={[
            {
              active: true,
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  active: true,
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
        />

        <Table
          body={[
            {
              active: true,
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  active: true,
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          variant="dark"
        />
      </Example>

      <Example hash="borderedTables" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          bordered
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
        />

        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          bordered
          className="border-primary"
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
        />
      </Example>

      <Example hash="tablesWithoutBorders" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          borderless
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
        />

        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          borderless
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          variant="dark"
        />
      </Example>

      <Example hash="smallTables" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          size="sm"
        />

        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          size="sm"
          variant="dark"
        />
      </Example>

      <Example hash="tableGroupDividers" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          bodyProps={{
            divider: true,
          }}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
        />
      </Example>

      <Example hash="verticalAlignment" state={state} t={tTablePage}>
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
              props: {
                className: 'align-bottom',
              },
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
                {
                  tdProps: {
                    className: 'align-top',
                  },
                  value: (
                    <>
                      This cell inherits <code>vertical-align: middle;</code> from the table
                    </>
                  ),
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
              label: 'Heading 1',
              props: {
                className: 'w-25',
              },
              scope: 'col',
            },
            {
              label: 'Heading 2',
              props: {
                className: 'w-25',
              },
              scope: 'col',
            },
            {
              label: 'Heading 3',
              props: {
                className: 'w-25',
              },
              scope: 'col',
            },
            {
              label: 'Heading 4',
              props: {
                className: 'w-25',
              },
              scope: 'col',
            },
          ]}
          middle
          responsive
        />
      </Example>

      <Example hash="nesting" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              values: [
                {
                  colSpan: 4,
                  value: (
                    <Table
                      body={[
                        {
                          scope: 'row',
                          values: ['A', 'First', 'Last'],
                        },
                        {
                          scope: 'row',
                          values: ['B', 'First', 'Last'],
                        },
                        {
                          scope: 'row',
                          values: ['C', 'First', 'Last'],
                        },
                      ]}
                      className="mb-0"
                      head={[
                        { label: 'Header', scope: 'col' },
                        { label: 'Header', scope: 'col' },
                        { label: 'Header', scope: 'col' },
                      ]}
                    />
                  ),
                },
              ],
            },
            {
              scope: 'row',
              values: [
                '3',
                {
                  colSpan: 2,
                  value: 'Larry the Bird',
                },
                null,
                '@twitter',
              ],
            },
          ]}
          bordered
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          striped
        />
      </Example>

      <Example hash="tableHead" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: ['3', 'Larry', 'the Bird', '@twitter'],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
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
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: ['3', 'Larry', 'the Bird', '@twitter'],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
          headProps={{
            variant: 'dark',
          }}
        />
      </Example>

      <Example hash="tableFoot" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: ['3', 'Larry', 'the Bird', '@twitter'],
            },
          ]}
          foot={[
            {
              values: ['Footer', 'Footer', 'Footer', 'Footer'],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
        />
      </Example>

      <Example hash="captions" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              scope: 'row',
              values: ['3', 'Larry', 'the Bird', '@twitter'],
            },
          ]}
          caption="List of users"
          head={[
            { label: '#', scope: 'col' },
            { label: 'First', scope: 'col' },
            { label: 'Last', scope: 'col' },
            { label: 'Handle', scope: 'col' },
          ]}
        />
      </Example>

      <Example hash="alwaysResponsive" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
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

      <Example hash="breakpointSpecific" state={state} t={tTablePage}>
        <Table
          body={[
            {
              scope: 'row',
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
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
              scope: 'row',
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
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
              scope: 'row',
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
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
              scope: 'row',
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
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
              scope: 'row',
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
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
              scope: 'row',
              values: ['1', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['2', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
            {
              scope: 'row',
              values: ['3', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell', 'Cell'],
            },
          ]}
          head={[
            { label: '#', scope: 'col' },
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
        hash="tableComponentProps"
        items={[
          {
            attr: 'body',
            default: '',
            desc: tTableComponentProps('table.desc.body'),
            type: <span className="badge text-bg-secondary">TableBodyOption[]</span>,
          },
          {
            attr: 'bodyProps',
            default: '',
            desc: tTableComponentProps('table.desc.bodyProps'),
            type: <span className="badge text-bg-secondary">TableTbodyProps</span>,
          },
          {
            attr: 'bordered',
            default: '',
            desc: tTableComponentProps('table.desc.bordered'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'borderless',
            default: '',
            desc: tTableComponentProps('table.desc.borderless'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'caption',
            default: '',
            desc: tTableComponentProps('table.desc.caption'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'captionProps',
            default: '',
            desc: tTableComponentProps('table.desc.captionProps'),
            type: <span className="badge text-bg-secondary">TableCaptionProps</span>,
          },
          {
            attr: 'foot',
            default: '',
            desc: tTableComponentProps('table.desc.foot'),
            type: <span className="badge text-bg-secondary">TableFootOption</span>,
          },
          {
            attr: 'head',
            default: '',
            desc: tTableComponentProps('table.desc.head'),
            type: <span className="badge text-bg-secondary">TableHeadOption</span>,
          },
          {
            attr: 'headProps',
            default: '',
            desc: tTableComponentProps('table.desc.headProps'),
            type: <span className="badge text-bg-secondary">TableTheadProps</span>,
          },
          {
            attr: 'hover',
            default: '',
            desc: tTableComponentProps('table.desc.hover'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'middle',
            default: '',
            desc: tTableComponentProps('table.desc.middle'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'responsive',
            default: '',
            desc: tTableComponentProps('table.desc.responsive'),
            type: <span className="badge text-bg-secondary">lg | md | sm | xl | xxl | boolean</span>,
          },
          {
            attr: 'responsiveProps',
            default: '',
            desc: tTableComponentProps('table.desc.responsiveProps'),
            type: <span className="badge text-bg-secondary">TableResponsiveProps</span>,
          },
          {
            attr: 'size',
            default: '',
            desc: tTableComponentProps('table.desc.size'),
            type: <span className="badge text-bg-secondary">sm</span>,
          },
          {
            attr: 'striped',
            default: '',
            desc: tTableComponentProps('table.desc.striped'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'stripedColumns',
            default: '',
            desc: tTableComponentProps('table.desc.stripedColumns'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'variant',
            default: '',
            desc: tTableComponentProps('table.desc.variant'),
            type: <span className="badge text-bg-secondary">Variant</span>,
          },
        ]}
        props
        state={state}
        t={tTableComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
