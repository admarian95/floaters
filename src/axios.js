import axios from 'axios'

const axiosInstance = axios.create()

export const makeRequest = (method , url) => {
        axios.get({
            method,
            url,
        })
}

// export default makeRequest()
