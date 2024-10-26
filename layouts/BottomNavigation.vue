<template>
  <div>
    <Header></Header>
    <div class="boxLayout bg-white">
      <slot />
      <Footer></Footer>
    </div>
    <Navbar />
  </div>
</template>

<script setup lang="ts"></script>
