<template>
  <div
    class="page-character"
    v-if="model"
  >
    <div class="topbar bg-grey-1 py-2 px-4 d-flex ai-center">
      <img
        src="../../public/site_avatar_gbf_l.png"
        alt=""
        height="30px"
      >
      <div class="px-2 flex-1">
        <span class="text-black mr-2">碧蓝幻想</span>
        <span class="text-drak fs-xxs">资料站</span>
      </div>
      <router-link
        tag="div"
        to="/"
      >其他角色 &gt;</router-link>
    </div>
    <div
      class="top"
      :style="{'background-image':`url(${model.drawing})`}"
    >
      <div class="info text-white p-3 d-flex flex-column jc-end h-100">
        <div>{{ model.title }}</div>
        <h2 class="fs-sm">{{ model.name }}</h2>
        <div>{{ model.categories.map(val => val.name).join('/') }}</div>
        <div>
          <div>
            <span
              class="mr-3"
              v-if="model.attribute"
            >属性: {{ model.attribute.name }}</span>
            <span v-if="model.race">种族: {{ model.race.name }}</span>
          </div>

        </div>
        <div class="d-flex jc-between">
          <div>
            HP<span class="hp mr-1">{{ model.hpandattack.hp}}</span>
            攻击力<span class="attack">{{ model.hpandattack.attack}}</span>
          </div>
          <router-link
            to="/"
            tag="span"
            class="text-grey"
          >更多详情 &gt;</router-link>
        </div>
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
    async fetch() {
      const res = await this.$http.get(`characters/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fetch();
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 0;
}
.page-character {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1));
  .top {
    height: 50vw;
    background-size: auto 100%;
    background-repeat: no-repeat;
    // background-color: black;
    background-position: top center;

    .hp {
      color: #3eb503;
    }
    .attack {
      color: #ff5d25;
    }
  }
  .text-grey {
    color: white;
  }
}
</style>