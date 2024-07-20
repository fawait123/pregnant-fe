<template>
  <div class="flex flex-col gap-8">
    <HeaderComponent :withBackButton="false" />
    <section class="bg-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <PhotoComponent v-for="camera in cameraData" :source="`${baseURL}/${camera.source}`" :date="camera.date"
        :userID="camera.userID" />
    </section>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import PhotoComponent from '@/components/PhotoComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue';
import doRequest, { baseURL } from '@/helpers/doRequest';
import type { IPagination } from '@/interface/paginate';
import { SuccessResponse } from '@/helpers/SuccessResponse';
import type { ICamera } from '@/interface/cameara';
import { toast } from '@steveyuowo/vue-hot-toast';
import { ErrorResponse } from '@/helpers/ErrorResponse';

interface CardInterface {
  title?: string,
  amount?: number
}

const pagination = ref<IPagination>({
  page: 1,
  limit: 12,
  total: 0,
  search: null,
  loading: false,
  totalPage: 0
})

let dataCamera: ICamera[] = []
const cameraData = ref<ICamera[]>()

const getData = async () => {
  pagination.value.loading = true
  try {
    const response = await doRequest({
      url: "/capture",
      method: 'get',
      params: {
        page: pagination.value.page,
        limit: pagination.value.limit,
      }
    })
    const data = SuccessResponse.toPaginate<ICamera[]>(response.data)
    data.data.map((item: any) => dataCamera.push(item))
    cameraData.value = dataCamera
    pagination.value.loading = false
    pagination.value.totalPage = Math.ceil(data.total / data.limit)
  } catch (error) {
    pagination.value.loading = false
    toast.error(ErrorResponse.message(error))
  }
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

onMounted(() => {
  getData()
})
</script>
<style lang="">

</style>