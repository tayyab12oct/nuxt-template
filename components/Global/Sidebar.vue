<template>
  <template v-for="item in data" :key="item.name">
    <div v-if="!item.children" :class="item.mainClass">
      <NuxtLink
        @click="click"
        :to="item.href"
        class="group cursor-pointer w-full flex items-center hover:underline"
        :class="colorClass"
      >
        <div class="w-10">
          <component
            :is="item.icon"
            class="mr-3 flex-shrink-0 h-5 w-5"
            :class="colorClass"
            aria-hidden="true"
          />
        </div>
        {{ item.name }}
      </NuxtLink>
    </div>
    <Popover as="div" v-else>
      <PopoverButton
        :class="`${item.mainClass} ${colorClass}`"
        class="group w-full flex items-center hover:underline"
      >
        <div class="w-10">
          <component
            :is="item.icon"
            class="mr-3 flex-shrink-0 h-5 w-5"
            :class="colorClass"
            aria-hidden="true"
          />
        </div>
        <span class="flex-1 text-left">
          {{ item.name }}
        </span>
        <ChevronRightIcon
          class="flex-shrink-0 h-6 w-6"
          :class="colorClass"
          aria-hidden="true"
        />
      </PopoverButton>
      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          class="bg-white absolute top-14 md:top-12 lg:top-20 left-2.5 md:left-full lg:left-[470px] w-full md:w-[407px] lg:w-full md:right-0 h-screen"
        >
          <div class="px-6 py-8 lg:px-16 lg:pb-26 pb-18 overflow-y-auto h-full">
            <PopoverButton
              class="w-full flex items-center space-x-2 mb-6 text-sm uppercase font-semibold text-primary"
            >
              <ChevronRightIcon
                class="h-6 w-6 text-primary -ml-2 transform rotate-180"
                aria-hidden="true"
              />
              <span>Back</span>
            </PopoverButton>
            <PopoverButton
              class="w-full"
              v-for="subItem in item.children"
              :key="subItem.name"
              @click="click"
            >
              <NuxtLink
                v-if="subItem.name"
                :to="subItem.href"
                class="text-primary hover:underline w-full flex items-center justify-between text-lg font-medium py-3"
              >
                <span>{{ subItem.name }}</span>
                <ChevronRightIcon
                  class="flex-shrink-0 h-6 w-6 text-primary"
                  aria-hidden="true"
                />
              </NuxtLink>
              <ul v-for="v in subItem.list" :key="v.name">
                <li>
                  <NuxtLink
                    :to="v.href"
                    class="text-primary w-full flex items-center justify-between text-base py-3 font-medium text-left border-t border-gray-900"
                    :class="v.icon ? 'hover:underline' : ''"
                  >
                    <span>{{ v.name }}</span>
                    <ChevronRightIcon
                      v-if="v.icon"
                      class="flex-shrink-0 h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </NuxtLink>
                  <ul>
                    <li v-for="a in v.subList" :key="a.name">
                      <NuxtLink
                        :to="a.href"
                        class="text-primary hover:underline w-full text-left flex items-center justify-between text-base py-3 font-light"
                      >
                        <span>{{ a.name }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </PopoverButton>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </template>
</template>
<script>
import { Popover,PopoverButton,PopoverPanel, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronRightIcon } from "@heroicons/vue/solid";
export default {
  props: ["data", "click", "colorClass"],
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    DisclosureButton,
    DisclosurePanel,
    ChevronRightIcon,
  },
  data() {
    return {};
  },
};
</script>
