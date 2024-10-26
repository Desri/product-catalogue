<template>
  <div>
    <div class="box p-3">
      <h1 class="text-center">
        {{ slug }}
      </h1>
      <div class="grid grid-cols-2 gap-4">
        <CardProductSkeleton v-if="isShowLoading" />
        <CardProduct :data-produk="dataCategoryProduct" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const isShowLoading = ref<boolean>(true)
  const dataCategoryProduct = ref()
  const store = useProductsStore()
  const { listCategoryProduct } = storeToRefs(store)
  const { slug } = useRoute().params

  onMounted(async () => {
    store.getCategoryProduct(slug)
    isShowLoading.value = false
  });

  dataCategoryProduct.value = listCategoryProduct

</script>

<style lang="scss" scoped>
  .box {
    h1 {
      font-size: 20px;
      color: #3b3b3b;
      margin-bottom: 1.5rem;
      text-transform: capitalize;
    }
  }
</style>
