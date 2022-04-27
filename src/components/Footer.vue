<template>
    <footer class="py-5" :class="[isDarkmode ? 'bg-dark' : 'bg-light']">
        <div class="container d-flex justify-content-center">
            <router-link to="/impressum">Impressum</router-link>
            <router-link to="/datenschutz">Datenschutzerklärung</router-link>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useDarkmode } from "../helper/useDarkmode"

const { isDarkmode, setIsDarkmode } = useDarkmode()
</script>