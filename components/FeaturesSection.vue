<template>
  <section id="angebot" class="bg-background py-16 sm:py-20">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Angebot</p>
        <h2 class="mt-3 text-3xl font-bold text-dark sm:text-4xl">Was dich bei uns erwartet</h2>
      </div>

      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="item in features"
          :key="item.title"
          class="rounded-2xl border border-primary/15 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-soft text-primary">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path :d="item.iconPath" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-dark">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Freies Bouldern',
    text: 'Viele Routen in unterschiedlichen Schwierigkeitsgraden für jedes Level.',
    iconPath: 'M12 3l2.8 5.7L21 9.6l-4.5 4.3 1 6.1L12 17l-5.5 3 1-6.1L3 9.6l6.2-.9L12 3z'
  },
  {
    title: 'Einsteigerkurse',
    text: 'Perfekter Start mit Technik, Sicherheit und Bewegungsgrundlagen.',
    iconPath: 'M4 5h16v10H8l-4 4V5z'
  },
  {
    title: 'Techniktraining',
    text: 'Gezielte Sessions für besseren Bewegungsfluss und effizienteres Klettern.',
    iconPath: 'M5 19l14-14M7 7h.01M17 17h.01M4 12h16'
  },
  {
    title: 'Community Events',
    text: 'Regelmaessige Events, Challenges und offene Sessions mit der Community.',
    iconPath: 'M16 11a4 4 0 1 0-8 0m12 8a6 6 0 0 0-12 0m10-8a3 3 0 1 0-3-3m6 11a4.5 4.5 0 0 0-4.5-4.5'
  }
]
</script>

