<template>
  <div>
    <h4>Add Employee</h4>
    <employee-form @createOrUpdate="createOrUpdate"></employee-form>
  </div>
</template>

<script>
import employeeForm from '../components/EmployeeForm.vue';
import { api } from '../helpers/helpers';
import Vue from 'vue'
export default {
  name: 'add-emp',
  components: {
    'employee-form': employeeForm
  },
  methods: {
    createOrUpdate: async function(emp) {
      const res = await api.createEmployee(emp);
      Vue.$toast.success(res.message);
      this.$router.push(`/employee/`);
    }
  }
};
</script>