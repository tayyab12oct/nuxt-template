<template>
  <div>
    <div class="bg-secondary relative lg:pt-10">
      <div
        class="max-w-7xl mx-auto text-primary font-light hidden lg:block pt-2"
      >
        <router-link to="" class="underline">Companies</router-link> /
        <router-link to="" class="underline">Marketing</router-link> /
        <router-link to="" class="underline"
          >Communicate effectively with your customers</router-link
        >
        / <strong class="font-semibold">Mail promotion</strong>
      </div>
      <div class="max-w-5xl mx-auto py-12 px-6 lg:py-16 lg:px-6">
        <div class="flex flex-col justify-center items-center space-y-1">
          <img src="@/assets/images/mailing.svg" class="md:w-26 w-22" alt="" />
          <h1
            class="text-gray-300 font-medium pb-8 md:text-3xl text-2xl tracking-wide"
          >
            Publicorreo
          </h1>
        </div>
        <div
          class="border-t border-yellow-100 py-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-y-6 gap-3"
        >
          <div
            class="flex items-start space-x-4"
            v-for="v in data"
            :key="v.title"
          >
            <div><CheckIcon class="w-5 mt-0.5" /></div>
            <p class="lg:text-lg text-sm text-gray-300">
              <strong>{{ v.title }}:</strong>
              <span class="font-light pl-0.5">
                {{ v.text }}
              </span>
            </p>
          </div>
        </div>
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
    <div class="max-w-7xl mx-auto px-6 xl:px-0 md:py-10 py-6 space-y-8">
      <div
        class="border border-gray-900 rounded-lg grid lg:grid-cols-2 md:grid-cols-12 grid-cols-1 lg:gap-10 gap-2 overflow-hidden lg:pr-10"
        v-for="v in services"
        :key="v.title"
      >
        <div
          v-if="0"
          class="md:h-full h-38 border w-full overflow-hidden md:col-span-5 lg:col-span-1 bg-cover bg-no-repeat bg-center"
          :style="{ background: url(`${v.src}`) }"
        ></div>
        <div class="md:h-full h-38 overflow-hidden md:col-span-5 lg:col-span-1">
          <img
            :src="v.src"
            class="w-full md:h-full md:w-auto -mt-10 md:mt-0"
            alt=""
          />
        </div>
        <div
          class="lg:p-10 lg:px-16 md:pt-12 md:p-6 p-4 md:col-span-7 lg:col-span-1"
        >
          <h1 class="text-gray-300 font-bold pb-2 lg:text-2xl text-lg">
            {{ v.title }}
          </h1>
          <p class="lg:text-lg text-base text-gray-300 pb-3">
            {{ v.desc }}
          </p>
          <ul class="border-t border-gray-100 pt-2 pb-6 space-y-1.5">
            <li
              v-for="i in v.list"
              :key="i"
              class="flex md:space-x-3 space-x-2"
            >
              <div><CheckIcon class="w-5 mt-0.5 text-primary" /></div>
              <p class="lg:text-base text-sm text-gray-300 font-light">
                {{ i.text }}
              </p>
            </li>
          </ul>
          <div v-if="v.price">
            <p class="text-sm text-gray-300 font-bold">From</p>
            <h2 class="md:text-3xl text-2xl font-bold text-gray-300">
              €{{ v.price }}
            </h2>
          </div>
          <button
            class="my-6 text-primary font-bold lg:text-base text-sm hover:underline flex items-center space-x-4"
          >
            <span>MORE INFO</span> <ChevronRightIcon class="w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
    <div class="bg-gray-200">
      <div class="max-w-4xl mx-auto py-12 px-6 lg:py-16 lg:px-4">
        <h1 class="text-gray-300 font-bold pb-5 text-2xl">
          Frequently asked questions
        </h1>
        <Faq />
      </div>
    </div>
  </div>
</template>
<script>
import Faq from "../components/Faq";
import { CheckIcon, ChevronRightIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Faq,
    CheckIcon,
    ChevronRightIcon,
  },
  data() {
    return {
      data: [
        {
          title: "Effective",
          text: "secure your current customers’ loyalty and acquire new ones by promoting your business in a simple, straightforward manner.",
        },
        {
          title: "Convenient",
          text: "drop off your previously prepared shipment at any one of our branches, with or without a contract with Correos.",
        },
        {
          title: "Safe",
          text: "we take charge of each and every communication, with all the Correos guarantees.",
        },
      ],
      services: [
        {
          src: "assets/images/Publicorreo.jpeg",
          title: "Optimum Publicorreo",
          desc: "Less is more, less complicated and more effective.",
          list: [
            {
              text: "Flexible: distribution of direct mail promotions in small formats and of a suitable size and weight to be handled automatically and delivered into mailboxes.",
            },
            {
              text: "Personalised: the shipments must contain the same message, although the name, address and any ID number or code can be personalised.",
            },
            {
              text: "Effective: acquire new customers and showcase your business or company in a simple, straightforward manner.",
            },
            {
              text: "Convenient: drop off your previously prepared shipment at any Correos branch, with or without a contract with Correos.",
            },
            {
              text: "Flexible: national shipments of at least 100 items per batch weighing up to 800 g.",
            },
            {
              text: "Fast: delivery within 2 - 4 calendar days (in 90% of cases).",
            },
          ],
        },
        {
          src: "assets/images/Publicorreo-plus.jpeg",
          title: "Publicorreo Plus",
          desc: "Capitalise on your campaigns and promote your business with personalised shipments.",
          list: [
            {
              text: "Agile: distribution of direct mail promotions in small formats and of a suitable size and weight to be handled automatically and delivered into the recipient’s postbox.",
            },
            {
              text: "Effective: we carry out customer acquisition and loyalty actions which will allow you to reach all your customers via postal mail promotion, email and SMS.",
            },
            {
              text: "Practical: we send your communications to acquire new customers and monitor the campaign and returned mail.",
            },
            {
              text: "Convenient: drop off your previously prepared shipment at any Correos Post Office, regardless of whether you're a Customer with a contract.",
            },
            {
              text: "Flexible: solutions adapted to your needs, from 1,000 to 10,000 shipments per campaign, with a maximum weight of 100 g.",
            },
            {
              text: "Fast: delivery within 2 - 4 calendar days (in 90% of cases).",
            },
          ],
          price: "388",
        },
        {
          src: "assets/images/Publicorreo-premium.jpg",
          title: "Publicorreo premium",
          desc: "Only your imagination sets the limit.",
          list: [
            {
              text: "Creative: greater flexibility in terms of format, colour and weight.",
            },
            {
              text: "Original: ideal for sending samples, invitations and special promotional gifts.",
            },
            {
              text: "Impactful: generates more emotion and leaves an impression on the customer, increasing their interaction with your brand.",
            },
            {
              text: "Convenient: drop off your previously prepared shipment at any Correos branch, with or without a contract with Correos.",
            },
            {
              text: "Flexible: national shipments of at least 100 items per batch weighing up to 2 kg.",
            },
            {
              text: "Fast: delivery within 2 - 4 calendar days.",
            },
          ],
        },
      ],
    };
  },
};
</script>
