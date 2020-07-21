import http from '../http'

//  =============== Category =================
//       ------  get ------
// 获取所有列表数据
export const getCategoryList = () => http.get('rest/categories')
// 通过id获取对应的分类列表
export const getCategoryModel = (id) => http.get(`rest/categories/${id}`)

//       ------  post ------
// 新建分类
export const postCategoryModel = (model) => http.post('rest/categories', model)

//       ------  put ------
// 根据id查询分类 并进行编辑
export const putCategoryModel = (id, model) => http.put(`rest/categories/${id}`, model)

//       ------  delete ------
// 根据id 删除 分类
export const delCategoryModel = (id) => http.delete(`rest/categories/${id}`)

//  =============== fatherCategories =================
// 新建父级分类
export const postCategoryFather = (model) => http.post('rest/fatherCategories', model)

// 获取所有父级分类
export const getCategoryFatherList = () => http.get('rest/fatherCategories')

// 分局id获取对应的父级分类
export const getCategoryFatherModel = (id) => http.get(`rest/fatherCategories/${id}`)

// 根据父级id 来进行修改
export const putCategoryFatherModel = (id, model) => http.put(`rest/fatherCategories/${id}`, model)

// genuineid 删除对应父级分类
export const delCategoryFatherModel = (id) => http.delete(`/rest/fatherCategories/${id}`)


//  =============== item =================
// 新建装备
export const postItem = (model) => http.post('rest/items', model)

// 获取所有装备
export const getItemList = () => http.get('rest/items')

// 根据id获取相应的装备
export const getItemModel = (id) => http.get(`rest/items/${id}`)

// 根据id 进行修改
export const putItemModel = (id, model) => http.put(`rest/items/${id}`, model)

// 根据id 删除对应装备
export const delItemModel = (id) => http.delete(`/rest/items/${id}`)

//  =============== Character =================
// 新建角色
export const postCharacter = (model) => http.post('rest/characters', model)
// 获取所有角色
export const getCharacterList = () => http.get('rest/characters')
// 根据id获得相应角色
export const getCharacterModel = (id) => http.get(`rest/characters/${id}`)
// 根据id 进行修改角色
export const PutCharacterModel = (id, model) => http.put(`rest/characters/${id}`, model)
// 根据id 删除对应角色
export const delCharacterModel = (id) => http.delete(`rest/characters/${id}`)