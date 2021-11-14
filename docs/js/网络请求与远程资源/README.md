# 网络请求与远程资源

## XHR（XMLHttpRequest）

### 使用 XMLHttpRequest

~~~ javascript
let xhr = new XMLHttpRequest()
~~~

首先要调用open()方法

|  参数   | 描述  |注意|
|  ----  | ----  |----|
| string  | 请求类型 "get" "post" ||
| string  | 请求url |相对于代码所在页面，也可以使用绝对路径|
| boolean  | 是否异步 ||

::: tip 调用open()方法不会发送请求，只是为发送请求做好准备

只能访问同源URL，也就是域名相同、端口相同、协议相同
:::

之后调用send()方法，接受一个参数，作为请求体发送的数据，如果不需要发送请求体，则传null

响应后，XHR以下属性被填充上数据

|  属性   | 描述  |
|  ----  | ----  |
| responseText  | 作为响应体返回的文本 |
| responseXML  | 如果响应的内容类型是"text/xml"或"application/xml"，那就是响应数据的XML DOM文档 |
| status  | 响应的HTTP状态 |
| statusText  | 响应的HTTP状态描述 |

收到响应后要检查status属性以确保响应正确返回，一般，HTTP状态码为2xx则表示成功，此时responseText和responseXML属性中会有内容，如果HTTP状态码为304，则表示资源
未修改过，是从浏览器缓存中直接拿取的，这也代表响应有效。

#### 同步请求

```javascript
const xhr = new XMLHttpRequest()
xhr.open('get', 'example.txt', false)
xhr.send(null)

if ((xhr.status > 200 && xhr.status < 300) || xhr.status === 304) {
    console.log(xhr.responseText)
} else {
    console.log('error', xhr.status)
}
```

::: tip 
应该检查status而不是statusText，后者被证明在跨浏览器的情况下不可靠
:::

#### 异步请求

readyState

### HTTP头部

默认情况下，XHR请求回发送以下头部字段

|字段名|描述|
|----|----|
|Accept|浏览器可以处理的内容类型|
|Accept-Charset|浏览器可以显示的字符集|
|Accept-Encoding|浏览器可以处理的压缩编码类型|
|Accept-Language|浏览器使用的语言|
|Connection|浏览器与服务器的连接类型|
|Cookie|页面中设置的Cookie|
|Host|发送请求的页面所在的域|
|Referer|发送请求的页面的URI|
|User-Agent|浏览器的用户代理字符串|

### GET请求

GET查询字符串中的每个名和值都必须使用`encodeURIComponent()`编码，所有名和值对都必须以&号分隔

默认情况下，POST请求与提交表单是不一样的，但可以使用XHR模拟表单提交，第一步需要把`Content-Type`头部设置为`application/x-www-formurlencoded`，这是提交表单时使用的内容类型。
POST数据，用serialize()函数将表单序列化再发送给服务器。

### XMLHttpRequest Level 2
1. FormData类型
2. overrideMimeType()方法

## 进度事件
## 跨源资源共享
使用XHR进行Ajax通信的一个限制就是跨源安全策略，默认情况下，XHR只能访问与发起请求的页面在同一个域内的资源。

跨源资源共享（CORS，Cross-Origin Resource Sharing）定义了浏览器与服务器如何实现跨源通信。 CORS背后的基本思路就是使用自定义的HTTP头部允许浏览器与服务器相互了解，以确保请求或响应应该成功还是失败。

对于简单的请求，比如GET和POST请求，没有自定义头部，而且请求体是text/plain类型，这样的请求在发送时会有一个额外的头部叫Origin。Origin头部包含发送请求的页面的源（协议、域名和端口），以便服务器确定是否为其提供响应。

