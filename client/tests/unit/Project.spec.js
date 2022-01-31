import { mount, shallowMount } from '@vue/test-utils'
import flushPromises from "flush-promises";
import Project from '@/views/Project.vue'

jest.mock("axios", () => ({
    get: () => Promise.resolve({ data: [{ id: 1 }] })
}));

describe('Project.vue', () => {
    it("should render table when there is no data", () => {
        const wrapper = mount(Project);
        expect(wrapper.text()).toContain("There are no records to show");
        wrapper.destroy()
    });

    it('has expected default column title', async () => {
        const wrapper = mount(Project)
        expect(wrapper).toBeDefined()
        expect(wrapper.text()).toContain("Project Id");
        expect(wrapper.text()).toContain("Name");
        expect(wrapper.text()).toContain("Description");
        expect(wrapper.text()).toContain("Start Date");
        expect(wrapper.text()).toContain("Actions");
        wrapper.destroy();
    })

    it("mocking the axios call to get project", async () => {
        const wrapper = shallowMount(Project);
        await flushPromises();
        expect(wrapper.vm.items.length).toBe(1);
        wrapper.destroy();
    });

    it("has the expected html structure", () => {
        const wrapper = shallowMount(Project);
        expect(wrapper.element).toMatchSnapshot();
    });
})