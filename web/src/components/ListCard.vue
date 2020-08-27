<template>
  <div>
    <m-card
      :icon="icon"
      :title="title"
    >
      <div class="nav-card jc-between">
        <div class="nav-card-item " :class="{active:active===i}" v-for="(category,i) in categories" :key="i" @click="swiper.slideTo(i)">
          <div class="nav-link">{{category.name}}</div>
        </div>
      </div>
      <!-- 是swiper配置选项 自动高度 -->
      <swiper ref="list" @slideChange="()=>active = swiper.activeIndex"  :options="swiperOptions">
        <swiper-slide
          v-for="(category,i) in categories"
          :key="i"
        >
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </m-card>
  </div>
</template>

<script>
export default {
    props:{
        icon:{type:String,required:true},
        title:{type:String,required:true},
        categories:{type:Array,required:true}
    },
    data() {
        return {
            active:0,
            // swiper设置
            swiperOptions:{
             autoHeight:true,
            //  坑
            //  swiper使用了autoHeight自动高度  因为根据网络 图片显示完之前 swiper先执行完成了 所以第一个 热门就不会显示全 
            // 监听器 当swiper样式发生变化 他就回去更新
             observer:true,
             observeParents:true
            }
        }
    },
    computed: {
    swiper() {
      return this.$refs.list.$swiper
    }
  },
}
</script>

<style lang="scss" scoped>
</style>