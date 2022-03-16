<template>
  <div>
    <div
      class="bg-gray-200 relative grid lg:grid-cols-2 md:grid-cols-5 grid-cols-1"
    >
      <div
        class="relative bg-center bg-cover bg-no-repeat md:h-full h-44 md:col-span-2 lg:col-span-1"
        style="background: url('assets/images/foto_resultados.jpg')"
      >
        <svg
          class="w-full absolute bottom-0 md:hidden"
          viewBox="0 0 100 35"
          style="pointer-events: none"
        >
          <path
            class="path sc-correos-cdk-simple-header"
            d="M00 30 Q 50 40 100 30 L100 60 L0 60 Z"
            fill="#F3F2F2"
          ></path>
        </svg>
      </div>
      <div
        class="md:py-16 py-6 px-6 md:px-12 xl:px-0 max-w-xl mx-auto w-full md:col-span-3 lg:col-span-1"
      >
        <h3 class="text-gray-300 font-bold lg:text-sm text-xs">
          Controlled temperature transport solutions
        </h3>
        <h1
          class="text-gray-300 py-3 font-light md:text-3xl text-2xl tracking-wide"
        >
          Correos Frío
        </h1>
        <p class="lg:text-base text-sm font-extralight max-w-lg lg:pr-10 pb-8">
          Our new transport service in which we control the cold chain of your
          posted item and ensure that the contents arrive in perfect condition.
        </p>
        <Button value="Request info" />
      </div>
      <svg
        class="w-full absolute bottom-0"
        viewBox="0 0 100 35"
        style="pointer-events: none"
      >
        <path
          class="path sc-correos-cdk-simple-header"
          d="M00 30 Q 50 40 100 30 L100 60 L0 60 Z"
          fill="#fff"
        ></path>
      </svg>
    </div>
    <div
      class="max-w-7xl mx-auto w-full px-6 xl:px-0 pb-20 pt-8 grid lg:grid-cols-4 md:grid-cols-2 gap-2"
    >
      <div class="flex" v-for="v in data" :key="v.title">
        <div class="pt-3 pr-3">
          <div class="w-8">
            <img src="@/assets/images/plus.png" class="w-full" alt="" />
          </div>
        </div>
        <div>
          <h1 class="text-gray-300 py-3 md:text-2xl text-xl">
            {{ v.title }}
          </h1>
          <p class="lg:text-base text-sm font-extralight">
            {{ v.desc }}
          </p>
        </div>
      </div>
    </div>
    <div class="bg-primary">
      <div
        class="max-w-7xl mx-auto w-full px-6 xl:px-0 py-10 grid md:grid-cols-2 grid-cols-1 gap-8"
      >
        <div
          class="bg-white rounded-lg px-6 border border-gray-100 shadow-sm flex items-center space-x-4 py-8"
          v-for="i in foodCard"
          :key="i"
        >
          <div class="">
            <div class="w-32">
              <img :src="i.src" class="w-full" alt="" />
            </div>
          </div>
          <div class="pb-12">
            <h1 class="text-gray-300 font-semibold text-2xl pb-2">
              {{ i.title }}
            </h1>
            <p class="text-gray-300 text-base">
              {{ i.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-200 p-2"></div>
    <div
      class="max-w-7xl mx-auto w-full px-6 xl:px-0 md:py-22 md:pb-32 pt-10 pb-20 grid lg:grid-cols-3 md:grid-cols-5 grid-cols-1 lg:gap-20 md:gap-8 gap-2 lg:pr-10"
    >
      <div class="lg:col-span-1 md:col-span-2 p-10 md:p-0 md:pl-5">
        <img src="@/assets/images/correos_frío.svg" class="w-full" alt="" />
      </div>
      <div class="lg:col-span-2 md:col-span-3">
        <h1
          class="lg:text-3xl text-2xl pb-4 lg:leading-[48px] text-gray-300 font-medium tracking-wide"
        >
          How to contract Correos Frío?
        </h1>
        <p
          class="pb-3 lg:text-lg text-base text-gray-300 font-light md:pr-8 lg:pr-0"
        >
          It’s easy to contact Correos Frío and ask about our services with no
          commitment on your part. Just fill in the form that appears when you
          click “Request Info”. We will receive your request and a specialist
          advisor will contact you to offer you the best solution for your
          business.
        </p>
        <div class="md:flex items-center lg:space-x-5 md:space-x-4">
          <Button value="request info" width="w-full md:w-auto" />
        </div>
      </div>
    </div>
    <div class="bg-gray-200">
      <div
        class="max-w-7xl mx-auto w-full px-6 md:px-10 xl:px-0 md:py-18 py-12 grid lg:grid-cols-3 md:grid-cols-5 grid-cols-1 lg:gap-20 md:gap-8 gap-2 lg:pr-10"
      >
        <div class="lg:col-span-1 md:col-span-2 p-10 md:p-0 md:pl-5 md:order-1">
          <img
            src="@/assets/images/correos_frio_white.svg"
            class="w-full"
            alt=""
          />
        </div>
        <div class="lg:col-span-2 md:col-span-3 md:order-0">
          <h1
            class="lg:text-3xl text-2xl pb-2 text-gray-300 font-medium tracking-wide"
          >
            Why Correos Frío?
          </h1>
          <p class="pb-3 lg:text-lg text-base text-gray-300 font-light">
            We offer a personalised solution to help you meet your business
            goals. We also contribute to managing traffic and thus reducing
            carbon emissions in cities.
          </p>
        </div>
      </div>
    </div>
    <div
      class="max-w-7xl mx-auto w-full px-6 xl:px-0 md:py-22 py-12 grid md:grid-cols-5 grid-cols-1 lg:gap-20 gap-2 lg:pr-10"
    >
      <div class="md:col-span-2 p-10 lg:p-0">
        <img
          src="@/assets/images/enviar_caja isotérmica.svg"
          class="w-full"
          alt=""
        />
      </div>
      <div class="md:col-span-3">
        <h1
          class="lg:text-3xl text-3xl pb-4 lg:leading-[48px] text-gray-300 font-light tracking-wide"
        >
          And if you need to send a one-off delivery, you can also do it using
          Paq Frío.
        </h1>
        <p
          class="border-t border-secondary pt-4 pb-3 lg:text-lg text-base text-gray-300 font-light"
        >
          You don’t need to own a warehouse or order wholesale goods deliveries!
          If you need to send a one-off delivery without breaking the cold
          chain, Correos has the answer.
        </p>
        <div class="md:flex items-center lg:space-x-5 md:space-x-4">
          <Button value="Send a delivery" />
          <router-link
            to=""
            class="mt-3 md:mt-0 text-primary font-bold lg:text-base text-sm hover:underline flex items-center space-x-4"
          >
            <span>MORE INFO ON PAQ FRÍO</span>
            <ChevronRightIcon class="w-5 text-primary" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../components/Button";
import { ChevronRightIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Button,
    ChevronRightIcon,
  },
  data() {
    return {
      data: [
        {
          title: "Area",
          desc: "Correos guarantees maximum coverage, offering both last-mile transport solutions and distribution solutions throughout Spain. We also deliver your items to Portugal and Andorra.",
        },
        {
          title: "Insulated shipping boxes",
          desc: "We have insulated shipping boxes with sensors to ensure maximum reliability and guarantee cold chain monitoring. Our boxes also permit the use of different temperature ranges to adapt the transport to the needs of your product.",
        },
        {
          title: "Real-time monitoring",
          desc: "We monitor temperature, humidity and possible impacts in real time, from when the item is collected to its delivery, thanks to IoT technology.",
        },
        {
          title: "Specialised vehicle fleet",
          desc: "Our fleet of insulated and refrigerated vehicles is especially designed to guarantee control and maintenance of the cold chain for your deliveries.",
        },
      ],
      foodCard: [
        {
          src: "assets/images/health.svg",
          title: "Pharmaceutical and Health",
          text: "Correos offers new cold transport solutions for the delivery of pharmaceutical products, vaccines, cosmetics and healthcare items, guaranteeing their integrity and security.",
        },
        {
          src: "assets/images/alimentacion.svg",
          title: "Food",
          text: "We transport your fresh products in a controlled temperature to guarantee their quality from the point of origin to the destination.",
        },
      ],
    };
  },
};
</script>
