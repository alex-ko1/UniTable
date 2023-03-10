<template>
  <br />
  <table class="table">
    <thead>
      <tr>
        <th>№</th>
        <th
          v-for="(col, i) in cols"
          :key="i"
          :class="{ sortable: col.sortable }"
          @click="col.sortable && sortable(rows, col.key)"
          ref="sorting"
        >
          {{ col.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowI) in rows" :key="rowI">
        <td>{{ rowI + 1 }}.</td>
        <td v-for="(col, colI) in cols" :key="colI">
          <component
            :value="row[`${col.key}`]?.value"
            :is="'my-' + col.component.type"
            v-bind="{ props: col.component }"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import MySelect from "./MySelect.vue";
import MyEmail from "./MyEmail.vue";
import MyCheckbox from "./MyCheckbox.vue";
import MyLabel from "./MyLabel.vue";

interface Column {
  title: String;
  key: String;
  sortable?: Boolean;
  component: Label | Select | Input | Checkbox;
}
interface Component {
  type: string;
}
interface Label extends Component {
  labelColor: string;
}
interface Select extends Component {
  options: string[];
  selDisabled?: boolean;
}
interface Input extends Component {
  type: string;
  inputDisabled?: boolean;
}
interface Checkbox extends Component {
  checkboxDisabled?: boolean;
}

interface Row {
  [key: string]: any;
  name: {
    key: string;
    value: string;
  };
  status: {
    key: string;
    value: string;
  };
  email?: {
    key: string;
    value?: string;
  };
  isAdmin: {
    key: string;
    value: boolean;
  };
  newCol?: {
    value: boolean;
  };
  newCol2?: {
    key?: string;
    value: string;
  };
}

export default defineComponent({
  components: { MySelect, MyEmail, MyCheckbox, MyLabel },
  data() {
    return {};
  },
  props: {
    cols: {
      type: Array as PropType<Column[]>,
    },
    rows: {
      type: Array as PropType<Row[]>,
    },
  },
  methods: {
    sortable(rows: any, sortField: any) {
      rows.sort((a: Row, b: Row) => {
        return a[`${sortField}`].value.localeCompare(b[`${sortField}`].value);
      });
    },
  },
});
</script>

<style>
.sortable:hover {
  cursor: pointer;
}
.sortable::after {
  content: " \25BC";
  font-size: 12px;
}

.table {
  color: #212529;
  border-collapse: collapse;
  width: 80%;
  margin: 0 auto 1rem;
}

table thead th {
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  border-collapse: collapse;
  padding: 0.75rem;
  border: 1px solid #dee2e6;
  vertical-align: bottom;
}

table td.name {
  text-align: left;
}
table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
table td {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  border-collapse: collapse;
  box-sizing: border-box;
  padding: 0.75rem;
  vertical-align: top;
  border: 1px solid #dee2e6;
}
select,
input {
  font-size: 1em;
}
</style>
