<template>
  <div>
    <MainContent/>
  </div>
</template>

<script lang="js">


import Vue from 'vue';
import Header from '@/components/Header/Header';
import MainContent from '@/components/MainContent/MainContent';


export default Vue.component('Home', {

  components: {
    MainContent
  },

  data() {
    return {};
  },
});

</script>


<style lang="less">

</style>
