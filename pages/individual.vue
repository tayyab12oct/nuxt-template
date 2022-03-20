<template>
  <div class="overflow-x-hidden">
    <Title>Welcome to Correos.es - The Online Portal of Correos </Title>
    <meta
      name="description"
      content="Localiza tu envío, una oficina o cualquier código postal. Información sobre todos nuestros productos y servicios. Contratación online. "
    />
    <div
      class="bg-white border-0 mt-12 lg:mt-20 relative grid lg:grid-cols-2 md:grid-cols-5 grid-cols-1"
    >
      <div
        class="relative bg-center bg-cover bg-no-repeat md:h-full h-38 md:col-span-2 lg:col-span-1"
        style="background: url('assets/images/CFrio.jpg')"
      >
        <svg
          class="w-full absolute bottom-0 md:hidden"
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
        class="relative md:py-16 lg:py-22 py-8 px-14 md:px-12 xl:px-0 max-w-xl mx-auto w-full md:col-span-3 lg:col-span-1"
      >
        <h3 class="text-gray-300 font-bold lg:text-sm text-xs">Individuals</h3>
        <h1
          class="text-gray-300 py-3 font-light md:text-3xl text-2xl tracking-wide"
        >
          Correos Frío
        </h1>
        <p class="lg:text-base text-sm font-extralight md:pb-8 pb-5">
          Refrigerated deliveries, guaranteed.
        </p>
        <Button value="See more" />
        <img
          src="@/assets/images/deco_triangles.svg"
          alt=""
          class="absolute top-22 -right-8 hidden lg:block"
        />
      </div>
      <img
        src="@/assets/images/deco_bars.svg"
        alt=""
        class="absolute -bottom-10 -right-24 z-10 hidden lg:block"
      />
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
    <div class="md:-mt-6 pt-5 md:pt-0 relative px-6 xl:px-0">
      <TrackOrder />
    </div>
    <div
      class="max-w-7xl mx-auto w-full px-6 lg:py-10 xl:px-0 md:pt-8 pb-6 pt-4"
    >
      <h1 class="text-gray-300 lg:text-4xl text-2xl lg:py-10 pb-10">
        We want to offer you the services your business needs
      </h1>
      <p
        class="text-gray-300 lg:text-lg text-base font-light tracking-[-0.005em] pb-10"
      >
        Correos has the products and services your business needs: E-commerce
        solutions, package deliveries, logistics, marketing and communications,
        and much more. <br />
        No matter how big or small your company, we know we can help you.
      </p>

      <div
        class="grid lg:grid-cols-2 md:grid-cols-5 grid-cols-1 gap-8 items-start lg:max-w-6xl max-w-2xl lg:px-7 md:px-4 mx-auto"
      >
        <div
          class="lg:px-6 px-14 md:p-0 flex justify-end md:col-span-2 lg:col-span-1 md:order-1"
        >
          <img
            src="@/assets/images/deberiás_saber.svg"
            alt=""
            class="max-w-sm w-full"
          />
        </div>
        <div class="space-y-5 md:col-span-3 lg:col-span-1 md:order-0">
          <p class="text-gray-300 lg:text-lg text-base font-light">
            Please leave your details and we will contact you as soon as
            possible.
          </p>
          <Input
            v-for="v in fields"
            :key="v"
            :label="v.label"
            :type="v.type"
            :id="v.id"
            mainClass="bg-gray-200"
            :placeholder="v.label"
          />
          <Select />
          <div class="pb-7">
            <Checkbox
              id="test"
              text="I have read and accept the"
              linkText="Data Protection Policy."
            />
          </div>
          <hr class="border-gray-900" />
          <OfferPromotion />
          <Button
            value="Enviar"
            mainClass="bg-gray-200 text-gray-300 border border-gray-900 lg:text-base text-sm uppercase font-bold md;py-4 py-3 lg:px-8 px-6 text-opacity-50"
            width="md:w-auto w-full"
          />
        </div>
      </div>
    </div>
    <div class="py-10 lg:py-0 relative overflow-hidden">
      <div
        class="z-30 lg:absolute w-full h-full top-0 left-0 flex items-center"
      >
        <div
          class="max-w-7xl mx-auto w-full px-6 xl:px-0 h-full lg:pt-10 flex items-start"
        >
          <div
            class="bg-white rounded-lg border border-gray-100 md:p-10 p-4 shadow-sm lg:px-20 md:pb-12 md:px-16 max-w-3xl w-full ml-auto"
          >
            <h1
              class="lg:text-3xl text-3xl pb-4 lg:leading-[48px] text-gray-300 font-light tracking-wide"
            >
              Attention entrepreneurs!
            </h1>
            <p
              class="border-t border-secondary pt-4 pb-7 lg:text-lg text-base text-gray-300 font-light"
            >
              The call is now open for the 4th #LehnicaChallenge, the Correos
              Start-up Acceleration Programme.
            </p>
            <Button value="Sign up here!" />
          </div>
        </div>
      </div>
      <div
        class="lg:grid grid-cols-2 items-end py-10 pl-6 w-full h-full hidden max-w-9xl ml-auto"
      >
        <img
          src="@/assets/images/DSC_0402.jpg"
          alt=""
          class="h-96 w-full rounded-lg"
        />
        <div class="lg:flex items-end justify-end hidden">
          <img src="@/assets/images/deco_bars.svg" alt="" class="-mr-30" />
        </div>
      </div>
    </div>
    <div class="py-10 lg:py-0 relative overflow-hidden bg-gray-200">
      <div
        class="z-30 lg:absolute w-full h-full top-0 left-0 flex items-center"
      >
        <div
          class="max-w-7xl mx-auto w-full px-6 xl:px-0 flex items-start h-full py-10"
        >
          <div
            class="bg-white rounded-lg border border-gray-100 md:p-10 p-4 shadow-sm md:px-16 max-w-3xl w-full"
          >
            <h1
              class="lg:text-3xl text-3xl pb-4 lg:leading-[48px] text-gray-300 font-light tracking-wide"
            >
              Solutions for your shipments
            </h1>
            <p
              class="border-t border-secondary pt-4 pb-3 lg:text-lg text-base text-gray-300 font-light"
            >
              Everything your company needs to get your products to your
              customers.
            </p>
            <router-link
              to=""
              class="my-5 text-primary font-bold lg:text-base text-sm hover:underline flex items-center space-x-4"
            >
              <span>MORE INFO</span>
              <ChevronRightIcon class="w-5 text-primary" />
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="lg:grid grid-cols-2 items-end py-10 pr-6 w-full h-full hidden max-w-9xl"
      >
        <div class="lg:flex items-end hidden">
          <img src="@/assets/images/deco_03.svg" alt="" class="-ml-30" />
        </div>
        <img
          src="@/assets/images/Sobres-y-cajas.jpg"
          alt=""
          class="h-96 w-full rounded-lg"
        />
      </div>
    </div>
    <div class="bg-white p-4">
      <CompainsCard :cards="cards1" />
    </div>
    <div class="py-10 lg:py-0 relative overflow-hidden bg-gray-200">
      <div
        class="z-30 lg:absolute w-full h-full top-0 left-0 flex items-center"
      >
        <div
          class="max-w-7xl mx-auto w-full px-6 xl:px-0 h-full lg:pt-10 flex items-start"
        >
          <div
            class="bg-white rounded-lg border border-gray-100 md:p-10 p-4 shadow-sm lg:px-20 md:px-16 max-w-3xl w-full ml-auto"
          >
            <h1
              class="lg:text-3xl text-3xl pb-4 lg:leading-[48px] text-gray-300 font-light tracking-wide"
            >
              How to be a Correos customer
            </h1>
            <p
              class="border-t border-secondary pt-4 pb-3 lg:text-lg text-base text-gray-300 font-light"
            >
              At Correos, we have the most competitive solutions for your
              deliveries.
            </p>
            <router-link
              to=""
              class="my-5 text-primary font-bold lg:text-base text-sm hover:underline flex items-center space-x-4"
            >
              <span>MORE INFO</span>
              <ChevronRightIcon class="w-5 text-primary" />
            </router-link>
          </div>
        </div>
      </div>
      <div class="lg:grid grid-cols-2 items-end py-10 w-full h-full hidden">
        <img
          src="@/assets/images/Paqueteria-ecommerce_OK.jpg"
          alt=""
          class="h-96 w-full rounded-lg"
        />
        <div class="lg:flex items-end justify-end hidden">
          <img src="@/assets/images/deco_bars.svg" alt="" class="-mr-30" />
        </div>
      </div>
    </div>
    <div class="bg-white">
      <CompainsCard :cards="cards2" />
    </div>
    <div class="py-10 lg:py-0 relative overflow-hidden bg-gray-200">
      <div
        class="z-30 lg:absolute w-full h-full top-0 left-0 flex items-center"
      >
        <div
          class="max-w-7xl mx-auto w-full px-6 xl:px-0 flex items-start h-full py-10"
        >
          <div
            class="bg-white rounded-lg border border-gray-100 md:p-10 p-4 shadow-sm lg:px-32 md:px-16 max-w-4xl"
          >
            <h1
              class="lg:text-3xl text-3xl pb-4 lg:leading-[48px] text-gray-300 font-light tracking-wide"
            >
              Discover the new Correos blog!
            </h1>
            <p
              class="border-t border-secondary pt-4 pb-3 lg:text-lg text-base text-gray-300 font-light"
            >
              Get the latest news from the world of Correos: new products and
              services, fun facts, useful tips, and much more. Not to be missed!
            </p>
            <router-link
              to=""
              class="my-5 text-primary font-bold lg:text-base text-sm hover:underline flex items-center space-x-4"
            >
              <span>MORE INFO</span>
              <ChevronRightIcon class="w-5 text-primary" />
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="lg:grid grid-cols-2 items-end py-10 pr-6 w-full h-full hidden"
      >
        <div class="lg:flex items-end hidden">
          <img src="@/assets/images/deco_03.svg" alt="" class="-ml-30" />
        </div>
        <img
          src="@/assets/images/bloque_blog-2.jpg"
          alt=""
          class="h-96 w-full rounded-lg"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import OfferPromotion from "../components/OfferPromotion";
import CompainsCard from "../components/CompainsCard";
import TrackOrder from "../components/TrackOrder";
import { ChevronRightIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Input,
    Select,
    Button,
    Checkbox,
    CompainsCard,
    OfferPromotion,
    TrackOrder,
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
      fields: [
        { id: "companyName", type: "text", label: "Company name*" },
        { id: "cif", type: "text", label: "CIF*" },
        { id: "name", type: "text", label: "Contact name" },
        { id: "number", type: "text", label: "Mobile phone*" },
        { id: "email", type: "email", label: "Email address*" },
        { id: "category", type: "select", label: "Select product category" },
      ],
      cards1: [
        {
          src: "assets/images/Vender_MKplaces.jpg",
          title: "E-commerce solutions",
          text: "Move your business to the online world with Correos' e-commerce solutions.",
          to: "",
        },
        {
          src: "assets/images/Publibuzón.jpg",
          title: "Marketing solutions",
          text: "Communicate with your customers how and whenever you want.",
        },
      ],
      cards2: [
        {
          src: "assets/images/Carta_digital.jpg",
          title: "Physical and digital communications",
          text: "Always in touch with your customers.",
          to: "",
        },
        {
          src: "assets/images/Informe-devoluciones.jpg",
          title: "For your business",
          text: "We think about you and help you to boost your business,",
        },
      ],
    };
  },
};
</script>
