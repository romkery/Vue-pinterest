<template>
  <div class="main__wrap">
<!--    <input v-model="loles" type="checkbox" class="main__content">-->
    <p>{{ a }}</p>
<!--    <button @click="sayHello"></button>-->
  </div>
</template>

<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
  name: 'Test',
  props: {
    ourUser: Object
  },
  data() {
    return {
      a: this.$store.state.hello,
      loles: true
    };
  },
  mounted() {
    this.sayHello();
  },

  methods: {
    sayHello() {
      return this.loles = false;
    }
  }

});

</script>


<style lang='less'>


</style>

