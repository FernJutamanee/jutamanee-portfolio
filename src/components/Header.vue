<template>
    <header class="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-800">
        <div class="text-xl font-bold text-gray-800 dark:text-white">
            MyApp
        </div>

        <nav class="flex space-x-4">
            <router-link v-for="item in menuItems" :key="item.name" :to="item.path"
                class="text-gray-700 dark:text-gray-200 hover:underline">
                {{ item.name }}
            </router-link>
        </nav>

        <button @click="toggleDarkMode"
            class="ml-4 px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-sm text-gray-800 dark:text-white">
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
        </button>
    </header>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
]

const isDark = ref(false)

const toggleDarkMode = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
    isDark.value = document.documentElement.classList.contains('dark')
})
</script>

<style scoped>
/* Optional styling tweaks */
</style>