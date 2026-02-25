<template>
  <div>
    <Navbar />

    <main class="bg-background">
      <section class="bg-gradient-to-b from-altbg to-background py-16 sm:py-20">
        <div class="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Das Kammerl | Bouldern</p>
            <h1 class="mt-3 text-4xl font-extrabold leading-tight text-dark sm:text-5xl">Bouldern in Wieselburg.</h1>
            <p class="mt-4 max-w-xl text-base text-muted sm:text-lg">
              Alle wichtigen Besucherinfos auf einen Blick: Preise, Standort, Öffnungszeiten und Antworten
              auf häufige Fragen.
            </p>
            <p class="mt-2 max-w-xl text-sm text-muted">
              daskammerl ist die Marke von Das Kammerl unter <span class="font-semibold">daskammerl.at</span>.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <NuxtLink to="/price" class="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-accentdark">Zu den Preisen</NuxtLink>
              <NuxtLink to="/location" class="rounded-xl border border-primary/30 px-5 py-3 text-sm font-semibold text-primary hover:border-accentdark hover:text-accentdark">Zur Anfahrt</NuxtLink>
            </div>
          </div>

          <div class="relative h-72 overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-card">
            <div v-if="hasHeroImages">
              <p class="absolute left-3 top-3 z-10 rounded bg-white/80 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-primary">
                Beispielbilder
              </p>
              <div
                v-for="(image, index) in heroImages"
                :key="image.src"
                class="absolute inset-0 transition-opacity duration-700 ease-in-out"
                :class="index === currentImageIndex ? 'opacity-100' : 'opacity-0'"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="h-full w-full object-cover"
                  :loading="index === 0 ? 'eager' : 'lazy'"
                  decoding="async"
                  width="1600"
                  height="900"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                >
              </div>
            </div>
            <div v-else class="absolute inset-0 grid place-items-center bg-gradient-to-br from-altbg to-background p-6 text-center text-sm font-medium text-muted">
              Keine Bilder hinterlegt. Trage Pfade im `heroImages`-Array ein.
            </div>
            <div v-if="hasHeroImages" class="absolute inset-0 bg-gradient-to-t from-dark/45 via-transparent to-dark/10" />
            <div v-if="hasHeroImages" class="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
              <p class="rounded-xl bg-white/85 px-3 py-2 text-xs font-semibold text-primary">
                {{ heroImages[currentImageIndex]?.alt }}
              </p>
              <div class="flex gap-1.5">
                <span
                  v-for="(_, index) in heroImages"
                  :key="`dot-${index}`"
                  class="h-2 w-2 rounded-full transition-all duration-300"
                  :class="index === currentImageIndex ? 'w-5 bg-white' : 'bg-white/55'"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 py-2 sm:py-3">
          <span class="h-px flex-1 bg-primary/15" />
          <img src="/images/grip-shape.svg" alt="" aria-hidden="true" class="h-6 w-6 opacity-70">
          <span class="h-px flex-1 bg-primary/15" />
        </div>
      </div>

      <section id="highlights" class="py-16 sm:py-20">
        <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="rounded-3xl border border-primary/20 bg-white p-6 shadow-md sm:p-8">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Highlights</p>
            <h2 class="mt-3 text-3xl font-bold text-dark sm:text-4xl">Was dich bei uns erwartet</h2>
            <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <article class="motion-card rounded-2xl border border-primary/15 bg-altbg p-5 hover:border-primary/40 hover:shadow-primary/20"><p class="text-xs font-bold text-accentdark">01</p><h3 class="mt-2 text-xl font-bold text-dark">Einfache Preise</h3><p class="mt-2 text-sm text-muted">Tageskarte, Monatskarte und Jahreskarte ohne komplizierte Stundenmodelle.</p></article>
              <article class="motion-card rounded-2xl border border-primary/15 bg-altbg p-5 hover:border-primary/40 hover:shadow-primary/20"><p class="text-xs font-bold text-accentdark">02</p><h3 class="mt-2 text-xl font-bold text-dark">Fairer Zugang</h3><p class="mt-2 text-sm text-muted">Session-basiertes System für klare und transparente Nutzung.</p></article>
              <article class="motion-card rounded-2xl border border-primary/15 bg-altbg p-5 hover:border-primary/40 hover:shadow-primary/20"><p class="text-xs font-bold text-accentdark">03</p><h3 class="mt-2 text-xl font-bold text-dark">Zentrale Lage</h3><p class="mt-2 text-sm text-muted">Standort: Bewegungsgarage, Am Bahnhof 8.</p></article>
              <article class="motion-card rounded-2xl border border-primary/15 bg-altbg p-5 hover:border-primary/40 hover:shadow-primary/20"><p class="text-xs font-bold text-accentdark">04</p><h3 class="mt-2 text-xl font-bold text-dark">Community Fokus</h3><p class="mt-2 text-sm text-muted">Bouldern für Einsteiger und Fortgeschrittene in angenehmer Atmosphäre.</p></article>
            </div>
          </div>
        </div>
      </section>

      <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 py-2 sm:py-3">
          <span class="h-px flex-1 bg-primary/15" />
          <img src="/images/grip-shape.svg" alt="" aria-hidden="true" class="h-6 w-6 opacity-70">
          <span class="h-px flex-1 bg-primary/15" />
        </div>
      </div>

      <section id="anyquestions" class="bg-altbg py-16 sm:py-20">
        <div class="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">FAQ</p>
          <h2 class="mt-3 text-3xl font-bold text-dark sm:text-4xl">Häufige Fragen</h2>
          <div class="mt-8 space-y-3">
            <details class="rounded-2xl border border-primary/20 bg-white p-4 shadow-sm"><summary class="cursor-pointer font-semibold text-dark">Brauche ich Vorerfahrung?</summary><p class="mt-2 text-sm text-muted">Nein, bei uns sind Einsteiger und Fortgeschrittene willkommen.</p></details>
            <details class="rounded-2xl border border-primary/20 bg-white p-4 shadow-sm"><summary class="cursor-pointer font-semibold text-dark">Gibt es eine Stundenkarte?</summary><p class="mt-2 text-sm text-muted">Wir bieten stattdessen eine Tageskarte sowie Monats- und Jahreskarten an.</p></details>
            <details class="rounded-2xl border border-primary/20 bg-white p-4 shadow-sm"><summary class="cursor-pointer font-semibold text-dark">Wo finde ich Preise und Adresse?</summary><p class="mt-2 text-sm text-muted">Alle Details findest du direkt auf den Seiten Preise und Location.</p></details>
          </div>
        </div>
      </section>

      <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 py-2 sm:py-3">
          <span class="h-px flex-1 bg-primary/15" />
          <img src="/images/grip-shape.svg" alt="" aria-hidden="true" class="h-6 w-6 opacity-70">
          <span class="h-px flex-1 bg-primary/15" />
        </div>
      </div>

      <section id="visit" class="py-16 sm:py-20">
        <div class="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Besuch planen</p>
            <h2 class="mt-3 text-3xl font-bold text-dark sm:text-4xl">Komm vorbei</h2>
            <p class="mt-3 text-muted">Standort: Bewegungsgarage, Am Bahnhof 8. Alle Tarife findest du auf der Preisseite.</p>
          </div>
          <div class="rounded-2xl border border-primary/20 bg-white p-6 shadow-md">
            <p class="text-sm font-semibold text-dark">Schnelle Links</p>
            <div class="mt-4 flex flex-wrap gap-3">
              <NuxtLink to="/price" class="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-accentdark">Preise ansehen</NuxtLink>
              <NuxtLink to="/location" class="rounded-xl border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:border-accentdark hover:text-accentdark">Anfahrt anzeigen</NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 py-2 sm:py-3">
          <span class="h-px flex-1 bg-primary/15" />
          <img src="/images/grip-shape.svg" alt="" aria-hidden="true" class="h-6 w-6 opacity-70">
          <span class="h-px flex-1 bg-primary/15" />
        </div>
      </div>

      <section id="waitlist" class="bg-altbg py-16 sm:py-20">
        <div class="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Waitlist</p>
            <h2 class="mt-3 text-3xl font-bold text-dark sm:text-4xl">Bleib auf dem Laufenden</h2>
            <p class="mt-3 text-muted">
              Trag dich ein, wenn du Updates zu Start, Angeboten und freien Plätzen bekommen willst.
            </p>
          </div>
          <form
            action="https://formsubmit.co/hello@daskammerl.at"
            method="POST"
            class="rounded-2xl border border-primary/20 bg-white p-6 shadow-md"
          >
            <input type="hidden" name="_subject" value="Neue Waitlist-Anfrage von daskammerl.at">
            <input type="hidden" name="_captcha" value="false">
            <div class="grid gap-3">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                class="rounded-xl border border-primary/30 px-4 py-3 text-sm outline-none focus:border-primary"
              >
              <input
                type="email"
                name="email"
                required
                placeholder="E-Mail"
                class="rounded-xl border border-primary/30 px-4 py-3 text-sm outline-none focus:border-primary"
              >
              <textarea
                name="nachricht"
                rows="4"
                placeholder="Nachricht (optional)"
                class="rounded-xl border border-primary/30 px-4 py-3 text-sm outline-none focus:border-primary"
              ></textarea>
              <button
                type="submit"
                class="rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-accentdark"
              >
                Zur Waitlist anmelden
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const heroImages = [
  // Startseiten Bilder'
  { src: '/images/index_image_1.jpg', alt: 'Bouldern für alle Altersgruppen' },
  { src: '/images/index_image_2.jpg', alt: 'Abwechslungsreiche Routen' },
  { src: '/images/index_image_3.jpg', alt: 'Community Session am Abend' }
]

const currentImageIndex = ref(0)
const hasHeroImages = computed(() => heroImages.length > 0)
let sliderInterval: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  if (heroImages.length < 2) return
  sliderInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length
  }, 3800)
})

onBeforeUnmount(() => {
  if (sliderInterval) clearInterval(sliderInterval)
})

usePageSeo({
  title: 'Boulderhalle Wieselburg',
  description:
    'Das Kammerl Boulderhalle in Wieselburg: Preise, Anfahrt zur Bewegungsgarage, Vision, Sponsoring und Waitlist.',
  path: '/',
  image: '/images/index_image_1.jpg'
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Brauche ich Vorerfahrung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein, bei uns sind Einsteiger und Fortgeschrittene willkommen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Gibt es eine Stundenkarte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir bieten stattdessen eine Tageskarte sowie Monats- und Jahreskarten an.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wo finde ich Preise und Adresse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alle Details findest du direkt auf den Seiten Preise und Location.'
      }
    }
  ]
}

useHead({
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify(faqSchema)
  }]
})
</script>
