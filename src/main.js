import './assets/main.scss';
// Default theme
import '@splidejs/vue-splide/css';

// or other themes
// import '@splidejs/vue-splide/css/skyblue';
// import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSplide from '@splidejs/vue-splide';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use( VueSplide );

app.mount('#app')
