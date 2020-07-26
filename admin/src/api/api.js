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

//  =============== Article =================
// 新建物品材料
export const postArticle = (model) => http.post('rest/articles', model)

// 获取所有物品材料
export const getArticleList = () => http.get('rest/articles')

// 根据id获取相应的物品材料
export const getArticleModel = (id) => http.get(`rest/articles/${id}`)

// 根据id 进行修改
export const putArticleModel = (id, model) => http.put(`rest/articles/${id}`, model)

// 根据id 删除对应物品材料
export const delArticleModel = (id) => http.delete(`/rest/articles/${id}`)

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

//  =============== Essay =================
// 新建文章
export const postEssay = (model) => http.post('rest/essays', model)
// 获取所有文章
export const getEssayList = () => http.get('rest/essays')
// 根据id获得相应文章
export const getEssayModel = (id) => http.get(`rest/essays/${id}`)
// 根据id 进行修改文章
export const PutEssayrModel = (id, model) => http.put(`rest/essays/${id}`, model)
// 根据id 删除对应文章
export const delEssayModel = (id) => http.delete(`rest/essays/${id}`)

// =============== Ad =================
// 新建广告
export const postAd = (model) => http.post('rest/ads', model)
// 获取所有广告
export const getAdList = () => http.get('rest/ads')
// 根据id获得相应广告
export const getAdModel = (id) => http.get(`rest/ads/${id}`)
// 根据id 进行修改广告
export const PutAdrModel = (id, model) => http.put(`rest/ads/${id}`, model)
// 根据id 删除对应广告
export const delAdModel = (id) => http.delete(`rest/ads/${id}`)