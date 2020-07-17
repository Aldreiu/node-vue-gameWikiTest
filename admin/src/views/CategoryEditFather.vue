<template>
  <div>
    <h1>{{id?'编辑':'新建'}}父级分类</h1>
    <el-form
      label-width="70px"
      @submit.native.prevent="save"
    >
      <el-form-item label="名称">
        <el-input v-model="modelFather.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
        >保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { postCategoryFather, getCategoryFatherModel,putCategoryFatherModel } from '@/api/api'
export default {
  props: ['id'],
  data() {
    return {
      modelFather: {}
    }
  },
  methods: {
    // 展示单个父级数据
    async fetch() {
      const { data: res } = await getCategoryFatherModel(this.id)
      console.log(res);
      this.modelFather = res;
    },
    async save() {
      if(this.id) {
        await putCategoryFatherModel(this.id,this.modelFather)
        this.$message({
        type: 'success',
        message: '修改成功'
      })
      }else{
        await postCategoryFather(this.modelFather);
        this.$message({
        type: 'success',
        message: '添加成功'
      })
      }
      
      this.$router.push('/categories/listFather')
    }
  },
  created() {
    this.id && this.fetch();
  },
}
</script>

<style lang="scss" scoped>
</style>