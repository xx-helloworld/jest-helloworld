import { createVue } from "@xx-helloworld/jest-util";
import Child from "../child.vue";
import Parent from "../parent.vue";
import Vue from "vue";

describe("Inject", () => {
  it("test util", () => {
    const msg = "new message";
    const childMsg = "new child message";

    Vue.component("child", Child);
    Vue.component("parent", Parent);

    // const parent = {
    //   render(h) {
    //     return h(Parent, { props: { msg } }, [
    //       h(Child, { props: { childMsg } })
    //     ]);
    //   }
    // };

    const vm = createVue(
      {
        template: `
        <parent msg="msg">
          <child childMsg="childMsg" />
        </parent>
      `,
        data() {
          return {
            childMsg,
            msg
          };
        }
      },
      true,
      Vue
    );

    console.log(vm.$el.outerHTML);
    expect(vm.$el.outerHTML).toMatchSnapshot();
  });
});
