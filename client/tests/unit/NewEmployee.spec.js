import { mount } from '@vue/test-utils'
import NewEmployee from '@/views/NewEmployee.vue';

describe('New Employee.vue', () => {
    it("define wrapper", () => {
        const wrapper = mount(NewEmployee);
        expect(wrapper).toBeDefined()
        wrapper.destroy();
    });
    
    it("has the expected html structure", () => {
        const wrapper = mount(NewEmployee);
        expect(wrapper.element).toMatchSnapshot();
        wrapper.destroy();
    });

    it('has expected h4 title', async () => {
        const wrapper = mount(NewEmployee)
        expect(wrapper.text()).toContain("Add Employee");
        wrapper.destroy();
    })

    it('has expected input emp name', async () => {
        const wrapper = mount(NewEmployee)
        const textInput = wrapper.find('#input-fullname')
        await textInput.setValue('ramesh')
        expect(wrapper.find('#input-fullname').element.value).toBe('ramesh')
        wrapper.destroy();
    })

    it('has expected input emp id', async () => {
        const wrapper = mount(NewEmployee)
        const textInput = wrapper.find('#input-empid')
        await textInput.setValue('E123')
        expect(wrapper.find('#input-empid').element.value).toBe('E123')
        wrapper.destroy();
    })

})