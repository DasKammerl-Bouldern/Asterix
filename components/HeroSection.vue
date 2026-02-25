<template>
  <section id="home" class="relative overflow-hidden bg-gradient-to-b from-altbg to-background">
    <div class="mx-auto grid min-h-[78vh] w-full max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div class="space-y-6">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Das Kammerl | Bouldern in Wieselburg</p>
        <h1 class="max-w-xl text-4xl font-extrabold leading-tight text-dark sm:text-5xl lg:text-6xl">
          Alles, was du fürs Bouldern brauchst. Auf einer Seite.
        </h1>
        <p class="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Öffnungszeiten, Preise, Kurse, Hallenregeln, Anfahrt und Kontakt.
          Egal ob Einsteiger oder Fortgeschritten: Hier findest du alle Infos für deinen Besuch.
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="#preise" class="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-accentdark">
            Preise ansehen
          </a>
          <a href="#kontakt" class="rounded-xl border border-primary/30 bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accentdark hover:text-accentdark">
            Kontakt & Anfahrt
          </a>
        </div>
      </div>

      <div class="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-card">
        <div class="relative h-56 w-full overflow-hidden bg-gradient-to-br from-altbg via-soft/60 to-background">
          <div class="absolute left-6 top-8 h-24 w-24 rounded-full bg-primary/20 blur-xl" />
          <div class="absolute right-10 top-6 h-16 w-16 rounded-full bg-accentdark/25 blur-lg" />
          <div class="absolute bottom-10 left-1/3 h-14 w-40 rounded-full bg-lightpurple/45 blur-md" />
          <svg class="absolute inset-x-0 bottom-0 h-28 w-full text-primary/60" viewBox="0 0 600 140" fill="none" aria-hidden="true">
            <path d="M20 130L120 35l120 28 95-45 120 95 125 17H20z" fill="currentColor" />
          </svg>
        </div>
        <div class="p-6 sm:p-8">
          <h2 class="text-lg font-bold text-dark">Heute im Kammerl</h2>
          <ul class="mt-4 space-y-3 text-sm text-muted sm:text-base">
            <li class="flex items-start gap-2"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-primary" /> Leihschuhe direkt vor Ort</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-primary" /> Einsteigerfreundliche Boulder in allen Bereichen</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-primary" /> Wöchentlicher Routenumbau</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

