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

      <PropsIndicator />

      <Example hash="tableComponentProps" items={[]} props state={state} t={tTableComponentProps} />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
