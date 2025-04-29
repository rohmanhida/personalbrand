<template>
  <div class="items-center max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-center text-lg md:text-xl m-6">// Research</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-6">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="break-inside-avoid p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
      >
        <div class="flex items-center mb-2">
          <div
            class="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 dark:bg-amber-400 dark:text-gray-600"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 class="ml-3 text-base md:text-lg font-semibold text-gray-900 dark:text-white">
            {{ card.title }}
          </h3>
        </div>
        <p
          v-if="card.subtitle"
          class="text-gray-400 dark:text-gray-500 text-xs md:text-sm italic py-2"
        >
          {{ card.subtitle }}
        </p>
        <p class="text-gray-500 dark:text-gray-400 text-sm md:text-base">
          {{ card.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Inderscience Publishers',
          description:
            'Bottomhat kernel analysis based on different shape and size using colonies extraction for counting of bacterial colonies in petri dish',
        },
        {
          title: 'ELCVIA',
          subtitle: 'Electronic Letters on Computer Vision and Image Analysis',
          description:
            'Simplified Method for Automated Counting of Bacterial Colonies in Petri Dish',
        },
        {
          title: 'LIPI',
          subtitle: 'Indonesian Institute of Sciences',
          description:
            'SOLOR (Smart Microbial Detector) Alat Penghitung Otomatis Jumlah Koloni Mikroba sebagai Inovasi Food Safety and Security',
        },
      ],
    };
  },
};
</script>
