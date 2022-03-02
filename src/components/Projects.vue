<template>
    Gute Zusammenarbeit zwischen mir und meinen Kollegen oder Kunden ist der Schlüssel zum Erfolg für ein Softwareprojekt. Verständliche Kommunikation, ordentliche Projektplanung und die Einhaltung der Kosten sind essenziell. Ziehe ich mit meinen Kollegen oder Kunden an einem Strang, führt das zu großartigen Ergebnissen.
    <div v-if="projects.length > 0">
        <div class="list-group" v-for="(item, index) in projects" :key="index">
            <div
                class="list-group-item border-0 bg-transparent"
                :class="[ThemeSwitcher.isDarkmode.value ? 'text-white-50' : 'text-dark']"
                aria-current="true"
            >
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                </div>
                <p class="mb-1">Some placeholder content in a paragraph.</p>
                <small>
                    <BsLink :show-icon="true" :url="String(item.url)" text="jetzt Herunterladen" />
                </small>
            </div>
        </div>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/PRCV1?tab=repositories"
            class="btn btn-primary"
        >
            <i class="bi bi-github me-1"></i>
            mehr bei GitHub
            <i class="bi bi-chevron-right ms-1"></i>
        </a>
    </div>
    <div v-else class="d-flex justify-content-center">
        <div class="spinner-border" role="status"></div>
    </div>
</template>

<script setup lang="ts">

import { onMounted, Ref, ref } from "vue";
import ThemeSwitcher from "../helper/ThemeSwitcher"
import BsLink from "./bsLink.vue";

interface IProject {
    title: String,
    description: String,
    url: String
}

const projects: Ref<IProject[]> = ref([])

onMounted(async () => {
    var response = await fetch("projects.json")
    projects.value = Object.assign([], await response.json())
})

</script>