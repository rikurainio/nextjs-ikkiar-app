import axios from 'axios'
const baseUrl = '/api/matches'
const devUrl = 'http://localhost:3001/api/matches'

const getAll = async () => {
    const response = await axios.get(devUrl)
    console.log(response.data)
    return response.data
}

export default { getAll }