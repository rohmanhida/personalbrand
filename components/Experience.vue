<template>
  <div class="flex flex-col items-center">
    <h1 class="text-lg md:text-xl m-6">// Experience</h1>
    <div class="relative border-l border-gray-300 dark:border-gray-700 ml-6">
      <div v-for="(event, index) in events" :key="index" class="mb-10 ml-6">
        <!-- Dot -->
        <span
          class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-800"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-800 dark:text-gray-200"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M16.707 5.293a1 1 0 00-1.414 0L10 10.586 4.707 5.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"
            />
          </svg>
        </span>

        <!-- Content -->
        <div
          class="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-shadow duration-300 rounded-lg px-3 pt-4 pb-8 ml-2"
        >
          <div class="inset-0 flex justify-end items-start">
            <span
              v-if="event.isFullTime"
              class="bg-amber-300 text-gray-800 text-xs md:text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3 dark:bg-amber-400 dark:text-gray-600"
            >
              Full-time
            </span>
          </div>
          <h3
            class="flex items-center ml-3 mb-1 text-base md:text-lg font-semibold text-gray-900 dark:text-white"
          >
            {{ event.place }}
          </h3>
          <time
            class="block ml-3 mb-2 text-xs md:text-sm font-normal leading-5 md:leading-none text-gray-400 dark:text-gray-500"
          >
            {{ event.date }}
          </time>
          <p
            class="block ml-3 mb-2 text-xs md:text-sm font-normal leading-5 md:leading-none text-gray-300 dark:text-gray-600 italic"
          >
            {{ event.position }}
          </p>
          <p
            class="ml-3 mb-4 text-sm md:text-base font-normal text-gray-500 dark:text-gray-400"
          >
            {{ event.description }}
          </p>
          <div class="rounded-lg bg-gray-300 dark:bg-gray-900 p-3 mb-4">
            <p
              v-if="event.isStack"
              class="ml-3 mb-2 text-xs md:text-sm font-normal text-gray-500 dark:text-gray-400"
            >
              tech stack:<br />
              // {{ event.stack }}
            </p>
            <p
              v-if="event.isStack2"
              class="ml-3 mb-2 text-xs md:text-sm font-normal text-gray-500 dark:text-gray-400"
            >
              // {{ event.stack2 }}
            </p>
          </div>
          <a
            v-if="event.isLinkAvailable"
            :href="event.link"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-300 rounded-lg hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-amber-400 dark:hover:bg-amber-500 dark:focus:ring-gray-800 dark:text-gray-600"
          >
            Learn more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ml-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L21.75 12m0 0l-4.5 5.25M21.75 12H3"
              />
            </svg>
          </a>
          <p v-else class="ml-3 inline-flex text-xs md:text-sm text-gray-200 dark:text-gray-600 italic">project is private/link not available</p>
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
          isFullTime: true,
          place: 'LCDI Kementerian PPN/Bappenas',
          date: 'Oct 20 - Feb 24',
          position: 'Coordinator IT & Data, Full Stack Dev.',
          description:
            'Develop and maintain app (AKSARA, SADEWA), manage IT & Dev Team, Speaker',
          isStack: true,
          stack:
            'nextjs (react), graphql, jest, django/flask, postgres, redis. tools: docker, ci/cd',
          isStack2: true,
          stack2:
            'flutter & react native, graphql, jest, go/gin, mongodb, redis. tools: docker, ci/cd',
          isLinkAvailable: true,
          link: 'https://pprk.bappenas.go.id',
        },
        {
          isFullTime: false,
          place: 'Surat Untukmu',
          date: 'Aug 22 - Now',
          position: 'Full Stack Dev',
          description: 'Simple cms website for wedding invitation',
          isStack: true,
          stack: 'nuxtjs (vue), spring (java/kotlin)',
          isStack2: false,
          stack2: '',
          isLinkAvailable: true,
          link: 'https://www.suratuntukmu.my.id',
        },
        {
          isFullTime: false,
          place: 'Haer',
          date: 'Aug 22 - Now',
          position: 'Full Stack Dev',
          description:
            'HR app bespoke for certain company, start the dev as a front end dev, then turning into full stack in the mid development',
          isStack: true,
          stack:
            'nextjs (react), jest, laravel (php), redis, tools: docker, ci/cd',
          isStack2: true,
          stack2:
            'flutter (dart), jest, laravel (php), redis, tools: docker, ci/cd',
          isLinkAvailable: false,
          link: '',
        },
        {
          isFullTime: true,
          place: 'PT Trias Sentosa Tbk',
          date: 'Jul 17 - Sep 20',
          position: 'Backend Lead, Project Manager, OLAP Dev, SAP-PP',
          description:
            'Leader of Backend Devs, Project Manager of IT-INV 2.0, Backend Dev of AGS System, SAP-PP Functional, Shopfloor Dev',
          isStack: true,
          stack:
            'sapui/openui, .net 5, sap-abap, sql server, sap-db, redis, svn, postman',
          isStack2: false,
          stack2: '',
          isLinkAvailable: false,
          link: '',
        },
        {
          isFullTime: true,
          place: 'Unit Ketahanan Jurnal, Brawijaya Univ.',
          date: 'Jul 16 - Jul 17',
          position: 'Web Dev, IT Support',
          description: 'Developer of OJS System, Support System',
          isStack: true,
          stack: 'ojs system (php), python, laravel (php)',
          isStack2: false,
          stack2: '',
          isLinkAvailable: true,
          link: 'https://jtrolis.ub.ac.id/index.php/jtrolis',
        },
        {
          isFullTime: false,
          place: 'NST Proceeding',
          date: 'Sep 16 - Jan 17',
          position: 'Full Stack Dev',
          description: 'Developer of Proceeding website',
          isStack: true,
          stack: 'codeigniter (php)',
          isStack2: false,
          stack2: '',
          isLinkAvailable: true,
          link: 'https://nstproceeding.com',
        },
        {
          isFullTime: true,
          place: 'Computer Science Faculty, Brawijaya Univ.',
          date: 'Aug 16 - Apr 17',
          position: 'Computer Vision Researcher',
          description: 'Researcher specifically for ML and Computer Vision',
          isStack: true,
          stack: 'python, pytorch, keras',
          isStack2: false,
          stack2: '',
        },
        {
          isFullTime: false,
          place: 'Clinical Journal CAPA',
          date: 'Sep 16 - Apr 18',
          position: 'Full Stack Dev',
          description: 'Developer of manuscript management app',
          isStack: true,
          stack: 'laravel (php), vuejs',
          isStack2: false,
          stack2: '',
          isLinkAvailable: true,
          link: 'https://klinikjurnal.com',
        },
      ],
    };
  },
};
</script>
