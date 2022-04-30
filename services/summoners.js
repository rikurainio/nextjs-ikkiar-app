import axios from 'axios'
const baseUrl = '/api/summoners'
const devUrl = 'http://localhost:3001/api/summoners'

const getAll = async () => {
    const response = await axios.get(devUrl)
    return response.data
}

const getBest25 = async () => {
    const response = await axios.get(devUrl)
    response.data.sort((a,b) => (a.points < b.points) ? 1 : -1)
    response.data.slice(0, 25)
    return response
}

export default { getAll, getBest25 }