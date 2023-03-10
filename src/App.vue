<template>
  <main>
    <div class="wrapper">
      <uni-table :cols="cols" :rows="rows" :rows2="rows2" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UniTable from "./components/UniTable.vue";

export default defineComponent({
  components: {
    UniTable,
  },
  data() {
    return {
      cols: [
        {
          title: "Name",
          key: "name",
          sortable: true,
          component: { type: "label", color: "red" },
        },
        {
          title: "Status",
          key: "status",
          component: {
            type: "select",
            options: ["Active", "inActive", "Pending"],
          },
        },
        {
          title: "Email",
          key: "email",
          component: {
            tag: "input",
            type: "email",
            disabled: true,
          },
        },
        {
          title: "is Admin",
          key: "isAdmin",
          component: { tag: "input", type: "checkbox", disabled: true },
        },
        {
          title: "new column",
          key: "newCol",
          component: { tag: "input", type: "checkbox" },
        },
        {
          title: "new column2",
          key: "newCol2",
          component: { type: "label", color: "green" },
        },
      ],
      rows: [
        {
          name: "Andrew",
          email: "andrew@gmail.com",
          isAdmin: true,
          component: {
            labelColor: "red",
            options: ["Active", "Pending", "inActive"],
          },
        },
        {
          name: "Alex",
          isAdmin: false,
          component: {
            labelColor: "green",
            options: ["Pending", "Active", "inActive"],
          },
        },
        {
          name: "Oleg",
          email: "Oleg@gmail.com",
          isAdmin: false,
          component: {
            labelColor: "blue",
            options: ["inActive", "Active", "Pending"],
            selDisabled: true,
            inputDisabled: true,
            CheckboxDisabled: true,
          },
        },
      ],
      rows2: [
        {
          name: {
            key: "name",
            value: "Andrew",
          },
          status: {
            key: "status",
            value: "Active",
          },
          email: {
            key: "email",
            value: "andrew@gmail.com",
          },
          isAdmin: {
            key: "isAdmin",
            value: true,
          },
          newCol: {
            value: true,
          },
        },
        {
          name: {
            key: "name",
            value: "Alex",
          },
          status: {
            key: "status",
            value: "Pending",
          },
          isAdmin: {
            key: "isAdmin",
            value: false,
          },
        },
        {
          name: {
            key: "name",
            value: "Oleg",
          },
          status: {
            key: "status",
            value: "inActive",
          },
          email: {
            key: "email",
            value: "oleg@gmail.com",
          },
          isAdmin: {
            key: "isAdmin",
            value: false,
          },
        },
        {
          name: {
            key: "name",
            value: "Bogdan",
          },
          status: {
            key: "status",
            value: "Pending",
          },
          email: {
            key: "email",
            value: "bogdan@gmail.com",
          },
          isAdmin: {
            key: "isAdmin",
            value: true,
          },
          newCol2: {
            value: "Like potato and Coca Cola",
          },
        },
      ],
    };
  },
  methods: {},
});
</script>

<style>
.wrapper {
  width: 95vw;
  max-width: 1200px;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
body {
  min-height: 100vh;
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
