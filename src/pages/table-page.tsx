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
              id: 1,
              scope: 'row',
              values: ['1', 'Mark', 'Otto', '@mdo'],
            },
            {
              id: 2,
              scope: 'row',
              values: ['2', 'Jacob', 'Thornton', '@fat'],
            },
            {
              colSpan: { firstName: 2 },
              id: 3,
              scope: 'row',
              values: ['3', 'Larry the Bird', null, '@twitter'],
            },
          ]}
          head={[
            { key: 'id', label: '#', scope: 'col' },
            { key: 'firstName', label: 'First', scope: 'col' },
            { key: 'lastName', label: 'Last', scope: 'col' },
            { key: 'handle', label: 'Handle', scope: 'col' },
          ]}
        />

        <Table
          body={[
            {
              cells: [
                { key: 'id', value: '1' },
                { key: 'firstName', value: 'Mark' },
                { key: 'lastName', value: 'Otto' },
                { key: 'handle', value: '@mdo' },
              ],
              id: 1,
              scope: 'row',
            },
            {
              cells: [
                { key: 'id', value: '2' },
                { key: 'firstName', value: 'Jacob' },
                { key: 'lastName', value: 'Thornton' },
                { key: 'handle', value: '@fat' },
              ],
              id: 2,
              scope: 'row',
            },
            {
              cells: [
                { key: 'id', value: '3' },
                { colSpan: 2, key: 'firstName', value: 'Larry the Bird' },
                { key: 'handle', value: '@twitter' },
              ],
              id: 3,
              scope: 'row',
            },
          ]}
          head={[
            { key: 'id', label: '#', scope: 'col' },
            { key: 'firstName', label: 'First', scope: 'col' },
            { key: 'lastName', label: 'Last', scope: 'col' },
            { key: 'handle', label: 'Handle', scope: 'col' },
          ]}
        />
      </Example>

      <Example hash="variants" state={state} t={tTablePage}>
        <Table
          body={[
            {
              id: 1,
              scope: 'row',
              values: ['Default', 'Cell', 'Cell'],
            },
            {
              id: 2,
              scope: 'row',
              values: ['Primary', 'Cell', 'Cell'],
              variant: 'primary',
            },
            {
              id: 3,
              scope: 'row',
              values: ['Secondary', 'Cell', 'Cell'],
              variant: 'secondary',
            },
            {
              id: 4,
              scope: 'row',
              values: ['Success', 'Cell', 'Cell'],
              variant: 'success',
            },
            {
              id: 5,
              scope: 'row',
              values: ['Danger', 'Cell', 'Cell'],
              variant: 'danger',
            },
            {
              id: 6,
              scope: 'row',
              values: ['Warning', 'Cell', 'Cell'],
              variant: 'warning',
            },
            {
              id: 7,
              scope: 'row',
              values: ['Info', 'Cell', 'Cell'],
              variant: 'info',
            },
            {
              id: 8,
              scope: 'row',
              values: ['Light', 'Cell', 'Cell'],
              variant: 'light',
            },
            {
              id: 9,
              scope: 'row',
              values: ['Dark', 'Cell', 'Cell'],
              variant: 'dark',
            },
          ]}
          head={[
            { key: 'class', label: 'Class', scope: 'col' },
            { key: 'heading1', label: 'Heading', scope: 'col' },
            { key: 'heading2', label: 'Heading', scope: 'col' },
          ]}
        />

        <Table
          body={[
            {
              cells: [
                { key: 'class', value: 'Default' },
                { key: 'heading1', value: 'Cell' },
                { key: 'heading2', value: 'Cell' },
              ],
              id: 1,
              scope: 'row',
            },
            {
              cells: [
                { key: 'class', value: 'Primary' },
                { key: 'heading1', value: 'Cell' },
                { key: 'heading2', value: 'Cell' },
              ],
              id: 2,
              scope: 'row',
              variant: 'primary',
            },
            {
              cells: [
                { key: 'class', value: 'Secondary' },
                { key: 'heading1', value: 'Cell' },
                { key: 'heading2', value: 'Cell' },
              ],
              id: 3,
              scope: 'row',
              variant: 'secondary',
            },
            {
              cells: [
                { key: 'class', value: 'Success' },
                { key: 'heading1', value: 'Cell' },
                { key: 'heading2', value: 'Cell' },
              ],
              id: 4,
              scope: 'row',
              variant: 'success',
            },
            {
              cells: [
                { key: 'class', value: 'Danger' },
                { key: 'heading1', value: 'Cell' },
                { key: 'heading2', value: 'Cell' },
              ],
              id: 5,
              scope: 'row',
              variant: 'danger',
            },
            {
              cells: [
                { key: 'class', value: 'Warning' },
                { key: 'heading1', value: 'Cell' },
                { key: 'heading2', value: 'Cell' },
              ],
              id: 6,
              scope: 'row',
              variant: 'warning',
            },
            {
              cells: [
                { key: 'class', value: 'Info' },
                { key: 'heading1', value: 'Cell' },
                { key: 'heading2', value: 'Cell' },
              ],
              id: 7,
              scope: 'row',
              variant: 'info',
            },
            {
              cells: [
                { key: 'class', value: 'Light' },
                { key: 'heading1', value: 'Cell' },
                { key: 'heading2', value: 'Cell' },
              ],
              id: 8,
              scope: 'row',
              variant: 'light',
            },
            {
              cells: [
                { key: 'class', value: 'Dark' },
                { key: 'heading1', value: 'Cell' },
                { key: 'heading2', value: 'Cell' },
              ],
              id: 9,
              scope: 'row',
              variant: 'dark',
            },
          ]}
          head={[
            { key: 'class', label: 'Class', scope: 'col' },
            { key: 'heading1', label: 'Heading', scope: 'col' },
            { key: 'heading2', label: 'Heading', scope: 'col' },
          ]}
        />
      </Example>

      <PropsIndicator />

      <Example hash="tableComponentProps" items={[]} props state={state} t={tTableComponentProps} />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
