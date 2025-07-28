<template>
  <section id="education" class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
          
             <span class="bg-[#00CADE] bg-clip-text text-transparent">Education &</span>
  <span class="bg-[#00DACF] bg-clip-text text-transparent"> Languages</span>
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto text-[#94A3B8]">
          Academic foundation and communication skills
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Education -->
        <div class="bg-card border border-[#2c2c2c]  rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-slide-up">
          <div class="mb-6">
            <div class="flex items-start gap-4 ">
              <div class="p-3 rounded-lg  text-white bg-[#00AAFF]">
                <span class="inline-block w-6 h-6 mask-graduation-cap bg-white" ></span>
              </div>
              <div>
                <h3 class="text-xl font-semibold">Bachelor of Computer Science</h3>
                <p class="text-lg font-semibold text-foreground">
                  Hamdard University Islamabad Campus
                </p>
                <div class="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                  <div class="flex items-center gap-1">
                    <span class="inline-block w-4 h-4 mask-location bg-[#94A3B8]"></span>
                    Islamabad, Pakistan
                  </div>
                  <div class="flex items-center gap-1">
                    <span class="inline-block w-4 h-4 mask-calendar bg-[#94A3B8]"></span>
                    2017 – 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="space-y-4">
            <p class="text-muted-foreground text-[#94A3B8]">
              Comprehensive computer science education covering software engineering principles, 
              algorithms, data structures, and modern development practices.
            </p>
            
            <div class="space-y-3">
              <h4 class="font-semibold">Key Areas of Study:</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                    v-for="subject in subjects" 
                    :key="subject"
                    class="px-3 py-1 rounded-md text-xs bg-[#171A20] text-secondary-foreground"
                  >
                    {{ subject }}
                  </span>

              </div>
            </div>
          </div>
        </div>

        <!-- Languages -->
        <div class="bg-card border border-[#2c2c2c] rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-slide-up" :style="{ animationDelay: '0.1s' }">
          <div class="mb-6">
            <div class="flex items-start gap-4">
              <div class="p-3 rounded-lg bg-accent text-white bg-[#00FFAA]">
                <span class="inline-block w-6 h-6 mask-globe bg-white "></span>
              </div>
              <div>
                <h3 class="text-xl font-semibold">Languages</h3>
                <p class="text-lg font-semibold text-foreground">
                  Communication Skills
                </p>
              </div>
            </div>
          </div>
          
          <div class="space-y-6">
            <p class="text-muted-foreground text-[#94A3B8]">
              Strong communication abilities enabling effective collaboration with international teams and clients.
            </p>
            
            <div class="space-y-6">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="font-semibold">English</h4>
                  <span class="px-3 py-1 rounded-md text-sm bg-[#00AAFF] text-black border border-[#2c2c2c]">
                    Fluent
                  </span>
                </div>
                <div class="w-full  rounded-full h-2 ">
                  <div class=" h-2 rounded-full w-[90%] bg-[#00AAFF]"></div>
                </div>
                <p class="text-sm text-muted-foreground text-[#94A3B8]">
                  Professional working proficiency, technical writing, client communication
                </p>
              </div>

              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="font-semibold">Urdu</h4>
                  <span class="px-3 py-1 rounded-md text-sm bg-[#00FFAA]  text-black border border-[#2c2c2c]">
                    Native
                  </span>
                </div>
                <div class="w-full bg-secondary rounded-full h-2">
                  <div class="bg-accent h-2 rounded-full w-full bg-[#00FFAA]"></div>
                </div>
                <p class="text-sm text-muted-foreground text-[#94A3B8]">
                  Native speaker, cultural understanding, local market expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const subjects = [
  "Software Engineering",
  "Data Structures & Algorithms", 
  "Database Systems",
  "Web Development",
  "Object-Oriented Programming",
  "System Analysis & Design"
]
</script>

<style>
/* CSS masks for icons */
.mask-graduation-cap {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 10v6M2 10l10-5 10 5-10 5z'%3E%3C/path%3E%3Cpath d='M6 12v5c3 3 9 3 12 0v-5'%3E%3C/path%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 10v6M2 10l10-5 10 5-10 5z'%3E%3C/path%3E%3Cpath d='M6 12v5c3 3 9 3 12 0v-5'%3E%3C/path%3E%3C/svg%3E");
}

.mask-map-pin {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E");
}

.mask-calendar {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
}

.mask-globe {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='2' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'%3E%3C/path%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='2' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'%3E%3C/path%3E%3C/svg%3E");
}

.mask-location {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M10 2a6 6 0 016 6c0 4.5-6 10-6 10S4 12.5 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M10 2a6 6 0 016 6c0 4.5-6 10-6 10S4 12.5 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd'/%3E%3C/svg%3E");
}
</style>