<template>
    <section class="mb-5 p-4 shadow-sm rounded" :class="bgClass">
        <h2 :class="[textClass, centerTitle ? 'text-center' : '']" >{{ title }}</h2>
        <div :class="textClass">
            <slot></slot>
        </div>
    </section>
</template>

<script setup lang="ts">

import { useDarkmode } from "../helper/useDarkmode"

const { bgClass, textClass } = useDarkmode()

defineProps({
    title: {
        type: String,
        required: true
    },
    centerTitle: {
        type: Boolean,
        default: false
    }
})

</script>