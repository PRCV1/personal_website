<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { onBeforeMount, watch } from "vue";
import { useDarkmode } from "./helper/useDarkmode"

const { isDarkmode } = useDarkmode();

onBeforeMount(() => {
  toggleMode(isDarkmode.value)
})

watch(isDarkmode, (newValue: Boolean, oldValue: Boolean) => {
  toggleMode(newValue)
})

function toggleMode(darkmode: Boolean) {
  let cssClass = darkmode ? "bg-dark-2" : "bg-light-2"
  document.querySelector("body")!.classList.value = cssClass
}

</script>