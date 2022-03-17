<template>
  <div
    class="max-w-7xl mx-auto w-full px-6 xl:px-0 lg:py-6 py-6 grid md:grid-cols-2 grid-cols-1 lg:gap-8 gap-5"
  >
    <div
      class="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm w-full"
      v-for="v in cards"
      :key="v"
    >
      <div
        class="relative bg-center bg-cover bg-no-repeat md:h-56 h-44 md:col-span-2 lg:col-span-1"
        v-bind:style="{ backgroundImage: 'url(' + v.src + ')' }"
      ></div>
      <div class="p-5 px-6">
        <div class="md:h-32 h-28 lg:h-26">
          <h1 class="text-gray-300 pb-3 lg:text-4xl text-2xl">
            {{ v.title }}
          </h1>
          <p class="lg:text-base text-sm pb-5 font-light text-gray-300">
            {{ v.text }}
          </p>
        </div>
        <router-link
          to=""
          class="my-5 text-primary font-bold lg:text-base text-sm hover:underline flex items-center space-x-4"
        >
          <span>MORE INFO</span>
          <ChevronRightIcon class="w-5 text-primary" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../Button";
import { ChevronRightIcon } from "@heroicons/vue/outline";
export default {
  props: ["cards"],
  components: {
    Button,
    ChevronRightIcon,
  },
  data() {
    return {};
  },
};
</script>
