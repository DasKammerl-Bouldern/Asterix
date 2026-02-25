<template>
  <div>
    <Navbar />

    <main class="bg-background">
      <section class="bg-gradient-to-b from-altbg to-background pt-6 pb-16 sm:pt-10 sm:pb-20">
        <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Sponsoring</p>
          <h1 class="mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-dark sm:text-5xl">
            Sponsoring und Partnerschaften im Aufbau.
          </h1>
          <p class="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Mit deiner Unterstützung bauen wir Angebot, Infrastruktur und Community in Wieselburg weiter aus.
          </p>

          <div class="mt-8 w-full">
            <ProgressBar :current-amount="0" :target-amount="75000" />
          </div>
        </div>
      </section>

      <SponsoringCards />

      <section class="py-12 sm:py-16">
        <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="rounded-2xl border border-primary/15 bg-white p-6 shadow-md sm:p-8">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Direct Support</p>
            <h2 class="mt-3 text-3xl font-bold text-dark">Direkt unterstützen</h2>
            <p class="mt-3 text-muted">
              Ob Einmalbeitrag oder Paket: Wir investieren in Infrastruktur, Community-Angebote, Sicherheit und Ausbau.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc0Dp8SmKTix6MK79pxjOoW1CYwl-pKZnurHXj1jk3ChH6rtA/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accentdark"
            >
              Jetzt direkt supporten
            </a>
          </div>

        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Sponsoring Das Kammerl Wieselburg',
  description:
    'Sponsoring bei Das Kammerl Wieselburg: Unterstuetzungsstand, Pakete und direkte Anfrage ueber unser Formular.'
})
</script>



