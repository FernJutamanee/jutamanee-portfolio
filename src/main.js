import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// 👉 Import Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

// ✅ เรียก AOS.init() หลัง mount
app.mount('#app')
AOS.init({
    duration: 800,       // ความเร็ว default
    once: true,          // เล่นแค่ครั้งเดียวเมื่อ scroll
    easing: 'ease-in-out',
})
