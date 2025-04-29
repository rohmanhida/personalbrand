<template>
  <div class="bg-gray-300 dark:bg-gray-700">
    <div
      class="flex flex-col space-y-6 md:w-1/3 justify-center items-center p-4 md:fixed">
      <img class="w-36 h-36 rounded-full grayscale" src="~/assets/img/foto.png" />
      <h4 class="uppercase text-gray-800 dark:text-gray-200 text-sm md:text-base">Abdurrohman Hidayat</h4>
      <h5 class="uppercase text-gray-800 dark:text-gray-200 text-lg md:text-2xl">
        <span><vue-typewriter-effect :strings="['fullstack', 'java', 'golang', 'python', 'react', 'vue', 'angular', 'mobile', 'php', 'desktop' ]" /></span>Developer
      </h5>
      <h3 class="align-middle uppercase text-gray-800 dark:text-gray-200 text-base md:text-3xl"></h3>
      <table class="table-auto md:tale-fixed p-2 contact text-gray-800 dark:text-gray-200">
        <tbody>
          <tr>
            <td class="font-bold p-2 text-xs md:text-sm">Mail</td>
            <td class="p-2 text-xs md:text-sm outgoing-links"><a href="mailto:hodyjones99@gmail.com">hodyjones99@gmail.com</a></td>
          </tr>
          <tr>
            <td class="font-bold p-2 text-xs md:text-sm">Home</td>
            <td class="p-2 text-xs md:text-sm">Gresik, Indonesia</td>
          </tr>
        </tbody>
      </table>
      <div class="grid grid-cols-2 gap-2 p-4 text-gray-800 dark:text-gray-200 text-xs md:text-sm">
        <div>
          <a
            class="outgoing-links"
            href="https://id.linkedin.com/in/abdurrohman-hidayat-76700186"
          >
            <span class="inline-block">
              <LinkIcon class="size-3" />
            </span>
            LinkedIn
          </a>
        </div>
        <div>
          <a class="outgoing-links" href="https://github.com/rohmanhida">
            <span class="inline-block">
              <CodeBracketIcon class="size-3" />
            </span>
            GitHub
          </a>
        </div>
      </div>
      <nav
        class="flex flex-auto flex-wrap justify-items-center justify-center gap-1 text-gray-800 dark:text-gray-200 text-xs md:text-sm"
      >
        <a
          class="wrap-break-word menu"
          href="#"
          @click.prevent="scrollToSection('skill')"
          >Skill</a
        >
        <a
          class="wrap-break-word menu"
          href="#"
          @click.prevent="scrollToSection('experience')"
          >Experience</a
        >
        <a
          class="wrap-break-word menu"
          href="#"
          @click.prevent="scrollToSection('research')"
          >Research</a
        >
        <a
          class="wrap-break-word menu"
          href="#"
          @click.prevent="scrollToSection('misc')"
          >Why?</a
        >
      </nav>
      <div class="flex flex-col md:flex-row gap-4">
        <button class="text-gray-700 border-gray-700 dark:text-gray-300 dark:border-gray-300 border-solid text-sm md:text-base">
          <a href="mailto:hodyjones99@gmail.com">Hire me</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CodeBracketIcon, LinkIcon } from '@heroicons/vue/24/outline';
import VueTypewriterEffect from "vue-typewriter-effect";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  console.log(section, sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>
