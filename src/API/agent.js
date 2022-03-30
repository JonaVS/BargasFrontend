import axios from "axios"

axios.defaults.baseURL = "http://192.168.0.3:1337"

const sleep = delay => {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

// axios.interceptors.response.use(
//   async (response) => {
//     await sleep(2000)
//     return response
//   },
//   error => Promise.reject(error)
// )

const response = (response) => response.data;

const request = {
  get: (url, config = {}) => axios.get(url, config).then(response),
  post: (url, body, config={}) => axios.post(url, body, config).then(response),
  put: (url, body) => axios.put(url, body).then(response),
  delete: url => axios.delete(url).then(response),
}

const product = {
  details: (id) => request.get(`/productos/${id}`)
}

const user = {
  register: (body) => request.post(`auth/local/register`, body),
  login: (body) => request.post('/auth/local', body),
}

const agent = {
  product,
  user
};

export default agent
