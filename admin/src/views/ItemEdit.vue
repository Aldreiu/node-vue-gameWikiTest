<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}装备</h1>
    <el-form
      label-width="70px"
      @submit.native.prevent="save"
    >
      <el-form-item label="装备名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="装备图片">
        <el-upload
          :headers="getAutorizationHeaders()"
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="afterUpload"
          name="icon"
        >
          <img
            v-if="model.icon"
            :src="model.icon"
            class="avatar"
          >
          <i
            v-else
            class="el-icon-plus avatar-uploader-icon"
          ></i>
        </el-upload>
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
import { putItemModel, postItem, getItemModel } from '@/api/api'
export default {
  props: ['id'],
  data() {
    return {
      model: {},
      parents: []
    }
  },
  methods: {
    afterUpload(res) {
      console.log(res);
      // this.model.icon = res.url
      // 因为模型没有定义子级 会形成数据响应式问题 会可能付不上   自己加的话 使用set 显示复值
      this.$set(this.model, 'icon', res.url)
    },
    // 展示数据
    async fetch() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getItemModel(this.id)
      this.model = res.data;
    },
    // 新建数据
    fetchCreate() {
      this.model = {}
    },

    // 下次看到这个注释 记得封装axios 顺便把所有的接口进行封装成一个文件   先偷个懒(已完成)
    async save() {
      // let res
      if (this.id) {
        // await this.$http.put(`categories/${this.id}`, this.model);
        // 因为通过解耦公用一个组件
        // 通过id 然后进行修改
        await putItemModel(this.id, this.model)
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      } else {
        // await this.$http.post('categories', this.model);
        // 创建分类
        await postItem(this.model)
        this.$message({
          type: 'success',
          message: '添加成功'
        })
      }

      this.$router.push('/items/list')
    }
  },
  watch: {
    '$route.path': function () {
      // alert(newVal + '-----' + oldVal)
      this.fetchCreate()
    }
  },
  created() {
    this.id && this.fetch();
  },
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>