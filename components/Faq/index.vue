<template>
  <div class="space-y-6">
    <Disclosure
      as="div"
      class="focus:outline-none"
      v-for="v in faq"
      :key="v.title"
      v-slot="{ open }"
    >
      <h3
        :class="[
          open ? 'border-1.5 shadow-2xl' : 'border hover:shadow-sm',
          'border rounded-lg border-blue-100 bg-white px-6 focus:outline-none',
        ]"
      >
        <DisclosureButton
          class="focus:outline-none group relative w-full py-6 flex justify-between items-center text-left"
        >
          <span class="text-sm md:taxt-base hover:underline text-primary">
            {{ v.title }}
          </span>
          <span class="ml-6 flex items-center">
            <ChevronDownIcon
              :class="[
                open ? '-rotate-180' : 'rotate-0',
                'h-5 w-5 transform transition-all text-primary',
              ]"
              aria-hidden="true"
            />
          </span>
        </DisclosureButton>
        <DisclosurePanel
          as="div"
          class="pb-6 md:pr-10 pr-5 text-sm md:taxt-base font-light text-gray-300 transform transition-all"
        >
          {{ v.text }}
        </DisclosurePanel>
      </h3>
    </Disclosure>
  </div>
</template>
<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  setup() {
    const faq = [
      {
        title: "¿Qué es considerado un envío de publicidad?",
        text: "Se consideran un envío de publicidad o publicorreo aquel envío postal publicitario, en la que a través de una comunicación común a todos los receptores, se den a conocer los beneficios de un producto o servicio.",
      },
      {
        title: "¿Puedo personalizar algún campo de la comunicación?",
        text: "Los envíos deberán contener el mismo mensaje, aunque se podrá personalizar el nombre, la dirección y cualquier número o código de identificación que se asignes a tus destinatarios.",
      },
      {
        title: "¿Qué requisitos tienen estos envíos?",
        text: "Estos envíos deben depositarse en remesas que deben tener como mínimo 100 envíos, con un mensaje similar. Circulan exclusivamente con carácter ordinario y se debe incluir el franqueo correspondiente.",
      },
    ];
    return {
      faq,
    };
  },
};
</script>
