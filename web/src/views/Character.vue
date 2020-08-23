<template>
  <div class="page-character" v-if="model">
    <div class="topbar bg-grey-1 py-2 px-4 d-flex ai-center">
      <img src="../../public/site_avatar_gbf_l.png" alt height="30px" />
      <div class="px-2 flex-1">
        <span class="text-black mr-2">碧蓝幻想</span>
        <span class="text-drak fs-xxs">资料站</span>
      </div>
      <router-link tag="div" to="/">其他角色 &gt;</router-link>
    </div>
    <div class="top" :style="{'background-image':`url(${model.drawing})`}">
      <div class="info text-white p-3 d-flex flex-column jc-end h-100">
        <div>{{ model.title }}</div>
        <h2 class="fs-sm">{{ model.name }}</h2>
        <div>{{ model.categories.map(val => val.name).join('/') }}</div>
        <div>
          <div>
            <span class="mr-3" v-if="model.attribute">属性: {{ model.attribute.name }}</span>
            <span v-if="model.race">种族: {{ model.race.name }}</span>
          </div>
        </div>
        <div class="d-flex jc-between">
          <div v-if="model.hpandattack">
            HP
            <span class="hp mr-1 box-sum1">{{ model.hpandattack.hp}}</span>
            攻击力
            <span class="attack box-sum2">{{ model.hpandattack.attack}}</span>
          </div>
          <router-link to="/" tag="span" class="text-grey">更多详情 &gt;</router-link>
        </div>
      </div>
    </div>
    <!-- top end -->
    <div class="padding-center bg-center-color" v-if="model.otherinfo">
      <div class="gbf-infobox" :class="addClassStyle(model.attribute.name)">
        <div class="gbf-infobox-section infobox-title">
          <div class="name">基本信息</div>
        </div>
        <div class="gbf-infobox-section ec-2">
          <div class="title">日文名</div>
          <div class="content">{{model.otherinfo.japanName}}</div>
        </div>

        <div class="gbf-infobox-section ec-2">
          <div class="title">英文名</div>
          <div class="content">{{model.otherinfo.enName}}</div>
        </div>

        <div class="gbf-infobox-section ec-2">
          <div class="title">常用昵称</div>
          <div class="content">{{model.otherinfo.commentName}}</div>
        </div>

        <div class="gbf-infobox-section ec-2">
          <div class="title">露莉亚笔记</div>
          <div class="content">{{model.otherinfo.notepad}}</div>
        </div>
      </div>

      <div class="gbf-infobox mt-2" :class="addClassStyle(model.attribute.name)">
        <div class="gbf-infobox-section infobox-title">
          <div class="name">{{ model.name}}角色档案</div>
        </div>
        <div class="gbf-infobox-section ec-2 ec-2-col-2">
          <div class="title">年龄</div>
          <div class="content">{{model.otherinfo.age}}</div>
        </div>

        <div class="gbf-infobox-section ec-2 ec-2-col-2">
          <div class="title">身高</div>
          <div class="content">{{model.otherinfo.height}}</div>
        </div>

        <div class="gbf-infobox-section ec-2">
          <div class="title">声优</div>
          <div class="content">{{model.otherinfo.cv}}</div>
        </div>

        <div class="gbf-infobox-section ec-2">
          <div class="title">兴趣</div>
          <div class="content">{{model.otherinfo.notepad}}</div>
        </div>

        <div class="gbf-infobox-section ec-2">
          <div class="title">喜好</div>
          <div class="content">{{model.otherinfo.interest}}</div>
        </div>

        <div class="gbf-infobox-section ec-2">
          <div class="title">不擅长</div>
          <div class="content">{{model.otherinfo.nogoodat}}</div>
        </div>
      </div>
    </div>
    <!-- content end  -->

    <div class="bg-center-color">
      <div class="p-2">
        <div class="nav d-flex jc-around pt-3 pb-2 border-bottom bg-grey">
          <div class="nav-item" v-for="(item,i) in navItem" :key="i"
          :class="{active:active ===i}"
          @click="swiper.slideTo(i)"
          >
            <div class="nav-link">{{ item }}</div>
          </div>
          <!-- <div class="nav-item">
            <div class="nav-link">上限突破材料</div>
          </div> -->
          <!-- 下面可以如上面这种 优化 =，= -->
        </div>
      </div>
      <swiper ref="navItem" @slideChange="()=>active = swiper.activeIndex" :options="{autoHeight:true}">
        <!-- 技能 -->
        <swiper-slide>
          <div class="border-bottom pb-3">
            <div class="p-3 bg-white d-flex">
              <router-link tag="button" to="/" class="flex-1 btn btn-lg">
                <i class="iconfont icon-jieshao"></i>
                角色介绍视频
              </router-link>
              <router-link tag="button" to="/" class="flex-1 ml-2 btn btn-lg">
                <i class="iconfont icon-jieshao"></i>
                一图识角色
              </router-link>
            </div>

            <div class="skills bg-white">
              <div class="d-flex jc-around p-3">
                <img
                  @click="currentSkillIndex = i"
                  :src="item.icon"
                  alt
                  v-for="(item,i) in model.skills"
                  :key="item.name"
                  width="60"
                  height="60"
                  class="icon"
                  :class="{active:currentSkillIndex === i}"
                />
              </div>
              <div v-if="currentSkill" class="px-3 pb-3">
                <div class="d-flex pt-4">
                  <h3>{{ currentSkill.name }}</h3>
                  <span>
                    (
                    <i class="skill-i-1">初期</i>
                    {{ currentSkill.time }}
                    <i class="skill-i-2">上限</i>
                    {{ currentSkill.time2 }}
                    )
                  </span>
                </div>
                <p>
                  {{ currentSkill.passive }}:
                  {{ currentSkill.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- skills -->
        </swiper-slide>
        <!-- 上限材料 -->
        <swiper-slide>
          <div>
            <!-- 下面可以缩写成一条 上限 -->
            <!-- 上限1 -->
            <m-card icon="role" title="上限突破1" plain>
              <div :class="addClassStyle(model.attribute.name)" class="gbf-infobox">
                <div class="gbf-infobox-section ec-2">
                  <div class="title">上限突破1材料</div>
                  <div class="content">
                    <div v-for="(item,i) in model.items1" :key="i">
                      <div class="d-flex jc-between">
                        <div class="d-flex ai-center p-1">
                          <img :src="item.article.icon" alt class="mr-2" />
                          <span>{{ item.article.name}}</span>
                        </div>
                        <div class="d-flex ai-center p-1">x {{ item.num }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </m-card>

            <!-- 上限2 -->
            <m-card icon="role" title="上限突破2" plain>
              <div :class="addClassStyle(model.attribute.name)" class="gbf-infobox">
                <div class="gbf-infobox-section ec-2">
                  <div class="title">上限突破2材料</div>
                  <div class="content">
                    <div v-for="(item,i) in model.items2" :key="i">
                      <div class="d-flex jc-between">
                        <div class="d-flex ai-center p-1">
                          <img :src="item.article.icon" alt class="mr-2" />
                          <span>{{ item.article.name}}</span>
                        </div>
                        <div class="d-flex ai-center p-1">x {{ item.num }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </m-card>

            <!-- 上限3 -->
            <m-card icon="role" title="上限突破3" plain>
              <div :class="addClassStyle(model.attribute.name)" class="gbf-infobox">
                <div class="gbf-infobox-section ec-2">
                  <div class="title">上限突破3材料</div>
                  <div class="content">
                    <div v-for="(item,i) in model.items3" :key="i">
                      <div class="d-flex jc-between">
                        <div class="d-flex ai-center p-1">
                          <img :src="item.article.icon" alt class="mr-2" />
                          <span>{{ item.article.name}}</span>
                        </div>
                        <div class="d-flex ai-center p-1">x {{ item.num }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </m-card>

            <!-- 上限4 -->
            <m-card icon="role" title="上限突破4" plain>
              <div :class="addClassStyle(model.attribute.name)" class="gbf-infobox" v-if="model.items4.length>0">
                <div class="gbf-infobox-section ec-2">
                  <div class="title">上限突破4材料</div>
                  <div class="content">
                    <div v-for="(item,i) in model.items4" :key="i">
                      <div class="d-flex jc-between">
                        <div class="d-flex ai-center p-1">
                          <img :src="item.article.icon" alt class="mr-2" />
                          <span>{{ item.article.name}}</span>
                        </div>
                        <div class="d-flex ai-center p-1">x {{ item.num }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                无
              </div>
            </m-card>

            <!-- 上限5 -->
            <m-card icon="role" title="上限突破4" plain>
              <div :class="addClassStyle(model.attribute.name)" class="gbf-infobox" v-if="model.items5.length>0">
                <div class="gbf-infobox-section ec-2">
                  <div class="title">上限突破5材料</div>
                  <div class="content">
                    <div v-for="(item,i) in model.items5" :key="i">
                      <div class="d-flex jc-between">
                        <div class="d-flex ai-center p-1">
                          <img :src="item.article.icon" alt class="mr-2" />
                          <span>{{ item.article.name}}</span>
                        </div>
                        <div class="d-flex ai-center p-1">x {{ item.num }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>无</div>
            </m-card>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true },
  },
  data() {
    return {
      model: null,
      // 标记 当前所选技能
      currentSkillIndex: 0,
      // 控制swiper
      active:0,
      // nav-item 标题
      navItem:['角色技能','上限突破材料']
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`characters/${this.id}`);
      this.model = res.data;
    },
    // 控制显示的样式
    addClassStyle(i) {
      switch (i) {
        case "火":
          return "fire";
        case "水":
          return "water";
        case "土":
          return "earth";
        case "风":
          return "wind";
        case "光":
          return "light";
        case "暗":
          return "dark";
      }
    },
  },
  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillIndex];
    },
    swiper(){
      return this.$refs.navItem.$swiper
    }
  },
  created() {
    this.fetch();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.icon {
  border: 2px solid transparent;
}

.skills {
  .active {
    border: 2px solid map-get($map: $colors, $key: "primary");
  }
}

.skill-i-1 {
  background-color: #3a3a3a;
  color: map-get($map: $colors, $key: "white");
  padding: 0.1rem;
  border-radius: 0.2rem;
  font-style: normal;
}

.skill-i-2 {
  background-color: #1a2175;
  color: map-get($map: $colors, $key: "white");
  padding: 0.1rem;
  border-radius: 0.2rem;
  font-style: normal;
}

h2 {
  margin: 0;
}

h3 {
  margin: 0;
  display: inline-block;
}
.page-character {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1));
  .top {
    height: 50vw;
    background-size: auto 100%;
    background-repeat: no-repeat;
    // background-color: black;
    background-position: top center;

    .box-sum1 {
      background-color: #3eb503;
      padding: 3px;
      border-radius: 4px;
      text-shadow: 0px 0px 1px #150f0f, 0px 0px 1px #150f0f, 0px 0px 1px #150f0f,
        0px 0px 2px #150f0f, 0px 0px 2px #150f0f, 0px 0px 2px #150f0f;
    }

    .box-sum2 {
      background-color: #ff5d25;
      padding: 3px;
      border-radius: 4px;
      text-shadow: 0px 0px 1px #150f0f, 0px 0px 1px #150f0f, 0px 0px 1px #150f0f,
        0px 0px 2px #150f0f, 0px 0px 2px #150f0f, 0px 0px 2px #150f0f;
    }

    // .hp {
    //   color: #3eb503;
    // }
    // .attack {
    //   color: #ff5d25;
    // }
  }
  .text-grey {
    color: white;
  }
}
</style>