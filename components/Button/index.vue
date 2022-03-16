<template>
  <button
    :type="type"
    class="flex justify-center text-center rounded-lg focus:outline-none"
    :class="`${mainClass} ${width}`"
  >
    {{ value }}
  </button>
</template>
<script>
export default {
  props: {
    mainClass: {
      type: String,
      default:
        "bg-secondary hover:bg-yellow-100 text-primary lg:text-base text-sm border border-yellow-100 uppercase font-bold py-3.5 lg:px-6 px-5",
    },
    value: {
      type: String,
      default: "Text",
    },
    width: {
      type: String,
      default: "",
    },
  },
};
</script>
