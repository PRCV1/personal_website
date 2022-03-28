import { createApp } from 'vue'
import App from './App.vue'
import VueMeta, { createMetaManager } from 'vue-meta';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../scss/custom.scss"

var app = createApp(App).use(createMetaManager())
app.mount("#app")