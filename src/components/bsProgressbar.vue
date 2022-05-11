<template>
    <div class="mb-3">
        <h6>{{ label }}</h6>
        <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" :style="`width: ${value}%`" :aria-valuenow="value"
                aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})
</script>