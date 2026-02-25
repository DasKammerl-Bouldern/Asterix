<template>
  <section class="py-12 sm:py-16">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-dark sm:text-4xl">Partnerstatus</h2>
      <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <div
          v-for="partner in partners"
          :key="partner"
          class="flex h-20 items-center justify-center rounded-2xl border border-primary/15 bg-white text-sm font-semibold text-muted grayscale transition hover:text-primary hover:grayscale-0"
        >
          {{ partner }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const partners = ['La Sportiva (Anfrage)', 'Regionale Firmen (in Abstimmung)', 'Naturfreunde Wieselburg', 'Stadtgemeinde Wieselburg', 'Kickstarter Community', 'Weitere Sponsoren gesucht']
</script>
