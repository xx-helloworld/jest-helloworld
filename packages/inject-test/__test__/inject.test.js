import { shallowMoun, mount } from "@vue/test-utils";
import Child from "../child.vue";
import Parent from "../parent.vue";

describe("Inject", () => {
  it("test inject", () => {
    const msg = "new message";
    const childMsg = "child-msg";

    // const child = shallowMount(Child, {
    //   inject: ["parent"]
    // });

    const child = mount(Child, {
      propsData: { childMsg }
    });
    expect(child.text()).toBe(childMsg);

    const wrapper = mount(Parent, {
      propsData: { msg },
      // provide: {
      //   parent() {
      //     return "fooValue";
      //   }
      // },
      slots: {
        default: [child]
      }
    });
    // console.log(wrapper.html());
    expect(wrapper.find("span").text()).toBe(msg);
  });
});
