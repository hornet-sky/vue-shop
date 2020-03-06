import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default function ajax (url, params, method = "GET") {
  return new Promise((resolve, reject) => {
    method = method.toUpperCase()
    if(method === 'GET') {
      if(params && (typeof params === 'string' || params instanceof URLSearchParams || Object.keys(params).length > 0)) {
        const queryStr = new URLSearchParams(params).toString()
        url += `?${queryStr}`
      }
      Vue.http.get(url)
        .then(resp => {
          // 处理逻辑同POST类似
        }, error => {
          // 处理逻辑同POST类似
        })
    } else if(method === 'POST') {
      /* 这些都不需要你自己处理，vue-resource内部会帮你处理
      let contentType = 'application/x-www-form-urlencoded'
      let body = ''
      if(params) {
        if(typeof params === 'string'|| params instanceof URLSearchParams) {
          body = new URLSearchParams(params).toString()
        } else if(Object.keys(params).length > 0) {
          contentType = 'application/json'
          body = JSON.stringify(params)
        }
      }
      const options = {
        headers: { 'Content-Type': contentType },
        body
      }
      */
      Vue.http.post(url, params)
        .then(resp => {
          if(resp.body.result != 'ok') {
            reject(new Error(resp.body.error_description))
            return
          }
          resolve(resp.body.data)
        }, error => {
          if(!(error instanceof Error) && error.status) {
            reject(new Error(error.status + (error.statusText ? ' ' + error.statusText : '')))
            return;
          }
          reject(error)
        })
    } else {
      throw new Error('暂时只支持GET、POST请求方式')
    }
  })
}