<template>
  <div>
    <Navbar />
    <main class="bg-background py-16 sm:py-20">
      <div class="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Location</p>
        <h1 class="mt-3 text-4xl font-extrabold text-dark sm:text-5xl">Standort & Anfahrt</h1>

        <div class="mt-8 grid gap-5 lg:grid-cols-2">
          <article class="rounded-2xl border border-primary/15 bg-white p-6 shadow-md">
            <h2 class="text-xl font-bold text-dark">Adresse</h2>
            <p class="mt-3 text-muted">
              Bewegungsgarage<br>
              Am Bahnhof 8<br>
              Wieselburg
            </p>
            <p class="mt-4 text-sm text-muted"><strong class="text-dark">Parken:</strong> In der Umgebung verfügbar</p>
            <p class="mt-1 text-sm text-muted"><strong class="text-dark">ÖPNV:</strong> Direkt beim Bahnhof Wieselburg (750m)</p>
          </article>

          <article class="rounded-2xl border border-primary/15 bg-white p-6 shadow-md">
            <h2 class="text-xl font-bold text-dark">Route</h2>
            <p class="mt-3 text-muted">Nutze den folgenden Link für die direkte Navigation.</p>
            <a
              href="https://maps.google.com/?q=Bewegungsgarage+Wieselburg"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-accentdark"
            >
              In Google Maps öffnen
            </a>
          </article>

          <article class="rounded-2xl border border-primary/15 bg-white p-3 shadow-md lg:col-span-2">
            <p class="px-2 pb-2 text-sm font-semibold text-dark">Karte</p>
            <iframe
              src="https://www.google.com/maps?q=Bewegungsgarage+Wieselburg&output=embed"
              class="h-64 w-full rounded-xl border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            />
          </article>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Standort und Anfahrt Wieselburg',
  description:
    'Anfahrt zur Boulderhalle Das Kammerl: Bewegungsgarage, Am Bahnhof 8, Wieselburg inklusive Google Maps.'
})
</script>

