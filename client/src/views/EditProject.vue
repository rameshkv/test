<template>
  <div>
    <h4>Edit Project</h4>
    <project-form @createOrUpdate="createOrUpdate" :form=this.project></project-form>
  </div>
</template>

<script>
import projectForm from '../components/ProjectForm.vue';
import { api } from '../helpers/helpers';
import Vue from 'vue'

export default {
  name: 'edit-project',
  components: {
    'project-form': projectForm
  },
  data: function() {
    return {
      project: {}
    };
  },
  methods: {
    createOrUpdate: async function(project) {
      const res = await api.updateProject(project);
      Vue.$toast.success(res.message);
      this.$router.push(`/project/`);
    }
  },
  async mounted() {
    this.project = await api.getProjectById(this.$route.params.id);
  }
};
</script>