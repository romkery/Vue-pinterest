<template>
  <div>
    <Header />
    <router-view>
      <div id="App">
        <router-link to="/home">
          <Home />
        </router-link>
      </div>
    </router-view>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import './styles/index.scss';
import Home from '@/components/Home/Home.vue';
import Header from '@/components/Header/Header.vue';

export default Vue.component('App', {

  components: {
    Home,
    Header,
  },

  data() {
    return {};
  },

  computed: {},
  mounted() {
    this.$router.push('/home');
  },
  methods: {}
});

</script>

<style>

#App {
}

</style>

