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
        <SkeletonComponent v-for="item in [1, 2, 3, 4]" :key="item" v-if="pagination.loading" />
        <div class="h-[200px] rounded-lg bg-white cursor-pointer overflow-hidden relative group" v-else
          v-for="video in videoData">
          <VideoComponent :title="video.title" :thumbnail="video.thumbnail" :description="video.description"
            @onShowVideo="watchVideo(video)" />
        </div>
      </div>
    </section>
    <PopupComponent :isShow="showVideo" @onClose="onClose" :title="sourceTitle" :source="sourceVideo" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, toRefs } from 'vue';

import ButtonPrimaryComponent from '@/components/ButtonPrimaryComponent.vue';
import SkeletonComponent from '@/components/SkeletonComponent.vue'
import PopupComponent from '@/components/PopupComponent.vue'
import doRequest, { baseURL } from '@/helpers/doRequest';
import { toast } from '@steveyuowo/vue-hot-toast';
import { ErrorResponse } from '@/helpers/ErrorResponse';
import type { IPagination } from '@/interface/paginate';
import VideoComponent from '@/components/VideoComponent.vue';
import { SuccessResponse } from '@/helpers/SuccessResponse';


const showVideo = ref<boolean>(false)
const sourceVideo = ref<string>('')
const sourceTitle = ref<string>('')
const videoData = ref<VideoInterface[]>()

let dataVideo: VideoInterface[] = []

const watchVideo = (row: any) => {
  sourceVideo.value = baseURL + '/' + row.source as string
  sourceTitle.value = row.title as string
  showVideo.value = true
}

const onClose = () => {
  showVideo.value = false
}

interface VideoInterface {
  thumbnail?: string,
  title?: string,
  description?: string,
  source?: string
}

const pagination = ref<IPagination>({
  page: 1,
  limit: 12,
  total: 0,
  search: null,
  loading: false,
  totalPage: 0
})


const getData = async () => {
  pagination.value.loading = true
  try {
    const response = await doRequest({
      url: "/video",
      method: 'get',
      params: {
        page: pagination.value.page,
        limit: pagination.value.limit,
      }
    })
    const data = SuccessResponse.toPaginate<VideoInterface[]>(response.data)
    data.data.map((item: any) => dataVideo.push(item))
    videoData.value = dataVideo
    pagination.value.loading = false
    pagination.value.totalPage = Math.ceil(data.total / data.limit)
  } catch (error) {
    pagination.value.loading = false
    toast.error(ErrorResponse.message(error))
  }
}

const getNextUser = () => {
  window.onscroll = () => {
    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
    console.log(document.documentElement.offsetHeight)
    if (bottomOfWindow) {
      if (pagination.value.page != pagination.value.totalPage) {
        pagination.value.page = pagination.value.page + 1
        getData()
      }
    }
  }
}

onMounted(async () => {
  await getData()
  getNextUser()
})
</script>
<style lang="">

</style>