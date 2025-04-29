<template>
  <div class="flex flex-col items-center">
    <h1 class="text-lg md:text-xl m-6">// Remote/freelance Experience</h1>
    <div class="relative flex flex-col items-center">
      <!-- Timeline vertical line -->
      <div
        class="absolute w-1 bg-gray-300 dark:bg-gray-700 h-full left-1/2 transform -translate-x-1/2"
      ></div>

      <!-- Timeline items -->
      <div
        v-for="(event, index) in events"
        :key="index"
        class="mb-8 flex justify-between items-center w-full"
      >
        <div
          class="w-5/12"
          :class="index % 2 === 0 ? 'text-right' : 'text-left'"
        >
          <div
            class="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h3
              class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              {{ event.title }}
            </h3>
            <time class="block mb-2 text-sm text-gray-400 dark:text-gray-500">{{
              event.date
            }}</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              {{ event.description }}
            </p>
          </div>
        </div>

        <!-- Circle dot -->
        <div
          class="z-10 flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full border-4 border-white dark:border-gray-900 dark:bg-gray-900"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-600 dark:text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M16.707 5.293a1 1 0 00-1.414 0L10 10.586 4.707 5.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"
            />
          </svg>
        </div>

        <div class="w-5/12">
          <div :class="index % 2 === 0 ? 'text-right' : 'text-left'">
            <div
              class="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <h3
                class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
              >
                {{ event.title }}
              </h3>
              <time
                class="block mb-2 text-sm text-gray-400 dark:text-gray-500"
                >{{ event.date }}</time
              >
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                {{ event.description }}
              </p>
            </div>
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
      events: [
        {
          title: 'Kickoff Meeting',
          date: 'Jan 2025',
          description:
            'We started the project with a bang, discussing all the major milestones.',
        },
        {
          title: 'Prototype Release',
          date: 'Mar 2025',
          description:
            'The first working prototype was released internally for testing.',
        },
        {
          title: 'Beta Launch',
          date: 'Jun 2025',
          description: 'Public beta testers joined and gave valuable feedback.',
        },
        {
          title: 'Official Launch',
          date: 'Sep 2025',
          description: 'We went live worldwide with a successful launch.',
        },
      ],
    };
  },
};
</script>
