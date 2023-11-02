"use client"
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { data, type Person } from '../../helper/group';
import { FixedSizeGrid as Grid } from 'react-window';
console.log('****', data.length)
const Example = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'platform',
        header: 'Platform',
      },
      {
        accessorKey: 'profileName',
        header: 'Profile Name',
      },
      {
        accessorKey: 'campaignName',
        header: 'Campaign Name',
      },
      {
        accessorKey: 'matchType',
        header: 'Match Type',
      },
      {
        accessorKey: 'isTopKeywords',
        enableColumnOrdering: false,
        header: 'Top Keywords',
      },
      {
        header: 'Text',
        accessorKey: 'text',
      },
      {
        header: 'Age',
        accessorKey: 'age',
      }
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true,
    enableColumnResizing: true,
    enableRowVirtualization:true,
    enableExpanding: true,
    enableGrouping: true,
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 20,5000, 100000],
      showFirstButton: false,
      showLastButton: false,
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
