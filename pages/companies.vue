<template>
  <div>
    <Title>Correos Frío</Title>
    <meta name="description" content="" />
    <div
      class="bg-gray-200 mt-12 lg:mt-20 relative grid lg:grid-cols-2 md:grid-cols-5 grid-cols-1"
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
        class="md:py-16 py-6 pb-12 px-6 md:px-12 lg:pb-24 xl:px-0 max-w-xl mx-auto w-full md:col-span-3 lg:col-span-1"
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
      class="max-w-7xl mx-auto w-full px-5 xl:px-0 pb-20 pt-8 grid lg:grid-cols-4 md:grid-cols-2 gap-2"
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
        class="max-w-7xl mx-auto w-full px-6 xl:px-0 lg:py-10 py-6 grid md:grid-cols-2 grid-cols-1 lg:gap-8 gap-5"
      >
        <div
          class="bg-white rounded-lg lg:px-6 px-4 border border-gray-100 shadow-sm flex lg:flex-row md:flex-col flex-row lg:items-center md:items-start items-center lg:space-x-4 lg:py-8 py-4"
          v-for="i in foodCard"
          :key="i"
        >
          <div class="">
            <div class="lg:w-32 md:w-48 w-18">
              <img :src="i.src" class="w-full" alt="" />
            </div>
          </div>
          <div
            class="lg:pb-12 md:pb-16 md:pt-4 lg:pt-0 pl-5 md:pl-0 max-w-xs text-ellipsis overflow-hidden whitespace-nowrap md:whitespace-normal md:max-w-full"
          >
            <h1
              class="text-gray-300 font-semibold lg:text-2xl md:text-xl text-base md:pb-2 pb-4"
            >
              {{ i.title }}
            </h1>
            <p
              class="text-gray-300 lg:text-base md:text-sm text-xs font-light md:font-normal"
            >
              {{ i.text }}
            </p>
          </div>
          <div class="md:hidden">
            <div class="flex items-center justify-end w-10 pr-2">
              <ChevronRightIcon class="w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-20 lg:py-0 relative overflow-hidden">
      <div
        class="z-30 lg:absolute w-full h-full top-0 left-0 flex items-center"
      >
        <div
          class="max-w-7xl mx-auto w-full px-6 xl:px-0 flex items-center lg:-mt-0.5"
        >
          <div
            class="bg-white rounded-lg border border-gray-100 lg:-mt-24 md:p-10 p-4 shadow-sm lg:px-20 md:px-16 max-w-3xl ml-auto"
          >
            <h1
              class="lg:text-3xl text-3xl pb-4 lg:leading-[48px] text-gray-300 font-light tracking-wide"
            >
              Pharmaceutical and Health
            </h1>
            <p
              class="border-t border-secondary pt-4 pb-3 lg:text-lg text-base text-gray-300 font-light"
            >
              The urgent temperature-controlled transport solution for the
              pharmaceutical and healthcare industry. We offer maximum
              reliability, and guarantee the safety and security conditions of
              your products. Correos aims to be the ideal logistics partner for
              the healthcare sector.
            </p>
          </div>
        </div>
      </div>
      <div class="lg:grid grid-cols-2 items-end py-20 w-full h-full hidden">
        <img
          src="@/assets/images/med.jpg"
          alt=""
          class="h-96 w-full rounded-lg"
        />
        <div class="lg:flex items-end justify-end hidden">
          <img src="@/assets/images/deco_03.svg" alt="" class="-mr-30" />
        </div>
      </div>
    </div>
    <div class="bg-gray-200">
      <SpecificSolution :list="list1" />
    </div>
    <div class="py-20 lg:py-0 relative overflow-hidden">
      <div
        class="z-30 lg:absolute w-full h-full -top-1.5 left-0 flex items-center"
      >
        <div
          class="max-w-7xl mx-auto w-full px-6 xl:px-0 flex items-center lg:-mt-12"
        >
          <div
            class="bg-white rounded-lg border border-gray-100 lg:-mt-24 md:p-10 p-4 shadow-sm lg:px-32 md:px-16 max-w-4xl"
          >
            <h1
              class="lg:text-3xl text-3xl pb-4 lg:leading-[48px] text-gray-300 font-light tracking-wide"
            >
              Food
            </h1>
            <p
              class="border-t border-secondary pt-4 pb-3 lg:text-lg text-base text-gray-300 font-light"
            >
              We guarantee the quality of your fresh products thanks to the
              transportation solutions Correos Frío offers your business.
            </p>
          </div>
        </div>
      </div>
      <div
        class="lg:grid grid-cols-2 items-end py-20 pr-6 w-full h-full hidden"
      >
        <div class="lg:flex items-end hidden">
          <img src="@/assets/images/deco_03.svg" alt="" class="-ml-30" />
        </div>
        <img
          src="@/assets/images/store.jpg"
          alt=""
          class="h-96 w-full rounded-lg"
        />
      </div>
    </div>
    <div class="bg-gray-200">
      <SpecificSolution :list="list2" />
    </div>
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
          src="@/assets/images/enviar.svg"
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
import SpecificSolution from "../components/SpecificSolution";
import { ChevronRightIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Button,
    ChevronRightIcon,
    SpecificSolution,
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
      list1: [
        {
          src: "assets/images/cold_chain.svg",
          title: "Cold Chain",
          text: "Our leadership in logistics and the latest technology on the market are combined in the Coldchain service. Designed especially for laboratories and distributors who need to deliver their products to hospitals, clinics, and medical centres:",
          list: [
            { text: "We offer an urgent transportation solution (B2B)." },
            {
              text: "Delivery of pharmaceutical products: medicines, vaccines and samples.",
            },
            { text: "We provide sensorised insulated shipping boxes." },
            {
              text: "We monitor temperature, humidity and impacts on your deliveries in real time.",
            },
          ],
        },
        {
          src: "assets/images/farmacia_hospitalaria.svg",
          title: "Hospital Pharmacy",
          text: "Proximity, safety and guarantee are combined in our Hospital Pharmacy delivery service. Especially designed for hospitals and clinics that need to deliver their medications and healthcare products to patients at home:",
          list: [
            {
              text: "Collection from the Hospital and delivery to the patient’s home on the same day.",
            },
            {
              text: "Delivery of medications and products from the hospital pharmacy.",
            },
            {
              text: "We use insulated shipping boxes and/or insulated vehicles for their transport.",
            },
            { text: "Technological platform for managing your deliveries." },
          ],
        },
      ],
      list2: [
        {
          src: "assets/images/cold_chain.svg",
          title: "Wholesale Distribution",
          text: "Focus on increasing your sales and growing your business. Correos will take care of your logistics:",
          list: [
            {
              text: "We pick up your products at the wholesale market or your warehouse.",
            },
            {
              text: "We deliver to retail shops, collectives and hospitality establishments.",
            },
            { text: "Home delivery of perishable products." },
            {
              text: "We offer a fleet of insulated and refrigerated vehicles.",
            },
          ],
        },
        {
          src: "assets/images/farmacia_hospitalaria.svg",
          title: "Last-Mile Services",
          text: "Your fresh products arrive in perfect condition at your customers’ homes, with the last-mile delivery service designed to ensure fast, safe, refrigerated delivery:",
          list: [
            { text: "We collect items and deliver them the same day." },
            { text: "The ideal solution for retail shops and food markets." },
            { text: "Home delivery of perishable products." },
            { text: "We use insulated shipping boxes and special vehicles." },
          ],
        },
        {
          src: "assets/images/farmacia_hospitalaria.svg",
          title: "E-commerce and Gourmet",
          text: "If you sell online and need a temperature-controlled transport solution that guarantees the quality of your products, wherever your customer may be, this is the service you’re looking for:",
          list: [
            { text: "We offer urgent deliveries: Where and when you want." },
            {
              text: "We deliver your product anywhere in Spain, mainland Portugal, and Andorra.",
            },
            {
              text: "We use insulated shipping boxes to conserve and protect your products.",
            },
            { text: "We have different types of integrated technology." },
          ],
        },
      ],
    };
  },
};
</script>
