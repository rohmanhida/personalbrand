<template>
  <div>
    <h1 class="text-center text-lg md:text-xl m-6">// Why me?</h1>
    <div
      class="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      <div v-for="(feature, i) in features" :key="i" class="perspective">
        <div
          class="relative w-full h-64 text-center transition-all duration-700 transform preserve-3d hover:rotate-y-180"
        >
          <!-- Front Side -->
          <div
            class="absolute inset-0 w-full h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg flex flex-col items-center justify-center backface-hidden"
          >
            <div
              class="w-16 h-16 mb-4 text-amber-300 dark:text-gray-400"
              v-html="feature.icon"
            ></div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ feature.title }}
            </h3>
          </div>

          <!-- Back Side -->
          <div
            class="absolute inset-0 w-full h-full bg-white text-gray-400 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 backface-hidden rotate-y-180"
          >
            <p class="mb-4">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'Quick Learner',
          description:
            'Master new skill before other finish training',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="w-16 h-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>`,
        },
        {
          title: 'Solution-oriented',
          description:
            'Sees problems as puzzles, not obstacles',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="w-16 h-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.38 0 2.5-1.12 2.5-2.5S13.38 6 12 6 9.5 7.12 9.5 8.5 10.62 11 12 11z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 20H7a2 2 0 01-2-2v-5a5 5 0 0110 0v5a2 2 0 01-2 2z" />
          </svg>`,
        },
        {
          title: 'Responsive',
          description: 'Answer fast, acts faster',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="w-16 h-16">
          <circle cx="12" cy="7" r="4" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M5.5 21a6.5 6.5 0 0113 0" />
          </svg>`,
        },
        {
          title: 'Dependable',
          description:
            'You don\'t need to double check',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="w-16 h-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>`,
        },
        {
          title: 'Self-motivated',
          description: "Drive projects without needing a push",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="w-16 h-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M18 10c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 21h6M12 17v4" />
          </svg>`,
        },
        {
          title: 'Resourceful',
          description: 'Finds a way when there\'s no way',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="w-16 h-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 6h18M3 14h12" />
          </svg>`,
        },
      ],
    };
  },
};
</script>

<style>
.perspective {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.hover\:rotate-y-180:hover {
  transform: rotateY(180deg);
}
</style>
