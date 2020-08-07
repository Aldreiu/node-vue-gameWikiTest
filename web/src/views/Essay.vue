<template>
  <div class="page-essay" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
        <div class="iconfont icon-Active " @click="$router.push('/')"></div>
        <strong class="flex-1">{{ model.title }}</strong>
        <div class="text-grey fs-xs">2019-06-14</div>
    </div>
    <div v-html="model.body" class="page-essay p-3"></div>
  </div>
</template>

<script>
export default {
    props:{
        id:{required:true}
    },
    data() {
        return {
            model:null
        }
    },
    methods: {
        async fetchEssayModel(){
            const res = await this.$http.get(`essays/${this.id}`);
            this.model = res.data
        }
    },
    created() {
        this.fetchEssayModel()
    },
}
</script>

<style lang="scss">
// @import '../assets/scss/variables';
.page-essay{
    .icon-Active{
        font-size: 1.7rem;
    }
    img{
        max-width: 100%;
        height: auto;
    }
}
</style>