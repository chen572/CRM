const express = require('express')
const sqlClient = require('../dataSources/sqlClient')
const router = express.Router()
sqlClient.connect()

router.get('/clients', async (req, res) => {
  res.send(await sqlClient.getAllClients())
})

router.post('/clients', async (req, res) => {
  res.send(await sqlClient.insertClient({ ...req.body }))
})

router.put('/clients', async (req, res) => {
  res.send(await sqlClient.updateClient({ ...req.body }))
})

module.exports = router