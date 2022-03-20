<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover
    class="fixed top-0 left-0 w-full z-50 bg-white border-t-8 border-secondary shadow-sm"
  >
    <div
      class="absolute inset-0 shadow-sm z-30 pointer-events-none"
      aria-hidden="true"
    />
    <div class="relative z-20 overflow-hidden">
      <div
        class="max-w-7xl mx-auto flex justify-between items-center px-6 md:py-1 py-2 xl:px-0 md:justify-start md:space-x-5 lg:space-x-8"
      >
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="flex">
            <span class="sr-only">Workflow</span>
            <img
              class="h-8 w-auto md:h-9 lg:h-10"
              src="assets/images/Logo.svg"
              alt=""
            />
          </NuxtLink>
          <div class="border-l border-gray-100 pl-2">
            <PopoverButton
              class="bg-white rounded-md lg:p-2 p-1 inline-flex items-center justify-center text-primary focus:outline-none"
            >
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
        <div
          class="md:flex-1 md:flex md:items-center md:justify-between md:pl-5 lg:pl-0"
        >
          <div class="hidden lg:flex lg:space-x-10 space-x-8">
            <NuxtLink
              to="/individual"
              class="text-base border-b border-transparent px-1 py-1.5 text-primary transition-all"
            >
              Individual
            </NuxtLink>
            <NuxtLink
              to="/companies"
              class="text-base border-b border-transparent px-1 py-1.5 text-primary transition-all"
            >
              Company
            </NuxtLink>
          </div>
          <div class="flex items-center lg:space-x-4 space-x-3">
            <div class="text-right text-gray-300 text-sm hidden lg:block">
              <p class="font-light">
                Call us Mon. - Fri. from @opening_time_12h - @closing_time_12h
                ET / Closed Weekends
              </p>
              <p class="text-secondary">Contact Us</p>
              <h5 class="text-primary text-lg">
                <strong>1-800-734-5491</strong>
              </h5>
            </div>
            <div class="cursor-pointer lg:hidden">
              <SearchIcon class="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <NuxtLink
              to=""
              class="cursor-pointer border-l border-gray-100 lg:border-l-0 py-1.5 pl-3 lg:p-0"
            >
              <UserIcon
                class="lg:h-6 h-5 lg:w-6 w-5 text-primary"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5 sm:pb-8">
            <div class="flex items-center justify-between">
              <NuxtLink to="/">
                <img
                  class="h-8 w-auto"
                  src="assets/images/Logo.svg"
                  alt="Workflow"
                />
              </NuxtLink>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">xClose menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6 sm:mt-8">
              <nav>
                <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <a
                    v-for="item in solutions"
                    :key="item.name"
                    :href="item.href"
                    class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                    >
                      <component
                        :is="item.icon"
                        class="h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      {{ item.name }}
                    </div>
                  </a>
                </div>
                <div class="mt-8 text-base">
                  <a
                    href="#"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View all products <span aria-hidden="true">&rarr;</span></a
                  >
                </div>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <a
                href="#"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>

              <a
                href="#"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>

              <a
                href="#"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Company
              </a>

              <a
                href="#"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Resources
              </a>

              <a
                href="#"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Blog
              </a>

              <a
                href="#"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Contact Sales
              </a>
            </div>
            <div class="mt-6">
              <a
                href="#"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ " " }}
                <a href="#" class="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "View All Products", href: "#", icon: CheckCircleIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const company = [
  { name: "About", href: "#", icon: InformationCircleIcon },
  { name: "Customers", href: "#", icon: OfficeBuildingIcon },
  { name: "Press", href: "#", icon: NewspaperIcon },
  { name: "Careers", href: "#", icon: BriefcaseIcon },
  { name: "Privacy", href: "#", icon: ShieldCheckIcon },
];
const resources = [
  { name: "Community", href: "#", icon: UserGroupIcon },
  { name: "Partners", href: "#", icon: GlobeAltIcon },
  { name: "Guides", href: "#", icon: BookmarkAltIcon },
  { name: "Webinars", href: "#", icon: DesktopComputerIcon },
];
const blogPosts = [
  {
    id: 1,
    name: "Boost your conversion rate",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
  },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
  },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
    UserIcon,
    SearchIcon,
  },
  setup() {
    return {
      solutions,
      callsToAction,
      company,
      resources,
      blogPosts,
    };
  },
};
</script>
<style>
a.router-link-exact-active {
  @apply font-semibold border-primary !important;
}
</style>
