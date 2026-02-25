<template>
  <section class="rounded-2xl border border-primary/20 bg-white p-5 shadow-lg sm:p-6">
    <div class="flex flex-wrap items-end justify-between gap-3">
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Sponsoring-Fortschritt</p>
        <h3 class="mt-1 text-xl font-bold text-dark">{{ formatMoney(currentAmount) }} von {{ formatMoney(targetAmount) }}</h3>
      </div>
      <p class="text-2xl font-extrabold text-primary">{{ percentage }}%</p>
    </div>

    <div class="mt-4 h-6 w-full overflow-hidden rounded-full bg-soft">
      <div
        class="h-full rounded-full bg-primary transition-all duration-1000"
        :style="{ width: animatedPercentage + '%' }"
      />
    </div>

    <div class="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-3">
      <p><span class="font-semibold text-dark">Aktuell:</span> {{ formatMoney(currentAmount) }}</p>
      <p><span class="font-semibold text-dark">Prozent:</span> {{ percentage }}%</p>
      <p><span class="font-semibold text-dark">Rest:</span> {{ formatMoney(remainingAmount) }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  currentAmount: number
  targetAmount: number
}>()

const percentage = computed(() => {
  if (props.targetAmount <= 0) return 0
  return Math.min(100, Math.round((props.currentAmount / props.targetAmount) * 100))
})

const remainingAmount = computed(() => Math.max(0, props.targetAmount - props.currentAmount))

const animatedPercentage = ref(0)

onMounted(() => {
  requestAnimationFrame(() => {
    animatedPercentage.value = percentage.value
  })
})

watch(percentage, (value) => {
  animatedPercentage.value = value
})

const formatMoney = (value: number) => {
  return new Intl.NumberFormat('de-AT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(value)
}
</script>
