import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import 'leaflet/dist/leaflet.css'

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()
createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app')