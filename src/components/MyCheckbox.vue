<template>
  <input type="checkbox" :checked="value" :disabled="props?.disabled" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: Boolean,
    },
    props: {
      type: Object,
    },
  },
});
</script>

<style></style>
