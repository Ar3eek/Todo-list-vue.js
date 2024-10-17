import { createApp } from 'vue'
import './style.css'
import {createHead} from "@vueuse/head";
import App from './App.vue'
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import routes from "./routes.js";

const head = createHead();

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

createApp(App)
    .use(head)
    .use(router)
    .mount('#app')
