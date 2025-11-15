<template>
  <div class="relative pl-6 sm:pl-8 pb-8 sm:pb-12 last:pb-0 group">
    <!-- Timeline line -->
    <div class="absolute left-0 top-2 bottom-0 w-px bg-gray-800 group-hover:bg-blue-500/30 transition-colors duration-300"></div>
    
    <!-- Timeline dot -->
    <div 
      class="absolute left-0 top-2 w-3 h-3 -ml-[5.5px] rounded-full border-2 transition-all duration-300"
      :class="current 
        ? 'border-blue-500 bg-blue-500 shadow-lg shadow-blue-500/50 animate-pulse' 
        : 'border-blue-500 bg-gray-950 group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/50'"
    ></div>
    
    <div class="space-y-3 p-6 rounded-xl bg-gray-900/50 border border-gray-800/50 group-hover:border-blue-500/30 group-hover:bg-gray-900/70 transition-all duration-300">
      <!-- Header -->
      <div class="flex flex-col gap-3">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {{ title }}
            </h3>
            <p class="text-blue-400 font-medium text-sm sm:text-base">{{ company }}</p>
          </div>
          <div class="flex items-center gap-2">
            <span v-if="current" class="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20">
              Current Position
            </span>
          </div>
        </div>
        
        <!-- Meta Info -->
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-400">
          <span class="flex items-center gap-1.5">
            <Icon name="mdi:calendar-clock" class="text-base text-blue-400" />
            {{ period }}
          </span>
          <span class="flex items-center gap-1.5">
            <Icon name="mdi:map-marker" class="text-base text-blue-400" />
            {{ location }}
          </span>
        </div>
      </div>
      
      <!-- Description -->
      <p class="text-gray-300 leading-relaxed text-sm sm:text-base">
        {{ description }}
      </p>
      
      <!-- Technologies -->
      <div v-if="technologies && technologies.length > 0" class="flex flex-wrap gap-2 pt-2">
        <span 
          v-for="tech in technologies" 
          :key="tech"
          class="px-3 py-1 text-xs rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all"
        >
          {{ tech }}
        </span>
      </div>
      
      <!-- Projects List (if exists) -->
      <div v-if="projects && projects.length > 0" class="pt-3 border-t border-gray-800/50">
        <p class="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-1.5">
          <Icon name="mdi:folder-open" class="text-sm text-blue-400" />
          Key Projects:
        </p>
        <ul class="space-y-1.5">
          <li 
            v-for="project in projects" 
            :key="project"
            class="text-sm text-gray-400 flex items-start gap-2"
          >
            <Icon name="mdi:chevron-right" class="text-blue-400 mt-0.5 flex-shrink-0" />
            <span>{{ project }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  company: String,
  period: String,
  location: String,
  description: String,
  technologies: Array,
  projects: Array,
  current: Boolean
})
</script>