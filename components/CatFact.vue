<template>
  <div class="bg-muted p-8 rounded-lg shadow-lg text-left max-w-7xl w-full flex flex-col md:flex-row h-full gap-20">
    <div class="md:w-1/2 flex flex-col justify-center">
      <h2 class="text-3xl font-jost font-semibold mb-4 text-primary">CAT FACT:</h2>
      <transition name="fade" mode="out-in">
        <p class="text-secondary font-jost text-lg mb-6" :key="fact">{{ fact }}</p>
      </transition>
      <button @click="fetchNewFact" class="bg-primary text-background font-jost px-4 py-3 rounded mt-4 hover:bg-secondary shadow-custom">
        <span class="flex items-center justify-center">
          <span class="material-symbols-outlined mr-2">autorenew</span>
          GET A RANDOM CAT FACT
        </span>
      </button>
    </div>
    <div class="md:w-1/2 flex flex-col items-center md:items-end mt-6 md:mt-0">
      <div class="flex justify-center items-center gap-4 flex-wrap md:flex-nowrap">
        <img src="@/assets/images/kitty1.webp" alt="Cat" class="rounded-lg shadow-md w-325px mx-auto">
        <div class="flex flex-col gap-4 w-full md:w-auto">
          <img src="@/assets/images/kitty2.webp" alt="Cat" class="rounded-lg shadow-md w-325px md:w-155px mx-auto">
          <img src="@/assets/images/kitty3.webp" alt="Cat" class="rounded-lg shadow-md w-325px md:w-155px mx-auto">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useCatFactsStore } from '@/store/catFacts'

export default {
  data() {
    return {
      fact: ''
    }
  },
  methods: {
    async fetchNewFact() {
      this.fact = ''
      setTimeout(async () => {
        await this.store.fetchCatFact()
        this.fact = this.store.currentFact
      }, 300)
    }
  },
  mounted() {
    this.store = useCatFactsStore()
    this.fetchNewFact()
  }
}
</script>

<style scoped>
.cat-image {
  width: 200px;
  height: 200px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
