<template>
    <button
        :class="['block rounded-lg bg-[#f751a6] hover:bg-[#fa98cb] px-5 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring', props.className]"
        type="button">
        {{ props.title }}
    </button>
</template>

<script setup lang="ts">
interface ButtonInterface {
    title?: string,
    className?: string
}
const props = withDefaults(defineProps<ButtonInterface>(), {
    title: "Button",
    className: ""
})
</script>

<style scoped></style>