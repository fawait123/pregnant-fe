<template>
  <div>
    <HeaderComponent :with-back-button="false" :with-primary-button="true" route-name="video-create"
      title="Tambah Video" />
    <section class="my-8">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        <SkeletonComponent v-for="item in [1, 2, 3, 4]" :key="item" v-if="pagination.loading" />
        <div class="h-[200px] rounded-lg bg-white cursor-pointer overflow-hidden relative group" v-else
          v-for="video in videoData">
          <VideoComponent :title="video.title" :thumbnail="video.thumbnail" :description="video.description"
            @onShowVideo="watchVideo(video)" @onEdit="onEdit(video)" />
        </div>
        <div ref="observer" />
      </div>
    </section>
    <PopupComponent :isShow="showVideo" @onClose="onClose" :title="sourceTitle" :source="sourceVideo" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

import SkeletonComponent from '@/components/SkeletonComponent.vue'
import PopupComponent from '@/components/PopupComponent.vue'
import doRequest, { baseURL } from '@/helpers/doRequest';
import { toast } from '@steveyuowo/vue-hot-toast';
import { ErrorResponse } from '@/helpers/ErrorResponse';
import type { IPagination } from '@/interface/paginate';
import VideoComponent from '@/components/VideoComponent.vue';
import { SuccessResponse } from '@/helpers/SuccessResponse';
import HeaderComponent from '@/components/HeaderComponent.vue';
import router from '@/router';


const observer = ref(null)

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

const onEdit = (row: any) => {
  router.push({ name: 'video-create', query: { edit: 'true', id: row._id } })
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

useIntersectionObserver(observer, watchIntersection);

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

function watchIntersection([{ isIntersecting }]: IntersectionObserverEntry[]) {
  if (isIntersecting && !pagination.value.loading) {
    if (pagination.value.page != pagination.value.totalPage) {
      pagination.value.page = pagination.value.page + 1
      getData()
    }
  }
}


const getNextUser = () => {
  window.onscroll = () => {
    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
    console.log(document.documentElement.offsetHeight)
    if (bottomOfWindow) {
      if (pagination.value.page != pagination.value.totalPage) {
        pagination.value.page = pagination.value.page + 1
        // getData()
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