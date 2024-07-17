<template>
  <div class="flex flex-col gap-8">
    <HeaderComponent :withBackButton="false" />
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by eCommerce Businesses</h2>

          <p class="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
            provident impedit esse recusandae facere libero harum sequi.
          </p>
        </div>

        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="flex flex-col rounded-lg bg-[#f8e6ef] px-4 py-8 text-center" v-for="card in cardData">
              <dt class="order-last text-lg font-medium text-gray-500">{{ card.title }}</dt>

              <dd class="text-4xl font-extrabold text-[#f751a6] md:text-5xl">{{ card.amount }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import { ref } from 'vue';

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