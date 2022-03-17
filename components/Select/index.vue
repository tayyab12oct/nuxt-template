<template>
  <Listbox as="div" v-model="selected">
    <div
      class="relative border border-gray-900 bg-gray-200 border-b-0 rounded-t-lg group w-full transition-all text-left"
    >
      <label
        class="absolute top-1 z-10 block w-full px-4 text-xs text-primary font-medium"
        >Select product category</label
      >
      <ListboxButton
        class="relative text-left block w-full text-gray-300 px-4 py-2 pt-5 md:text-base text-sm bg-transparent border-b-2 border-0 border-transparent group-hover:border-secondary focus:outline-none focus:border-primary ring-0"
      >
        <span class="block">{{ selected.name }}</span>
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 rounded-t-none transition-all w-full bg-white border-2 border-primary max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="person in people"
            :key="person.id"
            :value="person"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'text-white bg-primary' : 'text-primary bg-gray-200',
                'cursor-default select-none font-semibold relative py-4 text-base pl-3 pr-9',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-semibold' : 'font-normal',
                  'block truncate',
                ]"
              >
                {{ person.name }}
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { SelectorIcon } from "@heroicons/vue/solid";

const people = [
  { id: 1, name: "Packages (under 100 shipments/month)" },
  { id: 2, name: "Packages (over 100 shipments/month)" },
  { id: 3, name: "Direct Marketing" },
  { id: 4, name: "Other" },
];

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    SelectorIcon,
  },
  setup() {
    const selected = ref(people[1]);

    return {
      people,
      selected,
    };
  },
};
</script>
