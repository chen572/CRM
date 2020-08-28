import { action, observable } from 'mobx'
import ClientsService from './ClientsService'

class ClientsStore {
  constructor() {
    this.clientsService = new ClientsService()
  }

  @observable clients = []
  @observable loading = true
  @observable page = 0
  @observable rowsPerPage = 10

  @action async getClients(urlParams = '') {
    this.clients = await this.clientsService.get(urlParams)
    this.loading = false
  }

  @action async addClient(clientObj) {
    this.loading = true
    // this.clients.push(
    console.log(await this.clientsService.post(clientObj))
    this.loading = false
  }

  @action async updateClient(clientObj) {
    this.loading = true
    const newClient = await this.clientsService.put(clientObj)
    this.clients[this.clients.findIndex(c => c.id === newClient.id)] = newClient
    this.loading = false
  }

}

const clientsStore = new ClientsStore()
export default clientsStore