<template>
  <span :style="{ color: props?.color }">{{ value }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
    },
    props: {
      type: Object,
    },
  },
});
</script>

<style></style>
