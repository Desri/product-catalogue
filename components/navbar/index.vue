<template>
  <div>
    <div class="boxNavigation py-1">
      <div class="flex">
        <div class="mx-3 text-center">
          <NuxtLink to="/">
            <div class="icon">
              <i class="pi pi-home"></i>
            </div>
            HOME
          </NuxtLink>
        </div>
        <div class="mx-3 text-center">
          <NuxtLink to="#">
            <div class="icon">
              <i class="pi pi-shopping-bag"></i>
            </div>
            KERANJANG
          </NuxtLink>
        </div>
        <div class="mx-3 text-center">
          <NuxtLink to="#">
            <div class="icon">
              <i class="pi pi-receipt"></i>
            </div>
            TRANSAKSI
          </NuxtLink>
        </div>
        <div class="mx-3 text-center">
          <NuxtLink to="#">
            <div class="icon">
              <i class="pi pi-user"></i>
            </div>
            PROFILE
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
  .boxNavigation {
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #e2e8f0;
    left: 50%;
    width: 100%;
    max-width: 430px;
    z-index: 1;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    .mx-3 {
      width: 25%;
      a {
        font-size: 12px;
        font-weight: 600;
        color: #434343;
      }
    }
  }
</style>
