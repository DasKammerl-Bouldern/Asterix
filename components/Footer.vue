<template>
  <footer class="border-t border-primary/15 bg-background py-10">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-muted sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div class="flex items-center gap-2">
          <img
            src="/images/Icon_Hand.png"
            alt="Das Kammerl Hand-Logo"
            class="h-7 w-7 object-contain"
          >
          <p>© {{ year }} Das Kammerl. Alle Rechte vorbehalten.</p>
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <NuxtLink to="/" class="motion-link hover:text-primary">Home</NuxtLink>
          <NuxtLink to="/vision" class="motion-link hover:text-primary">Vision</NuxtLink>
          <NuxtLink to="/price" class="motion-link hover:text-primary">Preise</NuxtLink>
          <NuxtLink to="/location" class="motion-link hover:text-primary">Location</NuxtLink>
          <NuxtLink to="/sponsoren" class="motion-link hover:text-primary">Sponsoren</NuxtLink>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <p class="w-full border-t border-primary/15 pt-4 text-center">Kontakt: servus@daskammerl.at</p>
      </div>
      <div class="flex w-full justify-center gap-4 text-xs text-muted">
        <NuxtLink to="/impressum" class="motion-link hover:text-primary">Impressum</NuxtLink>
        <NuxtLink to="/datenschutz" class="motion-link hover:text-primary">Datenschutz</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
