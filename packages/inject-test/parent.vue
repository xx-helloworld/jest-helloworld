<template>
  <div>
    <span>{{ msg }}</span>
    <slot />
  </div>
</template>

<script>
export default {
  name: "parent",
  provide() {
    return {
      parent: this
    };
  },
  props: {
    msg:{
      type: "String",
      default: "heihei"
    }
  }
};
</script>