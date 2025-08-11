<template>
  <section id="contact" class="py-20 px-6 bg-secondary/20">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
          
           <span class="bg-[#00CADE] bg-clip-text text-transparent">Let's Work</span>
  <span class="bg-[#00DACF] bg-clip-text text-transparent"> Together</span>
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto text-[#94A3B8]">
          Ready to bring your next project to life? Let's discuss how I can help you achieve your goals.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="bg-card border border-[#2c2c2c] rounded-lg p-6 animate-slide-up">
            <div class="mb-6">
              <h3 class="text-xl font-semibold flex items-center gap-3">
                <span class=" bg-[#00AAFF] w-6 h-6 mask-message-circle  "></span>
                Get In Touch
              </h3>
              <p class="text-muted-foreground text-[#94A3B8]">
                Available for freelance projects, full-time opportunities, and consulting work.
              </p>
            </div>
            <div class="space-y-4">
              <div 
                v-for="contact in contactInfo" 
                :key="contact.label"
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div :class="`p-2 rounded-lg  ${contact.color} text-white `"> 
                  <span :class="`inline-block w-5 h-5 ${contact.iconClass} bg-white `"></span>
                </div>
                <div class="flex-1">
                  <p class="font-medium">{{ contact.label }}</p>
                  <a 
                    :href="contact.href"
                    class="text-muted-foreground hover:text-primary transition-colors text-[#94A3B8]"
                  >
                    {{ contact.value }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="bg-card border border-[#2c2c2c] rounded-lg p-6 animate-slide-up" :style="{ animationDelay: '0.1s' }">
            <div class="mb-6">
              <h3 class="text-xl font-semibold flex items-center gap-3">
                <span class="w-6 h-6 mask-github text-primary"></span>
                Professional Links
              </h3>
              <p class="text-muted-foreground text-[#94A3B8]">
                View my work and connect with me on professional platforms.
              </p>
            </div>
            <div class="space-y-4">
              <div 
                v-for="social in socialLinks" 
                :key="social.label"
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div :class="`p-2 rounded-lg ${social.color} text-white`">
                  <span :class="`inline-block w-5 h-5 ${social.iconClass} bg-white`"></span>
                </div>
                <div class="flex-1">
                  <p class="font-medium">{{ social.label }}</p>
                  <a 
                    :href="social.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-muted-foreground hover:text-primary transition-colors text-[#94A3B8]"
                  >
                    {{ social.value }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-primary/10 to-accent/10 border border-[#2c2c2c] rounded-lg p-6 animate-slide-up" :style="{ animationDelay: '0.2s' }">
            <div class="mb-6">
              <h3 class="text-2xl font-semibold">Ready to Start a Project?</h3>
              <p class="text-muted-foreground text-base text-[#94A3B8]">
                I'm currently available for new opportunities and exciting projects. 
                Let's discuss your requirements and create something amazing together.
              </p>
            </div>
            <div class="space-y-6">
              <div class="space-y-4">
                <h4 class="font-semibold">What I Can Help You With:</h4>
                <ul class="space-y-2 text-muted-foreground">
                  <li v-for="(item, index) in helpItems" :key="index" class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 bg-[#94A3B8]" />
                    
                     
                     <span class="bg-[#00CADE] bg-clip-text text-transparent">{{ item }}</span>
                  </li>
                </ul>
              </div>

              <div class="space-y-4">
               <button
  class="w-full px-6 py-3 text-white rounded-md hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2"
  @click="openEmail"
  style="background: linear-gradient(to right, #00BFEA, #00EDBD, #00D5D3);"
>
  <span class="inline-block w-4 h-4 mask-mail bg-white"></span>
  Send Email
</button>

                
               <button
  @click="openLinkedIn"
  class="w-full px-6 py-3 border border-[#2c2c2c] rounded-md transition-colors font-medium flex items-center justify-center gap-2 text-white"
  style="background-color: transparent;"
  @mouseover="($event.currentTarget.style.backgroundColor = '#00FFAA')"
  @mouseout="($event.currentTarget.style.backgroundColor = 'transparent')"
>
  <span class="inline-block w-4 h-4 mask-linkedin bg-white"></span>
  Connect on LinkedIn
</button>

              </div>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="bg-card border border-[#2c2c2c] rounded-lg p-6 animate-slide-up" :style="{ animationDelay: '0.3s' }">
            <div class="pt-6">
              <div class="grid grid-cols-2 gap-6 text-center">
                <div v-for="stat in stats" :key="stat.label">
                  <div :class="`text-2xl font-bold ${stat.color} text-[#00AAFF]  ` ">{{ stat.value }}</div>
                  <div class="text-sm text-muted-foreground text-[#94A3B8]">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const contactInfo = [
  {
    iconClass: "mask-mail",
    label: "Email",
    value: "Zeshan.baltistan@gmail.com",
    href: "mailto:Zeshan.baltistan@gmail.com",
    color: "bg-[#00AAFF]"
    
  },
  {
    iconClass: "mask-phone",
    label: "Phone",
    value: "+92-355-4253136/+92-341-3888063",
    href: "tel:+923413888063",
     color: "bg-[#00FFAA]"
  },
  {
  iconClass: "mask-whatsapp", // Make sure you have this CSS class
  label: "WhatsApp",
  value: "+92-309-5629259", // Formatted display
  href: "https://wa.me/923095629259", // WhatsApp click-to-chat link
  color: "bg-[#25D366]" // WhatsApp brand green
},
  {
    iconClass: "mask-map-pin",
    label: "Location", 
    value: "Rawalpindi, Pakistan",
    href: "#",
    color: "bg-[#00AAFF]"
  }
]

const socialLinks = [
  {
    iconClass: "mask-github",
    label: "GitHub",
    value: "github.com/Attesh",
    href: "https://github.com/Attesh",
    color: "bg-[#1A1D23]" 
  },
  {
    iconClass: "mask-linkedin",
    label: "LinkedIn",
    value: "Professional Profile",
    href: "https://linkedin.com/in/zeeshan-ali-b75b06157",
    color: "bg-[#0077B5]"
  }
]

const helpItems = [
  "Full-stack web application development",
  "Mobile app development with React Native",
  "API development and integration",
  "System optimization and performance tuning",
  "Technical consulting and architecture design"
]

const stats = [
  { value: "4+", label: "Years Experience", color: "text-primary" },
  { value: "20+", label: "Projects Completed", color: "text-accent" },
  { value: "100%", label: "Client Satisfaction", color: "text-primary" },
  { value: "24/7", label: "Support Available", color: "text-accent" }
]

const openEmail = () => {
  window.open('mailto:Zeshan.baltistan@gmail.com', '_blank')
}

const openLinkedIn = () => {
  window.open('https://linkedin.com/in/zeeshan-ali-b75b06157', '_blank')
}
</script>

<style>

/* Base mask style */
[class^="mask-"], [class*=" mask-"] {
  display: inline-block;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  background-color: currentColor; /* Use this or bg-white via Tailwind */
}

/* CSS masks for icons */
.mask-message-circle {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'%3E%3C/path%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'%3E%3C/path%3E%3C/svg%3E");
}

.mask-github {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'%3E%3C/path%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'%3E%3C/path%3E%3C/svg%3E");
}

.mask-linkedin {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'%3E%3C/path%3E%3Crect x='2' y='9' width='4' height='12'%3E%3C/rect%3E%3Ccircle cx='4' cy='4' r='2'%3E%3C/circle%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'%3E%3C/path%3E%3Crect x='2' y='9' width='4' height='12'%3E%3C/rect%3E%3Ccircle cx='4' cy='4' r='2'%3E%3C/circle%3E%3C/svg%3E");
}

.mask-mail {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'%3E%3C/path%3E%3Cpolyline points='22,6 12,13 2,6'%3E%3C/polyline%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'%3E%3C/path%3E%3Cpolyline points='22,6 12,13 2,6'%3E%3C/polyline%3E%3C/svg%3E");
}

.mask-phone {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
}

.mask-map-pin {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E");
}

.mask-whatsapp {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M17.5 6.5a9 9 0 1 0-2.4 6l1.6 4.6 4.6-1.6a9 9 0 0 0-3.8-9.6zm-5.5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M17.5 6.5a9 9 0 1 0-2.4 6l1.6 4.6 4.6-1.6a9 9 0 0 0-3.8-9.6zm-5.5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'/%3E%3C/svg%3E");
}
</style>