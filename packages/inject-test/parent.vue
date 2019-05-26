<template>
  <div>
    <span>{{ msg }}</span>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "parent",
  // provide: {
  //   parent: this
  // },
  props: {
    msg: {
      type: String,
      default: "heihei"
    }
  }
};
</script>