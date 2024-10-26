<template>
  <div>
    <div class="flex align-center justify-between">
      <h2>
        Kategory
      </h2>
    </div>
    <div v-if="listCategory" class="list-category">
      <ul>
        <li v-for="(data, index) in listCategory.slice(0,8)" :key="index" class="text-center mb-1">
          <NuxtLink :to="`/category/${data.slug}`">
            <div class="icon">
              <Fragrances v-if="data.slug === 'fragrances'" class="fragrances" />
              <Groceries v-if="data.slug === 'groceries'" class="icon-svg" />
              <Beauty v-if="data.slug === 'beauty'" class="icon-svg" />
              <Furniture v-if="data.slug === 'furniture'" class="icon-svg" />
              <Laptop v-if="data.slug === 'laptops'" class="icon-svg" />
              <homeDecoration v-if="data.slug === 'home-decoration'" class="icon-svg" />
              <kitchenAccessories v-if="data.slug === 'kitchen-accessories'" class="icon-svg" />
              <mensShirts v-if="data.slug === 'mens-shirts'" class="icon-svg" />
            </div>
            <p>
              {{ data.name }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Groceries, Beauty, Furniture, Laptop, Fragrances, homeDecoration, kitchenAccessories, mensShirts } from '@/icons'
  const store = useProductsStore()
  const { listCategory } = storeToRefs(store)

  onMounted(async () => {
    store.getCategory()
  });
</script>

<style lang="scss">
  .list-category {
    overflow: hidden;
    ul {
      padding: 0px;
      overflow: hidden;
      li {
        float: left;
        width: 25%;
        list-style: none;
        a {
          margin: 0px;
          font-weight: normal;
          font-size: 14px;
          text-transform: capitalize;
          p {
            line-height: 13px;
            margin: 0px;
          }
          .icon {
            background: #00be7e;
            text-align: center;
            width: 50px;
            line-height: 80px;
            height: 50px;
            border-radius: 50%;
            margin: auto;
            margin-bottom: 5px;
            svg {
              width: 40px;
              height: 40px;
            }
          }
        }
        .icon {
          .beauty {
            width: 31px;
          }
          .icon-svg {
            width: 26px;
          }
          .fragrances {
            width: 23px;
          }
        }
      }
    }
  }
</style>
