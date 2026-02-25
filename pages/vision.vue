<template>
  <div>
    <Navbar />
    <main class="bg-background py-16 sm:py-20">
      <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Vision</p>
        <h1 class="mt-3 text-4xl font-extrabold text-dark sm:text-5xl">Unsere Vision für Das Kammerl</h1>
        <p class="mt-4 max-w-3xl text-lg font-semibold text-primary">Einfach kommen, sicher starten, gemeinsam besser werden.</p>
        <p class="mt-3 max-w-3xl text-muted">
          Das Kammerl soll der Boulder-Treffpunkt für Wieselburg und Umgebung sein: klar, freundlich und ohne Hürden.
        </p>

        <div class="mt-8 rounded-3xl border border-primary/20 bg-white p-6 shadow-md sm:p-8">
          <h2 class="text-2xl font-bold text-dark">Drei Säulen</h2>
          <div class="mt-6 grid gap-5 md:grid-cols-3">
            <article class="rounded-2xl border border-primary/15 bg-altbg p-5">
              <h3 class="text-xl font-bold text-dark">Erlebnis</h3>
              <p class="mt-2 text-sm text-muted">Gute Routen, klare Orientierung und ein angenehmer erster Besuch.</p>
            </article>
            <article class="rounded-2xl border border-primary/15 bg-altbg p-5">
              <h3 class="text-xl font-bold text-dark">Training</h3>
              <p class="mt-2 text-sm text-muted">Strukturierte Entwicklung für Einsteiger und Fortgeschrittene.</p>
            </article>
            <article class="rounded-2xl border border-primary/15 bg-altbg p-5">
              <h3 class="text-xl font-bold text-dark">Gemeinschaft</h3>
              <p class="mt-2 text-sm text-muted">Regelmäßige Community-Abende und respektvoller Umgang in der Halle.</p>
            </article>
          </div>
        </div>

        <div class="mt-8 rounded-3xl border border-primary/20 bg-white p-6 shadow-md sm:p-8">
          <h2 class="text-2xl font-bold text-dark">Kurz beantwortet</h2>
          <div class="mt-5 space-y-3">
            <details class="rounded-xl border border-primary/15 bg-altbg p-4">
              <summary class="cursor-pointer font-semibold text-dark">Wofür steht Das Kammerl langfristig?</summary>
              <p class="mt-2 text-sm text-muted">Für einen offenen Boulder-Ort mit fairem Zugang, klarer Struktur und echter Community in Wieselburg.</p>
            </details>
            <details class="rounded-xl border border-primary/15 bg-altbg p-4">
              <summary class="cursor-pointer font-semibold text-dark">Wie hilft die Vision mir als Besucher?</summary>
              <p class="mt-2 text-sm text-muted">Du bekommst einfache Infos, faire Preise und einen klaren Einstieg vom ersten Besuch an.</p>
            </details>
            <details class="rounded-xl border border-primary/15 bg-altbg p-4">
              <summary class="cursor-pointer font-semibold text-dark">Warum liegt der Fokus auf Gemeinschaft?</summary>
              <p class="mt-2 text-sm text-muted">Weil Motivation, Respekt und gemeinsame Entwicklung die Qualität jeder Session spürbar verbessern.</p>
            </details>
          </div>

          <div class="mt-6 flex flex-wrap gap-3">
            <NuxtLink to="/price" class="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-accentdark">Preise ansehen</NuxtLink>
            <NuxtLink to="/location" class="rounded-xl border border-primary/30 px-5 py-3 text-sm font-semibold text-primary hover:border-accentdark hover:text-accentdark">Zur Anfahrt</NuxtLink>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Vision Boulderhalle Wieselburg',
  description:
    'Vision der Boulderhalle Das Kammerl in Wieselburg: Erlebnis, Training und Gemeinschaft für alle Levels.'
})
</script>

