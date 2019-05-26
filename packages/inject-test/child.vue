<template>
  <h1>{{ childMsg }}</h1>
</template>

<script>
export default {
  name: "child",
  // inject: ['parentyar'],
  // props: {
  //   childMsg: {
  //     type: String,
  //     default() {
  //       return this.msg;
  //     }
  //   }
  // }
  props: ["childMsg"]
};
</script>