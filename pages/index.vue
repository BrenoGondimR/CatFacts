<template>
  <div class="min-h-screen bg-background flex flex-col items-center">
    <header class="bg-primary w-full py-6">
      <h1 class="text-center text-white text-4xl font-bold font-jost">THE DEFSAFE CAT FACTS PAGE</h1>
    </header>
    <main class="flex-grow flex items-center justify-center p-4 w-full">
      <CatFact />
    </main>
  </div>
</template>

<script setup>
import CatFact from '@/components/CatFact.vue'
</script>
