<template>
  <div class="max-w-7xl mx-auto w-full px-6 xl:px-0 lg:py-10 py-6">
    <h1 class="text-4xl text-gray-300">Specific solutions</h1>
    <div class="flex space-x-6 p-6 flex-nowrap overflow-x-auto">
      <div class="md:w-90 w-72" v-for="v in list" :key="v">
        <div
          class="bg-white border border-gray-100 rounded-lg p-4 md:w-90 w-72"
        >
          <img :src="v.src" alt="" class="w-20" />
          <div class="h-60 overflow-hidden mb-10">
            <h1 class="text-gray-300 py-3 font-bold md:text-4xl text-2xl">
              {{ v.title }}
            </h1>
            <p class="lg:text-lg text-base font-light text-gray-300">
              {{ v.text }}
            </p>
          </div>
          <Button value="Request info" />
          <ul class="text-gray-300 md:text-base text-sm pt-3">
            <li
              class="flex items-center md:h-18 h-16 lg:space-x-10 md:space-x-6 space-x-4 py-1 border-t border-gray-100 px-2"
              v-for="a in v.list"
              :key="a"
            >
              <span>{{ a.text }}</span>
              <div><CheckIcon class="w-5 text-green-100" /></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../Button";
import { CheckIcon } from "@heroicons/vue/outline";
export default {
  props: ["list"],
  components: {
    Button,
    CheckIcon,
  },
  data() {
    return {};
  },
};
</script>
