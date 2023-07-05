
export function jsonp({
  url,
  jsonp
}) {
  return new Promise(resolve => {
    // 1. 创建script标签
    const script = document.createElement('script')
    // 2. src赋值，告诉服务端我要通过jsonp拿数据
    // 2.0 依赖服务端，响应type为text/javascript，脚本内容就是jsonp函数执行
    script.src = `${url}?jsonp=${callback}`
    // 3. script标签插入文本，发起请求，命中对应服务端路由
    document.body.appendChild(script)

    // 2.2 将jsonp函数放到window上，以便服务端调用时传入，后端数据
    window[jsonp] = function (result) {
      delete window.callback
      document.body.removeChild(script)
      resolve(result)
    }
  })
}


