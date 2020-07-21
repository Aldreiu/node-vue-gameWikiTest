<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}角色</h1>
    <el-form
      label-width="70px"
      @submit.native.prevent="save"
    >
      <el-form-item label="角色名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="角色头像">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
          name="file"
        >
          <img
            v-if="model.avatar"
            :src="model.avatar"
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
import { PutCharacterModel, postCharacter, getCharacterModel } from '@/api/api'
export default {
  props: ['id'],
  data() {
    return {
      model: {
        name: '',
        avatar: ''
      },
    }
  },
  methods: {
    afterUpload(res) {
        console.log(res);
      this.model.avatar = res.url
    },
    // 展示数据
    async fetch() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getCharacterModel(this.id)
      this.model = res.data;
    },

    // 下次看到这个注释 记得封装axios 顺便把所有的接口进行封装成一个文件   先偷个懒(已完成)
    async save() {
      // let res
      if (this.id) {
        // await this.$http.put(`categories/${this.id}`, this.model);
        // 因为通过解耦公用一个组件
        // 通过id 然后进行修改
        await PutCharacterModel(this.id, this.model)
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      } else {
        // await this.$http.post('categories', this.model);
        // 创建分类
        await postCharacter(this.model)
        this.$message({
          type: 'success',
          message: '添加成功'
        })
      }

      this.$router.push('/characters/list')
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