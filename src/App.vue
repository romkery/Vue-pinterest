<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from "@/components/Header/Header.vue";
import './styles/App.less'

export default Vue.component('App', {
  components: {
    Header
  },
})

</script>

