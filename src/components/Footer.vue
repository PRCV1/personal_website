<template>
    <footer class="py-5" :class="[isDarkmode ? 'bg-dark' : 'bg-light']">
        <div class="container d-flex justify-content-center">
            <router-link v-for="(item, index) in routes" :key="index" :to="item.to" class="p-1" :class="[isCurrentRoute(item.to) ? '' : 'text-decoration-none']">
                {{ item.text }}
            </router-link>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useDarkmode } from "../helper/useDarkmode"

const { isDarkmode, setIsDarkmode } = useDarkmode()
const { currentRoute } = useRouter()

const routes = [
    {
        to: "/",
        text: "Start"
    },
    {
        to: "/impressum",
        text: "Impressum"
    },
    {
        to: "/datenschutz",
        text: "Datenschutz"
    }
]

function isCurrentRoute(url:String): boolean {
    return currentRoute.value.path === url
}

</script>