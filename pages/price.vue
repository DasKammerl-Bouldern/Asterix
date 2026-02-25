<template>
  <div>
    <Navbar />
    <main class="bg-background py-16 sm:py-20">
      <div class="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Tarife</p>
        <h1 class="mt-3 text-4xl font-extrabold text-dark sm:text-5xl">Preise</h1>
        <div class="mt-8 grid gap-5 md:grid-cols-3">
          <article class="rounded-2xl border border-primary/15 bg-white p-6 shadow-md">
            <h2 class="text-xl font-bold text-dark">Tageskarte</h2>
            <p class="mt-3 text-3xl font-extrabold text-primary">EUR 9,00</p>
            <p class="mt-3 text-sm text-muted">Spontaner Zugang ohne Zeitlimit innerhalb der Öffnungszeit an einem Tag.</p>
          </article>
          <article class="rounded-2xl border border-primary/15 bg-white p-6 shadow-md">
            <h2 class="text-xl font-bold text-dark">Monatskarte</h2>
            <p class="mt-3 text-3xl font-extrabold text-primary">EUR 45,00</p>
            <p class="mt-3 text-sm text-muted">Unbegrenzte Besuche im Monat, ein Account mit einer aktiven Session gleichzeitig.</p>
          </article>
          <article class="rounded-2xl border border-primary/15 bg-white p-6 shadow-md">
            <h2 class="text-xl font-bold text-dark">Jahreskarte</h2>
            <p class="mt-3 text-3xl font-extrabold text-primary">EUR 399,00</p>
            <p class="mt-3 text-sm text-muted">Unbegrenzte Nutzung über das Jahr mit Fokus auf Bindung und Planungssicherheit.</p>
          </article>
        </div>
        <article class="mt-6 rounded-2xl border border-primary/15 bg-white p-6 shadow-sm">
          <h3 class="text-lg font-bold text-dark">Tariflogik</h3>
          <ul class="mt-3 space-y-2 text-sm text-muted">
            <li>- Einfache, faire Preise ohne komplizierte Modelle</li>
            <li>- Tageskarte für spontanes Bouldern</li>
            <li>- Monats- und Jahreskarte für regelmäßiges Klettern</li>
          </ul>
        </article>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Preise Boulderhalle Wieselburg',
  description:
    'Preise im Das Kammerl Wieselburg: Tageskarte, Monatskarte und Jahreskarte mit einfacher, transparenter Tariflogik.'
})
</script>


