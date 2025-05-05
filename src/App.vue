<template>
  <div class="container mx-auto px-4">
    <Header />
    <HeroSection />
    <PersonalInfo />
    <SkillsSection />
  </div>
</template>

<script lang="ts" setup>
import HeroSection from './components/HeroSection.vue';
import PersonalInfo from './components/PersonalInfo.vue';
import SkillsSection from './components/SkillsSection.vue';
import Header from './components/Header.vue';
</script>

<style scoped>
/* Custom animation styles if needed */
</style>
