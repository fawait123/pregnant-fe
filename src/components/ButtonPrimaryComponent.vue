<template>
    <button @click="onClick"
        :class="[props.className, 'block rounded-lg bg-[#f751a6] hover:bg-[#fa98cb] px-5 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring']"
        type="button">
        {{ props.title }}
    </button>
</template>

<script setup lang="ts">
interface ButtonInterface {
    title?: string,
    className?: string
}

const emmitt = defineEmits(['onClick'])
const props = withDefaults(defineProps<ButtonInterface>(), {
    title: "Button",
    className: ""
})

const onClick = () => {
    emmitt('onClick')
}
</script>

<style scoped></style>