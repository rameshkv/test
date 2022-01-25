<template>
  <div>
    <h4>Add Project</h4>
    <project-form @createOrUpdate="createOrUpdate"></project-form>
  </div>
</template>

<script>
import projectForm from '../components/ProjectForm.vue';
import { api } from '../helpers/helpers';
import Vue from 'vue'
export default {
  name: 'new-project',
  components: {
    'project-form': projectForm
  },
  methods: {
    createOrUpdate: async function(project) {
      console.log("--project--", project);
      const res = await api.createProject(project);
      Vue.$toast.success(res.message);
      this.$router.push(`/project/`);
    }
  }
};
</script>