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
