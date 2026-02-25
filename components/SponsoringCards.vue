<template>
  <section class="py-12 sm:py-16">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-dark sm:text-4xl">Sponsoring Pakete</h2>
      <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'motion-card rounded-2xl border bg-white p-6 shadow-md hover:border-primary',
            plan.featured ? 'border-primary ring-2 ring-primary/20' : 'border-primary/15'
          ]"
        >
          <p class="text-sm font-semibold uppercase tracking-wide text-accentdark">{{ plan.name }}</p>
          <p class="mt-2 text-3xl font-extrabold text-dark">{{ plan.price }}</p>
          <ul class="mt-4 space-y-2 text-sm text-muted">
            <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-2 whitespace-nowrap">
              <span class="text-primary">•</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc0Dp8SmKTix6MK79pxjOoW1CYwl-pKZnurHXj1jk3ChH6rtA/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 block w-full rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accentdark"
          >
            Paket anfragen
          </a>
        </article>
      </div>
      <div class="mt-6 flex justify-center">
        <article class="w-full max-w-sm rounded-xl border border-primary/20 bg-white p-4 text-center shadow-sm">
          <p class="text-base font-bold uppercase tracking-wide text-accentdark">Individuelle Pakete</p>
          <p class="mt-2 text-sm text-muted">Du brauchst ein maßgeschneidertes Sponsoring? Wir erstellen ein passendes Paket.</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc0Dp8SmKTix6MK79pxjOoW1CYwl-pKZnurHXj1jk3ChH6rtA/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-3 inline-flex rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-accentdark"
          >
            Individuell anfragen
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const plans = [
  {
    name: 'Bronze-Sponsor',
    price: 'EUR 500',
    featured: false,
    features: ['Logo auf Website', 'Erwähnung im Partnerbereich', 'Social-Media-Post']
  },
  {
    name: 'Silber-Sponsor',
    price: 'EUR 1.500',
    featured: false,
    features: ['Alle Bronze-Leistungen', 'Logo im App-Login', 'Partnerpost pro Quartal']
  },
  {
    name: 'Premium-Partner',
    price: 'EUR 3.500',
    featured: true,
    features: ['Alle Silber-Leistungen', 'Innenfläche/Schaufenster', 'Präsenz bei Hauptevents']
  },
  {
    name: 'Exklusiv-Partner',
    price: 'EUR 7.500 +',
    featured: false,
    features: ['Individuelles Partnerpaket', 'Kickstarter-Sichtbarkeit', 'Jahreskampagnen-Integration']
  }
]
</script>


