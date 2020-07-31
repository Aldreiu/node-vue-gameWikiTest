<template>
  <div>
    <div class="topbar bg-grey-1 py-2 px-4 d-flex ai-center">
      <img
        src="../../public/site_avatar_gbf_l.png"
        alt=""
        height="30px"
      >
      <div class="px-2 flex-1">
        <div class="text-black">碧蓝幻想</div>
        <div class="text-drak fs-xxs">一起上格兰法斯</div>
      </div>
      <button class="btn bg-use-play  px-3 py-2"><a href="http://game.granbluefantasy.jp/#top" class="text-white">点击游玩</a></button>
    </div>

    <div class="bg-primary py-3">
      <div class="nav d-flex jc-around">
          <div class="nav-item active">
              <!-- tag重置 a标签 -->
              <router-link class="nav-link" tag="div" to="/">首页</router-link>
          </div>
          <div class="nav-item">
              <!-- tag重置 a标签 -->
              <router-link class="nav-link" tag="div" to="/">攻略</router-link>
          </div>
          <div class="nav-item">
              <!-- tag重置 a标签 -->
              <router-link class="nav-link" tag="div" to="/">新闻</router-link>
          </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>