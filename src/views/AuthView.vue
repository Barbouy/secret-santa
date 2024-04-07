<template>
  <div>
    <router-link
      :to="{ name: 'auth' }"
      class="text-amber-500">
      Auth
    </router-link>
    <router-link :to="{ name: 'home' }">
      Home
    </router-link>
  </div>
</template>

<script lang="ts">
</script>