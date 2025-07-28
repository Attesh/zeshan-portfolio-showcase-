<template>
  <section id="projects" class="py-20 px-6 bg-secondary/20">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
       <h2 class="text-4xl font-bold mb-4">
          <span class="bg-[#00CADE] bg-clip-text text-transparent">Featured</span>
          <span class="bg-[#00DACF] bg-clip-text text-transparent"> Projects</span>
        </h2>

        <p class="text-xl text-[#70A3B8] text-muted-foreground max-w-2xl mx-auto">
          Showcasing innovative solutions across web, mobile, and desktop applications
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div 
          v-for="(project, index) in projects"
          :key="project.title"
          class="bg-card border border-[#2c2c2c] rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Header with Icon and Title -->
          <div class="mb-6">
  <div class="flex items-start justify-between">
    <div class="flex items-center gap-3">
      <!-- Icon background with centered content -->
      <div :class="`p-2 rounded-lg ${project.color} flex items-center justify-center`">
        <!-- Icon centered and white -->
        <span class="inline-block w-6 h-6 bg-white" :class="project.iconClass"></span>
      </div>

      <!-- Title and Type -->
      <div>
        <h3 class="text-xl font-semibold">{{ project.title }}</h3>
        <p class="text-sm text-muted-foreground">{{ project.type }}</p>
      </div>
    </div>
  </div>
</div>


          <!-- Description, Technologies, Features -->
          <div class="space-y-4">
            <p class="text-muted-foreground text-[#70A3B8]">{{ project.description }}</p>

            <!-- Technologies -->
            <div class="space-y-2">
              <h4 class="font-semibold text-sm">Technologies:</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-2 py-1 rounded-md text-xs border  border-[#2c2c2c]"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Key Features -->
            <div class="space-y-2">
              <h4 class="font-semibold text-sm">Key Features:</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="feature in project.features" 
                  :key="feature"
                  class="px-2 py-1 rounded-md text-xs bg-secondary text-secondary-foreground"
                >
                  {{ feature }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Projects -->
      <div class="bg-card border border-[#2c2c2c] rounded-lg p-6">
        <div class="mb-6">
         <div class="flex items-center gap-3">
  <div class="p-2 rounded-lg bg-[#1A1D23] flex items-center justify-center">
    <span class="inline-block w-6 h-6 mask-globe bg-current text-muted-foreground"></span>
  </div>

  <h3 class="text-xl font-semibold">Additional Client Projects</h3>
</div>
<p class="text-sm text-muted-foreground mt-1 text-[#70A3B8]">
  Other successful projects delivered for various clients
</p>
</div>
       <div class="flex flex-wrap gap-3">
  <span 
    v-for="project in otherProjects" 
    :key="project"
    class="px-3 py-1 rounded-md border border-[#2c2c2c] text-sm"
  >
    {{ project }}
  </span>
</div>


      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "KM-PMS",
    description: "Comprehensive Project & Task Management System with both web and mobile applications. Features real-time collaboration, task tracking, and project analytics.",
    type: "Web & Mobile",
    iconClass: "mask-monitor",
    technologies: ["Laravel", "React Native", "MySQL", "RESTful APIs", "Real-time Updates"],
    features: ["Task Management", "Project Tracking", "Team Collaboration", "Analytics Dashboard"],
    color: "bg-[#00AAFF]"
  },
  {
    title: "KM-HRMS",
    description: "Complete HR Management System with payroll processing, attendance tracking, and leave management. Streamlines HR operations for organizations.",
    type: "Web Application",
    iconClass: "mask-users",
    technologies: ["Laravel", "Vue.js", "MySQL", "API Integration", "Payroll Processing"],
    features: ["Payroll Management", "Attendance Tracking", "Leave Management", "Employee Records"],
    color: "bg-[#00FFAA]"
  },
  {
    title: "KM-CMS with WhatsApp Integration",
    description: "Content Management System integrated with WhatsApp Cloud Business API for real-time messaging and customer engagement.",
    type: "Web Application",
    iconClass: "mask-message-square",
    technologies: ["Laravel", "WhatsApp Cloud API", "JavaScript", "MySQL", "Real-time Messaging"],
    features: ["Content Management", "WhatsApp Integration", "Real-time Messaging", "Customer Engagement"],
    color: "bg-[#00AAFF]"
  },
  {
    title: "Live Deal",
    description: "E-commerce platform for live deals and special offers. Features real-time deal updates and user notifications.",
    type: "Web Application",
    iconClass: "mask-dollar-sign",
    technologies: ["Laravel", "JavaScript", "Bootstrap", "MySQL", "Payment Gateway"],
    features: ["Live Deals", "Real-time Updates", "Payment Processing", "User Notifications"],
    color: "bg-[#00FFAA]"
  },
  {
    title: "Facial Recognition Attendance",
    description: "Smart attendance system using facial detection and PCA algorithm. Automatically marks attendance by recognizing faces linked to unique IDs.",
    type: "Desktop Application",
    iconClass: "mask-camera",
    technologies: ["Python", "OpenCV", "PCA Algorithm", "Facial Recognition", "GUI"],
    features: ["Facial Detection", "Automatic Attendance", "Unique ID Linking", "Smart Recognition"],
    color: "bg-[#00AAFF]"
  },
  {
    title: "Bulk Email Sender",
    description: "Python-based bulk email sender with GUI for campaign setup, list management, and delivery tracking. Supports high-volume email campaigns.",
    type: "Desktop Application",
    iconClass: "mask-mail",
    technologies: ["Python", "GUI Framework", "Email APIs", "Campaign Management", "Analytics"],
    features: ["Campaign Setup", "List Management", "Delivery Tracking", "High Volume Support"],
    color: "bg-[#00FFAA]"
  }
]

const otherProjects = [
  "EZ Pay", "Volman", "WeLikePDF", "Bill Art", "Framfresh", "IDF", 
  "Auction Sheet Check", "Sikander", "Assanhissab", "Rwalen", "Texas Chicken"
]
</script>


<style>
/* CSS masks for icons */
.mask-monitor {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='3' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='8' y1='21' x2='16' y2='21'%3E%3C/line%3E%3Cline x1='12' y1='17' x2='12' y2='21'%3E%3C/line%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='3' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='8' y1='21' x2='16' y2='21'%3E%3C/line%3E%3Cline x1='12' y1='17' x2='12' y2='21'%3E%3C/line%3E%3C/svg%3E");
}

.mask-users {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='9' cy='7' r='4'%3E%3C/circle%3E%3Cpath d='M23 21v-2a4 4 0 0 0-3-3.87'%3E%3C/path%3E%3Cpath d='M16 3.13a4 4 0 0 1 0 7.75'%3E%3C/path%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='9' cy='7' r='4'%3E%3C/circle%3E%3Cpath d='M23 21v-2a4 4 0 0 0-3-3.87'%3E%3C/path%3E%3Cpath d='M16 3.13a4 4 0 0 1 0 7.75'%3E%3C/path%3E%3C/svg%3E");
}

.mask-message-square {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'%3E%3C/path%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'%3E%3C/path%3E%3C/svg%3E");
}

.mask-dollar-sign {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='1' x2='12' y2='23'%3E%3C/line%3E%3Cpath d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'%3E%3C/path%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='1' x2='12' y2='23'%3E%3C/line%3E%3Cpath d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'%3E%3C/path%3E%3C/svg%3E");
}

.mask-camera {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z'%3E%3C/path%3E%3Ccircle cx='12' cy='13' r='4'%3E%3C/circle%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z'%3E%3C/path%3E%3Ccircle cx='12' cy='13' r='4'%3E%3C/circle%3E%3C/svg%3E");
}

.mask-mail {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'%3E%3C/path%3E%3Cpolyline points='22,6 12,13 2,6'%3E%3C/polyline%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'%3E%3C/path%3E%3Cpolyline points='22,6 12,13 2,6'%3E%3C/polyline%3E%3C/svg%3E");
}

.mask-globe {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='2' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'%3E%3C/path%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='2' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'%3E%3C/path%3E%3C/svg%3E");
}
</style>