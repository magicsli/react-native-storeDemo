import {
    postData,
    getData
} from './request';



// 获取一组列表数据
export const getContact = data => getData("/home/article/helping_agriculture_list", data);




