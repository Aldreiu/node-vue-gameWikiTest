import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

// Category
import CategoryEdit from '@/views/CategoryEdit'
import CategoryList from '@/views/CategoryList'
// CategoryFather
import CategoryEditFather from '@/views/CategoryEditFather'
import CategoryListFather from '@/views/CategoryListFather'
// Item
import ItemList from '@/views/ItemList'
import ItemEdit from '@/views/ItemEdit'
// Character
import CharacterEdit from '@/views/CharacterEdit'
import CharacterList from '@/views/CharacterList'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      // 分类列表
      {
        path: '/categories/create',
        component: CategoryEdit
      },
      // 使用router的 props进行对组件的解耦 是组件能够复用
      {
        path: '/categories/edit/:id',
        component: CategoryEdit,
        props: true
      },
      {
        path: '/categories/list',
        component: CategoryList
      },
      // 父级分类
      {
        path: '/categories/createFather',
        component: CategoryEditFather,
      },
      {
        path: '/categories/createFather/edit/:id',
        component: CategoryEditFather,
        props: true
      },
      {
        path: '/categories/listFather',
        component: CategoryListFather,
      },
      // Item
      {
        path: '/items/create',
        component: ItemEdit
      },
      {
        path: '/items/edit/:id',
        component: ItemEdit,
        props: true
      },
      {
        path: '/items/list',
        component: ItemList
      },
      // character
      {
        path: '/characters/create',
        component: CharacterEdit
      },
      {
        path: '/characters/edit/:id',
        component: CharacterEdit,
        props: true
      },
      {
        path: '/characters/list',
        component: CharacterList
      },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router