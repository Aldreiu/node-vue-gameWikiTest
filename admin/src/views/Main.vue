<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside
      width="200px"
      style="height:100%;background-color:#545c64;overflow:hidden;"
    >
      <el-menu
        router
        :default-openeds="['1']"
        :default-active="$route.path"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-s-grid"></i>内容管理</template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/categories/createFather">新建父级分类</el-menu-item>
            <el-menu-item index="/categories/listFather">父级分类列表</el-menu-item>
            <el-menu-item index="/categories/create">新建子分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
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
          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/essays/create">新建文章</el-menu-item>
            <el-menu-item index="/essays/list">文章列表</el-menu-item>
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
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-menu {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
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
  }
};
</script>