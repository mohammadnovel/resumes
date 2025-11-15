<template>
  <div 
    class="group relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2"
    :class="{ 'animate-slide-up': isVisible }"
    ref="cardRef"
  >
    <!-- Gradient Overlay on Hover -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/5 group-hover:to-violet-500/5 rounded-xl transition-all duration-500"></div>
    
    <div class="relative z-10">
      <!-- Icon & Title -->
      <div class="flex items-center gap-3 mb-4">
        <div class="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
          <Icon :name="icon" class="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors" />
        </div>
        <h3 class="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
          {{ title }}
        </h3>
      </div>
      
      <!-- Skills Tags -->
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="(skill, index) in skills" 
          :key="skill"
          class="px-3 py-1.5 text-sm rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-blue-500/50 hover:text-blue-300 hover:bg-gray-700/50 transition-all duration-300 cursor-default"
          :style="{ animationDelay: `${index * 50}ms` }"
        >
          {{ skill }}
        </span>
      </div>
      
      <!-- Skill Count Badge -->
      <!-- <div class="mt-4 flex items-center gap-2 text-xs text-gray-500">
        <div class="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-1000 group-hover:w-full" 
               :style="{ width: isVisible ? '100%' : '0%' }"></div>
        </div>
        <span class="whitespace-nowrap">{{ skills.length }} skills</span>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  skills: Array,
  icon: String
})

const cardRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  if (process.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVisible.value = true
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardRef.value) {
      observer.observe(cardRef.value)
    }

    onUnmounted(() => {
      if (cardRef.value) {
        observer.unobserve(cardRef.value)
      }
    })
  }
})
</script>

<style scoped>
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
}
</style>