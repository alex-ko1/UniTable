<template>
  <input type="email" :disabled="props?.disabled" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    props: {
      type: Object,
    },
  },
  // methods: {
  //   changeInput(event: Event) {
  //     this.$emit("changeInput", event);
  //   },
  // },
});
</script>

<style></style>
