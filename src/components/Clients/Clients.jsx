import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import ClientsTable from './ClientsTable';
import Loading from '../Loading';

const Clients = inject('clientsStore')(
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
      <>
      {
        clientsStore.loading 
          ? <Loading /> 
          : <ClientsTable clients={clientsStore.clients} />
      }
      </>
    );
  })
);

export default Clients;
