<template>
  <div>
    <Header/>
    <router-view>
      <div id="App">
        <router-link to="/home">
          <Home/>
        </router-link>
      </div>
    </router-view>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import './styles/App.less';
import Home from '@/components/Home/Home.vue';
import Header from '@/components/Header/Header.vue';

export default Vue.component('App', {

  components: {
    Home,
    Header,
  },

  data() {
    return {
      ourUser: {}
    };
  },
  methods: {
  }
});

</script>

<style>

#App {
  display: flex;
  flex-direction: column;
}

</style>

