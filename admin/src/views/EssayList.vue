<template>
  <div>
    <h1>文章列表</h1>
    <el-table :data="items">
      <el-table-column
        prop="_id"
        label="ID"
        width="250"
      ></el-table-column>
      <el-table-column
        prop="title"
        label="新闻标题"
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
            @click="handleClickModel(scope.row)"
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
            @click="$router.push(`/essays/edit/${scope.row._id}`)"
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
      :item-model="categoryModel"
      :dialog-type="dialogType"
      :router-type="routerType"
      :dialog-titlea="dialogTitleA"
      @fetch="fetch"
    >

    </category-dialog>
  </div>
</template>
<script>
import { getEssayList, delEssayModel, getEssayModel } from '@/api/api'
import CategoryDialog from '../components/Category/CategoryDialog'
export default {
  components: { CategoryDialog },
  data() {
    return {
      items: [],
      // 查看的分类列表
      categoryModel: {},

      // 控制dialog显示
      // dialogShowModel:false,
      // 控制的dialog的标题
      dialogTitle: "",
      dialogType: null,//根据 true false 来判断是否显示 查看的 还是编辑
      // 控制使用的是那种组件
      routerType: 'CategoryList',
      dialogTitleA: '分类'
    }
  },
  methods: {
    async fetch() {
      const res = await getEssayList();
      this.items = res.data
    },
    // 弹框 开关
    dialogOff() {
      this.$nextTick(() => {
        this.$refs["dialgComponent"].dialogShowModel = true;

      })
    },
    // 查看单个分类详细信息
    async handleClickModel(row) {
      this.dialogOff();
      // 因为通过数据库查询是异步方法 所以使用async await  不然返回的是promise对象
      // const res = await getCategoryModel(id);
      // // console.log(res);
      // this.model = res.data;

      // 不通过数据进行 通过element自带的row
      const { data: res } = await getEssayModel(row._id);

      // if(status!==200){
      //   return this.$message.error("查询失败")
      // }
      this.dialogTitle = "查看分类"
      this.categoryModel = res;
      this.dialogType = true;

    },
    // 通过对 id来进行判断 dialog是删除：1  或者  编辑：0
    handleClickEditOrDel(row, id) {
      if (id == 0) {
        this.dialogOff();
        this.dialogTitle = "编辑分类";
        this.categoryModel = row;
        this.dialogType = false;
      } else {
        this.$confirm(`此操作将永久删除该分类${row.name}，是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(async () => {
          await delEssayModel(row._id);
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