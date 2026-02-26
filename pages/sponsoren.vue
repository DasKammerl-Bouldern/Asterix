<template>
  <div>
    <Navbar />

    <main class="bg-background">
      <SponsorenHeroSection :current-amount="0" :target-amount="75000" />
      <SponsoringCards />
      <SponsorenDirectSupportSection />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Sponsoring Das Kammerl Wieselburg',
  description:
    'Sponsoring bei Das Kammerl Wieselburg: Unterstützungsstand, Pakete und direkte Anfrage über unser Formular.'
})
</script>
