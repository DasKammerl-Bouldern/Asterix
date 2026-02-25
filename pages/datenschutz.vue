<template>
  <div>
    <Navbar />
    <main class="bg-background py-16 sm:py-20">
      <div class="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Rechtliches</p>
        <h1 class="mt-3 text-4xl font-extrabold text-dark sm:text-5xl">Datenschutz</h1>
        <div class="mt-8 rounded-2xl border border-primary/15 bg-white p-6 shadow-md">
          <p class="text-muted">
            Wir verarbeiten personenbezogene Daten ausschliesslich im notwendigen Umfang zur Bereitstellung dieser Website
            und zur Bearbeitung von Kontakt- und Formularanfragen.
          </p>
          <p class="mt-4 text-muted">
            Bei Fragen zum Datenschutz erreichst du uns unter: <span class="font-semibold text-dark">hello@daskammerl.at</span>
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Datenschutz',
  description: 'Datenschutzhinweise der Website daskammerl.at.'
})
</script>

