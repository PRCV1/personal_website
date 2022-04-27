<template>
    <footer class="py-5" :class="[isDarkmode ? 'bg-dark' : 'bg-light']">
        <div class="container d-flex justify-content-center">
            <BsLink url="/impressum" text="Impressum" />
            <BsLink url="/datenschutz" text="Datenschutz" />
            <BsLink url="test" text="Sitemap" />
            <router-link to="/impressum">Go to Home</router-link>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useDarkmode } from "../helper/useDarkmode"
import BsLink from "./bsLink.vue";

const { isDarkmode, setIsDarkmode } = useDarkmode()
</script>