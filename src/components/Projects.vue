<template>
    Gute Zusammenarbeit zwischen mir und meinen Kollegen oder Kunden ist der Schlüssel zum Erfolg für ein Softwareprojekt. Verständliche Kommunikation, ordentliche Projektplanung und die Einhaltung der Kosten sind essenziell. Ziehe ich mit meinen Kollegen oder Kunden an einem Strang, führt das zu großartigen Ergebnissen.
    <div v-if="projects.length > 0">
        <div class="list-group my-2" v-for="(item, index) in projects" :key="index">
            <div
                class="list-group-item border-0 bg-transparent"
                :class="[isDarkmode ? 'text-white-50' : 'text-dark']"
                aria-current="true"
            >
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ item.title }}</h5>
                </div>
                <p class="mb-1">{{ item.description }}</p>
                <small>
                    <BsLink
                        class="text-decoration-none"
                        :show-icon="true"
                        :url="String(item.url)"
                        text="jetzt Herunterladen"
                    />
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
import BsLink from "./bsLink.vue";

import { useDarkmode } from "../helper/useDarkmode"

const { isDarkmode } = useDarkmode()

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