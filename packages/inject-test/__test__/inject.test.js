import { shallowMount } from "@vue/test-utils";
import Child from "../child.vue";
import Parent from "../parent.vue";

describe("Message", () => {
  it("test inject", () => {
    const msg = "new message";
    const wrapper = shallowMount(Parent, {
      propsData: { msg }
    });
    expect(wrapper.text()).toBe(msg);
  });
});
