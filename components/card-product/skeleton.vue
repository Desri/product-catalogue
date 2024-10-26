<template>
  <div v-for="index in 4" :key="index" class="shadow-box">
      <Skeleton height="120px" width="100%"></Skeleton>
      <div class="p-3">
        <Skeleton height="14px" width="65%" class="title-skeleton"></Skeleton>
        <Skeleton height="14px" width="85%" class="mb-2"></Skeleton>
        <div class="flex justify-end mt-5">
          <Skeleton height="14px" width="5rem"></Skeleton>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
  import Skeleton from 'primevue/skeleton';
</script>
