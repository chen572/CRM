const Sequelize = require('sequelize')

class SQLClient {
  constructor() {
    this.client = new Sequelize('mysql://root:@localhost/crm')
  }

  connect() {
    this.client
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully')
      })
      .catch(err => {
        console.error('Unable to connect to the database', err)
      })
  }
}

const sqlClient = new SQLClient()
module.exports = sqlClient