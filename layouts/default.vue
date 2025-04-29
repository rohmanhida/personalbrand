<template>
  <div class="grid grid-cols-1 md:grid-cols-3">
    <AppHeader />
      <div class="col-span-1 md:col-span-2 justify-left p-4  text-gray-800 dark:text-gray-300 bg-gray-200 dark:bg-gray-800">
      <slot />
      <AppFooter class="justify-items-center" />
    </div>
  </div>
</template>
