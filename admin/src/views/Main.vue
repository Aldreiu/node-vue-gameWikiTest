<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside
      width="200px"
      style="height:100vh;background-color:#545c64;overflow:hidden;"
    >
      <el-menu
        router
        
        :default-active="$route.path"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-s-grid"></i>分离管理</template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/categories/createFather">新建父级分类</el-menu-item>
            <el-menu-item index="/categories/listFather">父级分类列表</el-menu-item>
            <el-menu-item index="/categories/create">新建子分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-lock"></i>内容管理</template>
          <el-menu-item-group>
            <template slot="title">装备</template>
            <el-menu-item index="/items/create">新建装备</el-menu-item>
            <el-menu-item index="/items/list">装备列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">物品</template>
            <el-menu-item index="/articles/create">新建物品材料</el-menu-item>
            <el-menu-item index="/articles/list">物品材料列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">角色</template>
            <el-menu-item index="/characters/create">新建角色</el-menu-item>
            <el-menu-item index="/characters/list">角色列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-s-ticket"></i>运营管理</template>
          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/essays/create">新建文章</el-menu-item>
            <el-menu-item index="/essays/list">文章列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">广告位</template>
            <el-menu-item index="/ads/create">新建广告位</el-menu-item>
            <el-menu-item index="/ads/list">广告位列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-lock"></i>账号管理</template>
          <el-menu-item-group>
            <template slot="title">用户账号</template>
            <el-menu-item index="/admin_users/create">新建账号</el-menu-item>
            <el-menu-item index="/admin_users/list">编辑账号</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container text-color="#fff">
      <el-header style="text-align: right; font-size: 12px;background-color:#545c6">
        <el-dropdown>
          <i
            class="el-icon-setting"
            style="margin-right: 15px"
          ></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>Aldreiu</span>
      </el-header>

      <el-main>
        <div
          v-if="$route.name=='Main'"
          class="mainPic"
        >
          <div class="cube">
            <div class="img1"></div>
            <div class="img2"></div>
            <div class="img3"></div>
            <div class="img4"></div>
            <div class="img5"></div>
            <div class="img6"></div>
          </div>
        </div>
        <!-- 坑 由于 Vue 会复用相同组件 使用key 是编辑和新增两个路由的$route.path并不一样, 所以组件被强制不复用, -->
        <router-view :key="$route.path" v-else></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.mainPic {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainPic .cube{
  width: 250px;
  height: 250px;
  transform-style: preserve-3d;
  animation: rotate-cube 10s ease-in-out infinite;
}

.mainPic .cube>div{
  width: 250px;
  height:250px;
  background-size: cover;
  background-position: center center;
  opacity: 0.9;
  position: absolute;
}

.cube .img1{
  background-image: url(http://localhost:5000/uploads/9730d6fdf8b68024a67d7d8a137792d0);
  transform: translateZ(125px);
}

.cube .img2{
  background-image: url(http://localhost:5000/uploads/edd3ed0c05a0f4efdf3a8589fd0cd382);
  transform: rotateY(90deg) translateZ(125px);
}

.cube .img3{
  background-image: url(http://localhost:5000/uploads/5d336f15f1d93de2ac39b743eb41a01e);
  transform: rotateY(-90deg) translateZ(125px);
}

.cube .img4{
  background-image: url(http://localhost:5000/uploads/4e339bfc440eab4805f996f9651b2db7);
  transform: rotateX(90deg) translateZ(125px);
}

.cube .img5{
  background-image: url(http://localhost:5000/uploads/0ac9044fd1e583829aa2828b32d961cf);
  transform: rotateX(-90deg) translateZ(125px);
}

.cube .img6{
  background-image: url(http://localhost:5000/uploads/378b840346bdf26e3746bab32ab9a42e);
  transform: rotateY(-180deg) translateZ(125px);
}

.el-menu {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  margin-right: -1em;
}
.el-header {
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

@keyframes rotate-cube{
  0%{
    transform: rotateX(0deg) rotateY(0deg);
  }
  /* 右 */
  15%{
    transform: rotateY(-90deg);
  }
  /* 上 */
  30%{
    transform: rotateX(-90deg);
  }
  /* 左 */
  45%{
    transform: rotateY(90deg);
  }
  /* 下 */
  60%{
    transform: rotateX(90deg);
  }
  75%{
    transform: rotateY(180deg);
  }
  100%{
    transform: rotateX(0deg) rotateY(0deg);
  }
}
</style>

<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  },
  created() {
    console.log(this.$route);
  },
};
</script>