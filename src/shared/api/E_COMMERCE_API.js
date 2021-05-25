import Axios from 'axios'

const productionAPI = 'https://ehandeljsf.herokuapp.com'
const developmentAPI = 'http://localhost:3001'

const E_COMMERCE_API = Axios.create({
    baseURL: productionAPI
})

export default E_COMMERCE_API