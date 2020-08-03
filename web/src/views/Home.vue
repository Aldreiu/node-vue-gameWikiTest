<template>
  <div class="home">
    <!-- swiper start -->
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide><img
          class="w-100 hsi"
          src="../../src/assets/images/-mcuihQ5-cjq8ZpT3cS15o-rp.jpg"
          alt=""
        ></swiper-slide>
      <swiper-slide><img
          class="w-100 hsi"
          src="../../src/assets/images/fkQ5-33d2ZdT3cSp0-go.jpg"
          alt=""
        ></swiper-slide>
      <swiper-slide><img
          class="w-100 hsi"
          src="../../src/assets/images/knq20200309160810.png"
          alt=""
        ></swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right pr-3"
        slot="pagination"
      ></div>
    </swiper>
    <!-- swiper end -->
    <!-- nav-icon start -->
    <div class="nav-icons bg-white  mt-2  text-center pt-3 text-grey">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3">
          <i class="iconfont icon-ziliao fs-xl"></i>
          <div>资料站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="iconfont icon-gonglve fs-xl"></i>
          <div>攻略站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="iconfont icon-wangzhan fs-xl"></i>
          <div>舔婊网A</div>
        </div>
        <div class="nav-item mb-3">
          <i class="iconfont icon-wangzhan fs-xl"></i>
          <div>舔婊网B</div>
        </div>
        <div class="nav-item mb-3">
          <i class="iconfont icon-wangzhan fs-xl"></i>
          <div>舔婊网C</div>
        </div>
        <div class="nav-item mb-3">
          <i class="iconfont icon-jisuanqi fs-xl"></i>
          <div>刷箱计算器</div>
        </div>
        <div class="nav-item mb-3">
          <i class="iconfont icon-egg fs-xl"></i>
          <div>扭蛋系统</div>
        </div>
        <div class="nav-item">
          <i class="iconfont icon-bizhiputie fs-xl"></i>
          <div>壁纸鉴赏</div>
        </div>
        <div class="nav-item mb-3">
          <i class="iconfont icon-jiaoliu fs-xl"></i>
          <div>NGA</div>
        </div>
        <div class="nav-item mb-3">
          <i class="iconfont icon-jieshao fs-xl"></i>
          <div>基本介绍</div>
        </div>
      </div>
      <div class="bg-light py-1 fs-xs">
        <i class="sprite sprite-arrow"></i>
        收起
      </div>
    </div>
    <!-- nav-icon end -->
    <!-- new And other card start -->
    <!-- 使用card组件 slot去补充内容 -->
    <!-- <m-card icon="news" title="新闻资讯">
      <div class="nav-card jc-between">
          <div class="nav-card-item active">
            <div class="nav-link">热门</div>
          </div>
          <div class="nav-card-item ">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-card-item ">
            <div class="nav-link">公告</div>
          </div>
          <div class="nav-card-item ">
            <div class="nav-link">攻略</div>
          </div>
          <div class="nav-card-item ">
            <div class="nav-link">活动</div>
          </div>
        </div>
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div class="swiper-content py-2" v-for="n in 5" :key="n">
              <span>[新闻]</span>
              <span> | </span>
              <span>2xxx年x月xx日起开始的月末战货活动。我最爱的奥古斯提</span>
              <span>xx/xx</span>
            </div>
          </swiper-slide>
        </swiper>
    </m-card> -->

    <m-list-card
      icon="news"
      title="新闻资讯"
      :categories="newsCats"
    >
      <template #items="{category}">
        <div
          class="swiper-content py-2"
          v-for="(item,i) in category.newList"
          :key="i"
        >
          <span>[{{ item.categoryName }}]</span>
          <span> | </span>
          <span>{{ item.title }}</span>
          <span>{{ item.data }}</span>
        </div>
      </template>

    </m-list-card>

    <m-card
      icon="role"
      title="角色列表"
    >21123123</m-card>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,

        },
        autoplay: true,
        // Some Swiper option/callback...
      },

      // 列表数据
      newsCats: [
        {
          name: "热门",
          newList: new Array(5).fill({}).map(() => ({
            categoryName: '公告',
            title: '阿巴阿巴阿巴',
            data: '06/08'
          }))
        },
        {
          name: "热门2",
          newList: new Array(5).fill({}).map(() => ({
            categoryName: '公告23',
            title: '阿巴阿巴阿巴',
            data: '06/08'
          }))
        },
        {
          name: "热门3",
          newList: new Array(5).fill({}).map(() => ({
            categoryName: '公告3',
            title: '阿巴阿巴阿巴3',
            data: '06/08'
          }))
        },
        {
          name: "热门4",
          newList: new Array(5).fill({}).map(() => ({
            categoryName: '公告',
            title: '阿巴阿巴阿巴',
            data: '06/08'
          }))
        },
        {
          name: "热门5",
          newList: new Array(5).fill({}).map(() => ({
            categoryName: '公告',
            title: '阿巴阿巴阿巴',
            data: '06/08'
          }))
        },
      ]

    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="scss">
// 引入变数
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    border-radius: 0.1538rem;
    opacity: 0.6;
    background-color: map-get($map: $colors, $key: "dark");
    &.swiper-pagination-bullet-active {
      background-color: map-get($map: $colors, $key: "hone-swiper-info");
    }
  }
}

.nav-icons {
  border-top: $border-color;
  border-bottom: $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    // 复习 4n+1 意思是 n/4 余1  就使用效果
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
</style>
