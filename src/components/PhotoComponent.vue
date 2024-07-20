<template>
    <a href="#" class="group relative block w-[400px] shadow-md">
        <div class="relative h-[350px] sm:h-[450px]">
            <img :src="props.source" alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0" />

            <img :src="props.source" alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
        </div>

        <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 class="text-xl font-medium text-white py-[4px] px-4 bg-[#00000070]">{{ props?.userID?.name ?? '' }}</h3>

            <p class="mt-1.5 text-pretty text-xs text-white py-[4px] px-4 bg-[#00000070]">
                {{ moment(props.date).format("DD MMMM YYYY") }}
            </p>

            <span
                class="mt-3 inline-block bg-[#f751a6] px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                Catatan
            </span>
        </div>
    </a>
</template>
<script lang="ts" setup>
import type { IUser } from '@/interface/user';
import moment from 'moment';

interface PhotoInterface {
    source: string
    date: string
    userID: IUser
}
const props = defineProps<PhotoInterface>()
</script>
<style lang="">

</style>