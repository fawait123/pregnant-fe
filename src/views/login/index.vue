<template>
    <div class="flex justify-center items-center h-screen p-4">
        <div class="w-[90%] bg-white shadow-md rounded-lg h-[90%] flex justify-between flex-col xl:flex-row relative">
            <div class="flex justify-center items-center flex-col absolute top-4 left-4">
                <span class="block font-bold text-[30px] tracking-[2px]">PREGNANCY</span>
                <span class="block tracking-[5px] text-[14px] font-semibold text-[#E45CA2]">WOMAN HEALTH</span>
            </div>
            <div class="flex-1 flex justify-center items-center flex-col p-4">
                <h1 class="font-bold text-[30px]">LOGIN</h1>
                <p class="font-normal text-[16px] tracking-[1.4px] my-4">How to i get started lorem ipsum dolor at?</p>
                <InputComponent placeholder="Username" class-name="w-full xl:w-[400px] h-[50px] mb-8"
                    icon="pi-user-plus" />
                <InputComponent placeholder="Password" class-name="w-full xl:w-[400px] h-[50px]" type="password"
                    icon="pi-key" :secure="true" />
                <div class="w-full xl:w-[400px] flex justify-end my-3 mb-8">
                    <span class="tracking-[1px] text-black font-semibold underline cursor-pointer">Reset Password</span>
                </div>
                <ButtonComponent class-name="w-full xl:w-[400px] h-[50px] bg-[#E45CA2]" />
                <div class="w-full xl:w-[400px] flex justify-end my-3">
                    <span class="tracking-[1px] text-black font-normal">dons't have an
                        account ? <span
                            class="tracking-[1px] text-black font-semibold underline cursor-pointer">Register</span>
                    </span>
                </div>
            </div>
            <div class="flex-1 flex justify-center items-center bg-[#E45CA2] flex-col rounded-lg p-4">
                <div class="flex justify-start w-full xl:w-[500px] mb-8">
                    <span class="text-white text-[30px] font-bold">SEGERA DAFTAR , <br><span
                            class="text-white text-[15px] font-semibold tracking-[2px]">AYO KONSULTASIKAN KESEHATAN GIGI, KEHAMILAN
                            ANDA
                            DISINI</span> </span>

                </div>
                <div class="w-full xl:w-[500px] border-2 border-white rounded-lg">
                    <img src="/assets/svg/pregnant.svg" class="w-full xl:w-[400px]" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import InputComponent from "@/components/InputComponent.vue"
import ButtonComponent from "@/components/ButtonComponent.vue"
import { ref } from "vue";

interface ReplaceInterface {
    from?: string,
    to?: string
}
const replace = ref<ReplaceInterface[]>([
    { from: "Vue", to: "React?" },
    { from: "Typewriter React?", to: "Joking, it`s Vue!" },
])
</script>

<style scoped></style>