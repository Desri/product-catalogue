<template>
  <div>
    <div class="p-3">
      <div v-for="index in 7" :key="index" class="rounded-xl border border-surface-200 bg-white p-3 mb-4">
        <ul class="m-0 p-0 list-none">
          <li>
            <div class="flex">
              <Skeleton size="7rem" class="mr-3 rounded-xl"></Skeleton>
              <div style="flex: 1">
                <Skeleton width="30%" class="mb-2 mt-1"></Skeleton>
                <Skeleton width="100%" class="mb-2"></Skeleton>
                <Skeleton width="75%"></Skeleton>
                <div class="flex justify-between mt-6">
                  <Skeleton width="35%"></Skeleton>
                  <Skeleton width="30%"></Skeleton>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
