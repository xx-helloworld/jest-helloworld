import { shallowMoun, mount } from "@vue/test-utils";
import Child from "../child.vue";
import Parent from "../parent.vue";

describe("Inject", () => {
  it("test parent", () => {
    const msg = "new message";
    const childMsg = "new child message";

    const parent = {
      render(h) {
        return h(Parent, { props: { msg } }, [
          h(Child, { props: { childMsg } })
        ]);
      }
    };

    const wrapper = mount(parent);

    expect(wrapper.find("span").text()).toBe(msg);
    expect(wrapper.find("h1").text()).toBe(childMsg);
  });
  it("test inject", () => {
    const msg = "new message";

    const parent = {
      render(h) {
        return h(Parent, { props: { msg } }, [h(Child)]);
      }
    };

    const wrapper = mount(parent);

    expect(wrapper.find("span").text()).toBe(msg);
    expect(wrapper.find("h1").text()).toBe(msg);
  });
});
