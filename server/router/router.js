const express = require('express')
const sqlClient = require('../dataSources/sqlClient')
const router = express.Router()
sqlClient.connect()

module.exports = router