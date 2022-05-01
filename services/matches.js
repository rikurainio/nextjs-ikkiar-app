import axios from 'axios'
const baseUrl = '/api/matches'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    console.log(response.data)
    return response.data
}

export default { getAll }