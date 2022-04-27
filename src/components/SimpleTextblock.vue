<template>
    <div>
        <h1 v-if="titleSize === TitleSize.h1" class="fw-bold" :class="[isDarkmode ? 'text-white-50' : 'text-dark']">{{
                title
        }}</h1>
        <h2 v-else-if="titleSize === TitleSize.h2" class="fw-bold"
            :class="[isDarkmode ? 'text-white-50' : 'text-dark']">{{ title }}</h2>
        <h3 v-else-if="titleSize === TitleSize.h3" class="fw-bold"
            :class="[isDarkmode ? 'text-white-50' : 'text-dark']">{{ title }}</h3>
        <h4 v-else-if="titleSize === TitleSize.h4" class="fw-bold"
            :class="[isDarkmode ? 'text-white-50' : 'text-dark']">{{ title }}</h4>
        <h5 v-else-if="titleSize === TitleSize.h5" class="fw-bold"
            :class="[isDarkmode ? 'text-white-50' : 'text-dark']">{{ title }}</h5>
        <h6 v-else-if="titleSize === TitleSize.h6" class="fw-bold"
            :class="[isDarkmode ? 'text-white-50' : 'text-dark']">{{ title }}</h6>
        <p class="text-start" :class="[isDarkmode ? 'text-white-50' : 'text-dark']">
            <slot></slot>
        </p>
    </div>
</template>

<script setup lang="ts">
import TitleSize from "../helper/TitleSize"

import { useDarkmode } from "../helper/useDarkmode"

const { isDarkmode } = useDarkmode();

defineProps({
    title: {
        type: String,
        required: true
    },
    titleSize: {
        type: String,
        required: false,
        default: TitleSize.h4
    }
})

</script>