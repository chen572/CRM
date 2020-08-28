import React from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TablePagination,
} from '@material-ui/core';
import { useStyles } from './ClientsStuff';
import ClientsTableHead from './ClientsTableHead';
import CLientsTableBody from './ClientsTableBody';

function ClientsTable(props) {
  const classes = useStyles();
  const { clients } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <ClientsTableHead />
          <TableBody>
            <CLientsTableBody page={page} rowsPerPage={rowsPerPage} />
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={clients.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default ClientsTable;
