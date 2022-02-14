<template>
  <div id="App">
    <Header />
    <MainContent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header/Header.vue';
import './styles/App.less';
import MainContent from '@/components/MainContent/MainContent.vue';

export default Vue.component('App', {

  components: {
    Header,
    MainContent,
    // Test
  },

  data() {
    return {
      ourUser: {
        firstName: 'roman',
        age: 17
      }
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

