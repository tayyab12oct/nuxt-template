<template>
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 -translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-1"
  >
    <ul class="hidden md:flex items-center lg:space-x-10 space-x-8">
      <li
        v-for="v in menuList"
        :key="v.name"
        class="dropdown group inline text-base cursor-pointer px-1 lg:py-5 py-2 text-primary transition-all"
      >
        <div
          class="flex items-center space-x-2 transition-all group-hover:font-semibold py-1.5 border-b border-transparent hover:border-primary"
        >
          <div class="lg:w-6 w-4">
            <component
              :is="v.icon"
              class="flex-shrink-0 lg:h-5 lg:w-5 h-4 w-4"
              aria-hidden="true"
            />
          </div>
          <span>{{ v.name }}</span>
        </div>
        <div
          :class="
            v.name === 'Individual'
              ? 'bg-secondary text-primary'
              : 'bg-primary text-white'
          "
          class="dropdown-menu absolute top-full w-full right-0 left-0 hidden h-auto group-hover:flex"
        >
          <ul
            role="list"
            class="grid grid-cols-3 lg:gap-x-16 gap-x-8 px-4 py-8 sm:py-12 sm:px-6 lg:px-0 w-full max-w-7xl mx-auto"
          >
            <li
              v-for="item in v.list"
              :key="item.name"
              class="flex items-center border-b border-gray-50 text-lg font-light py-2.5 lg:py-3 w-full"
            >
              <NuxtLink
                :to="item.href"
                class="group cursor-pointer w-full flex items-center hover:underline lg:text-base text-sm"
              >
                <div class="lg:w-10 w-8">
                  <component
                    :is="item.icon"
                    class="mr-3 flex-shrink-0 lg:h-5 lg:w-5 h-4 w-4"
                    aria-hidden="true"
                  />
                </div>
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </transition>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";
import {
  BriefcaseIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
  XIcon,
  HomeIcon,
  LocationMarkerIcon,
  ShoppingCartIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
  CogIcon,
  InboxIcon,
  CalendarIcon,
  TruckIcon,
  UsersIcon,
  FolderIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
    ShoppingCartIcon,
    QuestionMarkCircleIcon,
    ChartBarIcon,
    CogIcon,
    InboxIcon,
    CalendarIcon,
    TruckIcon,
    UsersIcon,
    FolderIcon,
  },
  data() {
    return {
      menu: false,
      menuList: [
        {
          name: "Individual",
          icon: HomeIcon,
          list: [
            { name: "Home", href: "/individual", icon: HomeIcon },
            { name: "Receive", href: "#", icon: UsersIcon },
            { name: "Send", href: "#", icon: TruckIcon },
            { name: "Cash and purchases", href: "#", icon: CalendarIcon },
            { name: "Travel, Leisure and Stamp Collecting", href: "#", icon: InboxIcon },
            { name: "For citizens", href: "#", icon: ChartBarIcon },
            { name: "Tools", href: "#", icon: CogIcon },
            { name: "Rates", href: "#", icon: ChartBarIcon },
            { name: "Latest news", href: "#", icon: NewspaperIcon },
            { name: "Shop", href: "#", icon: ShoppingCartIcon },
            { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
          ],
        },
        {
          name: "Company",
          icon: LocationMarkerIcon,
          list: [
            { name: "Home", href: "/companies", icon: HomeIcon },
            { name: "Send", href: "#", icon: TruckIcon },
            { name: "e-Commerce", href: "#", icon: FolderIcon },
            { name: "Marketing", href: "#", icon: CalendarIcon },
            { name: "Physical and digital communications", href: "#", icon: InboxIcon },
            { name: "For your business", href: "#", icon: ChartBarIcon },
            { name: "Tools", href: "#", icon: CogIcon },
            { name: "Latest news", href: "#", icon: NewspaperIcon },
            { name: "Shop", href: "#", icon: ShoppingCartIcon },
            { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
          ],
        },
      ],
    };
  },
};
</script>
