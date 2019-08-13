import Axios from 'axios'
import querystring from 'querystring'

const CONTENT_TYPE = 'form'

const options = {
  baseURL: process.env.NODE_ENV === 'development' ? '/proxyApi/' : '',
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': CONTENT_TYPE === 'json' ? 'application/json; charset=utf-8' : 'application/x-www-form-urlencoded'
  }
}

const axios = Axios.create(options)

//  添加一个请求拦截器
axios.interceptors.request.use(function(config) {
    return config
  }, function(error) {
    return Promise.reject(error)
  })
  //  添加一个响应拦截器
axios.interceptors.response.use(res => {
  if (res.status === 200) {}
  return res
}, err => {
  return Promise.reject(err)
})

var http = function(method, url, data = {}) {
  const config = {
    url,
    method
  }
  if (method.toUpperCase() !== 'GET') {
    data = CONTENT_TYPE === 'json' ? JSON.stringify(data) : querystring.stringify(data)
    config.data = data
  } else {
    config.params = data
  }
  return new Promise((resolve, reject) => {
    axios(config).then(({ data }) => {
      resolve(data)
    })
  })
}

export default http;
