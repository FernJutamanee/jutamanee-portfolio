<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Jutamanee Thongbor</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item"><a class="nav-link active" href="#">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Skills</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                </ul>
                <!-- ปุ่มเปลี่ยนธีม พร้อมไอคอน -->
                <button class="btn btn-outline-secondary d-flex align-items-center gap-2" @click="toggleTheme">
                    <span v-if="isDark">☀️</span>
                    <span v-else>🌙</span>
                    <span>{{ isDark ? 'Light' : 'Dark' }}</span>
                </button>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);

function toggleTheme() {
    isDark.value = !isDark.value;
    document.body.classList.toggle('dark-theme', isDark.value);
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
}

onMounted(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        isDark.value = true;
        document.body.classList.add('dark-theme');
    }
});
</script>