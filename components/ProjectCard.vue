<template>
  <div class="relative p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col group">
    
    <!-- Featured Badge -->
    <div v-if="featured" class="absolute -top-3 -right-3 px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-xs font-bold shadow-lg z-10">
      <Icon name="mdi:star" class="inline-block mr-1" />
      Featured
    </div>

    <!-- Status Badge -->
    <div v-if="status" class="absolute -top-3 -left-3 px-3 py-1 rounded-lg text-xs font-bold shadow-lg z-10"
         :class="status === 'Production' 
           ? 'bg-green-600 text-white' 
           : 'bg-orange-600 text-white'">
      <div class="flex items-center gap-1">
        <div class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
        {{ status }}
      </div>
    </div>
    
    <!-- Category Tag -->
    <div v-if="category" class="mb-3">
      <span class="inline-flex items-center px-2 py-1 rounded-md bg-gray-800 text-gray-400 text-xs border border-gray-700">
        <Icon name="mdi:tag" class="mr-1 text-sm" />
        {{ category }}
      </span>
    </div>

    <!-- Title -->
    <h3 class="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white group-hover:text-blue-400 transition-colors">
      {{ title }}
    </h3>
    
    <!-- Description -->
    <p class="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm flex-grow">
      {{ description }}
    </p>
    
    <!-- Tech Stack -->
    <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
      <span 
        v-for="t in tech" 
        :key="t"
        class="px-2 py-0.5 sm:py-1 text-xs rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
      >
        {{ t }}
      </span>
    </div>
    
    <!-- Link -->
    <a 
      v-if="link" 
      :href="link" 
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-1 text-blue-400 hover:gap-2 transition-all text-xs sm:text-sm font-medium mt-auto group-hover:text-blue-300"
    >
      <Icon name="mdi:open-in-new" class="text-sm" />
      View Live Project
      <Icon name="mdi:arrow-right" />
    </a>
    <div v-else class="text-gray-600 text-xs sm:text-sm mt-auto flex items-center gap-1">
      <Icon name="mdi:shield-lock" class="text-sm" />
      Client Project
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  tech: Array,
  link: String,
  featured: Boolean,
  status: String,
  category: String
})
</script>