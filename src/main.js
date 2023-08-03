import { createApp } from 'vue';
import App from './App.vue';
import InstantSearch from 'vue-instantsearch/vue3/es';

// createApp(App).mount('#app');

createApp(App).use(InstantSearch).mount('#app');

// const app = createApp(Root).use(InstantSearch).mount('#app')

// new Vue({
//   el: '#app',
//   render: (h) => h(App),
// });
