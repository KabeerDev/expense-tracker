import axiosRaw from 'axios'

const BASE_URL = 'http://127.0.0.1:3000'

const axios = axiosRaw.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

export default axios;