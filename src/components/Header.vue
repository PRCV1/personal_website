<template>
    <header class="py-md-5 py-3" :class="[isDarkmode ? 'bg-dark' : 'bg-light']">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="row" :class="[isDarkmode ? 'text-white' : 'text-dark']">
                        <div class="col-md-2 d-flex justify-content-center">
                            <img class="img-fluid rounded-circle" src="https://lukasmueller.info/_nuxt/img/77839d1.jpg"
                                width="175" />
                        </div>
                        <div class="col-md-10 text-md-start text-center">
                            <ul class="list-unstyled">
                                <li>
                                    <h1>
                                        Lukas Müller
                                    </h1>
                                </li>
                                <li>
                                    <h2>Anwendungsentwickler</h2>
                                </li>
                            </ul>
                            <ul class="list-inline">
                                <li v-for="(item, index) in socialLinks" :key="index" class="list-inline-item">
                                    <a :href="String(item.url)" target="_blank" rel="noopener noreferrer">
                                        <i style="font-size: 2rem;" :class="item.icon"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- <div class="d-flex align-items-center" :class="[isDarkmode ? 'text-white' : 'text-dark']">
                        <div class="flex-shrink-0">
                            <img class="img-fluid rounded-circle" src="https://lukasmueller.info/_nuxt/img/77839d1.jpg"
                                width="175" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <h1>Lukas Müller</h1>
                            <h2>Anwendungsentwickler</h2>
                            <ul class="list-inline">
                                <li v-for="(item, index) in socialLinks" :key="index" class="list-inline-item">
                                    <a :href="String(item.url)" target="_blank" rel="noopener noreferrer">
                                        <i style="font-size: 2rem;" :class="item.icon"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> -->
                </div>
                <div class="col-12 col-md-auto d-flex justify-content-center">
                    <div class="form-check form-switch" @click="setIsDarkmode(!isDarkmode)">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                            v-model="isDarkmode" />
                        <label :class="[isDarkmode ? 'text-white' : 'text-dark']" class="form-check-label"
                            for="flexSwitchCheckChecked"> Darkmode </label>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useDarkmode } from "../helper/useDarkmode"

const { isDarkmode, setIsDarkmode } = useDarkmode()

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