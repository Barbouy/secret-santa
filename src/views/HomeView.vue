<template>
  <div>
    <router-link :to="{ name: 'auth' }">
      Auth
    </router-link>
    <router-link
      :to="{ name: 'home' }"
      class="text-amber-500">
      Home
    </router-link>
  </div>
</template>

<script lang="ts">
</script>