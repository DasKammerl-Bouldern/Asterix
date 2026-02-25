type UsePageSeoOptions = {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}

export const usePageSeo = (options: UsePageSeoOptions) => {
  const route = useRoute()
  const {
    public: { siteName, siteUrl, defaultOgImage, siteLanguage }
  } = useRuntimeConfig()

  const targetPath = options.path ?? route.path ?? '/'
  const canonical = new URL(targetPath, siteUrl).toString()
  const image = new URL(options.image ?? defaultOgImage, siteUrl).toString()
  const title = `${options.title} | ${siteName}`

  useHead({
    title: options.title,
    link: [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: siteLanguage, href: canonical }
    ]
  })

  useSeoMeta({
    title,
    description: options.description,
    keywords: `daskammerl, Das Kammerl, daskammerl.at, Boulderhalle Wieselburg, Bouldern Wieselburg`,
    ogTitle: title,
    ogDescription: options.description,
    ogType: options.type ?? 'website',
    ogUrl: canonical,
    ogImage: image,
    twitterTitle: title,
    twitterDescription: options.description,
    twitterCard: 'summary_large_image',
    twitterImage: image
  })
}
