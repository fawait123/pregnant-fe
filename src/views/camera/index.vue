<template>
  <div class="flex flex-col gap-8">
    <HeaderComponent :withBackButton="false" />
    <section class="bg-white p-4">
      <PhotoComponent />
    </section>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

import ButtonPrimaryComponent from '@/components/ButtonPrimaryComponent.vue';

import PhotoComponent from '@/components/PhotoComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue';

interface CardInterface {
  title?: string,
  amount?: number
}

const cardData = ref<CardInterface[]>([
  {
    title: "Total Pengguna",
    amount: 20
  },
  {
    title: "Total Foto",
    amount: 100
  },
  {
    title: "Total Video",
    amount: 50
  }
])
</script>
<style lang="">

</style>