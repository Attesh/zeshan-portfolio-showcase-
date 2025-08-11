

<template>
  <section class="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-secondary">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Text Content -->
      <div class="space-y-8 animate-slide-up">
        <div class="space-y-4">
    <h1 class="text-5xl lg:text-6xl font-bold">
    <span
      class="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
    >
      {{ firstFour }}
    </span>
    <span class="bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
      {{ restName }}
    </span>
  </h1>




          <h2 class="text-2xl lg:text-3xl font-semibold text-muted-foreground">
            {{ profile.title }}
          </h2>
          <p class="text-lg text-muted-foreground max-w-lg">
            {{ profile.bio }}
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4">
          <button 
            @click="scrollToSection('projects')"
            class="px-6 py-3 rounded-md text-white font-medium text-lg flex items-center gap-2
                  bg-gradient-to-r from-green-400 to-blue-400
                  hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-300
                  transition-colors duration-300 border border-[#2c2c2c]
                  transform hover:scale-105 transition-transform duration-300"
          >
            <span class="inline-block w-4 h-4 bg-current mask-mail"></span>
            View My Work
          </button>

          <button 
            @click="scrollToSection('contact')"
            class="px-6 py-3 border border-[#2c2c2c] rounded-md text-white hover:text-green-400 transition-colors font-medium text-lg flex items-center gap-2"
          >
            <span class="inline-block w-4 h-4 bg-current mask-mail"></span>
            Get In Touch
          </button>
        </div>

        <!-- Quick Contact -->
        <div class="flex flex-wrap gap-6 pt-4">
          <a
            :href="`mailto:${profile.email}`"
            class="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span class="inline-block w-4 h-4 bg-current mask-mail"></span>
            <span class="text-sm">{{ profile.email }}</span>
          </a>
          <a
            :href="`tel:${profile.phone}`"
            class="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span class="inline-block w-4 h-4 bg-current mask-phone"></span>
            <span class="text-sm">{{ profile.phone }}</span>
                       
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex gap-4">
          <a
            v-for="social in profile.socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 border border-[#2c2c2c] rounded-lg hover:text-green-400 transition-colors"
          >
            <span :class="['inline-block w-5 h-5 bg-current', social.iconMaskClass]"></span>
            <span>{{ social.name }}</span>
          </a>
        </div>
      </div>

      <!-- Profile Image -->
      <div class="flex justify-center lg:justify-end">
        <div class="relative group cursor-pointer">
          <!-- Circle image wrapper with persistent glow ring and click animation -->
          <div
            @click="animateImage"
            :class="[
              'w-80 h-80 rounded-full p-1 bg-card-gradient transition-transform duration-300 ease-in-out shadow-[0_0_20px_5px_rgba(72,187,120,0.7)]',
              isClicked ? 'scale-105' : 'scale-100'
            ]"
          >
            <div
              class="w-full h-full rounded-full bg-gray-300 bg-cover bg-center"
              :style="`background-image: url('${profile.image}')`"
            ></div>
          </div>

          <!-- Experience badge always lifted and glowing -->
          <div
            class="absolute -bottom-3 -right-1 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-[0_0_15px_3px_rgba(72,187,120,0.8)] animate-float"
          >
            {{ profile.experienceYears }}+ Years Experience
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'
import avatarImg from '@/assets/hero-avatar.jpeg'  // Vite supports this import
import { computed } from 'vue'

const profile = {
  name: 'Zeeshan Ali',
  title: 'Full Stack Developer',
  bio:
    'Experienced Full Stack Developer with 4+ years building scalable web and mobile applications. Specialized in Laravel, React Native, and modern JavaScript frameworks.',
  experienceYears: 4,
  image: avatarImg,
  email: 'Zeshan.baltistan@gmail.com',
  phone: '+923413888063',
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/Attesh',
      iconMaskClass: 'mask-github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/zeeshan-ali-b75b06157',
      iconMaskClass: 'mask-linkedin',
    },
  ],
}
const firstFour = computed(() => profile.name.slice(0, 4))
const restName = computed(() => profile.name.slice(4))
const isClicked = ref(false)

const animateImage = () => {
  isClicked.value = true
  setTimeout(() => {
    isClicked.value = false
  }, 300)
}

const scrollToSection = (sectionId) => {
  const el = document.getElementById(sectionId)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>


<style>
@keyframes floatUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-float {
  animation: floatUpDown 3s ease-in-out infinite;
}

/* Optional: smooth slide-up animation for text content */
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}

/* CSS masks for icons (same as your previous setup) */
.mask-mail {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'%3E%3C/path%3E%3Cpolyline points='22,6 12,13 2,6'%3E%3C/polyline%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'%3E%3C/path%3E%3Cpolyline points='22,6 12,13 2,6'%3E%3C/polyline%3E%3C/svg%3E");
}
.mask-phone {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
}
.mask-github {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'%3E%3C/path%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'%3E%3C/path%3E%3C/svg%3E");
}
.mask-linkedin {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'%3E%3C/path%3E%3Crect x='2' y='9' width='4' height='12'%3E%3C/rect%3E%3Ccircle cx='4' cy='4' r='2'%3E%3C/circle%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'%3E%3C/path%3E%3Crect x='2' y='9' width='4' height='12'%3E%3C/rect%3E%3Ccircle cx='4' cy='4' r='2'%3E%3C/circle%3E%3C/svg%3E");
}
.mask-whatsapp {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21z'/%3E%3Cpath d='M7 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21z'/%3E%3Cpath d='M7 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0z'/%3E%3C/svg%3E");
}
</style>
