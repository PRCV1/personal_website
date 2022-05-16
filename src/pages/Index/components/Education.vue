<template>
    <ol v-if="edus.length > 0" class="list-group">
        <li v-for="(item, index) in edus" :key="index" :class="textClass"
            class="border-0 list-group-item list-group-item-dark bg-transparent d-flex justify-content-between align-items-start">
            <i class="bi bi-mortarboard"></i>
            <div class="ms-2 me-auto">
                <div class="fw-bold">{{ item.name }}</div>
                {{ `${item.where} (${item.fromYear} - ${item.toYear ?? "heute"})` }}
            </div>
        </li>
    </ol>
    <div v-else class="d-flex justify-content-center">
        <div class="spinner-border" role="status"></div>
    </div>
</template>

<script setup lang="ts">

import { onMounted, ref, Ref } from "vue";
import { useDarkmode } from "../../../helper/useDarkmode"

const { textClass, bgClass } = useDarkmode()

interface IEducation {
    name: String,
    where: String,
    fromYear: Number,
    toYear: Number | undefined
}

const edus: Ref<IEducation[]> = ref([])

onMounted(async () => {
    var response = await fetch("education.json")
    edus.value = Object.assign([], await response.json())
})

</script>