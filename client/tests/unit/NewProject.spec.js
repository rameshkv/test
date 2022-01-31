import { mount } from '@vue/test-utils'
import NewProject from '@/views/NewProject.vue';

describe('New Project.vue', () => {
    it("define wrapper", () => {
        const wrapper = mount(NewProject);
        expect(wrapper).toBeDefined()
        wrapper.destroy();
    });
    
    it("has the expected html structure", () => {
        const wrapper = mount(NewProject);
        expect(wrapper.element).toMatchSnapshot();
        wrapper.destroy();
    });

    it('has expected h4 title', async () => {
        const wrapper = mount(NewProject)
        expect(wrapper.text()).toContain("Add Project");
        wrapper.destroy();
    })

    it('has expected input project name field', async () => {
        const wrapper = mount(NewProject)
        const textInput = wrapper.find('#input-name')
        await textInput.setValue('test project name')
        expect(wrapper.find('#input-name').element.value).toBe('test project name')
        wrapper.destroy();
    })

    it('has expected input project description field', async () => {
        const wrapper = mount(NewProject)
        const textInput = wrapper.find('#input-desc')
        await textInput.setValue('test project description')
        expect(wrapper.find('#input-desc').element.value).toBe('test project description')
        wrapper.destroy();
    })

    it('emit demo', async () => {
        const wrapper = mount(NewProject)
        wrapper.vm.$emit('test')
        wrapper.vm.$emit('test', 123)
        await wrapper.vm.$nextTick() // Wait until $emits have been handled
        // assert event has been emitted
        expect(wrapper.emitted().test).toBeTruthy()
        // assert event count
        expect(wrapper.emitted().test.length).toBe(2)
        // assert event payload
        expect(wrapper.emitted().test[1]).toEqual([123])
    })

})