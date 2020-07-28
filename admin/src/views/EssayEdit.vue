<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}文章</h1>
    <el-form label-width="70px" @submit.native.prevent="save">
      <el-form-item label="文章分类">
        <el-select v-model="model.categories" placeholder="请选择文章分类" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <quill-editor
          v-model="model.body"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
        ></quill-editor>

        <el-upload
        :headers="getAutorizationHeaders()"
        style="display:none"
          class="essay-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="handleSuccess "
          name="file"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// require styles
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
//  引入富文本编辑器
import { quillEditor } from "vue-quill-editor";

import {
  getEssayModel,
  PutEssayrModel,
  postEssay,
  getCategoryList,
} from "@/api/api";

// 工具栏配置
const toolbarOpetions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["link", "image", "video"],
  ["clean"], // remove formatting button
];

export default {
  props: ["id"],
  data() {
    return {
      model: {},
      categories: [],
      editorOption: {
        // some quill options
        modules: {
          toolbar: {
            container: toolbarOpetions, // 工具栏
            handlers: {
              image: function (value) {
                if (value) {
                  document.querySelector(".essay-uploader input").click();
                } else {
                  this.quill.format("image", false);
                }
              },
            },
          },
        },
      },
    };
  },
  components: {
    quillEditor,
  },
  methods: {
    // 插入图片 用服务端返回地址的方式 而不是用base64方式这样页面加载满
    handleSuccess(res) {
      // 获取富文本组件实例
      let quill = this.$refs.myQuillEditor.quill;
      // 如果上传成功
      if (res) {
        // 获取光标所在位置
        let length = quill.getSelection().index;
        // 插入图片，res为服务器返回的图片链接地址
        quill.insertEmbed(length, "image", res.url);
        // 调整光标到最后
        quill.setSelection(length + 1);
        this.$notify({
          title: "成功",
          message: "图片插入成功",
          type: "success",
        });
      } else {
        // 提示信息，需引入Message
        this.$notify.error({
          title: "错误",
          message: "图片插入失败",
        });
      }
    },

    // 展示数据
    async fetch() {
      // const res = await this.$http.get(`categories/${this.id}`);
      const res = await getEssayModel(this.id);
      this.model = res.data;
    },
    // 获取category
    async fetchParents() {
      const res = await getCategoryList();
      console.log(res);
      this.categories = res.data;
    },
    // 下次看到这个注释 记得封装axios 顺便把所有的接口进行封装成一个文件   先偷个懒(已完成)
    async save() {
      // let res
      if (this.id) {
        // await this.$http.put(`categories/${this.id}`, this.model);
        // 因为通过解耦公用一个组件
        // 通过id 然后进行修改
        await PutEssayrModel(this.id, this.model);
        this.$message({
          type: "success",
          message: "修改成功",
        });
      } else {
        // await this.$http.post('categories', this.model);
        // 创建分类
        await postEssay(this.model);
        this.$message({
          type: "success",
          message: "添加成功",
        });
      }

      this.$router.push("/essays/list");
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
  },
  created() {
    this.fetchParents();
    this.id && this.fetch();
  },
};
</script>