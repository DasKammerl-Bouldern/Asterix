<template>
  <div>
    <Navbar />
    <main class="bg-background py-16 sm:py-20">
      <div class="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Rechtliches</p>
        <h1 class="mt-3 text-4xl font-extrabold text-dark sm:text-5xl">Impressum</h1>
        <div class="mt-8 rounded-2xl border border-primary/15 bg-white p-6 shadow-md">
          <p class="text-muted">Das Kammerl</p>
          <p class="mt-2 text-muted">Bewegungsgarage, Am Bahnhof 8</p>
          <p class="text-muted">Wieselburg</p>
          <p class="mt-4 text-muted"><span class="font-semibold text-dark">E-Mail:</span> hello@daskammerl.at</p>
          <p class="mt-4 text-sm text-muted">Verantwortlich fuer den Inhalt: Das Kammerl Team</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Impressum',
  description: 'Impressum der Website daskammerl.at.'
})
</script>

