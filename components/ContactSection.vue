<template>
  <section id="kontakt" class="bg-background py-16 sm:py-20">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Kontakt & Anfahrt</p>
        <h2 class="mt-3 text-3xl font-bold text-dark sm:text-4xl">So findest du uns</h2>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <article class="rounded-2xl border border-primary/15 bg-white p-6 shadow-md">
          <h3 class="text-xl font-bold text-dark">Das Kammerl</h3>
          <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Bewegungsgarage<br>
            Am Bahnhof 8<br>
            Wieselburg
          </p>
          <p class="mt-4 text-sm text-muted"><strong class="text-dark">Telefon:</strong> +43 000 000000</p>
          <p class="mt-1 text-sm text-muted"><strong class="text-dark">E-Mail:</strong> hello@daskammerl.at</p>
          <p class="mt-1 text-sm text-muted">
            <strong class="text-dark">Website:</strong>
            <a href="https://daskammerl.at" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-accentdark">
              daskammerl.at
            </a>
          </p>
          <a href="https://maps.google.com/?q=Bewegungsgarage+Wieselburg" target="_blank" rel="noopener noreferrer" class="mt-5 inline-flex rounded-xl border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:border-accentdark hover:text-accentdark">
            Route in Google Maps
          </a>
        </article>

        <form class="rounded-2xl border border-primary/20 bg-white p-6 shadow-md sm:p-8" @submit.prevent>
          <h3 class="text-xl font-bold text-dark">Direktnachricht</h3>
          <div class="mt-4 grid gap-4">
            <input type="text" required placeholder="Name" class="w-full rounded-xl border border-primary/30 px-4 py-3 text-sm text-dark outline-none transition focus:border-primary">
            <input type="email" required placeholder="E-Mail" class="w-full rounded-xl border border-primary/30 px-4 py-3 text-sm text-dark outline-none transition focus:border-primary">
            <textarea rows="4" required placeholder="Nachricht" class="w-full rounded-xl border border-primary/30 px-4 py-3 text-sm text-dark outline-none transition focus:border-primary"></textarea>
            <button type="submit" class="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accentdark">
              Nachricht senden
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

