<template>
  <div
    class="relative border border-gray-900 border-b-0 rounded-t-lg group w-full transition-all overflow-hidden"
    :class="mainClass"
  >
    <input
      :type="type"
      class="input-text relative block w-full px-4 py-2 pt-5 md:text-base text-sm bg-transparent border-b-2 border-0 border-transparent group-hover:border-secondary focus:outline-none focus:border-primary ring-0"
      :id="id"
      :placeholder="placeholder"
    />
    <label
      class="absolute top-1 z-10 block w-full px-4 text-xs text-primary font-medium"
      :for="id"
      >{{ label }}</label
    >
  </div>
</template>
<script>
export default {
  props: ["mainClass", "label", "type", "id", "placeholder"],
  data() {
    return {};
  },
};
</script>
<style>
.input-text {
  z-index: 3;
}
.label-helper {
  transition: 0.2s bottom, 0.2s;
  z-index: 10;
  @apply py-5 text-sm left-0 -bottom-1 text-gray-300;
}

.input-text:focus + .label-helper,
.input-text:invalid + .label-helper {
  bottom: 60%;
  @apply p-0 text-xs text-primary;
}
</style>
