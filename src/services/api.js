import axios from 'axios'

const api = axios.create(
{
    baseURL: 'https://clone-dropbox-emmanuel.herokuapp.com/'
})

export default api