import { type ElementType, useMemo, useState } from 'react';

import type {
  TableBodyCellOption,
  TableBodyOption,
  TableBodyValueOption,
  TableHeadOption,
  TableProps,
} from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isPlainObject, isValueValid } from '../tools';
import TableTbody from './table-tbody.tsx';
import TableTd from './table-td.tsx';
import TableTh from './table-th.tsx';
import TableThead from './table-thead.tsx';
import TableTr from './table-tr.tsx';

interface AugmentedBodyOption extends TableBodyOption {
  id: number | string;
}

interface AugmentedHeadOption extends TableHeadOption {
  id: number | string;
}

const isCellOption = (cell: unknown): cell is TableBodyCellOption => {
  return isPlainObject(cell);
};

const createOptionsWithId = <T extends TableBodyOption | TableHeadOption>(
  options: T[] = [],
): (T & { id: number | string })[] =>
  options.map((option, index) => ({
    ...option,
    id: option.id ?? index,
  }));

const renderTableCell = (
  cellItem: TableBodyCellOption | TableBodyValueOption,
  headerItem: AugmentedHeadOption,
  rowItem: AugmentedBodyOption,
  _rowIndex: number,
  colIndex: number,
  isRowScope: boolean,
) => {
  const key = `${headerItem.id}${rowItem.id}`;
  const isCell = isCellOption(cellItem);
  const colSpan = isCell ? cellItem.colSpan : undefined;
  const rowSpan = isCell ? cellItem.rowSpan : undefined;
  const variant = isCell ? cellItem.variant : undefined;
  const active = isCell ? cellItem.active : undefined;
  const value = isCell ? cellItem.value : cellItem;

  if (isRowScope && colIndex === 0) {
    return (
      <TableTh active={active} colSpan={colSpan} key={key} rowSpan={rowSpan} scope={rowItem.scope} variant={variant}>
        {value}
      </TableTh>
    );
  } else {
    return (
      <TableTd active={active} colSpan={colSpan} key={key} rowSpan={rowSpan} variant={variant}>
        {value}
      </TableTd>
    );
  }
};

const RowCells = ({
  headOptions,
  rowIndex,
  rowItem,
  type = 'values',
}: {
  headOptions: AugmentedHeadOption[];
  rowIndex: number;
  rowItem: AugmentedBodyOption;
  type: 'cells' | 'values';
}) =>
  headOptions.map((headerItem, colIndex) => {
    const items = rowItem[type]!;
    const cellItem =
      items.find(
        (item) => 'key' in headerItem && isPlainObject(item) && (item as TableBodyCellOption).key === headerItem.key,
      ) ?? items[colIndex];

    return cellItem
      ? renderTableCell(cellItem, headerItem, rowItem, rowIndex, colIndex, rowItem.scope === 'row')
      : null;
  });

const Table = function Table<T extends ElementType = 'table'>(props: TableProps<T>) {
  const {
    as: Component = 'table',
    body: bodyByDefault = [],
    bodyProps,
    className,
    dropOldClass,
    head: headerByDefault = [],
    headProps,
    hover,
    striped,
    stripedColumns,
    style,
    variables,
    variant,
    ...rest
  } = props;
  const [headOptions] = useState<AugmentedHeadOption[]>(createOptionsWithId(headerByDefault));
  const [bodyOptions] = useState<AugmentedBodyOption[]>(createOptionsWithId(bodyByDefault));

  const computedProps = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'table',
      variant && `table-${variant}`,
      striped && 'table-striped',
      stripedColumns && 'table-striped-columns',
      hover && 'table-hover',
      className,
    );
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [className, dropOldClass, hover, striped, stripedColumns, style, variables, variant]);

  return (
    <Component {...rest} {...computedProps}>
      <TableThead {...headProps}>
        <TableTr>
          {headOptions.map((item) => (
            <TableTh active={item.active} key={item.id} scope={item.scope} variant={item.variant}>
              {item.label}
            </TableTh>
          ))}
        </TableTr>
      </TableThead>
      <TableTbody {...bodyProps}>
        {bodyOptions.map((rowItem, rowIndex) => (
          <TableTr active={rowItem.active} key={rowItem.id} variant={rowItem.variant}>
            {rowItem.values ? (
              <RowCells headOptions={headOptions} rowIndex={rowIndex} rowItem={rowItem} type="values" />
            ) : rowItem.cells ? (
              <RowCells headOptions={headOptions} rowIndex={rowIndex} rowItem={rowItem} type="cells" />
            ) : (
              <></>
            )}
          </TableTr>
        ))}
      </TableTbody>
    </Component>
  );
};

Table.Thead = TableThead;

Table.Tbody = TableTbody;

Table.Th = TableTh;

Table.Tr = TableTr;

Table.Td = TableTd;

Table.displayName = 'BRL.Table';

export default Table;
