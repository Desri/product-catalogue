<template>
  <div>
    <img src="@/assets/img/banner.png" class="w-full mb-1 mx-auto" alt="Banner" />

    <div class="box px-3 mb-1">
      <HomeCategory />
    </div>

    <div class="box px-3 mb-1">
      <div class="flex align-center justify-between">
        <h2>
          Beauty
        </h2>
        <NuxtLink to="/category/beauty">
          Selengkapnya
        </NuxtLink>
      </div>
      
      <div class="grid grid-cols-2 gap-4">
        <CardProductSkeleton v-if="isShowLoading" />
        <CardProduct :data-produk="dataBeauty" />
      </div>
    </div>

    <div class="box px-3 mb-1">
      <div class="flex align-center justify-between">
        <h2>
          Fragrances
        </h2>
        <NuxtLink to="/category/fragrances">
          Selengkapnya
        </NuxtLink>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <CardProductSkeleton v-if="isShowLoading" />
        <CardProduct :data-produk="dataFragrances" />
      </div>
    </div>

    <div class="box px-3 mb-1">
      <div class="flex align-center justify-between">
        <h2>
          Furniture
        </h2>
        <NuxtLink to="/category/furniture">
          Selengkapnya
        </NuxtLink>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <CardProductSkeleton v-if="isShowLoading" />
        <CardProduct :data-produk="dataFurniture" />
      </div>
    </div>

    <div class="box px-3 mb-1">
      <div class="flex align-center justify-between">
        <h2>
          Groceries
        </h2>
        <NuxtLink to="/category/groceries">
          Selengkapnya
        </NuxtLink>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <CardProduct :data-produk="dataGroceries" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const isShowLoading = ref<boolean>(true)
  const dataBeauty = ref()
  const dataFragrances = ref()
  const dataFurniture = ref()
  const dataGroceries = ref()

  const store = useProductsStore()
  const { listProductBeauty, listProductFragrances, listProductFurniture, listProductGroceries } = storeToRefs(store)

  onMounted(async () => {
    store.getProductBeauty('4')
    store.getFragrances('4')
    store.getFurniture('4')
    store.getGroceries('4')
    isShowLoading.value = false
  });

  dataBeauty.value = listProductBeauty
  dataFragrances.value = listProductFragrances
  dataFurniture.value = listProductFurniture
  dataGroceries.value = listProductGroceries
</script>

<style lang="scss">
  .box {
    h2 {
      font-size: 16px;
      padding-left: 8px;
      border-left: 4px solid #00be7e;
    }
    a {
      color: #5c72ff;
      font-size: 12px;
      font-weight: 600;
    }
    .shadow-box {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
      .title-skeleton {
        margin-bottom: 10px;
      }
    }
  }
</style>
