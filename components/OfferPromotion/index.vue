<template>
  <div>
    <p class="text-[18px] text-gray-300 py-7">Offers and Promotions</p>
    <div class="flex justify-start pb-6">
      <ul
        class="flex itemc-center border border-gray-900 rounded-full transition-all"
      >
        <li
          class="text-center rounded-full py-1.5 w-44 cursor-pointer transition-all"
          v-on:click="toggleTabs(1)"
          v-bind:class="{
            'bg-transparent hover:underline transition-all': openTab !== 1,
            'bg-primary text-white transition-all': openTab === 1,
          }"
        >
          Solo algunos
        </li>
        <li
          class="text-center rounded-full py-1.5 w-44 cursor-pointer transition-all"
          v-on:click="toggleTabs(2)"
          v-bind:class="{
            'bg-transparent hover:underline transition-all': openTab !== 2,
            'bg-primary text-white transition-all': openTab === 2,
          }"
        >
          Todos
        </li>
      </ul>
    </div>
    <div>
      <div
        v-bind:class="{
          hidden: openTab !== 1,
          block: openTab === 1,
        }"
      >
        <div class="space-y-5 pb-10">
          <Checkbox v-for="v in list" :key="v.id" :id="v.id" :text="v.text" />
        </div>
      </div>
      <div
        v-bind:class="{
          hidden: openTab !== 2,
          block: openTab === 2,
        }"
      >
        <div class="space-y-5 pb-10">
          <Checkbox
            v-for="v in list"
            :key="v.id"
            :id="v.text"
            :text="v.text"
            :checked="v.checked"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Checkbox from "../Checkbox";
export default {
  components: {
    Checkbox,
  },
  data() {
    return {
      openTab: 1,
      show: false,
      list: [
        {
          id: "services",
          checked: "true",
          text: "Offers and promotions about other Correos products and services",
        },
        {
          id: "companies",
          checked: "true",
          text: "Offers and promotions from Correos Group companies.",
        },
        {
          id: "mailings",
          checked: "true",
          text: "Data provided to Correos Group companies and other companies for commercial mailings",
        },
        {
          id: "sources",
          checked: "true",
          text: "Profiling with external sources",
        },
      ],
    };
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
