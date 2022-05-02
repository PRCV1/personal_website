import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../scss/custom.scss"

import Index from "./pages/Index.vue"
import Impressum from "./pages/Impressum.vue"
import Datenschutz from "./pages/Datenschutz.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Index
        },
        {
            path: "/impressum",
            component: () => import("./pages/Impressum.vue")
        },
        {
            path: "/datenschutz",
            component: () => import("./pages/Datenschutz.vue")
        }
    ]
})

var app = createApp(App).use(router)
app.mount("#app")