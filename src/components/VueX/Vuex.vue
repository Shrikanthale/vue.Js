

<template>
  <div class="customer">
    <h1>{{vue}}</h1>
    <h2>{{ message }} </h2>
    <h3>{{count}}</h3>
    <button @click="press">increment</button>
  </div>
</template>

<script>
// import store from './Store'
export default {
  name: "Vuex",
  data() {
    return {
      vue: "Vuex Store",
    };
  },
  computed: {
    message() {
    //   return this.$store.state.message;
    return this.$store.getters.message;
    },
    count() {
        return this.$store.getters.counter;
    }
  },
  methods: {
      press(){
        // this.$store.commit('increment',5);
        this.$store.dispatch('increment',15);
      }
  }
};
</script>