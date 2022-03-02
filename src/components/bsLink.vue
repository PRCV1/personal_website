<template>
    <a :href="url" target="_blank" rel="noopener noreferrer">
        <i v-if="showIcon" class="bi bi-box-arrow-up-right me-1"></i>
        {{ text }}
    </a>
</template>

<script setup lang="ts">

const props = defineProps({
    showIcon: {
        type: Boolean,
        default: false
    },
    url: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

</script>