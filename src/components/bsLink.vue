<template>
    <i v-if="showIcon" :class="getIcon()"></i>
    <a :href="url" target="_blank" rel="noopener noreferrer">
        {{text}}
    </a>
</template>

<script setup lang="ts">

function getIcon(): String {
    var value = (props.icon ?? "bi bi-box-arrow-up-right") + " me-1"
    console.log(value);
    
    return value
}

const props = defineProps({
    showIcon: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: null
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