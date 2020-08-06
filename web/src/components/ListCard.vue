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
      <swiper ref="list" @slideChange="()=>active = swiper.activeIndex">
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