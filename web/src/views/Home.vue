<template>
  <div class="home">
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
@import '../assets/scss/variables';

  .pagination-home{
    .swiper-pagination-bullet{
      border-radius: 0.1538rem;
      opacity: 0.6;
      background-color: map-get($map: $colors, $key: "dark");
      &.swiper-pagination-bullet-active{
        background-color: map-get($map: $colors, $key:"hone-swiper-info" );
      }
    }
  }
</style>
