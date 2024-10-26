<template>
  <div>
    <div class="box-detail">
      <img :alt="detailProduct.title" :src="detailProduct.thumbnail" class="w-full" />
      <div class="px-3">
        <h1>
          {{ detailProduct.title }}
        </h1>
        <div class="mb-1 flex align-center rating">
          <div class="flex align-center">
            <Rating /> {{ detailProduct.rating }} <span>({{ detailProduct.reviews.length }} rating)</span>
          </div>
          <div class="flex align-center stock">
            <span>•</span>
            <div class="flex">
              Stock<span>{{ detailProduct.stock }}</span>
            </div>
          </div>
        </div>
        <span class="price">
          ${{ detailProduct.price }}
        </span>
        <p>
          {{ detailProduct.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Rating } from '@/icons'
  const store = useProductsStore()
  const { detailProduct } = storeToRefs(store)
  const { slug } = useRoute().params

  await store.getDetailProduct(slug)
</script>

<style lang="scss" scoped>
  .box-detail {
    img {
      height: 180px;
      object-fit: cover;
      aspect-ratio: 1 / 1;
    }
    h1 {
      font-size: 18px;
      color: #3b3b3b;
      margin-bottom: 5px;
      text-transform: capitalize;
    }
    .rating {
      svg {
        width: 22px;
        color: #dbdb25;
        margin-right: 4px;
      }
      span {
        margin-left: 6px;
        font-size: 15px;
        color: #818181;
      }
      .stock {
        span {
          margin-left: 4px;
          margin-right: 4px;
        }
        .flex {
          span {
            padding-top: 1.5px;
            font-size: 15px;
          }
        }
      }
    }
    .price {
      font-size: 18px;
      font-weight: 600;
      color: #3b3b3b;
    }
  }
</style>
