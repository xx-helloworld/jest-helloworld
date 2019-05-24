<template>
  <h1>{{ childMsg }}</h1>
</template>

<script>
export default {
  name: "child",
  inject: ['parent'],
  props: {
    childMsg: {
      type: Number,
      default() {
        return this.msg;
      }
    }
  }
};
</script>