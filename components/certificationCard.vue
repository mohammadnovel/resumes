<template>
  <div class="bg-slate-900/50 p-5 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
    <div class="flex items-start gap-3">
      <Icon name="mdi:certificate" class="text-3xl text-blue-400 flex-shrink-0 mt-1" />
      <div class="flex-1 min-w-0">
        <h3 class="font-bold text-base md:text-lg mb-1 leading-tight">{{ title }}</h3>
        <p class="text-slate-400 text-sm">{{ issuer }}</p>
        <p class="text-slate-500 text-xs md:text-sm mt-1">{{ year }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  issuer: String,
  year: String
})
</script>