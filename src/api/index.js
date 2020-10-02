import axios from 'axios'

const apiInstance =  axios.create({
    baseURL: `https://api.nytimes.com/svc/`,
    params: {
        'api-key' : 'lIEFzAbOI62VU2pN4A8AAbSqnUf0jEUr'
    }
  });


  export default apiInstance;