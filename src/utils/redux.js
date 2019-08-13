import http from './http'

export function createAction(options) {
  const { method, url, payload, type } = options;
  return dispatch => {
    return http(method, url, payload).then(res => {
      dispatch({
        type,
        payload: res.result
      })
      return res
    })
  }
}
