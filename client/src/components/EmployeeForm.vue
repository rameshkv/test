<template>
  <div>
    <b-card class="" header="">
     <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Full Name"
        label-for="input-fullname">
        <b-form-input
          id="input-fullname"
          v-model="form.fullname"
          type="text"
          placeholder=""
          required
          pattern=".{3,50}" 
          title="3 to 50 characters"
        ></b-form-input>
      </b-form-group>
        
        <b-form-group
        id="input-group-2"
        label="Emp ID"
        label-for="input-empid">
        <b-form-input
          id="input-empid"
          v-model="form.emp_id"
          type="text"
          placeholder=""
          maxlength="6"
          required
          pattern="^\w+$" title="Only Alphanumeric character"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger" class="ml-2">Reset</b-button>
    </b-form>
    </b-card>
  </div>
</template>

<script>
import { BCard, BForm, BFormGroup, BFormInput, BButton } from 'bootstrap-vue'
  export default {
   name: 'employee-form',
   components: {
    BCard,
    BForm,
    BFormGroup,
    BFormInput,
    BButton
   },
   props: {
    form: {
      type: Object,
      required: false,
      default: () => {
        return {
          fullname: '',
          emp_id: ''
        };
      }
    }},
    data() {
      return {
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.$emit('createOrUpdate', this.form);
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.fullname = ''
        this.form.emp_id = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>