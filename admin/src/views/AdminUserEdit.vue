<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}账号</h1>
    <el-form
      label-width="70px"
      @submit.native.prevent="save"
    >
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
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
import { getAdminUserModel, putAdminUserrModel, postAdminUser } from '@/api/api'
export default {
  props: ['id'],
  data() {
    return {
      model: {},
    }
  },
  methods: {
    // 展示数据
    async fetch() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getAdminUserModel(this.id)
      this.model = res.data;
    },
    async save() {
      // let res
      if (this.id) {
        // await this.$http.put(`categories/${this.id}`, this.model);
        // 因为通过解耦公用一个组件
        // 通过id 然后进行修改
        await putAdminUserrModel(this.id, this.model)
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      } else {
        // await this.$http.post('categories', this.model);
        // 创建分类
        await postAdminUser(this.model)
        this.$message({
          type: 'success',
          message: '添加成功'
        })
      }

      this.$router.push('/admin_users/list')
    }
  },
  created() {
    this.id && this.fetch();
  },
}
</script>