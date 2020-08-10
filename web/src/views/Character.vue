<template>
  <div class="page-character">
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
      <router-link tag="div" to="/">其他角色 &gt;</router-link>
    </div>
    <h1>{{ id }}</h1>
  </div>
</template>

<script>
export default {
    props:{
        id:{required:true}
    }
}
</script>

<style lang="scss" scoped>
</style>