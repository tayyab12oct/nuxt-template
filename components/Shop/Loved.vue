<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white" v-if="data">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="md:flex md:items-center md:justify-between">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Trending products</h2>
        <a href="#" class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">Shop the
          collection<span aria-hidden="true"> &rarr;</span></a>
      </div>

      <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        <div v-for="product in data.data" :key="product.id" class="group relative">
          <div class="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
            <img :src="imageUrl(product.photo_url)" :alt="product.title"
                 class="w-full h-full object-center object-cover"/>
          </div>
          <h3 class="mt-4 text-sm text-gray-700">
            <NuxtLink :to="'/boat/'+ product.slug">
              <span class="absolute inset-0"/>
              {{ product.title }}
            </NuxtLink>
          </h3>
          <p class="mt-1 text-sm text-gray-500">{{ product.cabins }} Kabinen</p>
          <p class="mt-1 text-sm font-medium text-gray-900">ab {{ priceFilter(product.min_price) }}</p>
        </div>
      </div>

      <div class="mt-8 text-sm md:hidden">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Shop the collection<span
          aria-hidden="true"> &rarr;</span></a>
      </div>
    </div>
  </div>
</template>


<script setup>
const config = useRuntimeConfig()

const {data} = useFetch('https://connect.5-anker.com/dnet/com/boat', {
  params: {
    sort: 'sort',
    limit: 4
  },
  headers: {
    Authorization: 'Bearer ' + config.APP_TOKEN
  }
})

</script>
<script>
export default {
  methods: {
    imageUrl(a) {
      if (/^https?:/.test(a)) {
        return a
      }
      return 'https://assets.5-anker.com' + a
    },
    priceFilter(a) {
      return a.toFixed(2).replace('.', ',') + ' €'
    }
  }
}
</script>
