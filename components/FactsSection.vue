<template>
  <section id="zeiten" class="bg-altbg py-16 sm:py-20">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Besuchsinfo</p>
        <h2 class="mt-3 text-3xl font-bold text-dark sm:text-4xl">Öffnungszeiten und Preise</h2>
      </div>

      <div class="mt-10 grid gap-6 lg:grid-cols-2">
        <article class="rounded-2xl border border-primary/15 bg-white p-6 shadow-md">
          <h3 class="text-xl font-bold text-dark">Öffnungszeiten</h3>
          <ul class="mt-4 space-y-2 text-sm text-muted sm:text-base">
            <li class="flex justify-between gap-4"><span>Montag - Freitag</span><strong class="text-dark">14:00 - 22:00</strong></li>
            <li class="flex justify-between gap-4"><span>Samstag</span><strong class="text-dark">10:00 - 22:00</strong></li>
            <li class="flex justify-between gap-4"><span>Sonntag & Feiertag</span><strong class="text-dark">10:00 - 20:00</strong></li>
          </ul>
          <p class="mt-4 text-xs text-muted">Letzter Einlass: 60 Minuten vor Schließung.</p>
        </article>

        <article id="preise" class="rounded-2xl border border-primary/15 bg-white p-6 shadow-md">
          <h3 class="text-xl font-bold text-dark">Preise</h3>
          <ul class="mt-4 space-y-2 text-sm text-muted sm:text-base">
            <li class="flex justify-between gap-4"><span>Tageskarte</span><strong class="text-dark">EUR 9,00</strong></li>
            <li class="flex justify-between gap-4"><span>Monatskarte</span><strong class="text-dark">EUR 45,00</strong></li>
            <li class="flex justify-between gap-4"><span>Jahreskarte</span><strong class="text-dark">EUR 399,00</strong></li>
            <li class="flex justify-between gap-4"><span>Tariflogik</span><strong class="text-dark">Session-basiert</strong></li>
          </ul>
          <p class="mt-4 text-xs text-muted">Ein Account kann immer genau eine aktive Session starten.</p>
        </article>
      </div>
    </div>
  </section>
</template>

