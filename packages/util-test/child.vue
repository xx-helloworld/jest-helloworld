<template>
  <h1>{{ childMsg }}</h1>
</template>

<script>
export default {
  name: "child",
  props: {
    childMsg: {
      type: String,
      default: "xx"
    }
  }
};
</script>