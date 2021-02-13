import axios from 'axios'

const instance = axios.create ({
    // baseURL: 'https://hiddencontact.xyz/',
    baseURL: 'http://localhost:3005/'
})


export default instance