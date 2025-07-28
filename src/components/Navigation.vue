<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
    :class="{
      'bg-background/80 backdrop-blur-md border-gray-300/20': isScrolled,
      'bg-transparent border-transparent': !isScrolled
    }"
    role="navigation"
    aria-label="Primary Navigation"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <button
          @click="scrollToTop"
          class="flex items-center gap-2 font-bold text-xl cursor-pointer group transition-colors"
          :class="isScrolled ? 'text-gray-900' : 'text-gray-800'"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="2">
            <defs>
              <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#60a5fa" />
                <stop offset="50%" stop-color="#4ade80" />
                <stop offset="100%" stop-color="#f9fafb" />
              </linearGradient>
            </defs>
            <polyline points="16 18 22 12 16 6" stroke="url(#logoGradient)" />
            <polyline points="8 6 2 12 8 18" stroke="url(#logoGradient)" />
          </svg>

          <span class="flex text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-gray-50">
            Zee<span>shan Ali</span>
          </span>
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <button
            v-for="item in navItems"
            :key="item.label"
            @click="scrollToSection(item.href)"
            class="text-muted-foreground hover:text-blue-500 transition-colors relative group font-medium cursor-pointer"
          >
            {{ item.label }}
            <div
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"
            />
          </button>

          <button
            @click="scrollToSection('#contact')"
            class="ml-4 px-4 py-2 rounded-md font-medium text-gray-900
                   bg-gradient-to-r from-blue-400 via-green-400 to-gray-50
                   hover:from-blue-500 hover:via-green-500 hover:to-gray-100
                   hover:shadow-lg hover:scale-105
                   transition duration-300 cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          @click="toggleMenu"
          class="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors cursor-pointer"
          :aria-expanded="isOpen.toString()"
          aria-label="Toggle menu"
        >
          <span class="relative w-6 h-5 flex items-center justify-center">
            <span
              :class="[
                'absolute h-0.5 w-6 bg-current transition-transform duration-300',
                isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-2'
              ]"
            ></span>
            <span
              :class="[
                'absolute h-0.5 w-6 bg-current transition-opacity duration-300',
                isOpen ? 'opacity-0' : 'opacity-100'
              ]"
            ></span>
            <span
              :class="[
                'absolute h-0.5 w-6 bg-current transition-transform duration-300',
                isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-2'
              ]"
            ></span>
          </span>
        </button>
      </div>

      <!-- Mobile Nav -->
      <transition name="fade">
        <div
          v-if="isOpen"
          class="lg:hidden fixed inset-x-4 top-[72px] z-50 bg-black/95 border border-gray-200 rounded-xl shadow-xl backdrop-blur-md"
        >
          <div class="flex flex-col p-6 space-y-4">
            <button
              v-for="item in navItems"
              :key="item.label"
              @click="handleMobileNavClick(item.href)"
              class="text-left text-muted-foreground hover:text-blue-500 transition-colors py-2 cursor-pointer"
            >
              {{ item.label }}
            </button>

            <button
              @click="handleMobileNavClick('#contact')"
              class="mt-4 w-full px-4 py-2 rounded-md font-medium text-gray-900
                     bg-gradient-to-r from-blue-400 via-green-400 to-gray-50
                     hover:from-blue-500 hover:via-green-500 hover:to-gray-100
                     hover:shadow-lg hover:scale-105
                     transition duration-300 cursor-pointer"
            >
              Hire Me
            </button>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (id) => {
  const el = document.getElementById(id.replace('#', ''))
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  isOpen.value = false
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const handleMobileNavClick = (id) => {
  scrollToSection(id)
  isOpen.value = false
}

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
