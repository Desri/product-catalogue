<template>
  <header>
    <Menubar>
      <template #start>
        <NuxtLink to="/#" class="logo">
          LOGO
        </NuxtLink>
      </template>
      <template #item>
        <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
        </div>
      </template>
    </Menubar>
  </header>
</template>


<script setup lang="ts">
  import { ref } from "vue";
  
  const items = ref([
    {
      label: 'Home',
      icon: 'pi pi-home'
    },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      badge: 3,
      items: [
        {
          label: 'Core',
          icon: 'pi pi-bolt',
          shortcut: '⌘+S'
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server',
          shortcut: '⌘+B'
        },
        {
          separator: true
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil',
          shortcut: '⌘+U'
        }
      ]
    }
  ]);
</script>

<style lang="scss" scoped>
  header {
    position: sticky;
    top: 0px;
    z-index: 999;
    background-color: #ffffff;
    border-bottom: 1px solid #dddddd;
    .logo {
      color: #000000;
      font-size: 24px;
      font-weight: bold;
    }
    .p-menubar {
      border: 0px;
    }
  }
</style>
