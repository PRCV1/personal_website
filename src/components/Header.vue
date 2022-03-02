<template>
    <header class="py-5" :class="[ThemeSwitcher.isDarkmode.value ? 'bg-dark' : '']">
        <div class="container">
            <div class="row">
                <div class="col">
                    <!-- <div class="row">
                        <div class="col">
                            <img
                                class="img-fluid rounded-circle"
                                src="https://lukasmueller.info/_nuxt/img/77839d1.jpg"
                                width="175"
                            />
                        </div>
                        <div
                            class="col"
                            :class="[ThemeSwitcher.isDarkmode.value ? 'text-white' : 'text-dark']"
                        >
                            <h1>Lukas Müller</h1>
                            <h2>Anwendungsentwickler</h2>
                            <ul class="list-inline">
                                <li
                                    v-for="(item, index) in socialLinks"
                                    :key="index"
                                    class="list-inline-item"
                                >
                                    <a
                                        :href="String(item.url)"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i style="font-size: 2rem;" :class="item.icon"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>-->
                    <div class="d-flex align-items-center" :class="[ThemeSwitcher.isDarkmode.value ? 'text-white' : 'text-dark']">
                        <div class="flex-shrink-0">
                            <img class="img-fluid rounded-circle" src="https://lukasmueller.info/_nuxt/img/77839d1.jpg" width="175" />
                        </div>
                        <div
                            class="flex-grow-1 ms-3"
                        >
                            <h1>Lukas Müller</h1>
                            <h2>Anwendungsentwickler</h2>
                            <ul class="list-inline">
                                <li
                                    v-for="(item, index) in socialLinks"
                                    :key="index"
                                    class="list-inline-item"
                                >
                                    <a
                                        :href="String(item.url)"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i style="font-size: 2rem;" :class="item.icon"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-auto">
                    <BsSwitch label="Darkmode" />
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import ThemeSwitcher from '../helper/ThemeSwitcher';
import BsSwitch from './bsSwitch.vue';

interface ISocialMedia {
    url: String,
    icon: String
}

const socialLinks: ISocialMedia[] = [
    {
        url: "https://twitter.com/luk4slol",
        icon: "bi bi-twitter",
    },
    {
        url: "https://github.com/PRCV1",
        icon: "bi bi-github",
    },
    {
        url: "https://www.instagram.com/luk4slol/",
        icon: "bi bi-instagram",
    },
]

</script>