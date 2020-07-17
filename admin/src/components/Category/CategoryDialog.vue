<template>
  <transition>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogShowModel"
      width="30%"
      :before-close="handleCloseShowModel"
    >
      <el-form
        :model="itemModel"
        :rules="rules"
        ref="dialogModel"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="ID">
          <el-input
            v-model="itemModel._id"
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="父级分类名称"
          v-if="itemModel.parent"
        >
          <span v-if="dialogType" >{{ itemModel.parent.name }}</span>
          <el-input
            v-model="itemModel.parent.name"
            disabled
            v-else
          ></el-input>
        </el-form-item>
        <el-form-item
          label="分类名称"
          prop="name"
        >
          <span v-if="dialogType">{{ itemModel.name }}</span>
          <el-input
            v-model="itemModel.name"
            v-else
          ></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogCloseModel">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogShowModel = false"
          v-if="dialogType"
        >确 定</el-button>
        <el-button
          type="primary"
          @click="dialogEditModel"
          v-else
        >保 存</el-button>
      </span>
    </el-dialog>
  </transition>
</template>

<script>
import { putCategoryModel, putCategoryFatherModel } from '@/api/api'
export default {
  name: "CategoryDialog",
  props: {
    dialogTitle: {
      type: String,
      default: "查看分类"
    },
    itemModel: {
      type: Object,
      default: function () {
        return {};
      }
    },
    dialogType: {
      type: Boolean,
      default: false
    },
    // 控制编辑保存哪个 组件的标识
    categoryType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dialogShowModel: false,
      rules: {

      },
      // 相当于深拷贝数据  防止造成双向绑定的bug 
      // dialogModel: JSON.parse(JSON.stringify(this.itemModel))

    }
  },
  methods: {
    // 刷新父级页面list
    fetchCategoryListFather() {
      this.$emit('fetch')
    },
    handleCloseShowModel(done) {
      done();
    },
    async dialogEditModel() {
      // 修改
      if (this.categoryType === 'CategoryList') {
        await putCategoryModel(this.itemModel._id, this.itemModel);
        this.fetchCategoryListFather();
      } else if (this.categoryType === 'CategoryListFather') {
        await putCategoryFatherModel(this.itemModel._id, this.itemModel);
        this.fetchCategoryListFather();
      }

      this.$message({
        type: 'success',
        message: '修改成功'
      })
      this.dialogShowModel = false
    },
    dialogCloseModel() {
      this.dialogShowModel = false;
      this.$refs.dialogModel.resetFields()
    }
  },
  created() {
    // console.log(this.itemModel);
    // console.log(this.dialogModel);
    // this.dialogModel = this.itemModel
  },
}
</script>

<style lang="scss" scoped>
</style>