<template>
  <div class="items-center max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-center text-lg md:text-xl m-6">// Portfolio</h1>
    <p class="text-gray-500 dark:text-gray-400 text-base text-center m-3">
      These are my vibe-coding projects i made in my free time
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-6">
      <div v-for="(card, index) in cards" :key="index"
        class="break-inside-avoid bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <!-- Image (fills height on md+) -->
          <div class="w-full md:w-48 h-48 md:h-auto shrink-0">
            <img :src="card.image" alt="Card Image" class="w-full h-full object-cover" />
          </div>

          <!-- Content (with padding) -->
          <div class="p-4 flex-1">
            <h3 class="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {{ card.title }}
            </h3>

            <p v-if="card.subtitle" class="text-gray-400 dark:text-gray-500 text-xs md:text-sm italic py-2">
              {{ card.subtitle }}
            </p>

            <p class="text-gray-500 dark:text-gray-400 text-sm md:text-sm">
              {{ card.description }}
            </p>
            <a v-if="card.isDemoAvailable" :href="card.demo"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-300 rounded-lg hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-amber-400 dark:hover:bg-amber-500 dark:focus:ring-gray-800 dark:text-gray-600 mt-3">
              view demo
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17.25 6.75L21.75 12m0 0l-4.5 5.25M21.75 12H3" />
              </svg>
            </a>
            <a v-if="card.isSourceAvailable" :href="card.source"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-300 rounded-lg hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-amber-400 dark:hover:bg-amber-500 dark:focus:ring-gray-800 dark:text-gray-600 mt-3">
              view source
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17.25 6.75L21.75 12m0 0l-4.5 5.25M21.75 12H3" />
              </svg>
            </a>
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
      cards: [
        {
          title: 'WebSocket Chat',
          subtitle: 'Handmade chat app',
          description:
            'Built with redis pub-sub, go, websocket, and svelte-kit (typescript, svelte, tailwindcss) deployed serverless with docker to aws/railway and netlify',
          image: 'chat-sv.png',
          isDemoAvailable: true,
          demo: 'https://chat-sv.netlify.app',
          isSourceAvailable: true,
          source: 'https://github.com/rohmanhida/chat-sv',
        },
        {
          title: 'Personal Brand Web',
          subtitle: 'Handmade portfolio web app',
          description:
            'Built with nuxtjs (vueJs, typescript), tailwindcss deployed to netlify',
          image:
            'personal-brand.png',
          isDemoAvailable: true,
          demo: 'https://zesty-zebra.netlify.app',
          isSourceAvailable: true,
          source: 'https://github.com/rohmanhida/personalbrand',
        },
      ],
    };
  },
};
</script>
