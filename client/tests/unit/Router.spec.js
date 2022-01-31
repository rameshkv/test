import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Project from '@/views/Project.vue'
import Employee from '@/views/Employee.vue';
import NewProject from '@/views/NewProject.vue';
import NewEmployee from '@/views/NewEmployee.vue';
import EditProject from '@/views/EditProject.vue';
import AssignEmp from '@/views/AssignEmp.vue';


describe('Router test', () => {
    const localVue = createLocalVue()
    localVue.use(VueRouter)
    
    const routes = [{ path: '/project', component: Project },
                    { path: '/employee', component: Employee },
                    { path: '/project-add', component: NewProject },
                    { path: '/employee-add', component: NewEmployee },
                    { path: '/project-edit/:id', component: EditProject }]
    
    const router = new VueRouter({
      routes
    })
    
    it("should check Project router instance", () => {
        const wrapper = mount(Project, {
            localVue,
            router
          })
      expect(wrapper.vm.$route).toBeInstanceOf(Object)
      wrapper.destroy()
    })

    it("should check Employee router instance", () => {
        const wrapper = mount(Employee, {
            localVue,
            router
          })
      expect(wrapper.vm.$route).toBeInstanceOf(Object)
      wrapper.destroy()
    })

    it("should check NewProject router instance", () => {
        const wrapper = mount(NewProject, {
            localVue,
            router
          })
      expect(wrapper.vm.$route).toBeInstanceOf(Object)
      wrapper.destroy()
    })

    it("should check NewEmployee router instance", () => {
        const wrapper = mount(NewEmployee, {
            localVue,
            router
          })
      expect(wrapper.vm.$route).toBeInstanceOf(Object)
      wrapper.destroy()
    })

    it("should check Edit project router instance", () => {
        const wrapper = mount(EditProject, {
            localVue,
            router
          })
      expect(wrapper.vm.$route).toBeInstanceOf(Object)
      wrapper.destroy()
    })

})

