import contentful from 'contentful'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      contentful: () => contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
      })
    }
  }
})
