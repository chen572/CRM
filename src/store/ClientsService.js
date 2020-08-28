import axios from 'axios'
const webApiUrl = 'http://localhost:3001/clients'

class ClientsService {

  get = async (urlParams) => {
    const response = await axios({ method: 'GET', url: webApiUrl + '?' + urlParams })
    return response.data
  }

  post = async (body) => {
    const response = await axios({ method: 'POST', url: webApiUrl, data: body })
    return response.data
  }

  put = async (body) => {
    const response = await axios({ method: 'PUT', url: webApiUrl, data: body })
    return response.data
  }

}

export default ClientsService