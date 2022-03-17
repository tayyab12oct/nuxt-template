<template>
  <div
    class="max-w-7xl bg-secondary rounded-lg shadow-sm mx-auto w-full px-4 lg:py-6 md:pt-8 pb-6 pt-4 grid md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6"
  >
    <div class="">
      <h1 class="text-gray-300 md:text-2xl text-lg md:pb-3 pb-1">
        Track your order
      </h1>
      <div class="flex items-center lg:space-x-6 md:space-x-3 space-x-2">
        <Input
          label="Item tracking no.*"
          type="text"
          id="tracking"
          mainClass="bg-white"
          placeholder="Item tracking no.*"
        />
        <Button
          value="search"
          mainClass="bg-primary hover:bg-blue-200 text-white lg:text-base text-sm uppercase font-bold py-3.5 lg:px-6 px-5 w-44"
        />
      </div>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-3">
      <div
        v-for="v in list"
        :key="v"
        class="border border-gray-100 flex lg:flex-col flex-row items-center lg:text-center lg:p-4 p-3 lg:justify-center lg:space-y-2 space-x-4 lg:space-x-0 bg-white rounded-lg hover:shadow-sm transition-all focus:border-primary hover:underline cursor-pointer"
      >
        <img :src="v.src" alt="" />
        <p class="text-primary lg:text-sm text-xs">{{ v.text }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Input from "../Input";
import Button from "../Button";
import { ChevronRightIcon } from "@heroicons/vue/outline";
export default {
  props: ["cards"],
  components: {
    Input,
    Button,
    ChevronRightIcon,
  },
  data() {
    return {
      list: [
        {
          src: "assets/images/localizador.svg",
          text: "Find post offices, post boxes and Citypaq",
        },
        {
          src: "assets/images/encuentra_cp.svg",
          text: "Find postcodes",
        },
        {
          src: "assets/images/resevar_cita.svg",
          text: "Appointment",
        },
      ],
    };
  },
};
</script>
