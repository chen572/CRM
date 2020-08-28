import React from 'react';
import { inject, observer } from 'mobx-react';
import { TableRow, TableCell } from '@material-ui/core';
import { columns } from './ClientsStuff';

const ClientsTableBody = inject('clientsStore')(
  observer((props) => {
    const { page, rowsPerPage, clientsStore } = props;

    return (
      <>
        {clientsStore.clients
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <TableRow
              hover
              onClick={() => clientsStore.updateClient(row)}
              role='checkbox'
              tabIndex={-1}
              key={row.clientId}
            >
              {columns.map((col) => {
                const value = row[col.id];
                return (
                  <TableCell key={col.id} align={col.align}>
                    {value}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
      </>
    );
  })
);

export default ClientsTableBody;
