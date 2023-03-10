<template>
  <select name="" id="" :disabled="props?.disabled">
    <option
      v-for="(option, i) in props?.options"
      key="i"
      :selected="value == option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    props: {
      type: Object,
    },
    value: {
      type: String,
    },
  },
});
</script>

<style></style>
