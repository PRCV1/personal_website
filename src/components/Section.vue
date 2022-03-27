<template>
    <section class="mb-5 p-4 shadow-sm rounded" :class="[isDarkmode ? 'bg-dark' : 'bg-light']">
        <h2 :class="[isDarkmode ? 'text-white' : 'text-dark']">{{ title }}</h2>
        <div :class="[isDarkmode ? 'text-white-50' : 'text-dark']">
            <slot></slot>
        </div>
    </section>
</template>

<script setup lang="ts">

import { useDarkmode } from "../helper/useDarkmode"

const { isDarkmode } = useDarkmode()

defineProps({
    title: {
        type: String,
        required: true
    }
})

</script>