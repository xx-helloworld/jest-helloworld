<template>
  <div>
    <span>{{ msg }}</span>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "parent",
  props: {
    msg: {
      type: String,
      default: "heihei"
    }
  }
};
</script>