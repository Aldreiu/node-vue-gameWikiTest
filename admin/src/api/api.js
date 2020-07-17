import http from '../http'

//  =============== Category =================
//       ------  get ------
// 获取所有列表数据
export const getCategoryList = () => http.get('categories')
// 通过id获取对应的分类列表
export const getCategoryModel = (id) => http.get(`categories/${id}`)

//       ------  post ------
// 新建分类
export const postCategoryModel = (model) => http.post('categories', model)

//       ------  put ------
// 根据id查询分类 并进行编辑
export const putCategoryModel = (id, model) => http.put(`categories/${id}`, model)

//       ------  delete ------
// 根据id 删除 分类
export const delCategoryModel = (id) => http.delete(`categories/${id}`)

//  =============== CategoryFather =================
// 新建父级分类
export const postCategoryFather = (model) => http.post('categoryFather', model)

// 获取所有父级分类
export const getCategoryFatherList = () => http.get('categoryFather')

// 分局id获取对应的父级分类
export const getCategoryFatherModel = (id) => http.get(`categoryFather/${id}`)

// 根据父级id 来进行修改
export const putCategoryFatherModel = (id, model) => http.put(`categoryFather/${id}`, model)

// genuineid 删除对应父级分类
export const delCategoryFatherModel = (id) => http.delete(`/categoryFather/${id}`)