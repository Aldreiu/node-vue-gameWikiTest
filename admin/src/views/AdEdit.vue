<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}广告位</h1>
    <el-form
      label-width="70px"
      @submit.native.prevent="save"
    >
      <el-form-item label="广告位名">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button size="small"><i class="el-icon-plus"></i>添加广告</el-button>
        <el-row
          type="flex"
          style="flex-wrap:wrap;"
        >
          <el-col :md="12" class="adcol">
            <el-form-item label="广告URL">
              <el-input v-model="model.items.url" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="广告图片" style="margin-top:10px">
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="handleSuccess"
              >
                <img
                  v-if="model.items.image"
                  :src="model.items.image"
                  class="adimg"
                >
                <i
                  v-else
                  class="el-icon-plus avatar-uploader-icon"
                ></i>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>

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
import { PutAdrModel, postAd, getAdModel } from '@/api/api'
export default {
  props: ['id'],
  data() {
    return {
      model: {

        items: []
      },
    }
  },
  methods: {
    handleSuccess(res) {
      this.model.items.image = res.url
    },

    async fetch() {
      const res = await getAdModel(this.id)
      console.log(res.data);
      this.model = Object.assign({}, this.model, res.data)
      console.log(this.model);
    },

    async save() {
      // let res
      if (this.id) {
        await PutAdrModel(this.id, this.model)
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      } else {
        // 创建
        await postAd(this.model)
        this.$message({
          type: 'success',
          message: '添加成功'
        })
      }

      this.$router.push('/ads/list')
    }
  },
  created() {
    this.id && this.fetch();
  },
}
</script>

<style scoped>
/* .el-form-item.adpic{
    margin-top: 10px;
} */

.el-col.adcol{
    padding: 25px;
    border: 1px solid ;
}

.el-upload .adimg {
  width: 150px;
  height: 150px;
}
</style>