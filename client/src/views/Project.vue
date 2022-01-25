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
      <template #cell(id)="row">
        {{ row.value }}
      </template>
      <template #cell(name)="row">
        {{ row.value }}
      </template>
      <template #cell(description)="row">
        {{ row.value }}
      </template>
      <template #cell(start_date)="row">
        {{ row.value }}
      </template>

      <template #cell(actions)="row">
        <b-button size="sm" class="mr-2">
          <router-link :to="{ name: 'edit-project', params: { id: row.item.id }}" class="link">Edit</router-link>
        </b-button>
        <b-button size="sm">
          <router-link :to="{ name: 'assign-form', params: { id: row.item.id }}" class="link">Assign</router-link>
        </b-button>
      </template>

    </b-table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'project',
  data() {
    return {
        items: [],
        fields: [
          { key: 'id', label: 'Project Id' },
          { key: 'name', label: 'Name' },
          { key: 'description', label: 'Description' },
          { key: 'start_date', label: 'Start Date' },
          { key: 'actions', label: 'Actions' }
        ]
    }
  },
  async mounted() {
    this.items = await api.getProject();
  }
};
</script>
<style>
.link {
  color:#fff
}
.link:hover{
  color:#fff
}
</style>
