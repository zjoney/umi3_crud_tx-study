import axios from 'axios';
import { Response } from '@/utils/type';

// 检查请求状态
function checkStatus(response: { data: Response; status: number }): Response {
  // console.log(response);
  if (response.status >= 200 && response.status < 300) {
    return { ...response.data };
  }

  return { datas: [], success: false, keywords: '' };
}

export const getList = (params: object) => {
  return axios.get('/api/courseList', { params }).then(checkStatus);
};

// 请求课程分类
export const getTypeList = () => {
  return axios.get('/api/dictionary/type').then(checkStatus);
};

// 添加课程
export const add = (params: object) => {
  return axios.post('/api/course/add', params).then(checkStatus);
};

// 获取编辑课程信息
export const getEditCourse = (params: object) => {
  return axios.get('/api/course/editCourse', { params }).then(checkStatus);
};

// 编辑课程
export const editCourse = (params: object) => {
  return axios.post('/api/course/edit', params).then(checkStatus);
};

// 删除课程
export const deleteCourse = (params: object) => {
  return axios.delete('/api/course/delete', { params }).then(checkStatus);
};
