import axios from 'axios'

const instance = axios.create ({
    baseURL: 'http://hiddencontact.xyz/'
})


export default instance