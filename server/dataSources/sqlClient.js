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

  async getAllClients() {
    const clients = await this.client.query(`
      SELECT 
        c_id AS id,
        c_name AS name,
        c_first_contact AS firstContact,
        c_sold AS sold,
        country_name AS country,
        e_name AS owner,
        email_type AS email
      FROM
        customer AS c,
        email_type AS e_t,
        country AS co,
        employees AS e
      WHERE
          co.country_id = c.c_country AND
          e.e_id = c.c_owner AND
          e_t.email_id = c.c_email_type
      ORDER BY
        c_id ASC
    `)
    return clients[0]
  }

  async addAndRtnId(idTag, tableName, referenceTag, referenceVal) {
    await this.client.query(`INSERT INTO ${tableName} VALUES(null, '${referenceVal}')`)
    return this.getId(idTag, tableName, referenceTag, referenceVal)
  }

  async getId(idTag, tableName, referenceTag, referenceVal) {
    const countryId = await this.client.query(`
      SELECT 
        ${idTag} 
      FROM 
        ${tableName} 
      WHERE 
        ${referenceTag} = '${referenceVal}'`)
    return countryId[0][0]
      ? countryId[0][0][idTag]
      : await this.addAndRtnId(idTag, tableName, referenceTag, referenceVal)
  }

  async getIds(clientObj) {
    return {
      countryId: await this.getId('country_id', 'country', 'country_name', clientObj.country),
      ownerId: await this.getId('e_id', 'employees', 'e_name', clientObj.owner),
      emailTypeId: await this.getId('email_id', 'email_type', 'email_type', clientObj.email)
    }
  }

  async insertClient(clientObj) {
    const { countryId, ownerId, emailTypeId } = this.getIds(clientObj)

    return this.client.query(`
    INSER INTO
    customer
    VALUES(
      null,
        '${clientObj.name}',
        null,
        '${clientObj.firstContact}',
        ${clientObj.sold},
        ${countryId},
        ${ownerId},
        ${emailTypeId}
        )
        `)
  }

  async updateClient(clientObj) {
    const { countryId, ownerId, emailTypeId } = await this.getIds(clientObj)
    await this.client.query(`
      UPDATE 
        customer
      SET
        c_id = ${clientObj.id},
        c_name = '${clientObj.name}',
        c_first_contact = '${clientObj.firstContact}',
        c_sold = ${clientObj.sold},
        c_country = ${countryId},
        c_owner = ${ownerId},
        c_email_type = ${emailTypeId}
      WHERE 
        c_id = ${clientObj.id}
    `)
    const client = (await this.client.query(`
      SELECT 
        c_id AS id,
        c_name AS name,
        c_first_contact AS firstContact,
        c_sold AS sold,
        country_name AS country,
        e_name AS owner,
        email_type AS email
      FROM
        customer AS c,
        email_type AS e_t,
        country AS co,
        employees AS e
      WHERE
        c_id = ${clientObj.id} AND
        co.country_id = c.c_country AND
        e.e_id = c.c_owner AND
        e_t.email_id = c.c_email_type
    `))[0][0]

    return client
  }
}

const sqlClient = new SQLClient()
module.exports = sqlClient