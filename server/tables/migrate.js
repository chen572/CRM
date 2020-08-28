const data = require('../../migrate.json')
const sql = require('../dataSources/sqlClient')

// sql.connect()

const insertSmallTables = function (tableName, data) {
  const items = []
  for (let item of data) {
    if (items.find(i => i === item)) {
      continue
    } else {
      items.push(item)
      sql.client.query(`INSERT INTO ${tableName} VALUES(null, '${item}')`)
    }
  }
  console.log('done')
}

const insertCustomers = async function (data) {
  for (let customer of data) {
    const employeeId = await sql.client.query(`SELECT e_id FROM employees WHERE e_name = '${customer.owner}'`).then(d => d[0][0].e_id)
    const emailTypeId = customer.emailType ? await sql.client.query(`SELECT email_id FROM email_type WHERE email_type = '${customer.emailType}'`).then(d => d[0][0].email_id) : null
    const countryId = await sql.client.query(`SELECT country_id FROM country WHERE country_name = '${customer.country}'`).then(d => d[0][0].country_id)
    const firstContact = new Date(customer.firstContact).toLocaleDateString()

    sql.client.query(`INSERT INTO customer VALUES(null, '${customer.name}', '${customer.email}', '${firstContact}', ${customer.sold}, ${countryId}, ${employeeId}, ${emailTypeId})`)
  }
  console.log('done')
}

insertSmallTables('country', data.map(c => c.country))
insertSmallTables('email_type', data.map(c => c.emailType).filter(c => c !== null))
insertSmallTables('employees', data.map(c => c.owner))
insertCustomers(data)
