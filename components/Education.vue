<template>
  <div class="max-w-4xl mx-auto">
    <div class="flex flex-col space-y-8 relative">
      <!-- Vertical Line -->
      <div class="absolute w-1 bg-gray-200 dark:bg-gray-700 h-full left-5 transform -translate-x-1/2"></div>

      <!-- Timeline Steps -->
      <div
        v-for="(event, index) in events"
        :key="index"
        class="flex items-center"
      >
        <!-- Dot -->
        <div class="z-10 flex items-center justify-center w-10 h-10 bg-amber-400 rounded-full text-white dark:text-gray-600 flex-shrink-0">
          {{ index + 1 }}
        </div>

        <!-- Content -->
        <div class="ml-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ event.title }}</h3>
          <time class="block mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {{ event.date }}
          </time>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            {{ event.description }}
          </p>
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
          title: "Sign Up",
          date: "Step 1",
          description: "Create your account with basic information.",
        },
        {
          title: "Profile Setup",
          date: "Step 2",
          description: "Fill out your profile details and preferences.",
        },
        {
          title: "Verification",
          date: "Step 3",
          description: "Verify your email and phone number for security.",
        },
        {
          title: "Get Started",
          date: "Step 4",
          description: "Begin using the app with full access!",
        },
      ],
    };
  },
};
</script>

