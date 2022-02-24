
<template>
  <div class="App">
    <!--<div class="navBar">
      <van-nav-bar :title="store.getters.getDocumentTitle||'手机估价'" left-arrow>
        <template #left>
        </template>
        <template #right>
        </template>
      </van-nav-bar>
    </div>-->
    <div class="pages">
      <!--<router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-if="route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" v-if="!route.meta.keepAlive" />
      </router-view>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  /**
   * 项目入口参数（项目入口参数）：
   * ostype、token、userId
   */

  import { useRoute, useRouter } from "vue-router";
  import { onMounted, watch } from 'vue';
  import { store } from './store/index';

  const route = useRoute();

</script>

<style scoped>
  .App {
  }

  .navBar {
  }

  .pages {
  }
</style>
