<template>
  <div>
    <b-card class="" header="Assign Employee">
     <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Project ID"
        label-for="input-id">
        <b-form-input
          id="input-id"
          v-model="form.id"
          type="number"
          placeholder=""
          readonly
        ></b-form-input>
      </b-form-group>
        
        <b-form-group
        id="input-group-2"
        label="Employee"
        label-for="input-desc">
        <b-form-select v-model="empName"  :options="options" multiple :select-size="4"></b-form-select>
        </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    </b-card>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
import Vue from 'vue'
export default {
   name: 'assign-form',
   props: {
    form: {
      type: Object,
      required: false,
      default: () => {
        return {
          employee: []
        };
      }
    }},
    data() {
      return {
        show: true,
        options: [],
        empName: []
      }
    },
    methods: {
     async onSubmit(event) {
        event.preventDefault()
        delete this.project.employee
        this.project.employee = this.empName
        let res =  await api.updateProject(this.project);
        Vue.$toast.success(res.message);
        this.$router.push(`/project/`);
        console.log(res);
      }
    },
    async mounted() {
       this.project = await api.getProjectById(this.$route.params.id);
       this.empName = this.project.employee;
       this.form.id = this.$route.params.id;
       let user =  await api.getEmployee();
       for(let i in user) {
           this.options.push(user[i].fullname);
       }
    }
  }
</script>