<template>
  <div class="home">
    home
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();
  const query = route.query;

  onMounted(() => {
    console.log('onMounted home');
  });
</script>
<style scoped lang="scss">
  .home {
  }
</style>
