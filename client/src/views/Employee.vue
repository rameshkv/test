<template>
  <div>
    <b-table
      striped
      hover
      responsive
      :items="items"
      :fields="fields"
      show-empty
      table-class="text-nowrap"
    >
      <template #cell(emp_id)="row">
        {{ row.value }}
      </template>
      <template #cell(fullname)="row">
        {{ row.value }}
      </template>
    </b-table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
import { BTable } from 'bootstrap-vue'

export default {
  name: 'employee',
    components: {
    BTable
  },
  data() {
    return {
        items: [],
        fields: [
          { key: 'emp_id', label: 'Emp Id' },
          { key: 'fullname', label: 'Full Name' },
        ]
    }
  },
  async mounted() {
    this.items = await api.getEmployee();
  }
};
</script>
<style>

</style>
