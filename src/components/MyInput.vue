<template>
  <input
    :type="props?.type"
    :disabled="props?.disabled"
    :checked="typeof value == 'boolean' ? value : false"
    :value="value"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: [Boolean, String],
    },
    props: {
      type: Object,
    },
  },
});
</script>

<style></style>
