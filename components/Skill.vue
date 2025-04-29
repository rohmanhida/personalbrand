<template>
  <div class="flex flex-col items-center">
    <h1 class="text-lg md:text-xl m-6">// Skill</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-4">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div>
          <h5
            class="mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ card.title }}
          </h5>
          <p class="mb-3 text-xs md:text-sm text-gray-700 dark:text-gray-400">
            {{ card.description }}
          </p>
          <img
            v-for="(image, jindex) in card.images"
            :key="jindex"
            class="inline-block h-10 w-10 rounded-full ring-2 ring-white grayscale hover:grayscale-0"
            :src="image"
            :alt="image"
          />
          <!--<a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-300 rounded-lg hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-amber-400 dark:hover:bg-amber-500 dark:focus:ring-gray-800 dark:text-gray-600"
          >
            Read more
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
          </a>-->
        </div>
      </div>
    </div>
    <div class="text-xs md:text-sm">
      <div class="columns-1 md:columns-2 gap-6 space-y-8 mt-4">
        <div v-for="(item, index) in items" :key="index">
          <div
            class="shadow hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8"
          >
            <h5 class="text-base md:text-lg font-bold text-gray-900 dark:text-white">
              {{ item.title }}
            </h5>
            <p class="text-xs md:text-sm text-gray-700 dark:text-gray-400">
              {{ item.description }}
            </p>
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
          title: 'Front End Development',
          description:
            'ReactJS, VueJS, AngularJS, OpenUI, SAPUI. State Mangement library (redux, vuex, mobx, ngrx)',
          images: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/120px-React_Logo_SVG.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/250px-Vue.js_Logo_2.svg.png',
            'https://miro.medium.com/v2/resize:fill:76:76/1*uJa0SU-F2NXVKhHTbP1HBw.png',
            'https://ui5.sap.com/resources/sap/ui/documentation/sdk/images/logo_ui5.png',
          ],
        },
        {
          title: 'UI Kit',
          description: 'Material, Tailwindcss, ANT, Semantic, Chakra',
          images: [
            'https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042',
            'https://iconape.com/wp-content/files/ro/370540/svg/ant-design-logo-icon-png-svg.png',
            'https://images.seeklogo.com/logo-png/27/1/semantic-ui-logo-png_seeklogo-273887.png',
            'https://tse1.mm.bing.net/th?id=OIP.lRb07N34hcsNKufxVWkFoAAAAA&pid=Api',
          ],
        },
        {
          title: 'Back End Development',
          description:
            'Go (gin), Java (spring), Python (flask, django), PHP (laravel), NodeJS (expressjs), GraphQL',
          images: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/250px-Go_Logo_Blue.svg.png',
            'https://spring.io/img/spring.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/150px-Python-logo-notext.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/190px-Laravel.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/250px-Expressjs.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/GraphQL_logo_%28horizontal%29.svg/250px-GraphQL_logo_%28horizontal%29.svg.png',
          ],
        },
        {
          title: 'Mobile Development',
          description: 'Flutter, React Native, Swift',
          images: [
            'https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/250px-React-icon.svg.png',
            'https://developer.apple.com/assets/elements/icons/swift-playgrounds-mac/swift-playgrounds-mac-96x96_2x.png',
          ],
        },
        {
          title: 'Databases',
          description: 'SQL (Postgre, SQL Server), nosql (Mongo, Dynamo DB)',
          images: [
            'https://www.liblogo.com/img-logo/mo429m6b7-mongodb-logo-mongodb-original-wordmark-logo-free-icon-of-devicon.png',
            'https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon.png',
            'https://www.liblogo.com/img-logo/sq6364s5cc-sql-server-logo-sql-server-free-logo-icons.png',
            'https://jeffreyeverhart.com/wp-content/uploads/2020/06/dynamodb.png',
          ],
        },
        {
          title: 'Cloud Platform',
          description: 'Google Cloud Platform, AWS S3',
          images: [
            'https://logodix.com/logo/929925.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/120px-Amazon-S3-Logo.svg.png',
          ],
        },
        {
          title: 'Dev Tools',
          description:
            'DevOps Tools (CI/CD, Docker, k8s), Test Unit (Jest, JUnit, PHPUnit), Git',
          images: [
            'https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/120px-Kubernetes_logo_without_workmark.svg.png',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.auth0.com%2Fblog%2Ftesting-react-with-jest%2Flogo.png&f=1&nofb=1&ipt=9ecd04878c7ae200de9e8aa0a089c327348d9da7b1e066991c46cae7093da7de',
          ],
        },
      ],
      items: [
        {
          title: 'AI Development',
          description:
            'usually use keras, pytorch and tensorflow as a go-to library',
        },
        {
          title: 'UNIX/POSIX familiarity',
          description: 'Using ArchLinux and MacOS as a daily driver',
        },
        {
          title: 'Natural Leadership',
          description:
            'Very passionate to lead team and collaborate with other team member',
        },
        {
          title: 'Minimalist',
          description: 'Love Minimalism, self-development, and self-help topic',
        },
      ],
    };
  },
};
</script>
