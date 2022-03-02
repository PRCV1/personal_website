<template>
    <div class="form-check form-switch" @click="changeValue">
        <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
        />
        <label
            class="form-check-label"
            :class="[ThemeSwitcher.isDarkmode.value ? 'text-white' : 'text-dark']"
            for="flexSwitchCheckDefault"
        >{{ label }}</label>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ThemeSwitcher from '../helper/ThemeSwitcher';

const IsChecked = ref(false)

defineProps({
    label: {
        type: String,
        required: true
    }
})

const emits = defineEmits<{
    (event: 'OnChange', value: boolean): void
}>()

function changeValue(): void {
    IsChecked.value = !IsChecked.value
    emits("OnChange", IsChecked.value)
}

</script>