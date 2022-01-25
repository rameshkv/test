<template>
  <div>
    <b-card class="" header="">
     <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Name"
        label-for="input-name">
        <b-form-input
          id="input-name"
          v-model="form.name"
          type="text"
          placeholder=""
          required
          pattern=".{9,80}[A-Za-z0-9]" 
          title="Minumum 10 characters, Maximum 80 characters with Alphanumeric"
        ></b-form-input>
      </b-form-group>
        
        <b-form-group
        id="input-group-2"
        label="Description"
        label-for="input-desc">
        <b-form-input
          id="input-desc"
          v-model="form.description"
          type="text"
          placeholder=""
          required
          pattern=".{50,300}" 
          title="Minimum 50 characters, Maximum 300 characters"
        ></b-form-input>
      </b-form-group>

        <div>
        <label for="input-stdate">Start Date</label>
        <b-form-datepicker id="input-stdate" v-model="form.start_date" class="mb-2"></b-form-datepicker>
        </div>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger" class="ml-2">Reset</b-button>
    </b-form>
    </b-card>
  </div>
</template>

<script>
import Vue from 'vue'
  export default {
   name: 'project-form',
   props: {
    form: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: '',
          description: '',
          start_date:''
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
        if(this.form.start_date)
        this.$emit('createOrUpdate', this.form);
        else
        Vue.$toast.error("Start Date cannot be null");
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.description = ''
        this.form.start_date = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>