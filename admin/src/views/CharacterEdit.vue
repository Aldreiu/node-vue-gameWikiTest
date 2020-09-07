<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}角色</h1>
    <el-form label-width="150px" @submit.native.prevent="save">
      <el-tabs type="border-card">
        <!-- 基础信息 -->
        <el-tab-pane label="基础信息">
          <el-form-item label="角色名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="角色称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="角色头像">
            <el-upload
              :headers="getAutorizationHeaders()"
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :show-file-list="false"
              :on-success="afterUpload"
              name="icon"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="角色立绘">
            <el-upload
              :headers="getAutorizationHeaders()"
              class="avatar-uploader"
              :action="uploadUrl"
              :show-file-list="false"
              :on-success="res=> $set(model,'drawing',res.url)"
              name="icon"
            >
              <img v-if="model.drawing" :src="model.drawing" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="角色属性">
            <el-select v-model="model.attribute.name" placeholder="请选择">
              <el-option
                v-for="item of attributes"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="角色得意武器">
            <el-select v-model="model.categories" placeholder="请选择" multiple>
              <el-option
                v-for="item of categories"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="角色HP和攻击力">
            <el-input v-model="model.hpandattack.hp" class="input_left" placeholder="HP"></el-input>
            <el-input v-model="model.hpandattack.attack" placeholder="攻击力"></el-input>
          </el-form-item>
          <el-form-item label="种族">
            <el-select v-model="model.race" placeholder="请选择种族">
              <el-option v-for="item of races" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <!-- otherinfo 其他信息 -->
          <el-form-item label="日文名">
            <el-input v-model="model.otherinfo.japanName"></el-input>
          </el-form-item>
          <el-form-item label="英文名">
            <el-input v-model="model.otherinfo.enName"></el-input>
          </el-form-item>
          <el-form-item label="常用昵称(外号)">
            <el-input v-model="model.otherinfo.commentName"></el-input>
          </el-form-item>
          <el-form-item label="露莉亚笔记">
            <el-input type="textarea" v-model="model.otherinfo.notepad" placeholder="露莉亚笔记"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="model.otherinfo.age"></el-input>
          </el-form-item>
          <el-form-item label="身高">
            <el-input v-model="model.otherinfo.height"></el-input>
          </el-form-item>
          <el-form-item label="声优">
            <el-input v-model="model.otherinfo.cv"></el-input>
          </el-form-item>
          <el-form-item label="兴趣">
            <el-input v-model="model.otherinfo.interest"></el-input>
          </el-form-item>
          <el-form-item label="喜好">
            <el-input v-model="model.otherinfo.hobby"></el-input>
          </el-form-item>
          <el-form-item label="不擅长">
            <el-input v-model="model.otherinfo.nogoodat"></el-input>
          </el-form-item>
          <!-- otherinfo 结束 -->
          <el-form-item label="共享角色皮肤">
            <el-select v-model="model.character" placeholder="请选择共享角色" multiple>
              <el-option
                v-for="item of characteies"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-tab-pane>
        <!-- 技能 -->
        <el-tab-pane label="技能">
          <el-button @click="model.skills.push({})">
            <i class="el-icon-plus"></i>添加技能
          </el-button>
          <el-button type="danger" @click="model.skills.pop()">
            <i class="el-icon-delete"></i>删除最后一个技能
          </el-button>
          <el-row type="flex" style="flex-wrap:wrap; margin-top:15px; ">
            <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
              <el-form-item label="主动/被动">
                <el-select v-model="item.passive" placeholder="请选择">
                  <el-option
                    v-for="item in attributes"
                    :key="item._id"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="技能图标">
                <el-upload
                  :headers="getAutorizationHeaders()"
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/upload'"
                  :show-file-list="false"
                  :on-success="res => $set(item,'icon',res.url)"
                  name="icon"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="技能名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="技能间隔">
                <el-input v-model="item.time"></el-input>
              </el-form-item>
              <el-form-item label="满级技能间隔">
                <el-input v-model="item.time2"></el-input>
              </el-form-item>
              <el-form-item label="技能描述">
                <el-input type="textarea" v-model="item.description"></el-input>
                <el-button type="danger" class="skills-button" @click="model.skills.splice(i,1)">
                  <i class="el-icon-delete"></i>删除当前技能
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!-- 解放上限 1 -->
        <el-tab-pane label="解放上限1">
          <el-row type="flex" style="flex-wrap:wrap; margin-top:15px; ">
            <el-col style="border:none;">
              上限1  所需材料
              <el-button @click="model.items1.push({})">
                <i class="el-icon-plus"></i>添加上限材料
              </el-button>
              <el-col v-for="(item,i) in model.items1" :key="i">
                <el-col style="border:none;">
                  <el-form-item :label="`上限1 材料${i+1}`">
                    <el-select
                      filterable
                      v-model="item.article"
                      placeholder="请选择"
                      style="width:200px;margin-right:100px"
                    >
                      <el-option
                        v-for="item in articles"
                        :key="item._id"
                        :label="item.name"
                        :value="item._id"
                      ></el-option>
                    </el-select>
                    <el-input v-model="item.num" style="width:100px"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!-- 解放上限 2 -->
        <el-tab-pane label="解放上限2">
          <el-row type="flex" style="flex-wrap:wrap; margin-top:15px; ">
            <el-col style="border:none;">
              上限2  所需材料
              <el-button @click="model.items2.push({})">
                <i class="el-icon-plus"></i>添加上限材料
              </el-button>
              <el-col v-for="(item,i) in model.items2" :key="i">
                <el-col style="border:none;">
                  <el-form-item :label="`上限2 材料${i+1}`">
                    <el-select
                    filterable
                      v-model="item.article"
                      placeholder="请选择"
                      style="width:200px;margin-right:100px"
                    >
                      <el-option
                        v-for="item in articles"
                        :key="item._id"
                        :label="item.name"
                        :value="item._id"
                      ></el-option>
                    </el-select>
                    <el-input v-model="item.num" style="width:100px"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!-- 解放上限 3 -->
        <el-tab-pane label="解放上限3">
          <el-row type="flex" style="flex-wrap:wrap; margin-top:15px; ">
            <el-col style="border:none;">
              上限3  所需材料
              <el-button @click="model.items3.push({})">
                <i class="el-icon-plus"></i>添加上限材料
              </el-button>
              <el-col v-for="(item,i) in model.items3" :key="i">
                <el-col style="border:none;">
                  <el-form-item :label="`上限3 材料${i+1}`">
                    <el-select
                    filterable
                      v-model="item.article"
                      placeholder="请选择"
                      style="width:200px;margin-right:100px"
                    >
                      <el-option
                        v-for="item in articles"
                        :key="item._id"
                        :label="item.name"
                        :value="item._id"
                      ></el-option>
                    </el-select>
                    <el-input v-model="item.num" style="width:100px"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!-- 解放上限 4 -->
        <el-tab-pane label="解放上限4">
          <el-row type="flex" style="flex-wrap:wrap; margin-top:15px; ">
            <el-col style="border:none;">
              上限4  所需材料
              <el-button @click="model.items4.push({})">
                <i class="el-icon-plus"></i>添加上限材料
              </el-button>
              <el-col v-for="(item,i) in model.items4" :key="i">
                <el-col style="border:none;">
                  <el-form-item :label="`上限4 材料${i+1}`">
                    <el-select
                    filterable
                      v-model="item.article"
                      placeholder="请选择"
                      style="width:200px;margin-right:100px"
                    >
                      <el-option
                        v-for="item in articles"
                        :key="item._id"
                        :label="item.name"
                        :value="item._id"
                      ></el-option>
                    </el-select>
                    <el-input v-model="item.num" style="width:100px"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!-- 解放上限 5 -->
        <el-tab-pane label="解放上限5">
          <el-row type="flex" style="flex-wrap:wrap; margin-top:15px; ">
            <el-col style="border:none;">
              上限5  所需材料
              <el-button @click="model.items5.push({})">
                <i class="el-icon-plus"></i>添加上限材料
              </el-button>
              <el-col v-for="(item,i) in model.items5" :key="i">
                <el-col style="border:none;">
                  <el-form-item :label="`上限5 材料${i+1}`">
                    <el-select
                      v-model="item.article"
                      placeholder="请选择"
                      style="width:200px;margin-right:100px"
                    >
                      <el-option
                        v-for="item in articles"
                        :key="item._id"
                        :label="item.name"
                        :value="item._id"
                      ></el-option>
                    </el-select>
                    <el-input v-model="item.num" style="width:100px"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  PutCharacterModel,
  postCharacter,
  getCharacterModel,
  getCategoryList,
  getCharacterList,
  getArticleList,
} from "@/api/api";
export default {
  props: ["id"],
  data() {
    return {
      model: {
        name: "",
        avatar: "",
        // 立绘
        drawing: "",
        title: "",
        // 还会报错 Cannot read property 'attack' of undefined
        // 原因因为多层数据 最开始没有数据的时候是underfind不会报错但是 多层的话underfind.什么就会报错  就可以在上方进行判断 是否拿到数据 就去判断是否为空 之前的做法  这里我就去结合实际情况 因为这里的数据结构写好了 但是通过接口请求过来的数据会替换掉这的model   所以使用 Object.assign 通过将可枚举的数值从一个复制到目标对象 这样会得到 请求的数据结构加上这里定义的数据结构  其实还有一种方式利用扩展运算符 这样服务端接口就不会影响
        hpandattack: {},
        // 共享角色
        partners: [],
        // 其他细腻
        otherinfo: {},
        // 技能
        skills: [],
        // 属性
        attribute: {},
        // item1
        items1: [],
        items2:[],
        items3:[],
        items4:[],
        items5:[],
      },
      // 属性选项
      attributes: [],
      // 得意武器选项
      categories: [],
      // 存放种族
      races: [],
      // 共享角色
      characteies: [],
      // 上限材料
      articles: [],
    };
  },
  methods: {
    // 角色头像
    afterUpload(res) {
      // console.log(res);
      this.model.avatar = res.url;
    },
    // 角色立绘
    afterUploadDrawing(res) {
      // console.log(res);
      this.model.drawing = res.url;
    },

    // 展示数据
    async fetch() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getCharacterModel(this.id);
      this.model = Object.assign({}, this.model, res.data);
    },
    // 新建数据
    fetchCreate() {
      this.model = {};
    },
    // 展示属性
    async fetchAttribute() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getCategoryList();
      this.attributes = res.data;
    },
    // 展示得意武器
    async fetchCategory() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getCategoryList();
      this.categories = res.data;
    },
    // 展示物品
    async fetchArticle() {
      const res = await getArticleList();
      this.articles = res.data;
    },
    // ****** 展示种族  上面这些之后看能不能根据字段去优化查询
    async fetchRace() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getCategoryList();
      this.races = res.data;
    },
    // 共享角色
    async fetchCharacter() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getCharacterList();
      this.characteies = res.data;
    },

    // 下次看到这个注释 记得封装axios 顺便把所有的接口进行封装成一个文件   先偷个懒(已完成)
    async save() {
      // let res
      if (this.id) {
        // await this.$http.put(`categories/${this.id}`, this.model);
        // 因为通过解耦公用一个组件
        // 通过id 然后进行修改
        await PutCharacterModel(this.id, this.model);
        this.$message({
          type: "success",
          message: "修改成功",
        });
      } else {
        // await this.$http.post('categories', this.model);
        // 创建分类
        await postCharacter(this.model);
        this.$message({
          type: "success",
          message: "添加成功",
        });
      }

      this.$router.push("/characters/list");
    },
  },
  watch: {
    "$route.path": function () {
      this.fetchCreate();
    },
  },
  created() {
    this.fetchRace();
    this.fetchAttribute();
    this.fetchCategory();
    this.fetchCharacter();
    this.fetchArticle();
    this.id && this.fetch();
  },
};
</script>

<style>
.el-button.skills-button {
  margin-top: 2rem;
}
.el-col {
  margin: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.el-col .no-border {
  border: none;
  display: inline-block;
}

.el-col .no-border .el-input {
  width: 200px;
}

.el-button {
  margin-top: 0.5rem;
}
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
.el-upload .el-upload--text .avatar {
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