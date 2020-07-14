import axios from 'axios'

const api = axios.create({
    baseURL: 'http://www.colr.org/json/scheme/random',
    timeout: 2000
})

export default api