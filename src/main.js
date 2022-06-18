import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);
import { createRouter, createWebHistory } from 'vue-router';
import DvoDimenzionalni from './components/DvoDimenz/DvoDimenzionalni.vue';
import TroDimenzionalni from './components/TroDimenz/TroDimenzionalni.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import TheHeader from './components/UI/TheHeader.vue';
import TheFooter from './components/UI/TheFooter.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: DvoDimenzionalni },
    { path: '/dvodimenzionalni', component: DvoDimenzionalni },
    { path: '/trodimenzionalni', component: TroDimenzionalni },
  ],
  
});
app.use(router);

app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);

app.mount('#app');
