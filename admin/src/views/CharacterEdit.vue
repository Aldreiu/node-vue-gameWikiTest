<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}角色</h1>
    <el-form
      label-width="150px"
      @submit.native.prevent="save"
    >
      <el-form-item label="角色名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="角色称号">
        <el-input v-model="model.title"></el-input>
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
      <el-form-item label="角色立绘">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUploadDrawing"
          name="file"
        >
          <img
            v-if="model.drawing"
            :src="model.drawing"
            class="avatar"
          >
          <i
            v-else
            class="el-icon-plus avatar-uploader-icon"
          ></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="角色属性">
        <el-select
          v-model="model.attribute"
          placeholder="请选择"
        >
          <el-option
            v-for="item of attributes"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >

          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色得意武器">
        <el-select
          v-model="model.categories"
          placeholder="请选择"
          multiple
        >
          <el-option
            v-for="item of categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >

          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色HP和攻击力">
        <el-input
          v-model="model.hpandattack.hp"
          class="input_left"
          placeholder="HP"
        ></el-input>
        <el-input
          v-model="model.hpandattack.attack"
          placeholder="攻击力"
        ></el-input>
      </el-form-item>
      <el-form-item label="种族">
        <el-select
          v-model="model.race"
          placeholder="请选择种族"
        >
          <el-option
            v-for="item of races"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >

          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="共享角色皮肤">
        <el-select
          v-model="model.character"
          placeholder="请选择共享角色"
          multiple
        >
          <el-option
            v-for="item of characteies"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >

          </el-option>
        </el-select>
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
import { PutCharacterModel, postCharacter, getCharacterModel, getCategoryList, getCharacterList } from '@/api/api'
export default {
  props: ['id'],
  data() {
    return {
      model: {
        name: '',
        avatar: '',
        // 立绘
        drawing: '',
        title: '',
        // 还会报错 Cannot read property 'attack' of undefined  
        // 原因因为多层数据 最开始没有数据的时候是underfind不会报错但是 多层的话underfind.什么就会报错  就可以在上方进行判断 是否拿到数据 就去判断是否为空 之前的做法  这里我就去结合实际情况 因为这里的数据结构写好了 但是通过接口请求过来的数据会替换掉这的model   所以使用 Object.assign 通过将可枚举的数值从一个复制到目标对象 这样会得到 请求的数据结构加上这里定义的数据结构  其实还有一种方式利用扩展运算符 这样服务端接口就不会影响
        hpandattack: {},
        // 共享角色
        partners: []

      },
      // 属性选项
      attributes: [],
      // 得意武器选项
      categories: [],
      // 存放种族
      races: [],
      // 共享角色
      characteies: []
    }
  },
  methods: {
    // 角色头像
    afterUpload(res) {
      // console.log(res);
      this.model.avatar = res.url
    },
    // 角色立绘
    afterUploadDrawing(res) {
      // console.log(res);
      this.model.drawing = res.url
    },
    // 展示数据
    async fetch() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getCharacterModel(this.id)
      this.model = Object.assign({}, this.model, res.data);
    },
    // 新建数据
    fetchCreate() {
      this.model = {}
    },
    // 展示属性
    async fetchAttribute() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getCategoryList()
      this.attributes = res.data;
    },
    // 展示得意武器
    async fetchCategory() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getCategoryList()
      this.categories = res.data;
    },
    // ****** 展示种族  上面这些之后看能不能根据字段去优化查询
    async fetchRace() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getCategoryList()
      this.races = res.data;
    },
    // 共享角色
    async fetchCharacter() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getCharacterList()
      this.characteies = res.data;
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
  watch: {
    '$route.path': function () {
      this.fetchCreate();
    }
  },
  created() {
    this.fetchRace();
    this.fetchAttribute();
    this.fetchCategory();
    this.fetchCharacter();
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
.avatar-uploader .avatar {
  width: 100%;
  height: auto;
  display: block;
}
.el-input {
  width: 300px;
}
.el-input.input_left {
  margin-right: 20px;
}
</style>