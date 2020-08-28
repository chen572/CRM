import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import { columns } from './ClientsStuff';

function ClientsTableHead() {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default ClientsTableHead;
