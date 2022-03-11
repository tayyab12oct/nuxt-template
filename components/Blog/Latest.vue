<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"/>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div v-for="post in posts" :key="post.title" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.fields.image.fields.file.url + '?w=700&h=500'" alt=""/>
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                {{ post.fields.category }}
              </p>
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.fields.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.fields.content.content[0].content[0].value }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="post.sys.createdAt">
                    {{ post.sys.createdAt }}
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> {{ post.fields.readingTime }}m Lesezeit </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async setup() {
    const {$contentful} = useNuxtApp()

    // fetch all blog posts sorted by creation date
    const {items} = await $contentful().getEntries({
      content_type: 'blog',
      limit: 3,
      include: 10,
      order: '-sys.createdAt',
    })

    return {
      posts: items,
    }
  },
}
</script>
