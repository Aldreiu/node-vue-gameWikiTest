<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}分类</h1>
    <el-form
      label-width="70px"
      @submit.native.prevent="save"
    >
      <el-form-item label="父级分类">
        <el-select
          v-model="model.parent._id"
          placeholder="请选择父级分类"
        >
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
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
import { getCategoryModel, putCategoryModel, postCategoryModel, getCategoryFatherList } from '@/api/api'
export default {
  props: ['id'],
  data() {
    return {
      model: {
        parent:{},
        name:''
      },
      parents: []
    }
  },
  methods: {
    // 展示数据
    async fetch() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getCategoryModel(this.id)
      this.model = Object.assign({},this.model,res.data)
    },
    // 获取父级
    async fetchParents() {
      const res = await getCategoryFatherList();
      console.log(res);
      this.parents = res.data;
    },
    // 下次看到这个注释 记得封装axios 顺便把所有的接口进行封装成一个文件   先偷个懒(已完成)
    async save() {
      // let res
      if (this.id) {
        // await this.$http.put(`categories/${this.id}`, this.model);
        // 因为通过解耦公用一个组件
        // 通过id 然后进行修改
        await putCategoryModel(this.id, this.model)
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      } else {
        // await this.$http.post('categories', this.model);
        // 创建分类
        await postCategoryModel(this.model)
        this.$message({
          type: 'success',
          message: '添加成功'
        })
      }

      this.$router.push('/categories/list')
    }
  },
  created() {
    this.fetchParents()
    this.id && this.fetch();
  },
}
</script>