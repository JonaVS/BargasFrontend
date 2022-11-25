import axios from "axios"
import { userOrdersQuery } from "./paramsQueries"

axios.defaults.baseURL = process.env.GATSBY_STRAPI_API_URL

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
  get: (url, config={}) => axios.get(url, config).then(response),
  post: (url, body={}, config={}) => axios.post(url, body, config).then(response),
  put: (url, body={}, config={}) => axios.put(url, body, config).then(response),
  delete: (url, config={}) => axios.delete(url, config).then(response),
}

const generalInfo = {
  websiteInfo: () => request.get('/general-website-info')
}

const product = {
  details: (id) => request.get(`/products/${id}?populate=%2A`)
}

const event = {
  getEvents: () => request.get('/events?populate=%2A') 
}

const user = {
  register: (body, config) => request.post(`auth/local/register`, body, config),
  login: (body, config) => request.post('/auth/local', body, config),
  logout: (body, config) => request.post('/auth/logout', body, config),
  forgotPassword: (body) => request.post('/auth/forgot-password', body),
  resetPassword: (body) => request.post('/auth/reset-password', body),
  getLoggedInUser: (config) => request.get('/users/me', config),
  changePassword: (body, config) => request.post('/auth/change-password', body, config),
  getUserOrders: (userId, config) => request.get(`/user/${userId}/orders?${userOrdersQuery}`, config)
}

const ordering = {
  placeOrder: (body, config) => request.post('/order/place-order', body, config)
}

const contact = {
  contactFormSubmission: (body) => request.post('/contact-page/form-submission', body)
}

const agent = {
  generalInfo,
  product,
  event,
  user,
  ordering,
  contact
};

export default agent
