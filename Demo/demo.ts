
import axios from 'axios'

interface Api{
    '/course/buy': {
        id: number
    },
    '/course/comment': {
        id: number,
        message: string
    }
}

function request<T extends keyof Api>(url:T,obj:Api[T]){
    return axios.post(url,obj)
}


request('/course/buy',{id:1})
request('/course/comment',{id:1,message:'嘎嘎好看'})
request('/course/comment',{id:1}) //如果message必传 怎么类型提醒缺少参数
request('/course/404',{id:1}) //接口不存在 类型怎么需要报错
