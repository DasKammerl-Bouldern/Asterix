<template>
  <div>
    <Navbar />

    <main class="bg-background">
      <IndexHeroSection :hero-intro="heroIntro" :hero-images="heroImages" />

      <SectionDivider />

      <IndexAblaufSection />

      <SectionDivider />

      <IndexFaqSection />

      <SectionDivider />

      <IndexVisitSection />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const heroIntro = 'Alle wichtigen Besucherinfos auf einen Blick: Preise, Standort, ÷ffnungszeiten und Antworten auf h‰ufige Fragen.'

const heroImages = [
  { src: '/images/index_image_1.jpg', alt: 'Bouldern fùr alle Altersgruppen' },
  { src: '/images/index_image_2.jpg', alt: 'Abwechslungsreiche Routen' },
  { src: '/images/index_image_3.jpg', alt: 'Community Session am Abend' }
]

usePageSeo({
  title: 'Boulderhalle Wieselburg',
  description:
    'Das Kammerl Boulderhalle in Wieselburg: Preise, Anfahrt zur Bewegungsgarage, Vision und Sponsoring.',
  path: '/',
  image: '/images/index_image_1.jpg'
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Brauche ich Vorerfahrung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein, bei uns sind Einsteiger und Fortgeschrittene willkommen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Gibt es eine Stundenkarte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir bieten stattdessen eine Tageskarte sowie Monats- und Jahreskarten an.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wo finde ich Preise und Adresse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alle Details findest du direkt auf den Seiten Preise und Location.'
      }
    }
  ]
}

useHead({
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify(faqSchema)
  }]
})
</script>
