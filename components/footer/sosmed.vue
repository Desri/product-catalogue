<template>
  <div>
    <div class="sosmed flex">
      <NuxtLink to="/#" class="text-center">
        <i class="pi pi-facebook"></i>
      </NuxtLink>
      <NuxtLink to="/#" class="text-center">
        <i class="pi pi-twitter"></i>
      </NuxtLink>
      <NuxtLink to="/#" class="text-center">
        <i class="pi pi-instagram"></i>
      </NuxtLink>
      <NuxtLink to="/#" class="text-center">
        <i class="pi pi-tiktok"></i>
      </NuxtLink>
      </div>
  </div>
</template>


<script setup lang="ts"></script>

<style lang="scss" scoped>
  .sosmed {
    padding: 0px 29%;
    margin-bottom: 25px;
    justify-content: space-between !important;
    a {
      width: 30px;
      height: 30px;
      color: #393939;
      line-height: 34px;
      border-radius: 50%;
      background: #dddddd;
    }
  }
</style>
    