import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css';
import Home from './components/Home'
import Clients from './components/Clients/Clients'
import Actions from './components/Actions'
import Analytics from './components/Analytics'
import { inject, observer } from 'mobx-react'

const App = inject('clientsStore')(observer((props) => {
  const { clientsStore } = props

  useEffect(() => {
    async function clients() {
      await clientsStore.getClients()
    }
    clients()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <NavBar />
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/clients' render={() => <Clients />} />
      <Route exact path='/actions' render={() => <Actions />} />
      <Route exact path='/analytics' render={() => <Analytics />} />
    </Router>
  );
}
))

export default App;
