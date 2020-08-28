import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { columns } from './ClientsStuff';
import { inject, observer } from 'mobx-react';

const ClientsTest = inject('clientsStore')(
  observer((props) => {
    const { clientsStore } = props;

    useEffect(() => {
      async function clients() {
        if (clientsStore.clients.length) {
          return;
        }
        clientsStore.getClients();
      }
      clients();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <MaterialTable
        title='Clients'
        columns={columns}
        data={clientsStore.clients}
        editable={{
          onRowAdd: (newData) => {
            newData.id = null
            return clientsStore.addClient(newData)},
          // onRowUpdate: (newData, oldData) =>
          //   new Promise((resolve) => {
          //     setTimeout(() => {
          //       resolve();
          //       if (oldData) {
          //         setState((prevState) => {
          //           const data = [...prevState.data];
          //           data[data.indexOf(oldData)] = newData;
          //           return { ...prevState, data };
          //         });
          //       }
          //     }, 600);
          //   }),
          // onRowDelete: (oldData) =>
          //   new Promise((resolve) => {
          //     setTimeout(() => {
          //       resolve();
          //       setState((prevState) => {
          //         const data = [...prevState.data];
          //         data.splice(data.indexOf(oldData), 1);
          //         return { ...prevState, data };
          //       });
          //     }, 600);
          //   }),
        }}
      />
    );
  })
);

export default ClientsTest;
