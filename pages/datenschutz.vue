<template>
  <div>
    <Navbar />
    <main class="bg-background">
      <DatenschutzContentSection />
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
