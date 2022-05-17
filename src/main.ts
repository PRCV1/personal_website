import { createApp } from 'vue'
import App from './App.vue'
import VueMatomo from "vue-matomo"
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../scss/custom.scss"

import Index from "./pages/Index/Index.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Index
        },
        {
            path: "/impressum",
            component: () => import("./pages/Impressum/Impressum.vue")
        },
        {
            path: "/datenschutz",
            component: () => import("./pages/Datenschutz/Datenschutz.vue")
        },
        {
            path: "/itservice",
            component: () => import("./pages/IT-Service/ItService.vue")
        }
    ]
})

var app = createApp(App).use(router)

app.use(VueMatomo, {
    host: "https://analytics.lukasmueller.info/",
    siteId: 1,
    router: router,
    enableLinkTracking: true,
    requireConsent: true,
    trackInitialView: true,
    disableCookies: true
})

app.mount("#app")