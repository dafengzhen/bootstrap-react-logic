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

interface IBodyOption extends TableBodyOption {
  id: number | string;
}

interface IHeadOption extends TableHeadOption {
  id: number | string;
}

const isCellOption = (cell: any): cell is TableBodyCellOption => {
  return isPlainObject(cell);
};

const generateInitialOptions = (options: (TableBodyOption | TableHeadOption)[] = []): (IBodyOption | IHeadOption)[] =>
  options.map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));

const renderCell = (
  cell: null | TableBodyCellOption | TableBodyValueOption | undefined,
  headerItem: IHeadOption,
  rowItem: IBodyOption,
  index: number,
  isRowScope: boolean,
) => {
  if (!cell) {
    return;
  }

  const key = headerItem.key ?? headerItem.id;
  const isCell = isCellOption(cell);
  const colSpan = isCell ? cell.colSpan : rowItem.colSpan?.[headerItem.key];
  const rowSpan = isCell ? cell.rowSpan : rowItem.rowSpan?.[headerItem.key];
  const cellValue = isCell ? cell.value : cell;

  if (isRowScope && index === 0) {
    const variant = isCell ? cell.variant : typeof rowItem.variant === 'string' ? rowItem.variant : rowItem.variant?.th;

    return (
      <TableTh colSpan={colSpan} key={key} rowSpan={rowSpan} scope={rowItem.scope} variant={variant}>
        {cellValue}
      </TableTh>
    );
  } else {
    const variant = isCell ? cell.variant : typeof rowItem.variant === 'string' ? rowItem.variant : rowItem.variant?.td;

    return (
      <TableTd colSpan={colSpan} key={key} rowSpan={rowSpan} variant={variant}>
        {cellValue}
      </TableTd>
    );
  }
};

const ValueRow = ({ headOptions, rowItem }: { headOptions: IHeadOption[]; rowItem: IBodyOption }) =>
  headOptions.map((headerItem, index) => {
    return renderCell(rowItem.values![index], headerItem, rowItem, index, rowItem.scope === 'row');
  });

const CellRow = ({ headOptions, rowItem }: { headOptions: IHeadOption[]; rowItem: IBodyOption }) =>
  headOptions.map((headerItem, index) => {
    return renderCell(rowItem.cells![index], headerItem, rowItem, index, rowItem.scope === 'row');
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
    style,
    variables,
    variant,
    ...rest
  } = props;
  const [headOptions] = useState<IHeadOption[]>(generateInitialOptions(headerByDefault) as IHeadOption[]);
  const [bodyOptions] = useState<IBodyOption[]>(generateInitialOptions(bodyByDefault) as IBodyOption[]);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'table', variant && `table-${variant}`, className);
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
  }, [className, dropOldClass, style, variables, variant]);

  return (
    <Component {...rest} {...renderOptions}>
      <TableThead {...headProps}>
        <TableTr>
          {headOptions.map((item) => (
            <TableTh key={item.key ?? item.id} scope={item.scope}>
              {item.label}
            </TableTh>
          ))}
        </TableTr>
      </TableThead>
      <TableTbody {...bodyProps}>
        {bodyOptions.map((rowItem) => (
          <TableTr
            key={rowItem.id}
            variant={typeof rowItem.variant === 'string' ? rowItem.variant : rowItem.variant?.tr}
          >
            {rowItem.values ? (
              <ValueRow headOptions={headOptions} rowItem={rowItem} />
            ) : rowItem.cells ? (
              <CellRow headOptions={headOptions} rowItem={rowItem} />
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
