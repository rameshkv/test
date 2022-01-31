import { mount, shallowMount } from '@vue/test-utils'
import flushPromises from "flush-promises";
import Employee from '@/views/Employee.vue'

jest.mock("axios", () => ({
    get: () => Promise.resolve({ data: [{ emp_id: 'E123' }] })
}));

describe('Employee.vue', () => {
    it("should render emp table when there is no data", () => {
        const wrapper = mount(Employee);
        expect(wrapper.text()).toContain("There are no records to show");
        wrapper.destroy()
    });

    it('has expected default column title', async () => {
        const wrapper = mount(Employee)
        expect(wrapper).toBeDefined()
        expect(wrapper.text()).toContain("Emp Id");
        expect(wrapper.text()).toContain("Full Name");
        wrapper.destroy();
    })

    it("mocking the axios call to employee", async () => {
        const wrapper = shallowMount(Employee);
        await flushPromises();
        expect(wrapper.vm.items.length).toBe(1);
        wrapper.destroy();
    });

    it("has the expected html structure", () => {
        const wrapper = shallowMount(Employee);
        expect(wrapper.element).toMatchSnapshot();
        wrapper.destroy();
    });
})