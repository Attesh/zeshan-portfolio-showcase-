<template>
  <section id="experience" class="py-20 px-6 bg-secondary/20">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
          
            <span class="bg-[#00CADE] bg-clip-text text-transparent">Professional</span>
  <span class="bg-[#00DACF] bg-clip-text text-transparent"> Experience</span>
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto text-[#94A3B8]">
          4+ years of progressive experience in full-stack development across various industries
        </p>
      </div>

      <div class="space-y-8">
        <div 
          v-for="(exp, index) in experiences"
          :key="`${exp.company}-${exp.period}`"
          class="bg-card border border-[#2c2c2c]   rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-slide-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="mb-6">
            <div class="flex flex-col  lg:flex-row lg:items-center lg:justify-between gap-4">
              <div class="flex items-start gap-4">
                <div :class="`p-3 rounded-lg  ${exp.color} text-white`">
                  <span class="inline-block w-6 h-6 bg-white" :class="exp.icon"></span>

                </div>
                <div>
                  <h3 class="text-xl font-semibold">{{ exp.title }}</h3>
                  <p class="text-lg font-semibold text-foreground">
                    {{ exp.company }}
                  </p>
                  <div class="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <div class="flex items-center gap-1 text-[#94A3B8] ">
                      <span class="inline-block w-4 h-4  bg-[#94A3B8] " :class="exp.icon2"></span>
                      {{ exp.location }}
                    </div>
                    <div class="flex items-center gap-1 text-[#94A3B8]">
                      <span class="inline-block w-4 h-4 mask-calendar bg-[#94A3B8]"></span>
                      {{ exp.period }}
                    </div>
                  </div>
                </div>
              </div>
              <span class="px-3 py-1 rounded-md border border-[#2c2c2c] text-sm w-fit ">
                {{ exp.type }}
              </span>
            </div>
          </div>
          
          <div class="space-y-6">
            <p class="text-muted-foreground text-[#94A3B8]">{{ exp.description }}</p>
            
            <!-- Key Achievements -->
            <div class="space-y-3">
              <h4 class="font-semibold">Key Achievements:</h4>
              <ul class="space-y-2">
                <li v-for="(achievement, idx) in exp.achievements" :key="idx" class="flex items-start gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-[#00AAFF] mt-2 flex-shrink-0" />
                  <span class="text-muted-foreground text-[#94A3B8] ">{{ achievement }}</span>
                </li>
              </ul>
            </div>

            <!-- Technologies -->
            <div class="space-y-3">
              <h4 class="font-semibold">Technologies Used:</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in exp.technologies" :key="tech" class="px-2 py-1 rounded-md text-sm bg-secondary text-secondary-foreground">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    title: "Full Stack Developer",
    company: "KM Software Services",
    location: "Remote | Rawalpindi, Pakistan",
    period: "2024 – 2025",
    type: "Current Position",
    icon: "mask-cpu", // 👈 Add this
    icon2: "mask-map-pin", // to be set dynamically
    description: "Leading full-stack development of enterprise applications with focus on scalability and performance.",
    achievements: [
      "Developed and maintained KM-PMS, KM-HRMS, and KM-CMS systems",
      "Integrated WhatsApp Cloud Business API for real-time messaging",
      "Designed scalable RESTful APIs serving multiple client applications",
      "Optimized application performance reducing load times by 40%",
      "Collaborated in Agile teams delivering projects on time"
    ],
    technologies: ["Laravel", "React Native", "MySQL", "WhatsApp API", "RESTful APIs"],
    color: "bg-[#00AAFF]"
  },
  {
    title: "Full Stack Developer",
    company: "Friends IT Solutions",
    location: "Rawalpindi, Pakistan",
    period: "2022 – 2024",
    type: "2 Years",
    icon: "mask-layers", // 👈 Add this
    icon2: "mask-location", // to be set dynamically
    description: "Built responsive web applications with real-time features and complex data-driven functionality.",
    achievements: [
      "Developed responsive Laravel applications with JavaScript integration",
      "Implemented real-time features using Firebase and Pusher",
      "Enhanced UI/UX with cross-browser compatibility",
      "Built complex data-driven business logic",
      "Mentored junior developers on best practices"
    ],
    technologies: ["Laravel", "JavaScript", "Firebase", "Pusher", "MySQL"],
    color: "bg-[#00FFAA]"
  },
  {
    title: "Backend Developer",
    company: "Micro Soar",
    location: "Islamabad, Pakistan", 
    period: "2021 – 2022",
    type: "1 Year",
    icon: "mask-database", // 👈 Add this
    icon2: "mask-location", // to be set dynamically
    description: "Focused on backend architecture and secure API development for enterprise solutions.",
    achievements: [
      "Designed robust backend logic using Laravel and MySQL",
      "Implemented secure API integrations including payment gateways",
      "Developed data management systems for large-scale applications",
      "Ensured security best practices across all backend services",
      "Collaborated with frontend teams for seamless integration"
    ],
    technologies: ["Laravel", "MySQL", "API Integration", "Payment Gateways"],
    color: "bg-[#00AAFF]"
  },
  {
    title: "Backend Developer",
    company: "Netware Solutions",
    location: "Rawalpindi, Pakistan",
    period: "2021 (6 Months)",
    type: "6 Months",
    icon: "mask-code", // 👈 Add this
    icon2: "mask-location", // to be set dynamically
    description: "Contributed to backend development and application architecture in fast-paced environment.",
    achievements: [
      "Developed backend modules using Laravel framework",
      "Implemented comprehensive logging and monitoring features",
      "Enhanced application performance and system architecture",
      "Contributed to database design and optimization",
      "Participated in code reviews and quality assurance"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "System Architecture"],
    color: "bg-[#00FFAA]"
  }
]
</script>

<style>
/* CSS masks for icons */
.mask-building {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='4' y='2' width='16' height='20' rx='2' ry='2'%3E%3C/rect%3E%3Crect x='9' y='6' width='6' height='6'%3E%3C/rect%3E%3Cline x1='9' y1='12' x2='9' y2='18'%3E%3C/line%3E%3Cline x1='15' y1='12' x2='15' y2='18'%3E%3C/line%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='4' y='2' width='16' height='20' rx='2' ry='2'%3E%3C/rect%3E%3Crect x='9' y='6' width='6' height='6'%3E%3C/rect%3E%3Cline x1='9' y1='12' x2='9' y2='18'%3E%3C/line%3E%3Cline x1='15' y1='12' x2='15' y2='18'%3E%3C/line%3E%3C/svg%3E");
}

.mask-cpu {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 9h6v6H9V9z M4 9h1m14 0h1M4 15h1m14 0h1M9 4v1m6-1v1M9 19v1m6-1v1M6 6h12v12H6V6z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 9h6v6H9V9z M4 9h1m14 0h1M4 15h1m14 0h1M9 4v1m6-1v1M9 19v1m6-1v1M6 6h12v12H6V6z'/%3E%3C/svg%3E");
}

.mask-map-pin {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E");
}

.mask-layers {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 2 7 12 12 22 7 12 2'/%3E%3Cpolyline points='2 17 12 22 22 17'/%3E%3Cpolyline points='2 12 12 17 22 12'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 2 7 12 12 22 7 12 2'/%3E%3Cpolyline points='2 17 12 22 22 17'/%3E%3Cpolyline points='2 12 12 17 22 12'/%3E%3C/svg%3E");
}


.mask-calendar {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'/%3E%3Cline x1='16' y1='2' x2='16' y2='6'/%3E%3Cline x1='8' y1='2' x2='8' y2='6'/%3E%3Cline x1='3' y1='10' x2='21' y2='10'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'/%3E%3Cline x1='16' y1='2' x2='16' y2='6'/%3E%3Cline x1='8' y1='2' x2='8' y2='6'/%3E%3Cline x1='3' y1='10' x2='21' y2='10'/%3E%3C/svg%3E");
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
}


.mask-database {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cellipse cx='12' cy='5' rx='9' ry='3'/%3E%3Cpath d='M3 5v6c0 1.657 4.03 3 9 3s9-1.343 9-3V5'/%3E%3Cpath d='M3 11v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cellipse cx='12' cy='5' rx='9' ry='3'/%3E%3Cpath d='M3 5v6c0 1.657 4.03 3 9 3s9-1.343 9-3V5'/%3E%3Cpath d='M3 11v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6'/%3E%3C/svg%3E");
}

.mask-terminal {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' fill='none'%3E%3Cpath d='M4 17h16M7 7l5 5-5 5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' fill='none'%3E%3Cpath d='M4 17h16M7 7l5 5-5 5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

.mask-code {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpolyline points='16 18 22 12 16 6'/%3E%3Cpolyline points='8 6 2 12 8 18'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpolyline points='16 18 22 12 16 6'/%3E%3Cpolyline points='8 6 2 12 8 18'/%3E%3C/svg%3E");
}
.mask-location {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M12 11a3 3 0 100-6 3 3 0 000 6z'%3E%3C/path%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z'%3E%3C/path%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M12 11a3 3 0 100-6 3 3 0 000 6z'%3E%3C/path%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z'%3E%3C/path%3E%3C/svg%3E");
}


</style>