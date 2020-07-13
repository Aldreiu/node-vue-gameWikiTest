<template>
  <div class="about">
    <h1>新建分类</h1>
    <el-form
      label-width="70px"
      @submit.native.prevent="save"
    >
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
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
export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    // 下次看到这个注释 记得封装axios 顺便把所有的接口进行封装成一个文件   先偷个懒
    async save() {
      await this.$http.post('categories', this.model);
      this.$message({
        type: 'success',
        message: '保存成功'
      })
      this.$router.push('/categories/list')
    }
  },
}
</script>