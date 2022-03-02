<template>
    <section class="mb-5 p-4" :class="[ThemeSwitcher.isDarkmode.value ? 'bg-dark' : 'bg-secondary']" >
        <h2 :class="[ThemeSwitcher.isDarkmode.value ? 'text-white' : 'text-dark']">
            {{ title }}
        </h2>
        <div :class="[ThemeSwitcher.isDarkmode.value ? 'text-white-50' : 'text-dark']">
            <slot></slot>
        </div>
    </section>
</template>

<script setup lang="ts">

import ThemeSwitcher from '../helper/ThemeSwitcher';

defineProps({
    title: {
        type: String,
        required: true
    }
})

</script>