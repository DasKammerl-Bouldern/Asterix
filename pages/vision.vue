<template>
  <div>
    <Navbar />
    <main class="bg-background">
      <VisionIntroSection />
      <VisionPillarsSection />
      <VisionFaqSection />
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
