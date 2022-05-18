<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
import { onBeforeMount, watch } from "vue";
import { useDarkmode } from "./helper/useDarkmode"
import { useHead } from "@vueuse/head"

const { isDarkmode } = useDarkmode();

onBeforeMount(() => {
  toggleMode(isDarkmode.value)
})

useHead({
  meta: [
    {
      name: "author",
      content: "Lukas Müller"
    },
    {
      name: "copyright",
      content: "Lukas Müller"
    },
    {
      name: "robots",
      content: "index"
    },
    {
      name: "description",
      content: "Die Vorstellungsseite von Lukas Müller, einen Anwendungsentwickler aus Bad Hersfeld."
    },
    {
      name: "keywords",
      content: "Entwickler, Hessen, .NET, C#, Windows, Anwendungsentwickler"
    }
  ]
})

watch(isDarkmode, (newValue: Boolean, oldValue: Boolean) => {
  toggleMode(newValue)
})

function toggleMode(darkmode: Boolean) {
  let cssClass = darkmode ? "bg-dark-2" : "bg-light-2"
  document.querySelector("body")!.classList.value = cssClass
}

</script>