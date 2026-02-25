<template>
  <div class="pb-20 md:pb-0">
    <NuxtPage />

    <nav class="fixed inset-x-0 bottom-0 z-[60] border-t border-primary/20 bg-white/95 backdrop-blur md:hidden">
      <div class="mx-auto max-w-6xl px-2 py-2">
        <div class="grid grid-cols-5 gap-2">
          <NuxtLink
            v-for="item in mobileNavItems"
            :key="item.to"
            :to="item.to"
            class="rounded-lg border px-2 py-2 text-center text-[11px] font-semibold transition-colors"
            :class="isActive(item.to)
              ? 'border-primary bg-primary text-white'
              : 'border-primary/20 bg-white text-primary'"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileNavItems = [
  { to: '/', label: 'Home' },
  { to: '/vision', label: 'Vision' },
  { to: '/price', label: 'Preise' },
  { to: '/location', label: 'Location' },
  { to: '/sponsoren', label: 'Sponsoren' }
]

const isActive = (target: string) => {
  return route.path === target
}

const {
  public: { siteName, siteUrl, defaultSeoDescription, defaultOgImage }
} = useRuntimeConfig()

const ogImageUrl = new URL(defaultOgImage, siteUrl).toString()
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'SportsActivityLocation'],
  '@id': `${siteUrl}/#organization`,
  name: siteName,
  alternateName: ['daskammerl', 'daskammerl.at', 'Das Kammerl Boulderhalle'],
  url: siteUrl,
  email: 'servus@daskammerl.at',
  brand: {
    '@type': 'Brand',
    name: 'daskammerl'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Am Bahnhof 8',
    addressLocality: 'Wieselburg',
    addressCountry: 'AT'
  },
  sameAs: [siteUrl]
}
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: siteName,
  alternateName: ['daskammerl', 'daskammerl.at'],
  url: siteUrl,
  inLanguage: 'de-AT',
  publisher: {
    '@id': `${siteUrl}/#organization`
  }
}

useSeoMeta({
  ogTitle: siteName,
  description: defaultSeoDescription,
  ogSiteName: siteName,
  ogType: 'website',
  ogUrl: siteUrl,
  ogImage: ogImageUrl,
  twitterTitle: siteName,
  twitterDescription: defaultSeoDescription,
  twitterCard: 'summary_large_image',
  twitterImage: ogImageUrl
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(organizationSchema)
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify(websiteSchema)
    }
  ]
})
</script>
