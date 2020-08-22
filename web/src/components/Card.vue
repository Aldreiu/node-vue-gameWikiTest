<template>
  <div>
    <div class="card bg-white mt-3 p-3 ">
      <div class="d-flex ai-center pb-3" :class="{'card-header':!plain}">
        <i class="fs-xs iconfont" :class="`icon-${icon}`"></i>
        <div class="fs-xl flex-1 px-2">{{ title }}</div>
        <i class="iconfont icon-menu" v-if="!plain"></i>
      </div>
      <div class="card-body pt-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        title:{type:String,required:true},
        icon:{type:String,required:true},
        plain:{type:Boolean}
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables';
.card{
    .card-header{
        border-bottom: 1px solid $border-color;
    }
        // border-bottom: 1px solid $border-color;

}
</style>