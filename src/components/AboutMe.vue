<template>
    <section class="text-center my-10" data-aos="fade-up">
        <h1 class="text-4xl font-bold text-gray-800">Jutamanee Thongbor</h1>
        <p class="text-lg text-gray-500">Frontend Developer | Vue & Quasar Framework Enthusiast</p>
        <div ref="tiltRef" class="relative mx-auto" data-aos="zoom-in" data-aos-duration="5000">
            <img src="/jutamanee-thongbor.jpg" alt="Jutamanee Thongbor" class="object-cover rounded-full"
                style="width: 400px; height: 700px !important;" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VanillaTilt from 'vanilla-tilt'

const tiltRef = ref<HTMLElement | null>(null);

onMounted(() => {
    if (tiltRef.value) {
        VanillaTilt.init(tiltRef.value, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.05,
        })
    }
})
</script>

<style scoped>
img {
    transition: transform 0.3s ease;
}
</style>