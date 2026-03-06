import { createApp } from 'vue';
import { Quasar, Notify, Dialog, Cookies, Loading } from 'quasar';
import { createPinia } from 'pinia';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/mdi-v6/mdi-v6.css';

// Import Quasar css
import 'quasar/src/css/index.sass';
import '@/styles/index.scss';

import App from './App.vue';
import router from './router';

const app = createApp(App);

// https://quasar.dev/start/vite-plugin/
app.use(Quasar, {
  plugins: {
    Notify,
    Dialog,
    Cookies,
    Loading,
  },
});

// register Pinia before router so stores are available in navigation guards/components
const pinia = createPinia();
app.use(pinia);

app.use(router);

app.mount('#app');
