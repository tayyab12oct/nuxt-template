<template>
  <div>
    <div class="flex items-start">
      <input
        class="hidden checkbox"
        type="checkbox"
        :id="id"
        :disabled="disable"
        :checked="checked"
      />
      <label
        :htmlFor="id"
        class="check md:w-5 w-4 md:h-5 h-4 md:mt-0.5 mt-1 rounded-sm flex items-center justify-center"
      >
        <div class="w-10">
          <span>
            <CheckIcon class="w-5 text-primary" />
          </span>
        </div>
      </label>
      <label
        :htmlFor="id"
        value="{value}"
        class="md:pl-4 pl-3 text-gray-300 font-light text-sm lg:text-base cursor-pointer"
        >{{ text }}
        <span v-if="linkText" class="underline text-primary font-medium"
          ><router-link to="">{{ linkText }}</router-link>
        </span>
      </label>
    </div>
  </div>
</template>
<script>
import { CheckIcon } from "@heroicons/vue/solid";
export default {
  props: ["id", "text", "linkText", "checked"],
  components: {
    CheckIcon,
  },
};
</script>
<style>
.check {
  cursor: pointer;
  @apply bg-white border-2 border-primary;
}

.check span {
  display: none;
}

.checkbox:checked + .check {
  @apply bg-secondary border-yellow-100;
}
.checkbox:checked + .check span {
  display: block;
}
</style>
