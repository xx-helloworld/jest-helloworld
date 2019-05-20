import { mount } from "@vue/test-utils";
import Button from "../Button.vue";

describe("Button", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Button, {
      slots: {
        default: "开始"
      }
    });
  });

  test("is a vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("snapshot test", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
