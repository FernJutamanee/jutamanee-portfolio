import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// 👉 Import Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

AOS.init()
createApp(App).mount('#app')
