import Vue from 'vue';
import Router from 'vue-router';
import Project from './views/Project.vue';
import Employee from './views/Employee.vue';
import NewProject from './views/NewProject.vue';
import EditProject from './views/EditProject.vue';
import NewEmployee from './views/NewEmployee.vue';
import AssignEmp from './views/AssignEmp.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/project'
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/employee',
      name: 'employee',
      component: Employee
    },
    {
        path: '/project-add',
        name: 'new-project',
        component: NewProject
    },
    {
        path: '/project-edit/:id',
        name: 'edit-project',
        component: EditProject
    },
    {
        path: '/employee-add',
        name: 'add-emp',
        component: NewEmployee
    },
    {
        path: '/assign-employee/:id',
        name: 'assign-form',
        component: AssignEmp
    }
  ]
});