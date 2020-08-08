<template>
  <div
    class="page-essay"
    v-if="model"
  >
    <div class="d-flex py-3 px-2 border-bottom">
      <div
        class="iconfont icon-Active "
        @click="$router.push('/')"
      ></div>
      <strong class="flex-1">{{ model.title }}</strong>
      <div class="text-grey fs-xs">2019-06-14</div>
    </div>
    <div
      v-html="model.body"
      class="page-essay p-3"
    ></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-gonglve pr-2"></i>
        <strong class="text-use-play fs-lg">相关资讯</strong>
      </div>
      <div class="pt-2 fs-lg">
        <router-link
          tag="div"
          :to="`/essays/${item._id}`"
          class="py-2"
          v-for="item in model.related"
          :key="item._id"
        >{{ item.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    }
  },
  methods: {
    async fetchEssayModel() {
      const res = await this.$http.get(`essays/${this.id}`);
      this.model = res.data
    }
  },
  created() {
    this.fetchEssayModel()
  },
  watch: {
      id:'fetchEssayModel'   // 第一种写法
    //   id(){    ////第二种写法
    //       this.fetchEssayModel()
    //   }
  },
}
</script>

<style lang="scss">
// @import '../assets/scss/variables';
.page-essay {
  .icon-Active {
    font-size: 1.7rem;
  }
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>