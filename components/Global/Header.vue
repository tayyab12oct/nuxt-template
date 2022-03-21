<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="fixed top-0 left-0 w-full z-50">
    <div
      class="absolute inset-0 shadow-sm bg-white z-50 pointer-events-none"
      aria-hidden="true"
    />
    <div class="relative z-50 border-t-8 border-secondary overflow-hidden">
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
              @click="openMenu"
              class="bg-white rounded-md lg:p-2 p-1 inline-flex items-center justify-center text-primary focus:outline-none"
            >
              <MenuIcon
                v-if="menu === false"
                class="h-6 w-6"
                aria-hidden="true"
              />
              <XIcon v-else class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
        <div
          class="md:flex-1 md:flex md:items-center md:justify-between md:pl-5 lg:pl-0"
        >
          <div class="hidden lg:flex lg:space-x-10 space-x-8">
            <NuxtLink
              to="/individual"
              class="text-base border-b border-transparent px-1 py-1.5 text-primary transition-all flex items-center space-x-2"
            >
              <HomeIcon class="w-5" /> <span>Individual</span>
            </NuxtLink>
            <NuxtLink
              to="/companies"
              class="text-base border-b border-transparent px-1 py-1.5 text-primary transition-all flex items-center space-x-2"
            >
              <LocationMarkerIcon class="w-5" /> <span>Company</span>
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
      <div
        v-if="menu == true"
        focus
        class="fixed left-0 w-full z-30 top-0 inset-x-0 transition transform origin-top-right"
      >
        <div
          class="h-screen p-6 pb-10 pt-20 lg:pt-28 lg:px-16 flex flex-col justify-between"
          :class="openTab === 1 ? 'bg-secondary' : 'bg-primary'"
        >
          <div class="sm:pb-8 text-left">
            <ul class="flex pt-1 list-none flex-wrap pb-7 space-x-4">
              <li>
                <a
                  class="text-base lg:text-lg cursor-pointer leading-normal pb-2 px-0.5"
                  v-on:click="toggleTabs(1)"
                  v-bind:class="{
                    'text-white': openTab !== 1,
                    'border-b border-primary border-opacity-30 text-primary font-semibold':
                      openTab === 1,
                  }"
                >
                  Individual
                </a>
              </li>
              <li>
                <a
                  class="text-base lg:text-lg cursor-pointer leading-normal pb-2 px-0.5"
                  v-on:click="toggleTabs(2)"
                  v-bind:class="{
                    'text-primary': openTab !== 2,
                    'border-b border-gray-100 border-opacity-30 text-white font-semibold':
                      openTab === 2,
                  }"
                >
                  Company
                </a>
              </li>
            </ul>
            <nav
              v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
              class="flex-1"
              aria-label="Sidebar"
            >
              <template v-for="item in individual" :key="item.name">
                <div v-if="!item.children" :class="item.mainClass">
                  <NuxtLink
                    @click="openMenu"
                    :to="item.href"
                    class="group cursor-pointer text-primary w-full flex items-center hover:underline"
                  >
                    <div class="w-10">
                      <component
                        :is="item.icon"
                        class="mr-3 flex-shrink-0 h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    {{ item.name }}
                  </NuxtLink>
                </div>
                <Disclosure as="div" v-else v-slot="{ open }">
                  <DisclosureButton
                    :class="item.mainClass"
                    class="group text-primary w-full flex items-center hover:underline"
                  >
                    <div class="w-10">
                      <component
                        :is="item.icon"
                        class="mr-3 flex-shrink-0 h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <span class="flex-1 text-left">
                      {{ item.name }}
                    </span>
                    <ChevronRightIcon
                      class="flex-shrink-0 h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <transition
                    enter-active-class="duration-200 ease-out"
                    enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95"
                  >
                    <DisclosurePanel
                      class="bg-white absolute top-14 lg:top-20 left-2.5 w-full h-screen"
                    >
                      <div class="px-6 py-8 pb-18 overflow-y-auto h-full">
                        <DisclosureButton
                          class="w-full flex items-center space-x-2 mb-6 text-sm uppercase font-semibold text-primary"
                        >
                          <ChevronRightIcon
                            class="h-6 w-6 text-primary -ml-2 transform rotate-180"
                            aria-hidden="true"
                          />
                          <span>Back</span>
                        </DisclosureButton>
                        <DisclosureButton
                          class="w-full"
                          v-for="subItem in item.children"
                          :key="subItem.name"
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
                                <span>{{ v.name }} tect</span>
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
                        </DisclosureButton>
                      </div>
                    </DisclosurePanel>
                  </transition>
                </Disclosure>
              </template>
            </nav>
            <nav
              v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
              class="flex-1"
              aria-label="Sidebar"
            >
              <template v-for="item in company" :key="item.name">
                <div v-if="!item.children" :class="item.mainClass">
                  <NuxtLink
                    @click="openMenu"
                    :to="item.href"
                    class="group cursor-pointer text-white w-full flex items-center hover:underline"
                  >
                    <div class="w-10">
                      <component
                        :is="item.icon"
                        class="mr-3 flex-shrink-0 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {{ item.name }}
                  </NuxtLink>
                </div>
                <Disclosure as="div" v-else v-slot="{ open }">
                  <DisclosureButton
                    :class="item.mainClass"
                    class="group text-white w-full flex items-center hover:underline"
                  >
                    <div class="w-10">
                      <component
                        :is="item.icon"
                        class="mr-3 flex-shrink-0 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <span class="flex-1 text-left">
                      {{ item.name }}
                    </span>
                    <ChevronRightIcon
                      class="flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <transition
                    enter-active-class="duration-200 ease-out"
                    enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95"
                  >
                    <DisclosurePanel
                      class="bg-white absolute top-14 lg:top-20 left-2.5 w-full h-screen"
                    >
                      <div class="px-6 py-8 pb-18 overflow-y-auto h-full">
                        <DisclosureButton
                          class="w-full flex items-center space-x-2 mb-6 text-sm uppercase font-semibold text-primary"
                        >
                          <ChevronRightIcon
                            class="h-6 w-6 text-primary -ml-2 transform rotate-180"
                            aria-hidden="true"
                          />
                          <span>Back</span>
                        </DisclosureButton>
                        <DisclosureButton
                          class="w-full"
                          v-for="subItem in item.children"
                          :key="subItem.name"
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
                        </DisclosureButton>
                      </div>
                    </DisclosurePanel>
                  </transition>
                </Disclosure>
              </template>
            </nav>
          </div>
          <div
            class="font-light mt-auto"
            :class="openTab === 1 ? 'text-primary' : 'text-white'"
          >
            <h3 class="text-xs">Language:</h3>
            <ul class="flex items-center space-x-3 pt-2">
              <li
                v-for="v in language"
                :key="v.title"
                class="text-base hover:underline transition-all cursor-pointer"
              >
                {{ v.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </Popover>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import {
  ChartBarIcon,
  MenuIcon,
  TruckIcon,
  XIcon,
  UserIcon,
  SearchIcon,
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  CogIcon,
  ShoppingCartIcon,
  QuestionMarkCircleIcon,
  NewspaperIcon,
  LocationMarkerIcon,
} from "@heroicons/vue/outline";
import { ChevronRightIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuIcon,
    XIcon,
    UserIcon,
    SearchIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    TruckIcon,
    ChevronRightIcon,
    CogIcon,
    ShoppingCartIcon,
    QuestionMarkCircleIcon,
    NewspaperIcon,
    LocationMarkerIcon,
  },
  data() {
    return {
      menu: false,
      openTab: 1,
      language: [
        {
          title: "ES",
        },
        {
          title: "CA",
        },
        {
          title: "EU",
        },
        {
          title: "GA",
        },
        {
          title: "VA",
        },
        {
          title: "EN",
        },
      ],
      individual: [
        {
          name: "Home",
          icon: HomeIcon,
          mainClass:
            "border-b border-gray-50 text-lg lg:text-2xl font-light py-2.5",
          current: true,
          href: "/",
        },
        {
          name: "Receive",
          icon: UsersIcon,
          mainClass:
            "border-b border-gray-50 text-lg lg:text-2xl font-light py-2.5",
          current: false,
          children: [
            {
              name: "Receive",
              href: "#",
              list: [
                {
                  name: "Localiza tu envío",
                  href: "#",
                  icon: true,
                },
                {
                  name: "Planifica tus entregas",
                  icon: true,
                  href: "#",
                  subList: [
                    {
                      name: "Buzón de vacaciones",
                      href: "#",
                    },
                    {
                      name: "Reenvío postal",
                      href: "#",
                    },
                    {
                      name: "Apartado postal",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Nuestros puntos de entrega y recogida",
                  href: "#",
                  subList: [
                    {
                      name: "Citypaq",
                      href: "#",
                    },
                    {
                      name: "Oficinas de Correos",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Esperando la entrega",
                  href: "#",
                  subList: [
                    {
                      name: "Quiero modificar la entrega",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Recibe muestras gratis en tu buzón",
                  href: "#",
                  icon: true,
                },
                {
                  name: "Tramitación aduanera en la Importación",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Importación en Península y Baleares",
                      href: "#",
                    },
                    {
                      name: "Importación en Canarias",
                      href: "#",
                    },
                    {
                      name: "Importación en Ceuta",
                      href: "#",
                    },
                    {
                      name: "Importación en Melilla",
                      href: "#",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Send",
          icon: TruckIcon,
          mainClass:
            "border-b border-gray-50 text-lg lg:text-2xl font-light py-2.5",
          current: false,
          children: [
            {
              name: "Send",
              href: "#",
              list: [
                {
                  name: "Envíos nacionales",
                  icon: true,
                  href: "#",
                  subList: [
                    {
                      name: "Envíos económicos",
                      href: "#",
                    },
                    {
                      name: "Envíos rápidos",
                      href: "#",
                    },
                    {
                      name: "Paq Frío",
                      href: "#",
                    },
                    {
                      name: "Burofax y cartas",
                      href: "#",
                    },
                    {
                      name: "Paq Maleta",
                      href: "#",
                    },
                    {
                      name: "Envío de bicicletas",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Enviar al extranjero",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Paquetes al extranjero",
                      href: "#",
                    },
                    {
                      name: "Documentos al extranjero",
                      href: "#",
                    },
                    {
                      name: "Zonas internacionales",
                      href: "#",
                    },
                    {
                      name: "Gestión aduanera de exportación",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Sobre y embalajes",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Línea Bosques",
                      href: "#",
                    },
                    {
                      name: "Prefanqueados",
                      href: "#",
                    },
                    {
                      name: "Sobres y embalajes",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Devolver un paquete",
                  href: "#",
                  subList: [
                    {
                      name: "Portal de devoluciones",
                      href: "#",
                    },
                    {
                      name: "Devuelve con Citypaq",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Comprar Sellos",
                  href: "#",
                  icon: true,
                },
              ],
            },
          ],
        },
        {
          name: "Cash and purchases",
          icon: CalendarIcon,
          mainClass:
            "border-b border-gray-50 text-lg lg:text-2xl font-light py-2.5",
          current: false,
          children: [
            {
              name: "Cash and purchases",
              href: "#",
              list: [
                {
                  name: "Envío de dinero",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Giro Internacional",
                      href: "#",
                    },
                    {
                      name: "Western Union",
                      href: "#",
                    },
                    {
                      name: "Giro Nacional",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Lleva el control de tu dinero y tus gastos",
                  href: "#",
                  subList: [
                    {
                      name: "Tarjeta Correos Prepago",
                      href: "#",
                    },
                    {
                      name: "Correos Cash",
                      href: "#",
                    },
                    {
                      name: "Cambio de divisas a domicilio",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Compra en Correos Market",
                  href: "#",
                  icon: true,
                },
                {
                  name: "Disponible en oficinas",
                  href: "#",
                  subList: [
                    {
                      name: "Premios ONCE",
                      href: "#",
                    },
                    {
                      name: "Oferta de luz y gas",
                      href: "#",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Travel, Leisure and Stamp Collecting",
          icon: InboxIcon,
          mainClass:
            "border-b border-gray-50 text-lg lg:text-2xl font-light py-2.5",
          current: false,
          children: [
            {
              name: "Travel, Leisure and Stamp Collecting",
              href: "#",
              list: [
                {
                  name: "Haz el Camino de Santiago con Correos",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Transporte de mochilas",
                      href: "#",
                    },
                    {
                      name: "Envío de maletas",
                      href: "#",
                    },
                    {
                      name: "Consigna en Santiago",
                      href: "#",
                    },
                    {
                      name: "Tarjeta Correos Prepago para el Camino de Santiago",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Entradas y viajes",
                  href: "#",
                  icon: true,
                },
                {
                  name: "Sellos y Filatelia",
                  href: "#",
                  icon: true,
                },
              ],
            },
          ],
        },
        {
          name: "For citizens",
          icon: ChartBarIcon,
          mainClass:
            "border-b border-gray-50 text-lg lg:text-2xl font-light py-2.5",
          current: false,
          children: [
            {
              name: "For citizens",
              href: "#",
              list: [
                {
                  name: "Trámites con la Administración Pública",
                  href: "#",
                  subList: [
                    {
                      name: "Servicios ORVE",
                      href: "#",
                    },
                    {
                      name: "Buzón Digital",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Pago de recibos",
                  href: "#",
                  icon: true,
                },
                {
                  name: "Servicios de la DGT",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Distintivo medioambiental",
                      href: "#",
                    },
                    {
                      name: "Informes de vehículos",
                      href: "#",
                    },
                    {
                      name: "Duplicado permiso circulación",
                      href: "#",
                    },
                    {
                      name: "Cambio de Titularidad",
                      href: "#",
                    },
                    {
                      name: "Notificación de venta de un vehículo",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Tramites de la Agencia Tributaria",
                  href: "#",
                  icon: true,
                },
              ],
            },
          ],
        },
        {
          name: "Tools",
          icon: CogIcon,
          mainClass: "text-sm lg:text-base font-semibold py-3 lg:py-2 mt-7",
          current: false,
          children: [
            {
              name: "Tools",
              href: "#",
              list: [
                {
                  name: "Localizador de envíos",
                  icon: true,
                  href: "#",
                },
                {
                  name: "Oficinas, buzones y Citypaq",
                  icon: true,
                  href: "#",
                },
                {
                  name: "Buscador Códigos Postales",
                  icon: true,
                  href: "#",
                },
                {
                  name: "Formulario online de envíos de oficina",
                  icon: true,
                  href: "#",
                },
                {
                  name: "Gestión de estacionados",
                  icon: true,
                  href: "#",
                },
                {
                  name: "Cotejo",
                  icon: true,
                  href: "#",
                },
                {
                  name: "ADT Postales",
                  icon: true,
                  href: "#",
                },
              ],
            },
          ],
        },
        {
          name: "Rates",
          mainClass: "text-sm lg:text-base font-semibold py-3 lg:py-2",
          icon: ChartBarIcon,
          current: false,
        },
        {
          name: "Latest news",
          icon: NewspaperIcon,
          mainClass: "text-sm lg:text-base font-semibold py-3 lg:py-2",
          current: false,
        },
        {
          name: "Shop",
          icon: ShoppingCartIcon,
          mainClass: "text-sm lg:text-base font-semibold py-3 lg:py-2",
          current: false,
        },
        {
          name: "Help",
          icon: QuestionMarkCircleIcon,
          mainClass: "text-sm lg:text-base font-semibold py-3 lg:py-2",
          current: false,
          children: [
            {
              name: "Help",
              href: "#",
              list: [
                {
                  name: "Enviar",
                  href: "#",
                  subList: [
                    {
                      name: "Cómo preparar el envío",
                      href: "#",
                    },
                    {
                      name: "Cómo funciona Mi Oficina",
                      href: "#",
                    },
                    {
                      name: "Dimensiones y pesos",
                      href: "#",
                    },
                    {
                      name: "Tratamiento de tus datos",
                      href: "#",
                    },
                    {
                      name: "Sellos y franqueo",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Recibir",
                  href: "#",
                  subList: [
                    {
                      name: "Recoger envío",
                      href: "#",
                    },
                    {
                      name: "Código de envío",
                      href: "#",
                    },
                    {
                      name: "Aviso de llegada",
                      href: "#",
                    },
                    {
                      name: "Envíos estacionados",
                      href: "#",
                    },
                    {
                      name: "Incidencias",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Otras consultas",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Correos ID",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Información aduanera",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "DUA Importación",
                      href: "#",
                    },
                    {
                      name: "DUA Exportación",
                      href: "#",
                    },
                    {
                      name: "Brexit, importación y exportación con el Reino Unido",
                      href: "#",
                    },
                    {
                      name: "Nuevo Proceso de Seguridad de Importación",
                      href: "#",
                    },
                    {
                      name: "IVA de importación en el Comercio Electrónico",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Coberturas y garantías",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Nacionales",
                      href: "#",
                    },
                    {
                      name: "Internacionales",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Tarifas",
                  href: "#",
                  icon: true,
                },
                {
                  name: "Tu consulta/ tu reclamación",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Tratamiento de las incidencias/reclamaciones/consultas",
                      href: "#",
                    },
                    {
                      name: "Da de alta tu incidencia/ reclamación",
                      href: "#",
                    },
                    {
                      name: "Modifica o amplia información",
                      href: "#",
                    },
                    {
                      name: "Conoce el estado de tu incidencia",
                      href: "#",
                    },
                    {
                      name: "Solicitud de información",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Seguridad de la información",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Phishing",
                      href: "#",
                    },
                    {
                      name: "Qué hace Correos por tu seguridad",
                      href: "#",
                    },
                    {
                      name: "Decálogo de seguridad",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Especial Covid-19",
                  href: "#",
                  subList: [
                    {
                      name: "Admisión internacional de correspondencia y paquetería",
                      href: "#",
                    },
                    {
                      name: "Correos una empresa segura frente al COVID-19",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Especial Ucrania/Rusia",
                  href: "#",
                  icon: true,
                },
              ],
            },
          ],
        },
      ],
      company: [
        {
          name: "Home",
          icon: HomeIcon,
          mainClass:
            "border-b border-gray-50 text-lg lg:text-2xl font-light py-2.5",
          current: true,
          href: "#",
        },
        {
          name: "Send",
          icon: TruckIcon,
          mainClass:
            "border-b border-gray-50 text-lg lg:text-2xl font-light py-2.5",
          current: false,
          children: [
            { name: "Overview", href: "#" },
            { name: "Members", href: "#" },
            { name: "Calendar", href: "#" },
            { name: "Settings", href: "#" },
          ],
        },
        {
          name: "e-Commerce",
          icon: FolderIcon,
          mainClass:
            "border-b border-gray-50 text-lg lg:text-2xl font-light py-2.5",
          current: false,
          children: [{ name: "Overview", href: "#" }],
        },
        {
          name: "Marketing",
          icon: CalendarIcon,
          mainClass:
            "border-b border-gray-50 text-lg lg:text-2xl font-light py-2.5",
          current: false,
          children: [{ name: "Overview", href: "#" }],
        },
        {
          name: "Physical and digital communications",
          icon: InboxIcon,
          mainClass:
            "border-b border-gray-50 text-lg lg:text-2xl font-light py-2.5",
          current: false,
          children: [{ name: "Overview", href: "#" }],
        },
        {
          name: "For your business",
          icon: ChartBarIcon,
          mainClass:
            "border-b border-gray-50 text-lg lg:text-2xl font-light py-2.5",
          current: false,
          children: [{ name: "Overview", href: "#" }],
        },
        {
          name: "Tools",
          icon: CogIcon,
          mainClass: "text-sm lg:text-base font-semibold py-3 lg:py-2 mt-7",
          current: false,
        },
        {
          name: "Latest news",
          icon: NewspaperIcon,
          mainClass: "text-sm lg:text-base font-semibold py-3 lg:py-2",
          current: false,
          children: [{ name: "Overview", href: "#" }],
        },
        {
          name: "Shop",
          icon: ShoppingCartIcon,
          mainClass: "text-sm lg:text-base font-semibold py-3 lg:py-2",
          current: false,
        },
        {
          name: "Help",
          icon: QuestionMarkCircleIcon,
          mainClass: "text-sm lg:text-base font-semibold py-3 lg:py-2",
          current: false,
          children: [
            {
              name: "Help",
              href: "#",
              list: [
                {
                  name: "Enviar",
                  href: "#",
                  subList: [
                    {
                      name: "Cómo preparar el envío",
                      href: "#",
                    },
                    {
                      name: "Cómo funciona Mi Oficina",
                      href: "#",
                    },
                    {
                      name: "Dimensiones y pesos",
                      href: "#",
                    },
                    {
                      name: "Tratamiento de tus datos",
                      href: "#",
                    },
                    {
                      name: "Sellos y franqueo",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Recibir",
                  href: "#",
                  subList: [
                    {
                      name: "Recoger envío",
                      href: "#",
                    },
                    {
                      name: "Código de envío",
                      href: "#",
                    },
                    {
                      name: "Aviso de llegada",
                      href: "#",
                    },
                    {
                      name: "Envíos estacionados",
                      href: "#",
                    },
                    {
                      name: "Incidencias",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Otras consultas",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Correos ID",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Información aduanera",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "DUA Importación",
                      href: "#",
                    },
                    {
                      name: "DUA Exportación",
                      href: "#",
                    },
                    {
                      name: "Brexit, importación y exportación con el Reino Unido",
                      href: "#",
                    },
                    {
                      name: "Nuevo Proceso de Seguridad de Importación",
                      href: "#",
                    },
                    {
                      name: "IVA de importación en el Comercio Electrónico",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Coberturas y garantías",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Nacionales",
                      href: "#",
                    },
                    {
                      name: "Internacionales",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Tarifas",
                  href: "#",
                  icon: true,
                },
                {
                  name: "Tu consulta/ tu reclamación",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Tratamiento de las incidencias/reclamaciones/consultas",
                      href: "#",
                    },
                    {
                      name: "Da de alta tu incidencia/ reclamación",
                      href: "#",
                    },
                    {
                      name: "Modifica o amplia información",
                      href: "#",
                    },
                    {
                      name: "Conoce el estado de tu incidencia",
                      href: "#",
                    },
                    {
                      name: "Solicitud de información",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Seguridad de la información",
                  href: "#",
                  icon: true,
                  subList: [
                    {
                      name: "Phishing",
                      href: "#",
                    },
                    {
                      name: "Qué hace Correos por tu seguridad",
                      href: "#",
                    },
                    {
                      name: "Decálogo de seguridad",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Especial Covid-19",
                  href: "#",
                  subList: [
                    {
                      name: "Admisión internacional de correspondencia y paquetería",
                      href: "#",
                    },
                    {
                      name: "Correos una empresa segura frente al COVID-19",
                      href: "#",
                    },
                  ],
                },
                {
                  name: "Especial Ucrania/Rusia",
                  href: "#",
                  icon: true,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    openMenu() {
      this.menu = !this.menu;
      console.log(this.menu, "menu");
    },
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
<style>
a.router-link-exact-active {
  @apply font-semibold border-primary !important;
}
</style>
