<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useHead } from '@unhead/vue'

  const route = useRoute()

  useHead({
    titleTemplate: '%s | Evermos',
    meta: [
      { property: 'og:title', content: `${route.meta.title} | %s` }
    ]
  })
  watchEffect(() => {
    console.log('Check Watch: ')
  })
</script>
