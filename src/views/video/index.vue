<template>
  <div>
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="text-center sm:text-left">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, Barry!</h1>

            <p class="mt-1.5 text-sm text-gray-500">Let's write a new blog post! 🎉</p>
          </div>

          <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
              type="button">
              <span class="text-sm font-medium"> View Website </span>

              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>

            <ButtonPrimaryComponent title="Tambah Video" />
          </div>
        </div>
      </div>
    </section>
    <section class="my-8">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        <div class="h-[200px] rounded-lg bg-white cursor-pointer overflow-hidden relative group"
          v-for="video in videoData">
          <img :src="video.thumbnail"
            class="w-full h-full object-cover transition-all duration-100 group-hover:scale-150" alt="">
          <div
            class="bg-[#00000038] absolute top-0 left-0 right-0 bottom-0 flex justify-end items-start flex-col px-4 py-8">
            <div class="hidden gap-4 my-4 group-hover:flex transition-all duration-100">
              <span class="pi pi-pencil text-blue-900"></span>
              <span class="pi pi-play-circle text-pink-500" @click="watchVideo" :key="video.thumbnail"></span>
              <span class="pi pi-trash text-red-900"></span>
            </div>
            <h1 class="text-slate-100 font-bold text-[18px] group-hover:text-[20px] transition-all duration-100">{{
              video.title }}</h1>
            <span
              class="text-slate-200 text-[12px] tracking-[1px] group-hover:text-[14px]  transition-all duration-100">{{
                video.description
              }}</span>
          </div>
        </div>
      </div>
    </section>
    <PopupComponent :isShow="showVideo" @onClose="onClose" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

import ButtonPrimaryComponent from '@/components/ButtonPrimaryComponent.vue';
import PopupComponent from '@/components/PopupComponent.vue'


const showVideo = ref<boolean>(false)

const watchVideo = () => {
  showVideo.value = true
}

const onClose = () => {
  showVideo.value = false
}

interface VideoInterface {
  thumbnail?: string,
  title?: string,
  description?: string
}


const videoData = ref<VideoInterface[]>([
  {
    thumbnail: "/public/assets/thumbnail/1.jpeg",
    title: "Makanan yang teratur",
    description: "Selalu memakan makan yang sehat dan bergizi agar baik untuk bayi"
  },
  {
    thumbnail: "/public/assets/thumbnail/2.jpg",
    title: "Makanan yang teratur",
    description: "Selalu memakan makan yang sehat dan bergizi agar baik untuk bayi"
  },
  {
    thumbnail: "/public/assets/thumbnail/3.jpg",
    title: "Makanan yang teratur",
    description: "Selalu memakan makan yang sehat dan bergizi agar baik untuk bayi"
  },
  {
    thumbnail: "/public/assets/thumbnail/4.jpg",
    title: "Makanan yang teratur",
    description: "Selalu memakan makan yang sehat dan bergizi agar baik untuk bayi"
  }
])
</script>
<style lang="">

</style>