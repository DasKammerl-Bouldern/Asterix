<template>
  <div class="decor" aria-hidden="true">
    <svg class="hold hold-a" viewBox="0 0 180 140">
      <path d="M20 82c0-39 24-66 68-66 37 0 72 20 72 55 0 24-19 36-36 40-10 2-28 5-45 5-34 0-59-9-59-34z" />
      <circle cx="58" cy="70" r="7" />
      <circle cx="95" cy="60" r="6" />
      <circle cx="124" cy="76" r="5" />
    </svg>
    <svg class="hold hold-b" viewBox="0 0 170 150">
      <path d="M13 74c0-35 26-60 67-60 48 0 78 29 78 65 0 40-34 57-78 57-34 0-67-19-67-62z" />
      <circle cx="50" cy="71" r="6" />
      <circle cx="83" cy="52" r="6" />
      <circle cx="112" cy="80" r="5" />
    </svg>
    <svg class="hold hold-c" viewBox="0 0 160 120">
      <path d="M11 58c0-31 21-47 58-47 47 0 80 19 80 51 0 29-29 47-70 47-41 0-68-15-68-51z" />
      <circle cx="47" cy="58" r="5" />
      <circle cx="80" cy="45" r="5" />
      <circle cx="104" cy="66" r="5" />
    </svg>
    <svg class="hold hold-d" viewBox="0 0 170 150">
      <path d="M18 75c0-44 28-69 75-69 34 0 63 20 63 56 0 40-22 74-74 74-38 0-64-20-64-61z" />
      <circle cx="57" cy="79" r="7" />
      <circle cx="91" cy="62" r="5" />
      <circle cx="116" cy="94" r="6" />
    </svg>
  </div>
</template>

<style scoped>
.decor {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 40;
}

.hold {
  position: absolute;
  width: clamp(120px, 16vw, 240px);
  opacity: 0.34;
  filter: drop-shadow(0 16px 24px rgba(66, 63, 64, 0.2));
  animation: floaty 9s ease-in-out infinite;
}

.hold path {
  fill: #8e3a76;
  stroke: #7d406b;
  stroke-width: 2;
}

.hold circle {
  fill: #f0ebf7;
}

.hold-a {
  left: -3%;
  top: 13%;
}

.hold-b {
  right: -2%;
  top: 26%;
  animation-delay: 1.6s;
  transform: scale(0.82) rotate(18deg);
}

.hold-c {
  left: 2%;
  bottom: 18%;
  animation-delay: 0.8s;
  transform: scale(0.92) rotate(-12deg);
}

.hold-d {
  right: -4%;
  bottom: 8%;
  animation-delay: 2.2s;
  transform: scale(1.02) rotate(14deg);
}

@keyframes floaty {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(-2deg);
  }
}

@media (max-width: 768px) {
  .hold-a,
  .hold-c {
    display: none;
  }

  .hold {
    opacity: 0.22;
    width: clamp(100px, 28vw, 170px);
  }
}
</style>
