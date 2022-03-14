import axios from 'axios';

// TODO 自己决定获取token的方式
const token = 'fake token';
// 添加请求拦截器
axios.interceptors.request.use(
  function (config: any) {
    // 在发送请求之前做些什么
    config.headers = {
      token: token,
    };
    return config;
  },
  function (error: any) {
    console.error('接口请求报错（请求拦截器）：', error);
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response: any) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const resObj = response && response.data ? response.data : {};
    const resBody = resObj.responseBody;
    if (resBody.code !== '1') {
      // TODO 这里可以使用UI库的弹窗提示
      console.error(resBody.message);
    }
    return resBody;
  },
  function (error: any) {
    console.error('接口请求报错（响应拦截器）：', error);
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

const apiRequestModel = (data: any = {}) => ({
  requestBody: {
    data,
  },
  requestHead: {
    token: token,
  }
})

export {
  axios,
  apiRequestModel,
}
