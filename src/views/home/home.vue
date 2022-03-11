
<template>
  <div class="home">
    home
    <img src="/static/img/icon_no_data.png" alt="Alternate Text" />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref, computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';


  const router = useRouter();
  const route = useRoute();
  const query = route.query;

</script>

<style scoped lang="scss">
  .home {
  }
</style>
