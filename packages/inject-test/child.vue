<template>
  <h1>{{ childMsg }}</h1>
</template>

<script>
export default {
  name: "child",
  inject: ["parent"],
  props: {
    childMsg: {
      type: String,
      default() {
        return this.parent.msg;
      }
    }
  }
  // props: ["childMsg"]
};
</script>