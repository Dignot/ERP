/* eslint-disable camelcase */
import { useCallback, useEffect, useMemo, useState } from 'react';

import get from 'lodash/get';
import MaterialReactTable, {
  MRT_RowSelectionState,
} from 'material-react-table';

import { Button } from '@mui/material';

import type { TableProps } from './index.types';

import * as Styled from './index.styled';

export const Table = <T extends object>(props: TableProps<T>) => {
  const {
    title,
    isLoading,
    data = [],
    columns = [],
    maxSelectRow,
    handleSelectRow,
    isSelectRow,
    actions,
    handleClickRow,
    isSelectAll,
    isCleanSelectState,
    isDisabled,
    isColumnResize,
  } = props;

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  const isSelect = useCallback(
    (    row: any) =>
      (maxSelectRow && Object.keys(rowSelection).length < maxSelectRow) ||
      Object.keys(rowSelection).includes(String(get(row, 'id'))),
    [maxSelectRow, rowSelection],
  );

  useEffect(() => {
    if (handleSelectRow) {
      handleSelectRow(Object.keys(rowSelection));
    }
  }, [handleSelectRow, rowSelection]);

  useEffect(() => {
    if (isCleanSelectState) {
      setRowSelection({});
    }
  }, [isCleanSelectState]);

  const isResize = useMemo(
    () => (typeof isColumnResize === 'boolean' ? isColumnResize : true),
    [],
  );

  useEffect(() => {
    setRowSelection({});
  }, [data]);

  return (
    <Styled.TableWrapper>
      {isDisabled && <Styled.TableDisableWrapper />}
      {title && <Styled.TableTitle>{title}</Styled.TableTitle>}
      <MaterialReactTable
        enableColumnResizing={isResize}
        getRowId={row => get(row, 'id') as string}
        state={{ showSkeletons: isLoading, rowSelection }}
        enableSelectAll={!!isSelectAll}
        selectAllMode={isSelectAll ? 'all' : 'page'}
        enableExpandAll={false}
        positionToolbarAlertBanner="none"
        onRowSelectionChange={setRowSelection}
        muiTableHeadProps={{
          sx: {
            '& th .Mui-TableHeadCell-Content-Wrapper': {
              whiteSpace: 'nowrap',
            },
          },
        }}
        muiTableBodyProps={{
          sx: {
            '& tr:hover > td': {
              backgroundColor: theme =>
                theme.palette.mode === 'light' ? '#EDF4FB' : '#2A324F',
            },
            '& tr > td': {
              borderColor: theme =>
                theme.palette.mode === 'light' ? '#D7E1E6' : '#343957',
            },
            '& .Mui-selected > td': {
              borderColor: theme =>
                theme.palette.mode === 'light' ? '#285FEB' : '#343957',
              background: theme =>
                theme.palette.mode === 'light' ? '#EAF1FE' : '#343957',
            },
          },
        }}
        muiTableContainerProps={{
          sx: { minHeight: '100%', width: '100%' },
        }}
        {...{ columns, data, initialState: { density: 'compact' } }}
        enableRowSelection={isSelectRow ? isSelect : false}
        muiTableBodyRowProps={({ row }) => ({
          onClick: () => {
            row.getToggleSelectedHandler();
            if (handleClickRow) {
              handleClickRow(row.original);
            }
          },
        })}
        renderTopToolbarCustomActions={() => (
          <div>
            {!!actions?.length && (
              <Styled.TableActions>
                {actions?.map((x, i) => (
                  <Button key={`table-button-${i}`} {...x} />
                ))}
              </Styled.TableActions>
            )}
          </div>
        )}
      />
    </Styled.TableWrapper>
  );
};
