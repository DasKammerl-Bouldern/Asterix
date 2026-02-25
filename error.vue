<template>
  <div>
    <Navbar />
    <main class="bg-background py-16 sm:py-20">
      <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl border border-primary/20 bg-white shadow-md overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <!-- Links: Text -->
            <div class="p-8 sm:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">
                {{ is404 ? 'Seite nicht gefunden' : 'Fehler' }}
              </p>
              <h1 class="mt-3 text-3xl font-extrabold text-dark sm:text-4xl">
                {{ is404 ? '404' : error?.statusCode ?? 'Fehler' }}
              </h1>
              <p class="mt-4 text-lg font-semibold text-primary">
                {{ is404
                  ? 'Diese Seite existiert leider nicht.'
                  : 'Etwas ist schiefgelaufen. Bitte versuche es später erneut.' }}
              </p>
              <p v-if="!is404 && error?.message" class="mt-2 text-sm text-muted">
                {{ error.message }}
              </p>

              <div class="mt-8 pt-6 border-t border-primary/15 space-y-4">
                <p v-if="notFoundUrl" class="text-sm text-muted">
                  <span class="font-semibold text-dark">Diese URL wurde nicht gefunden:</span><br>
                  <code class="mt-1 inline-block rounded-lg bg-altbg px-3 py-1.5 text-xs font-mono text-primary break-all">
                    {{ notFoundUrl }}
                  </code>
                </p>
                <NuxtLink
                  to="/"
                  class="inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-accentdark transition-colors"
                  @click="clearError"
                >
                  Zurück zur Startseite
                </NuxtLink>
              </div>
            </div>

            <!-- Rechts: Video -->
            <div class="relative aspect-video lg:aspect-auto lg:min-h-[320px] bg-dark/5 order-1 lg:order-2">
              <video
                v-show="!videoError"
                :src="videoSrc"
                class="absolute inset-0 h-full w-full object-cover"
                autoplay
                muted
                loop
                playsinline
                @error="videoError = true"
              />
              <div
                v-show="videoError"
                class="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-muted text-sm"
              >
                <span>Video einbinden:</span>
                <code class="rounded bg-altbg px-2 py-1 text-primary">public/videos/404.mp4</code>
                <span>MP4 hier ablegen.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: { statusCode?: number; statusMessage?: string; message?: string }
}>()

const route = useRoute()
const is404 = computed(() => props.error?.statusCode === 404)
const notFoundUrl = computed(() => {
  const path = route.fullPath || route.path
  return path && path !== '/' ? path : null
})

// Video: Datei nach public/videos/404.mp4 legen → wird als /videos/404.mp4 eingebunden
const videoSrc = '/videos/404.mp4'
const videoError = ref(false)
</script>
