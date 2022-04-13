import axios from "axios";
import { LoadingBar } from "quasar";
import { Dialog } from "quasar";
import Cookies from 'js-cookie';
const TOKEN_APIS = ['/gzh/report/day', '/gzh/report/month', '/gzh/report/year']

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// 创建axios实例
const http = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASEURL,
  // 超时
  timeout: 15000,
  // withCredentials: true,
});

// 请求拦截器
http.interceptors.request.use(
  function (config) {
    const arr = TOKEN_APIS.filter(item => config.url.includes(item))
    if (arr.length) {
      config.headers.username = Cookies.get('username')
      config.headers.token = Cookies.get('token')
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

let errorDialog = null;
const errorDialogIgnoreCodeList = [];
const errorIgnoreApiList = [""];
const msgMap = {
  // "-1": "请求超时",
};

function registerErrorHandler(error) {
  if (!errorDialog && !errorDialogIgnoreCodeList.includes(error.errcode)) {
    errorDialog = Dialog.create({
      title: "操作失败",
      message: msgMap[error.errcode] || error.errmsg || "未知错误，请联系服务人员",
      ok: "确定",
      cancel: false,
      persistent: true,
    })
      .onOk(() => {
        errorDialog = null;
      })
      .onCancel(() => {
        errorDialog = null;
      })
      .onDismiss(() => {
        errorDialog = null;
      });
  }
}

// 响应拦截器
http.interceptors.response.use(
  function (response) {
    const res = response.data;
    if (res.errcode === 200) {
      return res;
    }
    if (!errorIgnoreApiList.includes(response.config.url)) {
      registerErrorHandler(res);
    }
    return res;
  },
  function (error) {
    registerErrorHandler(error);
    console.log(error);
  }
);

LoadingBar.setDefaults({
  color: "light-blue-6",
  size: "4px",
  position: "top",
});

export default http;
