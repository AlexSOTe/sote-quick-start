
<template>
  <div class="home">
    home
    <img src="/static/img/icon_no_data.png" alt="Alternate Text" />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref, computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { bridgeInterface } from "../../utils/bridgeInterface";
  import { TProjectEntryQuery } from '../../constants/types';
  import { Toast } from 'vant';


  const router = useRouter();
  const route = useRoute();
  const pageQuery: TProjectEntryQuery = route.query as TProjectEntryQuery;

  //onMounted(async () => {
  //  //如果页面没有token，跳转到app登录页
  //  if (!pageQuery.token) {
  //    bridgeInterface.GotoLoginPage();
  //    return;
  //  }
  //});

</script>

<style scoped lang="scss">
  .home {
  }
</style>
