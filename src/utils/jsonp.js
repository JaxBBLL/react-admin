export default function Jsonp(options) {
  let url = options.url
  let data = options.data
  let oBody = document.getElementsByTagName('body')[0]
  let oScript = document.createElement('script')

  let callbackName = 'cb' + (~~(Math.random() * 0xffffff)).toString(16)
  window[callbackName] = function (result) {
    options.success(result)
  }
  data[options.callback] = callbackName
  oScript.setAttribute('src', url + '?' + format(data))
  oBody.append(oScript)

  function format(data) {
    let str = ''
    for (var p in data) {
      str += encodeURIComponent(p) + '=' + encodeURIComponent(data[p]) + '&'
    }
    return str.slice(0, -1)
  }
}