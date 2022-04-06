<template>
  <div>
      <h1 v-if="show" > If Statement Run Here </h1>
      <h1 v-else> Else part Run here </h1>
      <button :click="display">toggle</button>
  </div>
</template>

<script>
export default {
  name: "IfElse",
  data() {
    return {
        show: false,
    };
  },
  methods: {
    display(){
      this.show = true;
    }
  }
};
</script>