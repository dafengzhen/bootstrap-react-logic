import { type ElementType, isValidElement, useMemo, useState } from 'react';

import type {
  TableBodyCellOption,
  TableBodyOption,
  TableBodyValueOption,
  TableFootOption,
  TableHeadOption,
  TableProps,
} from './types.ts';

import { classx, convertBsKeyToVar, isPlainObject, stylex } from '../tools';
import TableCaption from './table-caption.tsx';
import TableResponsive from './table-responsive.tsx';
import TableTbody from './table-tbody.tsx';
import TableTd from './table-td.tsx';
import TableTfoot from './table-tfoot.tsx';
import TableTh from './table-th.tsx';
import TableThead from './table-thead.tsx';
import TableTr from './table-tr.tsx';

interface AugmentedBodyOption extends TableBodyOption {
  id: number | string;
}

interface AugmentedFootOption extends TableFootOption {
  id: number | string;
}

interface AugmentedHeadOption extends TableHeadOption {
  id: number | string;
}

const isCellOption = (cell: unknown): cell is TableBodyCellOption => {
  return isPlainObject(cell) && !isValidElement(cell);
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
  const key = `${headerItem.key ?? headerItem.id}${rowItem.id}`;
  const isCell = isCellOption(cellItem);
  const colSpan = isCell ? cellItem.colSpan : undefined;
  const rowSpan = isCell ? cellItem.rowSpan : undefined;
  const variant = isCell ? cellItem.variant : undefined;
  const active = isCell ? cellItem.active : undefined;
  const thProps = isCell ? cellItem.thProps : undefined;
  const tdProps = isCell ? cellItem.tdProps : undefined;
  const value = isCell ? cellItem.value : cellItem;

  if (isRowScope && colIndex === 0) {
    return (
      <TableTh
        {...thProps}
        active={active}
        colSpan={colSpan}
        key={key}
        rowSpan={rowSpan}
        scope={rowItem.scope}
        variant={variant}
      >
        {value}
      </TableTh>
    );
  } else {
    return (
      <TableTd {...tdProps} active={active} colSpan={colSpan} key={key} rowSpan={rowSpan} variant={variant}>
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
    as: Component = 'table' as ElementType,
    body: bodyByDefault = [],
    bodyProps,
    bordered,
    borderless,
    caption,
    captionProps,
    className,
    dropOldClass,
    foot: footerByDefault = [],
    footProps,
    head: headerByDefault = [],
    headProps,
    hover,
    middle,
    responsive,
    responsiveProps,
    size,
    striped,
    stripedColumns,
    style,
    variables,
    variant,
    ...rest
  } = props;
  const [headOptions] = useState<AugmentedHeadOption[]>(createOptionsWithId(headerByDefault));
  const [footOptions] = useState<AugmentedFootOption[]>(createOptionsWithId(footerByDefault));
  const [bodyOptions] = useState<AugmentedBodyOption[]>(createOptionsWithId(bodyByDefault));

  const computedProps = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && 'table',
      variant && `table-${variant}`,
      striped && 'table-striped',
      stripedColumns && 'table-striped-columns',
      hover && 'table-hover',
      bordered && 'table-bordered',
      borderless && `table-borderless`,
      size && `table-${size}`,
      middle && 'table align-middle',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [
    bordered,
    borderless,
    className,
    dropOldClass,
    hover,
    middle,
    size,
    striped,
    stripedColumns,
    style,
    variables,
    variant,
  ]);

  const TableComponent = (
    <Component {...rest} {...computedProps}>
      {caption && <TableCaption {...captionProps}>{caption}</TableCaption>}

      {headOptions.length > 0 && (
        <TableThead {...headProps}>
          <TableTr>
            {headOptions.map((item) => (
              <TableTh
                {...item.props}
                active={item.active}
                key={item.key ?? item.id}
                scope={item.scope}
                variant={item.variant}
              >
                {item.label}
              </TableTh>
            ))}
          </TableTr>
        </TableThead>
      )}

      {bodyOptions.length > 0 && (
        <TableTbody {...bodyProps}>
          {bodyOptions.map((rowItem, rowIndex) => (
            <TableTr {...rowItem.props} active={rowItem.active} key={rowItem.id} variant={rowItem.variant}>
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
      )}

      {footOptions.length > 0 && (
        <TableTfoot {...footProps}>
          {footOptions.map((rowItem, rowIndex) => (
            <TableTr {...rowItem.props} active={rowItem.active} key={rowItem.id} variant={rowItem.variant}>
              {rowItem.values ? (
                <RowCells headOptions={headOptions} rowIndex={rowIndex} rowItem={rowItem} type="values" />
              ) : rowItem.cells ? (
                <RowCells headOptions={headOptions} rowIndex={rowIndex} rowItem={rowItem} type="cells" />
              ) : (
                <></>
              )}
            </TableTr>
          ))}
        </TableTfoot>
      )}
    </Component>
  );

  return responsive ? (
    <TableResponsive {...responsiveProps} responsive={responsive}>
      {TableComponent}
    </TableResponsive>
  ) : (
    TableComponent
  );
};

Table.Caption = TableCaption;

Table.Responsive = TableResponsive;

Table.Tbody = TableTbody;

Table.Td = TableTd;

Table.Tfoot = TableTfoot;

Table.Th = TableTh;

Table.Thead = TableThead;

Table.Tr = TableTr;

Table.displayName = 'BRL.Table';

export default Table;
