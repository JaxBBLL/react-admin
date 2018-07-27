import querystring from 'querystring';

const headers =  new Headers({
  'Content-Type': 'application/x-www-form-urlencoded' // 指定提交方式为表单提交
})

function post(api, data = {}) {
  const body = []
  for (let k in data) {
    body.push([k, data[k]])
  }
  return fetch(api, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: new URLSearchParams(body).toString()
  })
  .then((res)=>{
    return res.text()
  })
  .then((res)=>{
    return JSON.parse(res)
  })
}

function get(api, data = {}) {
  let path = api + '?' + querystring.stringify(data)
  return fetch(path, { // 在URL中写上传递的参数
    method: 'GET',
    credentials: 'include',
    headers
  })
  .then((res)=>{
    return res.text()
  })
  .then((res)=>{
    return JSON.parse(res)
  })
}

const http = {
  post,
  get
};

export default http;
