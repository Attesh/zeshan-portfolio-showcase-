<!-- resources/js/pages/NotFound.vue -->
<template>
  <div class="not-found-page">
    <h1>404 - Page Not Found</h1>
    <p>We couldn't find what you're looking for</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script setup>
// Optional: Add any logic you need
</script>

<style scoped>
.not-found-page {
  text-align: center;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>