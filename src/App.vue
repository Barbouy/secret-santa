<template>
  <div class="flex flex-col items-center justify-center h-screen transition-colors duration-200 ease-out bg-white text-slate-900 dark:bg-slate-800 dark:text-white">
    <router-view />

    <div
      class="fixed flex gap-2 p-2 text-lg transition-shadow duration-1000 ease-out rounded-lg cursor-pointer bottom-4 right-4 hover:shadow-lg"
      @click="toggleDarkMode">
      <span
        class="i-lucide-sun"
        :class="!isDarkMode ? 'text-amber-500' : 'text-slate-600'" />
      <span
        class="i-lucide-moon"
        :class="isDarkMode ? 'text-violet-400' : 'text-slate-300'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const isDarkMode = ref(false)

function toggleDarkMode() {
  const html: HTMLElement | null = document.querySelector("html")
  if (html) {
    isDarkMode.value = !isDarkMode.value
    isDarkMode.value ? html.classList.add("dark") : html.classList.remove("dark")
  }
}
</script>