import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

// Category
import CategoryEdit from "@/views/CategoryEdit";
import CategoryList from "@/views/CategoryList";
// CategoryFather
import CategoryEditFather from "@/views/CategoryEditFather";
import CategoryListFather from "@/views/CategoryListFather";
// Item
import ItemList from "@/views/ItemList";
import ItemEdit from "@/views/ItemEdit";
// Character
import CharacterEdit from "@/views/CharacterEdit";
import CharacterList from "@/views/CharacterList";
// Article
import ArticleEdit from "@/views/ArticleEdit";
import ArticleList from "@/views/ArticleList";
// Essay
import EssayList from "@/views/EssayList";
import EssayEdit from "@/views/EssayEdit";
// Ad
import AdList from "@/views/AdList";
import AdEdit from "@/views/AdEdit";
// Admin_user
import AdminUserList from "@/views/AdminUserList";
import AdminUserEdit from "@/views/AdminUserEdit";

// Login
import Login from "@/views/Login";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    // 在路由记录中添加一个路由元信息 用来判断是否登录
    path: "/login",
    name: "Login",
    component: Login,
    meta:{isPublic:true}
  },

  {
    path: "/",
    name: "Main",
    component: Main,
    // redirect: to => {
    //   if (!localStorage.token) return "/login";
    //   if (localStorage.token) return "/home";
    // },
    children: [
      // 分类列表
      {
        path: "/categories/create",
        component: CategoryEdit,
      },
      // 使用router的 props进行对组件的解耦 是组件能够复用
      {
        path: "/categories/edit/:id",
        component: CategoryEdit,
        props: true,
      },
      {
        path: "/categories/list",
        component: CategoryList,
      },
      // 父级分类
      {
        path: "/categories/createFather",
        component: CategoryEditFather,
      },
      {
        path: "/categories/createFather/edit/:id",
        component: CategoryEditFather,
        props: true,
      },
      {
        path: "/categories/listFather",
        component: CategoryListFather,
      },
      // Item
      {
        path: "/items/create",
        component: ItemEdit,
      },
      {
        path: "/items/edit/:id",
        component: ItemEdit,
        props: true,
      },
      {
        path: "/items/list",
        component: ItemList,
      },
      // Article
      {
        path: "/articles/create",
        component: ArticleEdit,
      },
      {
        path: "/articles/edit/:id",
        component: ArticleEdit,
        props: true,
      },
      {
        path: "/articles/list",
        component: ArticleList,
      },
      // character
      {
        path: "/characters/create",
        component: CharacterEdit,
      },
      {
        path: "/characters/edit/:id",
        component: CharacterEdit,
        props: true,
      },
      {
        path: "/characters/list",
        component: CharacterList,
      },
      // Essay
      {
        path: "/essays/create",
        component: EssayEdit,
      },
      {
        path: "/essays/edit/:id",
        component: EssayEdit,
        props: true,
      },
      {
        path: "/essays/list",
        component: EssayList,
      },
      // ad
      {
        path: "/ads/create",
        component: AdEdit,
      },
      {
        path: "/ads/edit/:id",
        component: AdEdit,
        props: true,
      },
      {
        path: "/ads/list",
        component: AdList,
      },
      // admin_user
      {
        path: "/admin_users/create",
        component: AdminUserEdit,
      },
      {
        path: "/admin_users/edit/:id",
        component: AdminUserEdit,
        props: true,
      },
      {
        path: "/admin_users/list",
        component: AdminUserList,
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to,from,next) =>{
  console.log(to);
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next();
})

export default router;
