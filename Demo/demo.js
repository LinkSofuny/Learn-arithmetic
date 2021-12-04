"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
function request(url, obj) {
    return axios_1["default"].post(url, obj);
}
request('/course/buy', { id: 1 });
request('/course/comment', { id: 1, message: '嘎嘎好看' });
request('/course/comment', { id: 1 }); //如果message必传 怎么类型提醒缺少参数
request('/course/404', { id: 1 }); //接口不存在 类型怎么需要报错
