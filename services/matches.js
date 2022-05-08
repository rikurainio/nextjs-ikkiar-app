import axios from 'axios'
const baseUrl = '/api/matches'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response
}

export default { getAll }