<template>
  <div>
    <h1>父级分类列表</h1>
    <el-table :data="items">
      <el-table-column
        prop="_id"
        label="ID"
        width="250"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="分类名称"
        width="140"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="400"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleClickFatherModel(scope.row)"
            type="info"
            size="small"
          >查看</el-button>
          <el-button
            type="primary"
            size="small"
            @click="handleClickEditOrDel(scope.row,0)"
          >编辑弹窗</el-button>
          <el-button
            type="primary"
            size="small"
            @click="$router.push(`/categories/createFather/edit/${scope.row._id}`)"
          >编辑共存</el-button>
          <el-button
            type="danger"
            size="small"
            @click="handleClickEditOrDel(scope.row,1)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 查看对话框 组件 -->
    <category-dialog
      ref="dialgComponent"
      :dialog-title="dialogTitle"
      :item-model="categoryModelFather"
      :dialog-type="dialogType"
      :category-type="categoryType"
      @fetch="fetch"
    >

    </category-dialog>
  </div>
</template>
<script>
import {  getCategoryFatherList, getCategoryFatherModel,
delCategoryFatherModel } from '@/api/api'
import CategoryDialog from '../components/Category/CategoryDialog'
export default {
  components: { CategoryDialog },
  data() {
    return {
      items: [],
      // 查看的分类列表
      categoryModelFather: {},

      // 控制dialog显示
      // dialogShowModel:false,
      // 控制的dialog的标题
      dialogTitle: "",
      dialogType: null,//根据 true false 来判断是否显示 查看的 还是编辑
      // 父类型的样式 弹框 false
      categoryType: 'CategoryListFather'
    }
  },
  methods: {
    async fetch() {
      const res = await getCategoryFatherList();
      this.items = res.data
    },
    // 弹框 开关
    dialogOff() {
      this.$nextTick(() => {
        this.$refs["dialgComponent"].dialogShowModel = true;

      })
    },
    // 查看单个分类详细信息
    async handleClickFatherModel(row) {
      this.dialogOff();
      // 因为通过数据库查询是异步方法 所以使用async await  不然返回的是promise对象
      const { data: res } = await getCategoryFatherModel(row._id);
      // if(status!==200){
      //   return this.$message.error("查询失败")
      // }
      this.dialogTitle = "查看父级分类"
      this.categoryModelFather = res;
      this.dialogType = true;

    },
    // 通过对 id来进行判断 dialog是删除：1  或者  编辑：0
    handleClickEditOrDel(row, id) {
      if (id == 0) {
        this.dialogOff();
        this.dialogTitle = "编辑分类";
        this.categoryModelFather = row;
        this.dialogType = false;
      } else {
        this.$confirm(`此操作将永久删除该分类${row.name}，是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(async () => {
          await delCategoryFatherModel(row._id);
          this.$message({
            type: 'success',
            message: '删除成功！'
          });
          this.fetch();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消删除'
          })
        })

        // this.fetch();
      }
    },
    // 关闭操作  使用一下 子组件使用父组件的方法
    closeDialog(flag) {
      if (flag) {
        // 刷新表格内容
        this.fetch()
      }
    }
  },
  created() {
    this.fetch()
  },
}
</script>